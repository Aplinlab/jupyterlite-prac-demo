"use strict";(self.rspackChunkjupyter_chat_components=self.rspackChunkjupyter_chat_components||[]).push([[232],{475(o,e,r){var a=r(601),t=r.n(a),i=r(314),n=r.n(i)()(t());n.push([o.id,`/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

/* Modern Tool Call Card Styling */
.jp-ai-tool-call {
  margin: 8px 0;
  border: 1px solid var(--jp-border-color1);
  border-radius: 6px;
  background: var(--jp-layout-color0);
  box-shadow: var(--jp-elevation-z2);
  transition: all 0.2s ease;
  overflow: hidden;
}

.jp-ai-tool-call:hover {
  border-color: var(--jp-border-color2);
  box-shadow: var(--jp-elevation-z4);
}

/* Tool Header - clickable summary */
.jp-ai-tool-header {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: var(--jp-layout-color1);
  cursor: pointer;
  user-select: none;
  gap: 8px;
  transition: background-color 0.2s ease;
}

.jp-ai-tool-header:hover {
  background: var(--jp-layout-color2);
}

.jp-ai-tool-header::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid var(--jp-ui-font-color2);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: transform 0.2s ease;
}

.jp-ai-tool-call[open] .jp-ai-tool-header::before {
  transform: rotate(90deg);
}

.jp-ai-tool-icon {
  font-size: 14px;
  opacity: 0.8;
}

.jp-ai-tool-title {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  font-weight: 500;
  color: var(--jp-ui-font-color1);
  flex: 1;
}

.jp-ai-tool-summary {
  font-weight: 400;
  opacity: 0.7;
  font-size: var(--jp-ui-font-size0);
}

.jp-ai-tool-summary::before {
  content: ' ';
  white-space: pre;
}

.jp-ai-tool-status {
  font-size: var(--jp-ui-font-size0);
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 3px;
}

.jp-ai-tool-status-pending {
  background: color-mix(
    in srgb,
    var(--jp-warn-color1, #f57c00) 15%,
    transparent
  );
  color: var(--jp-warn-color1);
}

.jp-ai-tool-status-completed {
  background: color-mix(
    in srgb,
    var(--jp-success-color1, #388e3c) 15%,
    transparent
  );
  color: var(--jp-success-color1);
}

.jp-ai-tool-status-error {
  background: color-mix(
    in srgb,
    var(--jp-error-color1, #d32f2f) 15%,
    transparent
  );
  color: var(--jp-error-color1);
}

.jp-ai-tool-status-approval {
  background: color-mix(
    in srgb,
    var(--jp-warn-color1, #f57c00) 15%,
    transparent
  );
  color: var(--jp-warn-color1);
}

/* Tool Body */
.jp-ai-tool-body {
  padding: 8px 12px 12px;
}

.jp-ai-tool-section {
  margin-bottom: 8px;
}

.jp-ai-tool-section:last-child {
  margin-bottom: 0;
}

.jp-ai-tool-label {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  color: var(--jp-ui-font-color2);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.jp-ai-tool-code {
  background: var(--jp-layout-color2);
  border: 1px solid var(--jp-border-color1);
  border-radius: 4px;
  padding: 8px;
  margin: 0;
  font-family: var(--jp-code-font-family);
  font-size: var(--jp-code-font-size);
  line-height: 1.4;
  overflow: auto auto;
  max-height: 200px;
}

.jp-ai-tool-code code {
  background: none;
  padding: 0;
  border: none;
  font-family: inherit;
  font-size: inherit;
}

/* State-specific styling */
.jp-ai-tool-pending {
  border-left: 4px solid var(--jp-warn-color1);
}

.jp-ai-tool-completed {
  border-left: 4px solid var(--jp-success-color1);
}

.jp-ai-tool-error {
  border-left: 4px solid var(--jp-error-color1);
}

/* Tool Approval Button Styles */
.jp-ai-tool-approval-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
}

.jp-ai-approval-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 70px;
  display: inline-block;
}

.jp-ai-approval-approve {
  background: var(--jp-success-color1);
  color: var(--jp-ui-inverse-font-color1);
}

.jp-ai-approval-approve:hover:not(:disabled) {
  background: var(--jp-success-color0);
  transform: translateY(-1px);
  box-shadow: var(--jp-elevation-z4);
}

.jp-ai-approval-reject {
  background: var(--jp-error-color1);
  color: var(--jp-ui-inverse-font-color1);
}

.jp-ai-approval-reject:hover:not(:disabled) {
  background: var(--jp-error-color0);
  transform: translateY(-1px);
  box-shadow: var(--jp-elevation-z4);
}

.jp-ai-approval-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* ACP-style Tool Calls */
.jp-ai-tool-calls {
  padding: 4px 0;
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
  margin-bottom: 4px;
}

.jp-ai-tool-call-item {
  padding: 1px 0;
  font-family: var(--jp-content-font-family);
  color: var(--jp-ui-font-color2);
}

.jp-ai-tool-call-item-completed .jp-ai-tool-call-item-icon {
  color: var(--jp-success-color1, #388e3c);
}

.jp-ai-tool-call-item-failed .jp-ai-tool-call-item-icon {
  color: var(--jp-error-color1, #d32f2f);
}

details.jp-ai-tool-call-item summary,
.jp-ai-tool-call-item details summary {
  cursor: pointer;
}

details.jp-ai-tool-call-item summary,
.jp-ai-tool-call-item details summary,
.jp-ai-tool-call-item.jp-ai-tool-call-item-no-detail {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: var(--jp-layout-color1);
  gap: 8px;
  transition: background-color 0.2s ease;
}

.jp-ai-tool-call-item-title {
  font-size: var(--jp-ui-font-size1);
  font-weight: 500;
  flex: 1;
}

.jp-ai-tool-call-item-summary {
  font-weight: 400;
  opacity: 0.8;
  font-size: var(--jp-ui-font-size0);
}

details.jp-ai-tool-call-item summary::-webkit-details-marker,
.jp-ai-tool-call-item details summary::-webkit-details-marker {
  display: none;
}

details.jp-ai-tool-call-item summary::after,
.jp-ai-tool-call-item details summary::after {
  content: '';
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentcolor;
  margin-left: 6px;
  vertical-align: middle;
  opacity: 0.5;
}

details[open].jp-ai-tool-call-item summary::after,
.jp-ai-tool-call-item details[open] summary::after {
  border-top: none;
  border-bottom: 5px solid currentcolor;
}

.jp-ai-tool-call-item-detail {
  margin: 2px 0 2px 20px;
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-code-font-family);
  white-space: pre-wrap;
  word-break: break-all;
  padding-left: 5px;
}

.jp-ai-tool-call-detail-section {
  margin-bottom: 8px;
}

.jp-ai-tool-call-detail-section:last-child {
  margin-bottom: 0;
}

.jp-ai-tool-call-detail-label {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.jp-ai-tool-call-detail-code {
  background: var(--jp-layout-color2) !important;
  border: 1px solid var(--jp-border-color1) !important;
  border-radius: 4px !important;
  padding: 8px !important;
  margin: 0 !important;
  font-size: var(--jp-ui-font-size1) !important;
  overflow: auto;
}

.jp-ai-tool-call-detail-code code {
  font-size: var(--jp-ui-font-size1) !important;
}

.jp-ai-tool-call-permission-buttons {
  display: flex;
  gap: 6px;
  margin: 4px 0;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 5px;
}

.jp-ai-tool-call-permission-tree {
  color: var(--jp-ui-font-color2);
  font-family: monospace;
}

.jp-ai-tool-call-permission-btn {
  padding: 2px 6px;
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  border-radius: 3px;
  border: 1px solid var(--jp-border-color1);
  cursor: pointer;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
}

.jp-ai-tool-call-permission-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.jp-ai-tool-call-permission-btn:hover:not(:disabled) {
  background: var(--jp-layout-color2);
}

.jp-ai-tool-call-permission-btn-allow-once,
.jp-ai-tool-call-permission-btn-allow-always {
  border-color: var(--jp-success-color1, #388e3c);
  color: var(--jp-success-color1, #388e3c);
}

.jp-ai-tool-call-permission-btn-reject-once {
  border-color: var(--jp-error-color1, #d32f2f);
  color: var(--jp-error-color1, #d32f2f);
}

.jp-ai-tool-call-permission-label {
  font-size: var(--jp-ui-font-size0);
  color: var(--jp-ui-font-color2);
}

.jp-ai-tool-call-diff-container {
  margin: 4px 0 4px 20px;
}

.jp-ai-tool-call-diff-block {
  margin-bottom: 4px;
  border: 1px solid var(--jp-border-color2);
  border-radius: 3px;
  overflow: hidden;
}

.jp-ai-tool-call-diff-header {
  padding: 0 8px;
  font-size: var(--jp-ui-font-size0);
  font-family: var(--jp-code-font-family);
  color: var(--jp-ui-font-color2);
}

.jp-ai-tool-call-diff-header-clickable {
  cursor: pointer;
}

.jp-ai-tool-call-diff-header-clickable:hover {
  text-decoration: underline;
}

.jp-ai-tool-call-diff-content {
  margin: 0;
  padding: 0;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
}

.jp-ai-tool-call-diff-line {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 8px;
  align-items: start;
  padding: 0 8px;
  min-height: calc(var(--jp-code-line-height) * 1em);
}

.jp-ai-tool-call-diff-line-prefix {
  width: 1ch;
  color: var(--jp-ui-font-color3);
  user-select: none;
  text-align: center;
}

.jp-ai-tool-call-diff-line-text {
  min-width: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.jp-ai-tool-call-diff-line-text:empty::before {
  content: '\xb7';
  opacity: 0.35;
}

.jp-ai-tool-call-diff-line.jp-mod-added {
  background: color-mix(
    in srgb,
    var(--jp-success-color1, #388e3c) 15%,
    transparent
  );
}

.jp-ai-tool-call-diff-line.jp-mod-removed {
  background: color-mix(
    in srgb,
    var(--jp-error-color1, #d32f2f) 15%,
    transparent
  );
}

.jp-ai-tool-call-diff-line.jp-mod-context {
  color: var(--jp-ui-font-color2);
}

.jp-ai-tool-call-diff-empty {
  padding: 6px 8px;
  color: var(--jp-ui-font-color2);
  font-style: italic;
}

.jp-ai-tool-call-diff-toggle {
  padding: 4px 8px 8px;
  border: none;
  background: none;
  color: var(--jp-ui-font-color2);
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-style: italic;
  cursor: pointer;
  text-align: left;
}

/* Inline Diff */
.jp-ai-inline-diff-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
}

.jp-ai-inline-diff-block {
  overflow: hidden;
  border: 1px solid var(--jp-border-color1);
  border-radius: 6px;
  background: var(--jp-layout-color0);
}

.jp-ai-inline-diff-header {
  width: 100%;
  padding: 6px 10px;
  border: none;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: var(--jp-ui-font-size0);
  text-align: left;
}

.jp-ai-inline-diff-content {
  font-family: var(--jp-code-font-family);
  font-size: var(--jp-code-font-size);
  line-height: var(--jp-code-line-height);
}

.jp-ai-inline-diff-line {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 8px;
  align-items: start;
  padding: 0 10px;
  min-height: calc(var(--jp-code-line-height) * 1em);
}

.jp-ai-inline-diff-line-prefix {
  width: 1ch;
  color: var(--jp-ui-font-color3);
  user-select: none;
  text-align: center;
}

.jp-ai-inline-diff-line-text {
  min-width: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.jp-ai-inline-diff-line-text:empty::before {
  content: '\xb7';
  opacity: 0.35;
}

.jp-ai-inline-diff-line.jp-mod-added {
  background: color-mix(
    in srgb,
    var(--jp-success-color1, #388e3c) 15%,
    transparent
  );
}

.jp-ai-inline-diff-line.jp-mod-removed {
  background: color-mix(
    in srgb,
    var(--jp-error-color1, #d32f2f) 15%,
    transparent
  );
}

.jp-ai-inline-diff-line.jp-mod-context {
  color: var(--jp-ui-font-color2);
}

.jp-ai-inline-diff-empty {
  padding: 6px 10px;
  color: var(--jp-ui-font-color2);
  font-style: italic;
}

.jp-ai-inline-diff-toggle {
  padding: 4px 10px 8px;
  border: none;
  background: none;
  color: var(--jp-ui-font-color2);
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size0);
  font-style: italic;
  cursor: pointer;
  text-align: left;
}

.jp-ai-inline-diff-toggle:hover {
  color: var(--jp-ui-font-color1);
  text-decoration: underline;
}

/* Message Queue Styling */
.jp-chat-message-queue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  pointer-events: none;
  width: 100%;
}

.jp-chat-message-queue-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  pointer-events: auto;
}

.jp-chat-message-queue-header {
  display: flex;
  align-items: center;
  gap: 6px;
  pointer-events: auto;
  align-self: flex-end;
}

.jp-chat-message-queue-count {
  font-size: var(--jp-ui-font-size0);
  color: var(--jp-ui-font-color2);
}

.jp-chat-message-queue-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: none;
  background: transparent;
  color: var(--jp-ui-font-color2);
  font-size: 8px;
  cursor: pointer;
}

.jp-chat-message-queue-toggle:hover {
  color: var(--jp-ui-font-color1);
}

.jp-chat-message-queue-bubble {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--jp-layout-color2);
  border: 1px solid var(--jp-border-color1);
  border-radius: 16px;
  padding: 4px 48px 4px 12px;
  pointer-events: auto;
  max-width: 100%;
}

.jp-chat-message-queue-row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.jp-chat-message-queue-end-zone {
  width: 100%;
  min-height: 16px;
}

.jp-chat-message-queue-drop-line {
  width: 100%;
  height: 2px;
  background-color: var(--jp-brand-color1);
  border-radius: 1px;
  margin: -4px 0;
}

.jp-chat-message-queue-bubble-dragging {
  opacity: 0.4;
}

.jp-chat-message-queue-drag-handle {
  flex-shrink: 0;
  width: 8px;
  height: 16px;
  cursor: grab;
  background-image:
    radial-gradient(circle, var(--jp-ui-font-color2) 1px, transparent 1px),
    radial-gradient(circle, var(--jp-ui-font-color2) 1px, transparent 1px);
  background-position:
    0 0,
    4px 0;
  background-size: 4px 5px;
  background-repeat: repeat-y, repeat-y;
  opacity: 0.5;
}

.jp-chat-message-queue-bubble:hover .jp-chat-message-queue-drag-handle {
  opacity: 0.8;
}

.jp-chat-message-queue-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  min-width: 0;
}

.jp-chat-message-queue-text {
  font-size: var(--jp-ui-font-size0);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.jp-chat-message-queue-remove {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--jp-ui-font-color2);
  font-size: 10px;
  cursor: pointer;
  opacity: 0;
  flex-shrink: 0;
}

.jp-chat-message-queue-edit {
  position: absolute;
  right: 26px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--jp-ui-font-color2);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
}

.jp-chat-message-queue-edit:hover {
  background: var(--jp-layout-color3);
  color: var(--jp-ui-font-color1);
}

.jp-chat-message-queue-bubble:hover .jp-chat-message-queue-edit {
  opacity: 1;
  pointer-events: auto;
}

.jp-chat-message-queue-bubble:has(.jp-chat-message-queue-edit-textarea)
  .jp-chat-message-queue-edit {
  opacity: 1;
  pointer-events: auto;
}

.jp-chat-message-queue-edit-textarea {
  width: 100%;
  resize: none;
  overflow: hidden;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-brand-color1);
  border-radius: 2px;
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  padding: 2px 4px;
  outline: none;
  box-sizing: border-box;
  min-width: 0;
}

.jp-chat-message-queue-btn-icon {
  display: inline-flex;
  width: 12px;
  height: 12px;
}

.jp-chat-message-queue-btn-icon svg {
  width: 12px;
  height: 12px;
}

.jp-chat-message-queue-remove:hover {
  background: var(--jp-layout-color3);
  color: var(--jp-ui-font-color1);
}

.jp-chat-message-queue-bubble:hover .jp-chat-message-queue-remove {
  opacity: 1;
}

.jp-chat-message-queue-attachments {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 2px;
}

.jp-chat-message-queue-attachment-item {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: var(--jp-ui-font-size0);
  color: var(--jp-ui-font-color1);
  border: var(--jp-border-width) solid var(--jp-border-color1);
  border-radius: 2px;
  padding: 0 4px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.jp-chat-message-queue-attachment-icon {
  display: inline-flex;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}

.jp-chat-message-queue-attachment-icon svg {
  width: 14px;
  height: 14px;
}

/* Error Component Styling */
.jp-ai-error-message {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: var(--jp-layout-color2);
  border: 1px solid var(--jp-border-color1);
  border-left: 4px solid var(--jp-error-color1);
  border-radius: 6px;
  padding: 12px 16px;
  margin: 8px 0;
  box-shadow: var(--jp-elevation-z2);
  color: var(--jp-ui-font-color1);
}

.jp-ai-error-icon {
  color: var(--jp-error-color1);
}

.jp-ai-error-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.jp-ai-error-title {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  font-weight: 600;
  color: var(--jp-error-color1);
}

.jp-ai-error-text {
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  word-break: break-word;
  white-space: pre-wrap;
  color: var(--jp-ui-font-color2);
  line-height: 1.4;
}
`,""]),r.d(e,{},{A:n})},314(o){o.exports=function(o){var e=[];return e.toString=function(){return this.map(function(e){var r="",a=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),a&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=o(e),a&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r}).join("")},e.i=function(o,r,a,t,i){"string"==typeof o&&(o=[[null,o,void 0]]);var n={};if(a)for(var l=0;l<this.length;l++){var p=this[l][0];null!=p&&(n[p]=!0)}for(var c=0;c<o.length;c++){var s=[].concat(o[c]);a&&n[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]&&(s[1]="@media ".concat(s[2]," {").concat(s[1],"}")),s[2]=r),t&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=t):s[4]="".concat(t)),e.push(s))}},e}},601(o){o.exports=function(o){return o[1]}},72(o){var e=[];function r(o){for(var r=-1,a=0;a<e.length;a++)if(e[a].identifier===o){r=a;break}return r}function a(o,a){for(var t={},i=[],n=0;n<o.length;n++){var l=o[n],p=a.base?l[0]+a.base:l[0],c=t[p]||0,s="".concat(p," ").concat(c);t[p]=c+1;var d=r(s),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var u=function(o,e){var r=e.domAPI(e);return r.update(o),function(e){e?(e.css!==o.css||e.media!==o.media||e.sourceMap!==o.sourceMap||e.supports!==o.supports||e.layer!==o.layer)&&r.update(o=e):r.remove()}}(f,a);a.byIndex=n,e.splice(n,0,{identifier:s,updater:u,references:1})}i.push(s)}return i}o.exports=function(o,t){var i=a(o=o||[],t=t||{});return function(o){o=o||[];for(var n=0;n<i.length;n++){var l=r(i[n]);e[l].references--}for(var p=a(o,t),c=0;c<i.length;c++){var s=r(i[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=p}}},659(o){var e={};o.exports=function(o,r){var a=function(o){if(void 0===e[o]){var r=document.querySelector(o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}e[o]=r}return e[o]}(o);if(!a)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},540(o){o.exports=function(o){var e=document.createElement("style");return o.setAttributes(e,o.attributes),o.insert(e,o.options),e}},56(o,e,r){o.exports=function(o){var e=r.nc;e&&o.setAttribute("nonce",e)}},825(o){o.exports=function(o){if("u"<typeof document)return{update:function(){},remove:function(){}};var e=o.insertStyleElement(o);return{update:function(r){var a,t,i;a="",r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {")),(t=void 0!==r.layer)&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,t&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}"),(i=r.sourceMap)&&"u">typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),o.styleTagTransform(a,e,o.options)},remove:function(){var o;null===(o=e).parentNode||o.parentNode.removeChild(o)}}}},113(o){o.exports=function(o,e){if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}},579(o,e,r){var a=r(72),t=r.n(a),i=r(825),n=r.n(i),l=r(659),p=r.n(l),c=r(56),s=r.n(c),d=r(540),f=r.n(d),u=r(113),j=r.n(u),m=r(475),g={};g.styleTagTransform=j(),g.setAttributes=s(),g.insert=p().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=f(),t()(m.A,g),m.A&&m.A.locals&&m.A.locals}}]);