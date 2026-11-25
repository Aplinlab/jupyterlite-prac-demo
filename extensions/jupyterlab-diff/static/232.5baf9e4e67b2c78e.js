"use strict";(self.rspackChunkjupyterlab_diff=self.rspackChunkjupyterlab_diff||[]).push([[232],{8475(e,r,t){var o=t(1601),n=t.n(o),a=t(6314),i=t.n(a)()(n());i.push([e.id,`/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

/* Unified merge view styling */
.cm-unified {
  background-color: var(--jp-layout-color0);
  color: var(--jp-ui-font-color1);
}

/* Removed lines in unified diff */
.cm-deletedLine {
  background-color: rgb(255 0 0 / 10%);
}

.cm-deletedChunk {
  background-color: rgb(255 0 0 / 15%);
}

/* Added lines in unified diff */
.cm-addedLine {
  background-color: rgb(0 128 0 / 10%);
}

.cm-addedChunk {
  background-color: rgb(0 128 0 / 15%);
}

/* Unchanged lines */
.cm-unchangedLine {
  background-color: transparent;
}

/* Conflict markers */
.cm-conflictMarker {
  background-color: var(--jp-layout-color3);
  color: var(--jp-error-color0);
}

/* Custom merge control styling with JupyterLab icons */
.cm-chunkButtons {
  display: flex;
  flex-direction: row-reverse;
  gap: 2px;
  padding: 0;
  line-height: 1;
}

/* Style our custom JupyterLab icon buttons to match CodeMirror line height */
.jp-merge-accept-button,
.jp-merge-reject-button {
  cursor: pointer;
  padding: 1px;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s;
  height: 1.4em;
  width: auto;
  vertical-align: middle;
}

/* Make the icon smaller to fit the line height */
.jp-merge-accept-button svg,
.jp-merge-reject-button svg {
  width: 14px;
  height: 14px;
}

.jp-merge-accept-button:hover,
.jp-merge-reject-button:hover {
  background-color: var(--jp-layout-color3);
  border-color: var(--jp-border-color1);
}

/* Floating unified-cell-diff control panel */
.jp-unified-diff-floating-panel {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
  background: var(--jp-layout-color1);
  border: 1px solid var(--jp-border-color2);
  padding: 8px 12px;
  box-shadow: 0 2px 8px #00000040;
  z-index: 200;
  opacity: 0.95;
  transition: opacity 0.2s ease-in-out;
}

.jp-unified-diff-floating-panel .jp-merge-accept-button,
.jp-unified-diff-floating-panel .jp-merge-reject-button {
  padding: 12px 10px;
  font-size: 13px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
  color: white;
  font-weight: inherit;
  border: none;
  transition: background-color 0.2s ease-in-out;
}

.jp-unified-diff-floating-panel .jp-merge-accept-button {
  background-color: var(--jp-success-color1);
}

.jp-unified-diff-floating-panel .jp-merge-accept-button:hover {
  background-color: var(--jp-success-color0);
}

.jp-unified-diff-floating-panel .jp-merge-reject-button {
  background-color: var(--jp-error-color1);
}

.jp-unified-diff-floating-panel .jp-merge-reject-button:hover {
  background-color: var(--jp-error-color0);
}

.jp-DiffRevertButton {
  background: var(--jp-layout-color1);
  padding: 4px 6px;
  cursor: pointer;
  transform: translateY(4px);
}

.jp-DiffRevertButton:hover {
  background: var(--jp-layout-color3);
}
`,""]),t.d(r,{},{A:i})},6314(e){e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t}).join("")},r.i=function(e,t,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=t),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),r.push(l))}},r}},1601(e){e.exports=function(e){return e[1]}},5072(e){var r=[];function t(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function o(e,o){for(var n={},a=[],i=0;i<e.length;i++){var c=e[i],p=o.base?c[0]+o.base:c[0],u=n[p]||0,l="".concat(p," ").concat(u);n[p]=u+1;var s=t(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==s)r[s].references++,r[s].updater(d);else{var f=function(e,r){var t=r.domAPI(r);return t.update(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap||r.supports!==e.supports||r.layer!==e.layer)&&t.update(e=r):t.remove()}}(d,o);o.byIndex=i,r.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var p=o(e,n),u=0;u<a.length;u++){var l=t(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=p}}},7659(e){var r={};e.exports=function(e,t){var o=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!o)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540(e){e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},5056(e,r,t){e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},7825(e){e.exports=function(e){if("u"<typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){var o,n,a;o="",t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {")),(n=void 0!==t.layer)&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,n&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}"),(a=t.sourceMap)&&"u">typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,r,e.options)},remove:function(){var e;null===(e=r).parentNode||e.parentNode.removeChild(e)}}}},1113(e){e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},8579(e,r,t){var o=t(5072),n=t.n(o),a=t(7825),i=t.n(a),c=t(7659),p=t.n(c),u=t(5056),l=t.n(u),s=t(540),d=t.n(s),f=t(1113),g=t.n(f),v=t(8475),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=p().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),n()(v.A,h),v.A&&v.A.locals&&v.A.locals}}]);