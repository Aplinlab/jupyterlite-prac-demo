"""PROTOTYPE helper code for the membrane potentials demo notebooks.

Students never need to open this file. It builds the forms, plots, quizzes,
class-data submission and reset button used by the notebooks.
"""
import asyncio
import base64
import datetime
import io
import json
import zlib
from pathlib import Path

import ipywidgets as w
import matplotlib.pyplot as plt
import numpy as np
from IPython.display import display

# --- Physics -----------------------------------------------------------------
R, F, T = 8.3145, 96485, 293.15          # J/(mol K), C/mol, K (20 °C)
RT_F_mV = R * T / F * 1000                # about 25.3 mV
ICF_KCL = 150.0                           # mM, inside chamber (fixed)
CONCS = [150, 100, 50, 10, 5, 1.5]        # mM, ECF [KCl] in the order measured


def nernst_mV(conc_out, conc_in=ICF_KCL, z=+1):
    """Nernst equilibrium potential (mV) for an ion of valency z."""
    return RT_F_mV / z * np.log(np.asarray(conc_out, dtype=float) / conc_in)


# --- Style -------------------------------------------------------------------
OKABE_ITO = ["#000000", "#E69F00", "#56B4E9", "#009E73", "#0072B2", "#D55E00", "#CC79A7"]
MARKERS = ["o", "s", "^", "D", "v", "P", "X"]
plt.rcParams.update({"font.size": 13, "axes.spines.top": False, "axes.spines.right": False,
                     "figure.figsize": (7, 4.5)})
BIG_BUTTON = w.Layout(height="48px", min_width="160px", width="auto", flex="0 0 auto")
ROW = dict(align_items="center", grid_gap="12px", flex_flow="row wrap")   # wraps on narrow screens
CLASS_SERVER = "http://localhost:8765"


def _html(text, size="1.05em", colour=None):
    style = f"font-size:{size};" + (f"color:{colour};" if colour else "")
    return w.HTML(f"<div style='{style}'>{text}</div>")


# --- Saved state (kept in the browser, next to the notebook) -----------------
STATE_FILE = Path("my_table1_work.json")
_BLANK = {"measured": {}, "theory_shown": False, "x_scale": None, "group": "",
          "nernst_answer": "", "quiz": {}}


def _load():
    try:
        return {**_BLANK, **json.loads(STATE_FILE.read_text())}
    except Exception:
        return json.loads(json.dumps(_BLANK))


state = _load()
_resetters = []        # functions that put each widget back to blank
_redraw = []           # functions that redraw plots when data change
_questions = {}        # quiz key -> question text (for the notes file)


def _save():
    STATE_FILE.write_text(json.dumps(state))


def _measured_array():
    vals = [state["measured"].get(str(c)) for c in CONCS]
    return np.array([np.nan if v is None else v for v in vals], dtype=float)


def _changed():
    _save()
    for f in _redraw:
        f()


# --- Step 1: data table --------------------------------------------------------
def data_table():
    """A form-style table: students type each measured potential."""
    head = ["[KCl] in ECF (mM)", "Measured V<sub>m</sub> (mV)", "E<sub>K</sub> (mV)", "E<sub>Cl</sub> (mV)"]
    cells = [_html(f"<b>{h}</b>") for h in head]
    theory_labels, inputs = [], []
    for c in CONCS:
        box = w.Text(value="" if state["measured"].get(str(c)) is None else str(state["measured"][str(c)]),
                     placeholder="type mV", layout=w.Layout(width="130px", height="40px"))
        msg = _html("", "0.85em", "#D55E00")

        def on_change(change, c=c, msg=msg):
            txt = change["new"].strip()
            if txt == "":
                state["measured"].pop(str(c), None); msg.value = ""
            else:
                try:
                    state["measured"][str(c)] = float(txt); msg.value = ""
                except ValueError:
                    msg.value = "<div style='color:#D55E00'>Numbers only, e.g. -45.2</div>"
                    return
            _changed()

        box.observe(on_change, names="value")
        inputs.append(box)
        ek = _html(f"{nernst_mV(c, z=+1) + 0.0:.1f}")
        ecl = _html(f"{nernst_mV(c, z=-1) + 0.0:.1f}")
        theory_labels += [ek, ecl]
        cells += [_html(f"{c:g}"), w.VBox([box, msg]), ek, ecl]

    def show_theory(show):
        for lab in theory_labels:
            lab.layout.visibility = "visible" if show else "hidden"

    show_theory(state["theory_shown"])
    _redraw.append(lambda: show_theory(state["theory_shown"]))

    def reset():
        for b in inputs:
            b.value = ""
    _resetters.append(reset)
    grid = w.GridBox(cells, layout=w.Layout(grid_template_columns="repeat(4, max-content)",
                                            grid_gap="6px 28px", align_items="center"))
    display(grid)


# --- Step 2: Nernst calculation check ------------------------------------------
def nernst_check(conc=10):
    target = float(nernst_mV(conc, z=+1))
    box = w.Text(value=state["nernst_answer"], placeholder="E_K in mV",
                 layout=w.Layout(width="150px", height="40px"))
    btn = w.Button(description="Check my answer", button_style="primary", layout=BIG_BUTTON)
    out = _html("")

    def feedback(txt):
        try:
            v = float(txt)
        except ValueError:
            return "Type a number in mV, e.g. -12.3."
        if abs(v - target) <= 1.0:
            return "✔ Correct. The theoretical values are now shown in the table above."
        if abs(v + target) <= 1.0:
            return "Close, but check the sign. Which chamber has more K⁺, and which way does K⁺ move?"
        if abs(v - target / 2.303) <= 1.0:
            return "Check the logarithm: this equation uses the natural log (ln), not log₁₀."
        if abs(v - target / 1000) <= 0.01:
            return "Check your units: the answer should be in millivolts (mV), not volts."
        if abs(v - target * 20 / 293.15) <= 0.5:
            return "Check the temperature: T must be in kelvin (20 °C = 293.15 K)."
        return "Not quite. Check each term: RT/F at 20 °C, z = +1 for K⁺, and the ratio [K⁺]out / [K⁺]in."

    tries = {"n": 0}

    def on_click(_):
        state["nernst_answer"] = box.value
        tries["n"] += 1
        msg = feedback(box.value)
        if msg.startswith("✔"):
            state["theory_shown"] = True
        elif tries["n"] >= 3 and not state["theory_shown"]:
            state["theory_shown"] = True
            msg += (" <br>The theoretical values are now shown in the table so you can carry on."
                    " Ask the tutor to check your working.")
        out.value = f"<div style='font-size:1.05em'>{msg}</div>"
        _changed()

    btn.on_click(on_click)
    if state["nernst_answer"]:
        out.value = f"<div style='font-size:1.05em'>{feedback(state['nernst_answer'])}</div>"

    def reset():
        box.value = ""; out.value = ""
    _resetters.append(reset)
    display(w.HBox([box, btn], layout=w.Layout(**ROW)), out)


# --- Big tap-friendly choice buttons ---------------------------------------------
def _choices(labels, on_pick, vertical=False, width="190px"):
    """A row (or column) of big buttons that act like radio buttons.
    Returns (box, set_selected) where set_selected(index or None) updates the look."""
    lay = w.Layout(height="auto", min_height="48px", width="100%" if vertical else width)
    btns = [w.Button(description=t, layout=lay, tooltip=t) for t in labels]
    for b in btns:
        b.style.font_size = "15px"

    def set_selected(i, colour="primary"):
        for j, b in enumerate(btns):
            b.button_style = colour if j == i else ""

    for i, b in enumerate(btns):
        b.on_click(lambda _, i=i: on_pick(i))
    box_lay = (w.Layout(grid_gap="8px", width="96%", max_width="640px", overflow="hidden")
               if vertical else w.Layout(grid_gap="8px"))
    box = w.VBox(btns, layout=box_lay) if vertical else w.HBox(btns, layout=box_lay)
    return box, set_selected


# --- Step 3: axis choice + plot --------------------------------------------------
def _plot_group(ax, conc, vm, label, i):
    ax.plot(conc, vm, marker=MARKERS[i % len(MARKERS)], ms=8, lw=1.2,
            color=OKABE_ITO[i % len(OKABE_ITO)], label=label)


def _theory_lines(ax):
    smooth = np.geomspace(1, 160, 200)
    ax.plot(smooth, nernst_mV(smooth, z=+1), "--", color="#E69F00", lw=2, label="E$_K$ (theory)")
    ax.plot(smooth, nernst_mV(smooth, z=-1), ":", color="#0072B2", lw=2.5, label="E$_{Cl}$ (theory)")


def _finish_axes(ax, scale):
    from matplotlib.ticker import FixedLocator, FuncFormatter, NullLocator
    ax.axhline(0, color="grey", lw=0.8)
    ax.set_xscale(scale)
    ax.set_xlim((1, 200) if scale == "log" else (0, 160))
    if scale == "log":       # plain numbers (1, 2, 5 ...), not 10^0, 10^1 ...
        ax.xaxis.set_major_locator(FixedLocator([1, 2, 5, 10, 20, 50, 100, 200]))
        ax.xaxis.set_minor_locator(NullLocator())
        ax.xaxis.set_major_formatter(FuncFormatter(lambda v, _: f"{v:g}"))
    ax.set_xlabel("[KCl] in ECF (mM)")
    ax.set_ylabel("Membrane potential (mV)")
    ax.legend(frameon=False, loc="upper center", bbox_to_anchor=(0.5, -0.2), ncol=3)


SCALES = ["linear", "log"]


def _fig_png(fig):
    """Render a figure to PNG bytes (shown in an Image widget, so no output capture needed)."""
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=110, bbox_inches="tight")
    plt.close(fig)
    return buf.getvalue()


def _student_png(scale):
    fig, ax = plt.subplots(figsize=(7, 4.2))
    if state["theory_shown"]:
        _theory_lines(ax)
    ax.plot(CONCS, _measured_array(), "o", ms=9, color="#000000", label="Measured (your group)")
    _finish_axes(ax, scale)
    return _fig_png(fig)


def axis_choice_and_plot():
    img = w.Image(format="png", layout=w.Layout(width="100%", max_width="760px", height="auto", margin="0"))
    msg = _html("")

    def pick(i):
        state["x_scale"] = SCALES[i]
        _changed()

    box, set_selected = _choices(["Linear x-axis", "Log x-axis"], pick)

    def draw():
        scale = state["x_scale"]
        set_selected(SCALES.index(scale) if scale in SCALES else None)
        if scale is None:
            msg.value = "Choose a scale above to see your plot."
            img.layout.display = "none"
            return
        msg.value = ""
        img.value = _student_png(scale)
        img.layout.display = "inline-block"   # None does not clear "none" in the browser

    _redraw.append(draw)
    display(box, msg, img)
    draw()


# --- Quiz ------------------------------------------------------------------------
def membrane_type():
    """'K', 'Cl' or 'both' from the student's own data, or None if too little data.
    (In the real prac about half the membranes are K+-selective and half Cl--selective.)"""
    low = [state["measured"].get(str(c)) for c in (10, 5, 1.5)]
    low = [v for v in low if v is not None]
    if not low:
        return None
    mean = sum(low) / len(low)
    return "K" if mean < -5 else "Cl" if mean > 5 else "both"


def quiz(blob):
    """Questions are stored encoded so the answers can't be read by opening the cell.
    (This deters peeking; it is not security. Graded quizzes belong in Moodle.)"""
    for q in json.loads(zlib.decompress(base64.b64decode(blob)).decode("utf-8")):
        _mcq(**q)


def _mcq(key, question, options):
    """options: list of {"text", "correct", "right", "wrong"}.
    "correct" is true/false, or "K"/"Cl"/"both" = correct if it matches the student's data."""
    out = _html("")
    labels = [o["text"] for o in options]
    _questions[key] = question

    def show(i):
        o = options[i]
        ok = o["correct"]
        if isinstance(ok, str):
            mt = membrane_type()
            if mt is None:
                set_selected(None)
                out.value = "Enter your measurements in Step 1 first, then come back to this question."
                return False
            ok = ok == mt
        set_selected(i, "success" if ok else "warning")
        mark = "✔ Correct." if ok else "✘ Not quite. Try another answer."
        fb = o["right"] if ok else o["wrong"]
        out.value = f"<div style='font-size:1.05em;margin-top:4px'><b>{mark}</b> {fb}</div>"
        return True

    def pick(i):
        if show(i):
            state["quiz"][key] = labels[i]
            _save()

    box, set_selected = _choices(labels, pick, vertical=True)
    if state["quiz"].get(key) in labels:
        show(labels.index(state["quiz"][key]))

    def reset():
        set_selected(None)
        out.value = ""
    _resetters.append(reset)
    display(_html(f"<b>{question}</b>", "1.1em"), box, out)


# --- Class data -----------------------------------------------------------------
def send_to_class():
    name = w.Text(value=state["group"], placeholder="e.g. Bench 3",
                  description="Group name:", style={"description_width": "initial"},
                  layout=w.Layout(height="40px"))
    btn = w.Button(description="Send my data to the class", button_style="success",
                   layout=BIG_BUTTON, icon="upload")
    out = _html("")

    async def post():
        from pyodide.http import pyfetch
        payload = {"group": name.value.strip(),
                   "measured": {str(c): state["measured"].get(str(c)) for c in CONCS}}
        try:
            # text/plain keeps this a "simple" request (no CORS pre-flight)
            r = await pyfetch(f"{CLASS_SERVER}/submit", method="POST", body=json.dumps(payload),
                              headers={"Content-Type": "text/plain"})
            out.value = ("✔ Sent. Your data is now on the class screen." if r.ok
                         else f"The class server replied with an error ({r.status}).")
        except Exception as e:
            out.value = f"Could not reach the class server. Ask your demonstrator. ({e})"

    def on_click(_):
        if not name.value.strip():
            out.value = "Type your group name first."
            return
        if not state["measured"]:
            out.value = "Enter your measurements in the table first."
            return
        state["group"] = name.value.strip(); _save()
        out.value = "Sending…"
        asyncio.ensure_future(post())

    btn.on_click(on_click)
    display(w.HBox([name, btn], layout=w.Layout(**ROW)), out)


def class_view():
    """Demonstrator view: every group's data on one plot. Press Refresh to update."""
    btn = w.Button(description="Refresh class data", button_style="primary", layout=BIG_BUTTON,
                   icon="refresh")
    scale = w.ToggleButtons(options=[("Linear x-axis", "linear"), ("Log x-axis", "log")],
                            value="log", style={"button_width": "160px"})
    status = _html("Loading…", "0.95em")
    img = w.Image(format="png", layout=w.Layout(width="100%", max_width="900px", height="auto", margin="0"))
    data = {"groups": []}

    def draw():
        groups = data["groups"]
        fig, ax = plt.subplots(figsize=(9, 5.5))
        _theory_lines(ax)
        for i, g in enumerate(groups):
            vm = [np.nan if g["measured"].get(str(c)) is None else g["measured"][str(c)]
                  for c in CONCS]
            _plot_group(ax, CONCS, vm, g["group"], i)
        _finish_axes(ax, scale.value)
        ax.set_title(f"Class data: {len(groups)} group(s)")
        img.value = _fig_png(fig)

    async def fetch():
        from pyodide.http import pyfetch
        status.value = "Refreshing…"
        try:
            stamp = datetime.datetime.now().timestamp()
            r = await pyfetch(f"{CLASS_SERVER}/data?t={stamp}", cache="no-store")
            if not r.ok:
                raise RuntimeError(f"server replied {r.status}")
            data["groups"] = await r.json()
            draw()
            now = datetime.datetime.now().strftime("%H:%M:%S")
            status.value = f"Updated {now}: {len(data['groups'])} group(s)."
        except Exception as e:
            status.value = f"Could not reach the class server at {CLASS_SERVER}. Is it running? ({e})"

    btn.on_click(lambda _: asyncio.ensure_future(fetch()))
    scale.observe(lambda _: draw(), names="value")
    display(w.HBox([btn, scale], layout=w.Layout(**ROW)),
            status, img)
    asyncio.ensure_future(fetch())


# --- Save notes ---------------------------------------------------------------------
def _notes_html():
    """A self-contained web page of the student's work: opens in any browser, offline."""
    when = datetime.datetime.now().strftime("%d %B %Y, %H:%M")
    rows = ""
    for c in CONCS:
        v = state["measured"].get(str(c))
        ek = f"{float(nernst_mV(c, z=+1)) + 0.0:.1f}" if state["theory_shown"] else ""
        ecl = f"{float(nernst_mV(c, z=-1)) + 0.0:.1f}" if state["theory_shown"] else ""
        rows += f"<tr><td>{c:g}</td><td>{'' if v is None else v}</td><td>{ek}</td><td>{ecl}</td></tr>"
    png = base64.b64encode(_student_png(state["x_scale"] or "log")).decode()
    quiz_items = "".join(f"<li>{_questions.get(k, k)}<br><b>{a}</b></li>"
                         for k, a in state["quiz"].items()) or "<li>Not answered yet.</li>"
    data = json.dumps(state).replace("</", "<\\/")
    return f"""<!doctype html><html lang="en-AU"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Membrane potentials, Table 1: my notes</title>
<style>body{{font-family:system-ui,sans-serif;max-width:820px;margin:24px auto;padding:0 16px;line-height:1.5}}
table{{border-collapse:collapse}}td,th{{border:1px solid #bbb;padding:4px 12px;text-align:right}}
img{{max-width:100%}}</style></head><body>
<h1>Membrane potentials: Table 1</h1>
<p>My notes, saved {when}. Group: {state['group'] or '(not entered)'}.</p>
<h2>Measurements</h2>
<table><tr><th>[KCl] in ECF (mM)</th><th>Measured V<sub>m</sub> (mV)</th><th>E<sub>K</sub> (mV)</th><th>E<sub>Cl</sub> (mV)</th></tr>{rows}</table>
<h2>Nernst calculation (E<sub>K</sub> at 10 mM)</h2><p>My answer: {state['nernst_answer'] or '(not entered)'} mV</p>
<h2>Plot ({state['x_scale'] or 'log'} x-axis)</h2>
<img alt="Measured membrane potential against ECF [KCl]" src="data:image/png;base64,{png}">
<h2>My quiz answers</h2><ul>{quiz_items}</ul>
<script type="application/json" id="prac-data">{data}</script>
</body></html>"""


NOTES_NAME = "Membrane potentials Table 1 - my notes.html"


def save_notes_button():
    btn = w.Button(description="Save my notes to this device", button_style="info",
                   layout=BIG_BUTTON, icon="download")
    out = _html("")
    trigger = w.Output()

    def on_click(_):
        page = base64.b64encode(_notes_html().encode("utf-8")).decode()
        href = f"data:text/html;base64,{page}"
        out.value = ("<div style='font-size:1.05em'>✔ Your notes file is downloading. If nothing happens, "
                     f"<a download='{NOTES_NAME}' href='{href}' style='font-weight:bold'>tap here to download it</a>."
                     " Open the file any time, even offline.</div>")
        from IPython.display import Javascript
        trigger.clear_output()
        with trigger:   # one-off script that clicks a hidden download link
            display(Javascript(
                f"const a=document.createElement('a');a.download={json.dumps(NOTES_NAME)};"
                f"a.href={json.dumps(href)};document.body.appendChild(a);a.click();a.remove();"))

    btn.on_click(on_click)
    display(btn, out, trigger)


# --- Reset ------------------------------------------------------------------------
def reset_button():
    btn = w.Button(description="Start again", button_style="danger", layout=BIG_BUTTON, icon="undo")
    out = _html("")
    armed = {"on": False}

    def on_click(_):
        if not armed["on"]:
            armed["on"] = True
            btn.description = "Click again to confirm"
            out.value = "This clears your table, plot choice and quiz answers."
            return
        armed["on"] = False
        btn.description = "Start again"
        for f in _resetters:
            f()
        state.clear(); state.update(json.loads(json.dumps(_BLANK)))
        _changed()
        out.value = "✔ Cleared. You're back at the start."

    btn.on_click(on_click)
    display(btn, out)


# --- After Start ---------------------------------------------------------------------
_SCROLL_JS = """
const h = [...document.querySelectorAll('.jp-NotebookPanel:not(.lm-mod-hidden) h2')]
  .find(e => e.textContent.startsWith('Step 1'));
if (h) { h.scrollIntoView({behavior: 'smooth', block: 'start'}); }
"""


def back_to_step1():
    """'Run all' leaves the view at the bottom; jump back to Step 1, then remove the
    script so it doesn't run again when the notebook is reopened."""
    from IPython.display import Javascript, HTML
    handle = display(Javascript(_SCROLL_JS), display_id=True)

    async def tidy():
        await asyncio.sleep(2)
        handle.update(HTML(""))
    asyncio.ensure_future(tidy())
