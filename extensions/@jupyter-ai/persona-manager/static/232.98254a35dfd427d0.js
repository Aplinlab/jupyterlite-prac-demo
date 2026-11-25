"use strict";(self.rspackChunk_jupyter_ai_persona_manager=self.rspackChunk_jupyter_ai_persona_manager||[]).push([[232],{8475(e,o,r){var t=r(1601),a=r.n(t),n=r(6314),i=(r.n(n))()(a());i.push([e.id,`/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

/* Specificity (0,4,1) beats jupyter-chat's .jp-chat-rendered-message .jp-RenderedMarkdown pre (0,3,1) */
.jp-ThemedContainer
  .jp-chat-rendered-message
  .jp-RenderedMarkdown
  pre.jp-jai-error-traceback,
.jp-ThemedContainer
  .jp-chat-welcome-message
  .jp-RenderedMarkdown
  pre.jp-jai-error-traceback {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  overflow-x: hidden;
  margin: 4px 0 0;
}

.jp-jai-error-details > summary {
  list-style: none;
  cursor: pointer;
}

.jp-jai-error-details > summary::-webkit-details-marker {
  display: none;
}

.jp-jai-error-details > summary::before {
  content: '✗';
  color: var(--jp-error-color1, #d32f2f);
  margin-right: 4px;
}

.jp-jai-error-details > summary::after {
  content: '';
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentcolor;
  margin-left: 6px;
  vertical-align: middle;
  opacity: 0.5;
}

.jp-jai-error-details[open] > summary::after {
  border-top: none;
  border-bottom: 5px solid currentcolor;
}

/* Stop streaming button */
.jp-jai-stopButton {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border: 1px solid var(--jp-border-color1);
  border-radius: 4px;
  background: var(--jp-layout-color2);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  cursor: pointer;
}

.jp-jai-stopButton:hover {
  background: var(--jp-layout-color3);
}

.jp-jai-stopButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* The persona and control buttons keep their natural width; long labels
   ellipsize instead. */
.jp-jai-personaControls-persona-btn,
.jp-jai-personaControls-control-btn {
  flex-shrink: 0;
}

.jp-ThemedContainer .jp-jai-personaControls {
  text-transform: none;
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  color: var(--jp-ui-font-color2);
  min-width: 0;
  padding: 1px 6px;
  border-radius: var(--jp-border-radius);
  line-height: 1.5;
}

.jp-ThemedContainer .jp-jai-personaControls:hover {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color1);
}

/* persona name: the addressee, slightly emphasized, truncated when very long */
.jp-jai-personaControls-persona {
  font-weight: 600;
  color: var(--jp-ui-font-color1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 16ch;
  display: inline-block;
  vertical-align: bottom;
}

/* control value (model, mode, effort): secondary, muted, sized to its content so
   the dropdown arrow sits snug after the text. A max-width caps long values with
   an ellipsis, shown in full on hover and in the dropdown. */
.jp-jai-personaControls-control-value {
  color: var(--jp-ui-font-color2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15ch;
  display: inline-block;
  vertical-align: bottom;
}

/* stylelint-disable selector-class-pattern -- theming MUI's startIcon wrapper */
.jp-ThemedContainer .jp-jai-personaControls-persona-btn .MuiButton-startIcon {
  margin-right: 6px;
  margin-left: 0;
}
/* stylelint-enable selector-class-pattern */

.jp-jai-personaControls-avatar {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.jp-jai-personaControls-avatar-spacer {
  width: 18px;
  height: 18px;
  display: inline-block;
  flex-shrink: 0;
}

.jp-jai-personaControls-arrow {
  font-size: 18px !important;
  margin-left: -4px;
  opacity: 0.7;
}

/* Dropdown menus, rendered in a portal. The class is doubled to raise its
   specificity so these width bounds win over MUI's own styles on the Paper. */
.jp-jai-controlMenu-paper.jp-jai-controlMenu-paper {
  max-height: 60vh;
  min-width: 200px;
  max-width: 340px;
  background-color: var(--jp-layout-color1);
  border: 1px solid var(--jp-border-color2);
  box-shadow: var(--jp-elevation-z6);
}

/* stylelint-disable selector-class-pattern -- theming MUI's menu item classes */
.jp-jai-controlMenu-paper .MuiMenuItem-root {
  padding: 6px 12px;
  gap: 8px;

  /* Base the menu item on the JAI font size (overrides MUI's default) so the
     em-based secondary size nests from it. */
  font-size: var(--jp-ui-font-size1);
}

.jp-jai-controlMenu-paper .MuiMenuItem-root:hover,
.jp-jai-controlMenu-paper .MuiMenuItem-root.Mui-selected,
.jp-jai-controlMenu-paper .MuiMenuItem-root.Mui-selected:hover {
  background-color: var(--jp-layout-color2);
}
/* stylelint-enable selector-class-pattern */

/* Menu name and description, scoped under the paper so the font sizes win over
   MUI's Typography. Name at the JAI base size, description one step smaller. */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-name {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* description: secondary, wrapping to at most two lines. Agent-authored text
   has arbitrary length, so the clamp keeps the common case fully readable and
   bounds the pathological one (full text stays on hover). The class is doubled
   to out-rank MUI's nowrap on the same element. */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-desc.jp-jai-controlMenu-desc {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  color: var(--jp-ui-font-color2);
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
}

.jp-jai-controlMenu-check {
  color: var(--jp-brand-color1);
  margin-left: 12px;
  flex-shrink: 0;
}

/* Control menu group label: an uppercase heading titling a control's
   dropdown, above its search box and choices. Scoped under the paper to win
   over MUI's ListSubheader defaults. */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-subheader {
  padding: 8px 12px 2px;
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Search box in a control's dropdown (ControlMenu - the searchable model/
   settings picker). Sits between the subheader and the choice list; the
   choice list scrolls independently (see below) so the box stays visible
   while scrolling a long, filtered result set. */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-search-input {
  padding: 4px 12px 8px;
}

/* stylelint-disable-next-line selector-class-pattern -- theming MUI's input classes */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-search-input .MuiInput-root {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
}

/* The choice list scrolls on its own, independent of the paper's own
   max-height bound (see .jp-jai-controlMenu-paper above) - without this the
   search box could scroll out of view along with the results, the opposite
   of the point of keeping it pinned at the top. */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-search-list {
  overflow-y: auto;
  max-height: calc(60vh - 80px);
}

/* Keyboard-focused row when navigating the search results with arrow keys.
   ControlMenu no longer renders choices inside a MenuList - see the comment
   on ControlMenu in persona-controls.tsx - so this is a plain state-driven
   highlight rather than real DOM/MUI focus styling, matching the existing
   hover/selected treatment for visual consistency. */
/* stylelint-disable-next-line selector-class-pattern -- theming MUI's menu item classes */
.jp-jai-controlMenu-paper .jp-jai-controlMenu-kbd-focused.MuiMenuItem-root {
  background-color: var(--jp-layout-color2);
}

/* Usage chip: a small ring gauge and percent of the active persona's context
   fill, next to the persona it describes. Borderless, matching the overflow
   button. The ring fill and percent take the chip's color, so the warn/error
   levels recolor them through \`currentColor\`. */
.jp-jai-usage-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 1px 6px;
  border: none;
  background: transparent;
  color: var(--jp-ui-font-color2);
  border-radius: var(--jp-border-radius);
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  line-height: 1.5;
  cursor: pointer;
  flex-shrink: 0;
}

.jp-jai-usage-chip:hover {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color1);
}

.jp-jai-usage-warn {
  color: var(--jp-warn-color1);
}

.jp-jai-usage-error {
  color: var(--jp-error-color1);
}

/* Keep the threshold color on hover, only the background changes. */
.jp-jai-usage-warn:hover {
  color: var(--jp-warn-color1);
}

.jp-jai-usage-error:hover {
  color: var(--jp-error-color1);
}

.jp-jai-usage-ring {
  display: block;
  flex-shrink: 0;
}

.jp-jai-usage-ring-track {
  stroke: var(--jp-border-color2);
}

.jp-jai-usage-ring-fill {
  stroke: currentcolor;
}

.jp-jai-usage-pct {
  white-space: nowrap;
}

/* Usage popover card: labeled sections in the control menu's subheader style,
   then one row per quantity, label muted and value right-aligned. */
.jp-jai-usage-card {
  padding: 8px 12px;
  min-width: 220px;
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
}

/* Group header: an uppercase label with the group's headline value on the
   right. Detail rows, when the group has any, follow beneath. */
.jp-jai-usage-section {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-top: 8px;
  padding: 8px 0 2px;
  border-top: 1px solid var(--jp-border-color2);
  font-size: var(--jp-ui-font-size0);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--jp-ui-font-color1);
}

/* The headline value: primary data, exempt from the label's uppercase
   emphasis, at the same size as the detail rows. */
.jp-jai-usage-section-value {
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
}

.jp-jai-usage-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  line-height: 1.7;
}

/* Whatever the card starts with sits flush at the top, no divider above. */
.jp-jai-usage-card > :first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

.jp-jai-usage-row-label {
  color: var(--jp-ui-font-color2);
}

.jp-jai-usage-row-value {
  white-space: nowrap;
}

/* Loading placeholder shown while the persona list resolves over awareness:
   sits where the persona button will, matching its footprint (18px avatar,
   6px gap to the label, the button's padding). */
.jp-jai-personaControls-skeleton {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 1px 6px;
}

/* stylelint-disable selector-class-pattern -- theming MUI's skeleton */
.jp-ThemedContainer .jp-jai-personaControls-skeleton .MuiSkeleton-root {
  background-color: var(--jp-border-color2);
}
/* stylelint-enable selector-class-pattern */
`,""]),r.d(o,{},{A:i})},6314(e){e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var r="",t=void 0!==o[5];return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),t&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=e(o),t&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r}).join("")},o.i=function(e,r,t,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);t&&i[c[0]]||(void 0!==n&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=n),r&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=r),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),o.push(c))}},o}},1601(e){e.exports=function(e){return e[1]}},5072(e){var o=[];function r(e){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},n=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],p=a[l]||0,c="".concat(l," ").concat(p);a[l]=p+1;var d=r(c),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)o[d].references++,o[d].updater(u);else{var h=function(e,o){var r=o.domAPI(o);return r.update(e),function(o){o?(o.css!==e.css||o.media!==e.media||o.sourceMap!==e.sourceMap||o.supports!==e.supports||o.layer!==e.layer)&&r.update(e=o):r.remove()}}(u,t);t.byIndex=i,o.splice(i,0,{identifier:c,updater:h,references:1})}n.push(c)}return n}e.exports=function(e,a){var n=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<n.length;i++){var s=r(n[i]);o[s].references--}for(var l=t(e,a),p=0;p<n.length;p++){var c=r(n[p]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=l}}},7659(e){var o={};e.exports=function(e,r){var t=function(e){if(void 0===o[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}o[e]=r}return o[e]}(e);if(!t)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540(e){e.exports=function(e){var o=document.createElement("style");return e.setAttributes(o,e.attributes),e.insert(o,e.options),o}},5056(e,o,r){e.exports=function(e){var o=r.nc;o&&e.setAttribute("nonce",o)}},7825(e){e.exports=function(e){if("u"<typeof document)return{update:function(){},remove:function(){}};var o=e.insertStyleElement(e);return{update:function(r){var t,a,n;t="",r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {")),(a=void 0!==r.layer)&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}"),(n=r.sourceMap)&&"u">typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(t,o,e.options)},remove:function(){var e;null===(e=o).parentNode||e.parentNode.removeChild(e)}}}},1113(e){e.exports=function(e,o){if(o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}},8579(e,o,r){var t=r(5072),a=r.n(t),n=r(7825),i=r.n(n),s=r(7659),l=r.n(s),p=r(5056),c=r.n(p),d=r(540),u=r.n(d),h=r(1113),j=r.n(h),f=r(8475),m={};m.styleTagTransform=j(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),a()(f.A,m),f.A&&f.A.locals&&f.A.locals}}]);