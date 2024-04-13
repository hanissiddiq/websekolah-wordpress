!function(){var e={184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)o.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function t(t,r){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,l,i,c=[],a=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=l.call(r)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){u=!0,n=e}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw n}}return c}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(o),r.d(o,{BlockEditor:function(){return N},BlockEditorPreview:function(){return F}});var i=window.React,c=r.n(i),a=window.wp.components,u=window.wp.blockEditor,s=window.wp.keyboardShortcuts,d=window.lodash,f=window.lapilliUI.styles;function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=window.wp.data,m=window.wp.coreData,v=window.wp.mediaUtils,y=["onError"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var w=window.wp.element,h=window.wp.primitives,E=(0,w.createElement)(h.SVG,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,w.createElement)(h.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"})),k=window.wp.blocks;function O(){return(0,b.useSelect)((function(e){return{themeSupportsLayout:e(u.store).getSettings().supportsLayout}}),[]).themeSupportsLayout?"is-layout-constrained":"is-layout-flow"}function S(e){return e.classList.contains("block-editor-writing-flow")}var j=(0,f.styled)("div",{name:"BlockEditorWritingFlow",slot:"Root"})((function(){return{}})),P=(0,f.styled)("div",{name:"BlockEditorWritingFlow",slot:"Wrapper"})((function(e){var t=e.theme;return{display:"flex",".block-editor-writing-flow":{flex:1,borderBottomLeftRadius:t.fields.borderRadius,borderBottomRightRadius:t.fields.borderRadius},".block-editor-block-inspector":{width:280,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:t.fields.borderColor,height:"100%"}}})),x=(0,f.styled)("div",{name:"BlockEditorToolbarActions",slot:"Root"})((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:1,".components-toolbar-group":{border:"none",paddingRight:0,"&:after":{display:"none"}}}}));function B(e){var r,o=e.blocks,n=e.onChange,l=e.placeholder,s=void 0===l?"":l,d=o[0],f=!o.length,p=(0,b.useDispatch)(u.store),m=p.insertBlock,v=p.selectBlock,y=t((0,i.useState)(!1),2),g=y[0],w=y[1],h=(0,b.useSelect)((function(e){var t=e(u.store),r=t.getSelectedBlockClientIds,o=t.getSettings;return{selectedBlockClientIds:r(),blockEditorSettings:o()}}),[]),B=h.selectedBlockClientIds,C=h.blockEditorSettings;(0,i.useEffect)((function(){null!=B&&B.length||!d||v(d.clientId,null)}),[d,B]),(0,i.useEffect)((function(){if(f){var e=(0,k.createBlock)("core/paragraph",{content:"",placeholder:s});m(e),n([e])}}),[f]);var R=function(){var e=(0,i.useRef)(null),t=(0,i.useCallback)((function(t){return e.current&&e.current.contains(t)}),[]);return(0,i.useEffect)((function(){var e,r=function(r){var n=r.target;n&&t(n)&&1===r.buttons&&n.getAttribute("contenteditable")&&!S(n)&&(e=n,window.addEventListener("mouseup",o))},o=function r(o){if(window.removeEventListener("mouseup",r),e){var n=o.target;n&&t(n)&&!S(n)||setTimeout((function(){e&&(e.focus(),e=null)}),10)}};return document.addEventListener("mouseout",r),function(){document.removeEventListener("mouseout",r)}}),[]),e}(),_=O();return c().createElement(j,{ref:R},c().createElement(u.BlockTools,null,c().createElement(u.__unstableEditorStyles,{styles:null!==(r=null==C?void 0:C.styles)&&void 0!==r?r:[]}),c().createElement(P,null,c().createElement(u.WritingFlow,{className:"editor-styles-wrapper"},c().createElement(u.ObserveTyping,null,c().createElement(u.BlockList,{className:_}))),g&&c().createElement("form",{onSubmit:function(e){return e.preventDefault()}},c().createElement(u.BlockInspector,null))),c().createElement(u.__unstableBlockToolbarLastItem,null,c().createElement(x,null,c().createElement(a.ToolbarGroup,null,c().createElement(u.Inserter,{isAppender:!0,toggleProps:{as:a.ToolbarButton}}),c().createElement(a.ToolbarButton,{icon:E,onClick:function(){return w((function(e){return!e}))},isPressed:g}))))))}var C=r(184),R=r.n(C),_=window.ReactDOM;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=(0,f.styled)("div",{name:"BlockEditor",slot:"Root"})((function(e){var t=e.theme;return L({borderStyle:"solid",borderWidth:"1px",borderColor:t.fields.borderColor,borderRadius:t.fields.borderRadius,background:t.fields.background,width:"100%",".block-editor-block-contextual-toolbar":{background:t.fields.background,borderTopLeftRadius:t.fields.borderRadius,borderTopRightRadius:t.fields.borderRadius,borderColor:t.fields.borderColor,"&.is-fixed":{margin:0,position:"sticky",overflow:"hidden",width:"100%",borderBottom:"1px solid ".concat(t.fields.borderColor),top:0,".block-editor-block-toolbar .components-toolbar-group":{borderColor:t.fields.borderColor},".is-showing-movers":{width:"100%"},".block-editor-block-toolbar__group-collapse-fixed-toolbar":{display:"none"}},".block-editor-block-toolbar .components-toolbar-group":{borderColor:t.fields.borderColor}},".block-editor-writing-flow":{padding:"12px",boxSizing:"border-box",minHeight:"120px"},".admin-bar:not(.is-fullscreen-mode) &":{".block-editor-block-contextual-toolbar":{"&.is-fixed":{top:32,"@media screen and (max-width: 782px)":{top:46}}}}},D(t))})),D=function(e){return{".is-alternate .components-popover__content":{outlineColor:e.fields.borderColor},".is-alternate .components-dropdown-menu__menu .components-menu-group + .components-menu-group":{borderColor:e.fields.borderColor},".block-editor-inserter__popover:not(.is-quick)":{".components-popover__content":{padding:"12px"}}}},A=(0,f.styled)("div",{name:"BlockEditor",slot:"Popover"})((function(e){var t=e.theme;return L({position:"fixed",zIndex:9999999,display:"flex",flexDirection:"column",height:"fit-content"},D(t))})),U=a.Popover.Slot,N=function(e){var r=e.className,o=e.blocks,n=e.onChange,w=void 0===n?d.noop:n,h=e.placeholder,E=void 0===h?"":h,k=e.settings,O=void 0===k?{}:k,S=e.disablePortal,j=void 0!==S&&S,P=(0,i.useRef)(o),x=t((0,i.useState)(0),2)[1],C=function(){x((function(e){return e+1}))};(0,i.useEffect)((function(){P.current=o,C()}),[o]);var I=(0,d.debounce)((function(e){w(e),P.current=e,C()}),200),D=(0,b.useSelect)((function(e){var t;return{hasUploadPermissions:null===(t=(0,e(m.store).canUser)("create","media"))||void 0===t||t}}),[]).hasUploadPermissions?function(e){var t=e.onError,r=p(e,y);(0,v.uploadMedia)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({onError:function(e){var r=e.message;return t(r)}},r))}:void 0,N=(0,f.generateComponentClasses)("BlockEditor",{root:["root"]});return c().createElement(T,{className:R()(N.root,r)},c().createElement(s.ShortcutProvider,null,c().createElement(a.SlotFillProvider,null,c().createElement(u.BlockEditorProvider,{value:P.current,settings:L(L({},O),{},{bodyPlaceholder:E,hasFixedToolbar:!0,mediaUpload:D}),onInput:I,onChange:I},c().createElement(B,{blocks:P.current,onChange:w,placeholder:E}),j?c().createElement(U,null):(0,_.createPortal)(c().createElement(A,{role:"presentation"},c().createElement(U,null)),document.body)))))};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},M.apply(this,arguments)}var W=["className","blocks","settings"],z=(0,f.styled)("div",{name:"BlockEditorPreview",slot:"Root"})((function(){return{".block-list-appender":{display:"none"},'.wp-block-paragraph[data-empty="true"]':{display:"none"}}})),F=function(e){var t,r=e.className,o=e.blocks,n=e.settings,l=void 0===n?{}:n,i=p(e,W),d=O();return c().createElement(z,M({className:R()("editor-styles-wrapper",r)},i),c().createElement(u.__unstableEditorStyles,{styles:null!==(t=l.styles)&&void 0!==t?t:[]}),c().createElement(a.Disabled,null,c().createElement(s.ShortcutProvider,null,c().createElement(u.BlockEditorProvider,{value:o,settings:l},c().createElement(u.BlockTools,null,c().createElement(u.BlockList,{className:d}))))))}}(),(window.lapilliUI=window.lapilliUI||{}).blockEditor=o}();