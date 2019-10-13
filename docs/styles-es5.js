(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nbody {\n  color: #333;\n  background: #fafafa;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto, sans-serif;\n  line-height: 1.5;\n  overflow-y: scroll;\n}\na {\n  color: #e50032;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.angular-logo__image {\n  display: block;\n  margin: 0 auto;\n}\n.angular-logo__part-one {\n  fill: #dd0031;\n}\n.angular-logo__part-two {\n  fill: #c3002f;\n}\n.angular-logo__letter {\n  fill: #fff;\n}\n.logo {\n  display: block;\n}\n.logo__part-one {\n  fill: #e50032;\n}\n.logo__part-two {\n  fill: #303040;\n}\n.intro {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 56px 0 92px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.intro__logo {\n  margin: 0 auto;\n}\n.intro__version {\n  font-size: 14px;\n  padding: 20px 0 14px;\n}\n.intro__version a {\n  color: #6f7275;\n  text-decoration: none;\n}\n.intro__version a:hover {\n  text-decoration: underline;\n}\n.intro__text {\n  font-size: 17px;\n  line-height: 29px;\n}\n.intro__code {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 16px;\n}\n.intro__code code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 2px 9px;\n  border-radius: 2px;\n  cursor: pointer;\n  -webkit-transition: background 0.15s, color 0.15s;\n  transition: background 0.15s, color 0.15s;\n}\n.intro__code code:hover {\n  background: #e5e5e5;\n  color: inherit;\n}\n.intro__code code:active {\n  background: #e0e0e0;\n  color: inherit;\n}\n.intro__code-caption {\n  font-size: 10px;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  margin-top: 8px;\n}\n.section {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.section + .section {\n  margin-top: 48px;\n}\n.example {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.example + .example {\n  margin-top: 48px;\n}\n.example__body {\n  display: -webkit-box;\n  display: flex;\n}\n.example__image img {\n  display: block;\n}\n.example__content {\n  margin-left: 56px;\n  margin-top: 20px;\n}\n.typography {\n  font-size: 16px;\n}\n.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {\n  line-height: 1.25;\n  margin: 1.5em 0 1em;\n}\n.typography h1:first-child, .typography h2:first-child, .typography h3:first-child, .typography h4:first-child, .typography h5:first-child, .typography h6:first-child {\n  margin-top: 0;\n}\n.typography ol {\n  counter-reset: list;\n  list-style: none;\n  padding: 0;\n}\n.typography ol li {\n  margin: 0.375rem 0;\n  counter-increment: list;\n}\n.typography ol li:before {\n  content: counter(list) \".\";\n  padding-right: 6px;\n}\n.typography code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 3px 9px;\n  border-radius: 2px;\n}\n.typography table {\n  margin: 1.25rem 0;\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 15px;\n}\n.typography th,\n.typography td {\n  border-spacing: 0;\n  padding: 7px 12px;\n}\n.typography table,\n.typography th,\n.typography td {\n  border: 1px solid #e0e0e0;\n}\n.typography tbody th,\n.typography tbody td {\n  text-align: left;\n}\n.copyright {\n  text-align: center;\n  font-size: 14px;\n  padding: 32px 0;\n  margin-top: 64px;\n}\n.changelog {\n  list-style: none;\n  padding: 0;\n}\n.red-zoom {\n  pointer-events: none;\n}\n.red-zoom__overlay {\n  position: absolute;\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: var(--red-zoom-thumbnail-w, 0px);\n  height: var(--red-zoom-thumbnail-h, 0px);\n}\n.red-zoom__window {\n  display: -webkit-box;\n  display: flex;\n}\n.red-zoom__window-body {\n  position: relative;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.red-zoom__window-image {\n  position: absolute;\n  -webkit-transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n}\n.red-zoom__lens {\n  position: absolute;\n  -webkit-transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n          transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n}\n.red-zoom__lens-body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.red-zoom__lens-image {\n  -webkit-transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--01 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--01 .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.5);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--01 .red-zoom__lens {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01 .red-zoom__lens:before {\n  position: absolute;\n  content: \"\";\n  left: -6px;\n  top: -6px;\n  width: 100%;\n  height: 100%;\n  border: 6px solid #fff;\n  box-sizing: content-box;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);\n}\n.red-zoom--style--01 .red-zoom__window {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n  border: 12px solid #fff;\n  position: absolute;\n  -webkit-transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n          transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: calc(var(--red-zoom-thumbnail-w, 0px) * 2);\n  height: var(--red-zoom-thumbnail-h, 0px);\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--01.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--01.red-zoom--loaded .red-zoom__window,\n.red-zoom--style--01.red-zoom--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--error .red-zoom__overlay:after {\n  content: \"Loading error\";\n}\n.red-zoom--style--02 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--02 .red-zoom__lens {\n  display: none;\n}\n.red-zoom--style--02 .red-zoom__window {\n  border: 0 solid #fff;\n  position: absolute;\n  display: block;\n  left: var(--red-zoom-thumbnail-x);\n  top: var(--red-zoom-thumbnail-y);\n  width: var(--red-zoom-thumbnail-w);\n  height: var(--red-zoom-thumbnail-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__window-body {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 100px - var(--red-zoom-thumbnail-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 100px - var(--red-zoom-thumbnail-y));\n  width: 200px;\n  height: 200px;\n}\n.red-zoom--style--02 .red-zoom__window-image {\n  -webkit-transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n          transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n}\n.red-zoom--style--02.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--02.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--02.red-zoom--loaded .red-zoom__window,\n.red-zoom--style--02.red-zoom--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--error .red-zoom__overlay:after {\n  content: \"Loading error\";\n}\n.red-zoom--style--03 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--03 .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--03 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--03 .red-zoom__lens {\n  display: none;\n}\n.red-zoom--style--03 .red-zoom__window {\n  border: 0 solid #fff;\n  position: absolute;\n  left: var(--red-zoom-thumbnail-x);\n  top: var(--red-zoom-thumbnail-y);\n  width: var(--red-zoom-thumbnail-w);\n  height: var(--red-zoom-thumbnail-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--03 .red-zoom__window-image {\n  -webkit-transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--03.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--03.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--03.red-zoom--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--03.red-zoom--loaded .red-zoom__window,\n.red-zoom--style--03.red-zoom--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--03.red-zoom--error .red-zoom__overlay:after {\n  content: \"Loading error\";\n}\n@-webkit-keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n.zoom {\n  cursor: crosshair;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2FuZ3VsYXItbG9nby5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfbG9nby5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfaW50cm8uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX3NlY3Rpb24uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2V4YW1wbGUuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2NvcHlyaWdodC5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfY2hhbmdlbG9nLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXGJhc2Uuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcc3R5bGVzXFxfMDEuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcc3R5bGVzXFxfMDIuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcc3R5bGVzXFxfMDMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBOzs7RUFHSSxzQkFBQTtBQ0VKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjtBRENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNFSjtBREFBO0VBQ0ksMEJBQUE7QUNHSjtBQzdCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FEZ0NKO0FDOUJBO0VBQ0ksYUFBQTtBRGlDSjtBQy9CQTtFQUNJLGFBQUE7QURrQ0o7QUNoQ0E7RUFDSSxVQUFBO0FEbUNKO0FFaERBO0VBQ0ksY0FBQTtBRm1ESjtBRWpEQTtFQUNJLGFBQUE7QUZvREo7QUVsREE7RUFDSSxhQUFBO0FGcURKO0FHNURBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBSCtESjtBRzdEQTtFQUNJLGNBQUE7QUhnRUo7QUc5REE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUhpRUo7QUcvREk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUhpRVI7QUcvREk7RUFDSSwwQkFBQTtBSGlFUjtBRzlEQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBSGlFSjtBRy9EQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBSGtFSjtBR2hFSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQ0k7RUFESix5Q0FDSTtBSGlFWjtBRzlEUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSGdFWjtBRzlEUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSGdFWjtBRzVEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBSCtESjtBSTNIQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUo4SEo7QUk1SEk7RUFDSSxnQkFBQTtBSjhIUjtBS3BJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUx1SUo7QUtySUk7RUFDSSxnQkFBQTtBTHVJUjtBS3BJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBTHVJSjtBS3BJSTtFQUNJLGNBQUE7QUx1SVI7QUtwSUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FMdUlKO0FNMUpBO0VBQ0ksZUFBQTtBTjZKSjtBTTNKSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QU42SlI7QU0zSlE7RUFDSSxhQUFBO0FONkpaO0FNMUpJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QU40SlI7QU0xSlE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FONEpaO0FNMUpZO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBTjRKaEI7QU14Skk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FOMEpSO0FNeEpJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FOMEpSO0FNeEpJOztFQUVJLGlCQUFBO0VBQ0EsaUJBQUE7QU4wSlI7QU14Skk7OztFQUdJLHlCQUFBO0FOMEpSO0FNdkpROztFQUVJLGdCQUFBO0FOeUpaO0FPOU1BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FQaU5KO0FRck5BO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FSd05KO0FTMU5BO0VBQ0ksb0JBQUE7QVQ2Tko7QVMxTkE7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0FUNk5KO0FTMU5BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FUNk5KO0FTM05BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBVDhOSjtBUzVOQTtFQUNJLGtCQUFBO0VBQ0Esa0lBQ0k7VUFESiwwSEFDSTtBVDhOUjtBU3pOQTtFQUNJLGtCQUFBO0VBQ0Esa0dBQ0k7VUFESiwwRkFDSTtBVDJOUjtBU3hOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QVQyTko7QVN6TkE7RUFDSSw0SEFDSTtVQURKLG9IQUNJO0FUMk5SO0FVMVBBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FWNlBKO0FVM1BJO0VBQ0ksaUNBZHVCO0VBZ0J2QixVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBVjRQUjtBVTFQUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FWNFBaO0FVelBJO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QVYyUFI7QVV6UFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQWpEbUI7QVY0Uy9CO0FVeFBJO0VBQ0ksd0NBbkR1QjtFQW9EdkIsdUJBckR1QjtFQXNEdkIsa0JBQUE7RUFDQSw0RUFBQTtVQUFBLG9FQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QVZ5UFI7QVV0UEk7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsbUJBQUE7QVZ3UFI7QVV0UFE7RUFDSSxVQUFBO0FWd1BaO0FVblBRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QVZxUFo7QVVoUFE7O0VBRUksVUFBQTtBVmtQWjtBVTdPUTtFQUNJLHdCQUFBO0FWK09aO0FXdFVBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FYeVVKO0FXdlVJO0VBQ0ksb0NBZHVCO0VBZ0J2QixVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBWHdVUjtBV3RVUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FYd1VaO0FXclVJO0VBQ0ksYUFBQTtBWHVVUjtBV3JVSTtFQUNJLG9CQXZDdUI7RUF3Q3ZCLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QVhzVVI7QVdwVUk7RUFDSSx3Q0FwRHVCO0VBcUR2QixtQkFBQTtFQUNBLDhFQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBWHNVUjtBV3BVSTtFQUNJLDBPQUNJO1VBREosa09BQ0k7QVhxVVo7QVdoVUk7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsbUJBQUE7QVhrVVI7QVdoVVE7RUFDSSxVQUFBO0FYa1VaO0FXN1RRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QVgrVFo7QVcxVFE7O0VBRUksVUFBQTtBWDRUWjtBV3ZUUTtFQUNJLHdCQUFBO0FYeVRaO0FZalpBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0Fab1pKO0FZbFpJO0VBQ0ksb0NBZHVCO0VBZ0J2QixVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBWm1aUjtBWWpaUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FabVpaO0FZaFpJO0VBQ0ksYUFBQTtBWmtaUjtBWWhaSTtFQUNJLG9CQXZDdUI7RUF3Q3ZCLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBWmlaUjtBWS9ZSTtFQUNJLGtJQUNJO1VBREosMEhBQ0k7QVpnWlo7QVkzWUk7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsbUJBQUE7QVo2WVI7QVkzWVE7RUFDSSxVQUFBO0FaNllaO0FZeFlRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QVowWVo7QVlyWVE7O0VBRUksVUFBQTtBWnVZWjtBWWxZUTtFQUNJLHdCQUFBO0Fab1laO0FGMWNBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VFNmNOO0VGM2NFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFRTZjTjtBQUNGO0FGbmRBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VFNmNOO0VGM2NFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFRTZjTjtBQUNGO0FGeGNBO0VBQ0ksaUJBQUE7QUUwY0oiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vLyBzaXRlXG5AaW1wb3J0ICdzY3NzL2NvbW1vbic7XG5AaW1wb3J0ICdzY3NzL2FuZ3VsYXItbG9nbyc7XG5AaW1wb3J0ICdzY3NzL2xvZ28nO1xuQGltcG9ydCAnc2Nzcy9pbnRybyc7XG5AaW1wb3J0ICdzY3NzL3NlY3Rpb24nO1xuQGltcG9ydCAnc2Nzcy9leGFtcGxlJztcbkBpbXBvcnQgJ3Njc3MvdHlwb2dyYXBoeSc7XG5AaW1wb3J0ICdzY3NzL2NvcHlyaWdodCc7XG5AaW1wb3J0ICdzY3NzL2NoYW5nZWxvZyc7XG4vLyByZWQtem9vbVxuQGltcG9ydCAnc2Nzcy9iYXNlJztcbkBpbXBvcnQgJ3Njc3Mvc3R5bGVzLzAxJztcbkBpbXBvcnQgJ3Njc3Mvc3R5bGVzLzAyJztcbkBpbXBvcnQgJ3Njc3Mvc3R5bGVzLzAzJztcblxuXG5Aa2V5ZnJhbWVzIHJlZC16b29tLWxvYWRlci1hbmltYXRpb24ge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XG4gICAgfVxufVxuXG5cblxuLnpvb20ge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG5cbi5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcbiAgICAvL3dpZHRoOiAxMDAlO1xuICAgIC8vbWF4LXdpZHRoOiBjYWxjKHZhcigtLXJlZC16b29tLXByZXZpZXctdykpO1xuICAgIC8vbWF4LXdpZHRoOiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KSAqIDIpO1xufVxuIiwiKixcclxuOmFmdGVyLFxyXG46YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICNlNTAwMzI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qLFxuOmFmdGVyLFxuOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5hIHtcbiAgY29sb3I6ICNlNTAwMzI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYW5ndWxhci1sb2dvX19pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFuZ3VsYXItbG9nb19fcGFydC1vbmUge1xuICBmaWxsOiAjZGQwMDMxO1xufVxuXG4uYW5ndWxhci1sb2dvX19wYXJ0LXR3byB7XG4gIGZpbGw6ICNjMzAwMmY7XG59XG5cbi5hbmd1bGFyLWxvZ29fX2xldHRlciB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvX19wYXJ0LW9uZSB7XG4gIGZpbGw6ICNlNTAwMzI7XG59XG5cbi5sb2dvX19wYXJ0LXR3byB7XG4gIGZpbGw6ICMzMDMwNDA7XG59XG5cbi5pbnRybyB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1NnB4IDAgOTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW50cm9fX2xvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmludHJvX192ZXJzaW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMTRweDtcbn1cbi5pbnRyb19fdmVyc2lvbiBhIHtcbiAgY29sb3I6ICM2ZjcyNzU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pbnRyb19fdmVyc2lvbiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbnRyb19fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5pbnRyb19fY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uaW50cm9fX2NvZGUgY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcbn1cbi5pbnRyb19fY29kZSBjb2RlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uaW50cm9fX2NvZGUgY29kZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmludHJvX19jb2RlLWNhcHRpb24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2E2YTZhNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWN0aW9uICsgLnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uZXhhbXBsZSB7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5leGFtcGxlICsgLmV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uZXhhbXBsZV9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlX19pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4YW1wbGVfX2NvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnR5cG9ncmFwaHkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udHlwb2dyYXBoeSBoMSwgLnR5cG9ncmFwaHkgaDIsIC50eXBvZ3JhcGh5IGgzLCAudHlwb2dyYXBoeSBoNCwgLnR5cG9ncmFwaHkgaDUsIC50eXBvZ3JhcGh5IGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbjogMS41ZW0gMCAxZW07XG59XG4udHlwb2dyYXBoeSBoMTpmaXJzdC1jaGlsZCwgLnR5cG9ncmFwaHkgaDI6Zmlyc3QtY2hpbGQsIC50eXBvZ3JhcGh5IGgzOmZpcnN0LWNoaWxkLCAudHlwb2dyYXBoeSBoNDpmaXJzdC1jaGlsZCwgLnR5cG9ncmFwaHkgaDU6Zmlyc3QtY2hpbGQsIC50eXBvZ3JhcGh5IGg2OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi50eXBvZ3JhcGh5IG9sIHtcbiAgY291bnRlci1yZXNldDogbGlzdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi50eXBvZ3JhcGh5IG9sIGxpIHtcbiAgbWFyZ2luOiAwLjM3NXJlbSAwO1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdDtcbn1cbi50eXBvZ3JhcGh5IG9sIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdCkgXCIuXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cbi50eXBvZ3JhcGh5IGNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4udHlwb2dyYXBoeSB0YWJsZSB7XG4gIG1hcmdpbjogMS4yNXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnR5cG9ncmFwaHkgdGgsXG4udHlwb2dyYXBoeSB0ZCB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiA3cHggMTJweDtcbn1cbi50eXBvZ3JhcGh5IHRhYmxlLFxuLnR5cG9ncmFwaHkgdGgsXG4udHlwb2dyYXBoeSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4udHlwb2dyYXBoeSB0Ym9keSB0aCxcbi50eXBvZ3JhcGh5IHRib2R5IHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzMnB4IDA7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi5jaGFuZ2Vsb2cge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmVkLXpvb20ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJlZC16b29tX19vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCwgMHB4KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSwgMHB4KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xufVxuXG4ucmVkLXpvb21fX3dpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZWQtem9vbV9fd2luZG93LWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXgsIDBweCkpIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpKSB0cmFuc2xhdGVaKDApO1xufVxuXG4ucmVkLXpvb21fX2xlbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1sZW5zLXgsIDBweCkpIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tbGVucy15LCAwcHgpKTtcbn1cblxuLnJlZC16b29tX19sZW5zLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVkLXpvb21fX2xlbnMtaW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS14LCAwcHgpKSB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLWxlbnMtaW1hZ2UteSwgMHB4KSkgdHJhbnNsYXRlWigwKTtcbn1cblxuLnJlZC16b29tLS1zdHlsZS0tMDEge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI5LCAwLCA1MCwgMC41KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEgLnJlZC16b29tX19vdmVybGF5OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJlZC16b29tLWxvYWRlci1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgb3BhY2l0eTogMDtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fbGVucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fbGVuczpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogLTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEgLnJlZC16b29tX193aW5kb3cge1xuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDEycHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KSArIDMycHgpKTtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgsIDBweCk7XG4gIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XG4gIHdpZHRoOiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpICogMik7XG4gIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgsIDBweCk7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUgLnJlZC16b29tX19vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1sb2FkaW5nIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1sb2FkZWQgLnJlZC16b29tX193aW5kb3csXG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tbG9hZGVkIC5yZWQtem9vbV9fbGVucyB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tZXJyb3IgLnJlZC16b29tX19vdmVybGF5OmFmdGVyIHtcbiAgY29udGVudDogXCJMb2FkaW5nIGVycm9yXCI7XG59XG5cbi5yZWQtem9vbS0tc3R5bGUtLTAyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByZWQtem9vbS1sb2FkZXItYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIG9wYWNpdHk6IDA7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX2xlbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX193aW5kb3cge1xuICBib3JkZXI6IDAgc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyIC5yZWQtem9vbV9fd2luZG93LWJvZHkge1xuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBsZWZ0OiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXgsIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KSk7XG4gIHRvcDogY2FsYyh2YXIoLS1yZWQtem9vbS1tb3VzZS15LCAwcHgpIC0gMTAwcHggLSB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSkpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSArIHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2Utb2Zmc2V0LXgsIDBweCkpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS1vZmZzZXQteSwgMHB4KSkpIHRyYW5zbGF0ZVooMCk7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tYWN0aXZlIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tbG9hZGluZyAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tbG9hZGVkIC5yZWQtem9vbV9fd2luZG93LFxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWxvYWRlZCAucmVkLXpvb21fX2xlbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWVycm9yIC5yZWQtem9vbV9fb3ZlcmxheTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiTG9hZGluZyBlcnJvclwiO1xufVxuXG4ucmVkLXpvb20tLXN0eWxlLS0wMyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjVzO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMgLnJlZC16b29tX19vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMyAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBvcGFjaXR5OiAwO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMgLnJlZC16b29tX19sZW5zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAzIC5yZWQtem9vbV9fd2luZG93IHtcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAzIC5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSkgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkpIHRyYW5zbGF0ZVooMCk7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tYWN0aXZlIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tbG9hZGluZyAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tbG9hZGVkIC5yZWQtem9vbV9fd2luZG93LFxuLnJlZC16b29tLS1zdHlsZS0tMDMucmVkLXpvb20tLWxvYWRlZCAucmVkLXpvb21fX2xlbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMucmVkLXpvb20tLWVycm9yIC5yZWQtem9vbV9fb3ZlcmxheTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiTG9hZGluZyBlcnJvclwiO1xufVxuXG5Aa2V5ZnJhbWVzIHJlZC16b29tLWxvYWRlci1hbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG4uem9vbSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufSIsIi5hbmd1bGFyLWxvZ28ge1xyXG59XHJcbi5hbmd1bGFyLWxvZ29fX2ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmFuZ3VsYXItbG9nb19fcGFydC1vbmUge1xyXG4gICAgZmlsbDogI2RkMDAzMTtcclxufVxyXG4uYW5ndWxhci1sb2dvX19wYXJ0LXR3byB7XHJcbiAgICBmaWxsOiAjYzMwMDJmO1xyXG59XHJcbi5hbmd1bGFyLWxvZ29fX2xldHRlciB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcbiIsIi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sb2dvX19wYXJ0LW9uZSB7XHJcbiAgICBmaWxsOiAjZTUwMDMyO1xyXG59XHJcbi5sb2dvX19wYXJ0LXR3byB7XHJcbiAgICBmaWxsOiAjMzAzMDQwO1xyXG59XHJcbiIsIi5pbnRybyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1NnB4IDAgOTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5pbnRyb19fbG9nbyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uaW50cm9fX3ZlcnNpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDE0cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM2ZjcyNzU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbn1cclxuLmludHJvX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5pbnRyb19fY29kZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG5cclxuICAgIGNvZGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIC4xNXMsXHJcbiAgICAgICAgICAgIGNvbG9yIC4xNXM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmludHJvX19jb2RlLWNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNhNmE2YTY7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiA5MjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgJiArICYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmV4YW1wbGUge1xyXG4gICAgbWF4LXdpZHRoOiA5MjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgJiArICYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICB9XHJcbn1cclxuLmV4YW1wbGVfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZXhhbXBsZV9faW1hZ2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG4uZXhhbXBsZV9fY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIiwiLnR5cG9ncmFwaHkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICAgIG1hcmdpbjogMS41ZW0gMCAxZW07XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9sIHtcclxuICAgICAgICBjb3VudGVyLXJlc2V0OiBsaXN0O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IC4zNzVyZW0gMDtcclxuICAgICAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3Q7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb3VudGVyKGxpc3QpICcuJztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvZGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMS4yNXJlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZSxcclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuY29weXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDMycHggMDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbn1cclxuIiwiLmNoYW5nZWxvZyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4iLCIucmVkLXpvb20ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLy8gb3ZlcmxheVxyXG4ucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgsIDBweCk7XHJcbiAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15LCAwcHgpO1xyXG4gICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCwgMHB4KTtcclxufVxyXG4vLyB3aW5kb3dcclxuLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucmVkLXpvb21fX3dpbmRvdy1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgICAgIHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS14LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuLy8gbGVuc1xyXG4ucmVkLXpvb21fX2xlbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgICAgIHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy14LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tbGVucy15LCAwcHgpKTtcclxufVxyXG4ucmVkLXpvb21fX2xlbnMtYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnJlZC16b29tX19sZW5zLWltYWdlIHtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgICAgICB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLWxlbnMtaW1hZ2UteCwgMHB4KSlcclxuICAgICAgICB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLWxlbnMtaW1hZ2UteSwgMHB4KSlcclxuICAgICAgICB0cmFuc2xhdGVaKDApO1xyXG59XHJcbiIsIiRyZWQtem9vbS1zdHlsZS1uYW1lOiAgICAgICAgICAnMDEnICAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tb3ZlcmxheS1jb2xvcjogICAgICAgcmdiYSgjZTUwMDMyLCAuNSkgICAgICAgICAhZGVmYXVsdDtcclxuJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb246IC41cyAgICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDogICA2cHggICAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tbGVucy1ib3JkZXItY29sb3I6ICAgI2ZmZiAgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcclxuJHJlZC16b29tLWxlbnMtc2hhZG93OiAgICAgICAgIDAgMXB4IDdweCByZ2JhKCMwMDAsIC4yNSkgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS13aW5kb3ctYm9yZGVyOiAgICAgICAxMnB4IHNvbGlkICNmZmYgICAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20td2luZG93LXNoYWRvdzogICAgICAgMCAxcHggOXB4IHJnYmEoIzAwMCwgLjIpICAhZGVmYXVsdDtcclxuXHJcblxyXG4ucmVkLXpvb20tLXN0eWxlLS0jeyRyZWQtem9vbS1zdHlsZS1uYW1lfSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZC16b29tLW92ZXJsYXktY29sb3I7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgjZmZmLCAuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoI2ZmZiwgMSk7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJlZC16b29tLWxvYWRlci1hbmltYXRpb247XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0kcmVkLXpvb20tbGVucy1ib3JkZXItd2lkdGg7XHJcbiAgICAgICAgICAgIHRvcDogLSRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAkcmVkLXpvb20tbGVucy1ib3JkZXItd2lkdGggc29saWQgJHJlZC16b29tLWxlbnMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogJHJlZC16b29tLWxlbnMtc2hhZG93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fd2luZG93IHtcclxuICAgICAgICBib3gtc2hhZG93OiAkcmVkLXpvb20td2luZG93LXNoYWRvdztcclxuICAgICAgICBib3JkZXI6ICRyZWQtem9vbS13aW5kb3ctYm9yZGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KSArIDMycHgpKTtcclxuICAgICAgICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCwgMHB4KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15LCAwcHgpO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpICogMik7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCwgMHB4KTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tYWN0aXZlIHtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1sb2FkaW5nIHtcclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWxvYWRlZCB7XHJcbiAgICAgICAgLnJlZC16b29tX193aW5kb3csXHJcbiAgICAgICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tZXJyb3Ige1xyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nIGVycm9yJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHJlZC16b29tLXN0eWxlLW5hbWU6ICAgICAgICAgICcwMicgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1vdmVybGF5LWNvbG9yOiAgICAgICByZ2JhKCNmZmYsIC42KSAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzICAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLWxlbnMtYm9yZGVyLXdpZHRoOiAgIDZweCAgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci1jb2xvcjogICAjZmZmICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tbGVucy1zaGFkb3c6ICAgICAgICAgMCAxcHggN3B4IHJnYmEoIzAwMCwgLjI1KTtcclxuJHJlZC16b29tLXdpbmRvdy1ib3JkZXI6ICAgICAgIDAgc29saWQgI2ZmZiAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS13aW5kb3ctc2hhZG93OiAgICAgICAwIDFweCA5cHggcmdiYSgjMDAwLCAuNCkgO1xyXG5cclxuXHJcbi5yZWQtem9vbS0tc3R5bGUtLSN7JHJlZC16b29tLXN0eWxlLW5hbWV9IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgLnJlZC16b29tX19vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkLXpvb20tb3ZlcmxheS1jb2xvcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCNmZmYsIC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgjZmZmLCAxKTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgICAgIGJvcmRlcjogJHJlZC16b29tLXdpbmRvdy1ib3JkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcpO1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3ctYm9keSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHJlZC16b29tLXdpbmRvdy1zaGFkb3c7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXgsIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KSk7XHJcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXksIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KSk7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYKGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS1vZmZzZXQteCwgMHB4KSkpXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkgKyB2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLW9mZnNldC15LCAwcHgpKSlcclxuICAgICAgICAgICAgdHJhbnNsYXRlWigwKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWxvYWRpbmcge1xyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tbG9hZGVkIHtcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyxcclxuICAgICAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1lcnJvciB7XHJcbiAgICAgICAgLnJlZC16b29tX19vdmVybGF5OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ0xvYWRpbmcgZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkcmVkLXpvb20tc3R5bGUtbmFtZTogICAgICAgICAgJzAzJyAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLW92ZXJsYXktY29sb3I6ICAgICAgIHJnYmEoI2ZmZiwgLjYpICAgICAgICAgICA7XHJcbiRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXMgICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tbGVucy1ib3JkZXItd2lkdGg6ICAgNnB4ICAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLWxlbnMtYm9yZGVyLWNvbG9yOiAgICNmZmYgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1sZW5zLXNoYWRvdzogICAgICAgICAwIDFweCA3cHggcmdiYSgjMDAwLCAuMjUpO1xyXG4kcmVkLXpvb20td2luZG93LWJvcmRlcjogICAgICAgMCBzb2xpZCAjZmZmICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLXdpbmRvdy1zaGFkb3c6ICAgICAgIDAgMXB4IDlweCByZ2JhKCMwMDAsIC40KSA7XHJcblxyXG5cclxuLnJlZC16b29tLS1zdHlsZS0tI3skcmVkLXpvb20tc3R5bGUtbmFtZX0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuXHJcbiAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQtem9vbS1vdmVybGF5LWNvbG9yO1xyXG5cclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoI2ZmZiwgLjIpO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKCNmZmYsIDEpO1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByZWQtem9vbS1sb2FkZXItYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVkLXpvb21fX3dpbmRvdyB7XHJcbiAgICAgICAgYm9yZGVyOiAkcmVkLXpvb20td2luZG93LWJvcmRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXkpO1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdyk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcbiAgICB9XHJcbiAgICAucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSlcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkpXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVooMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tYWN0aXZlIHtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1sb2FkaW5nIHtcclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWxvYWRlZCB7XHJcbiAgICAgICAgLnJlZC16b29tX193aW5kb3csXHJcbiAgICAgICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tZXJyb3Ige1xyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nIGVycm9yJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\red-zoom\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map