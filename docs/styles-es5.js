(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nbody {\n  color: #333;\n  background: #fafafa;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto, sans-serif;\n  line-height: 1.5;\n  overflow-y: scroll;\n}\n.angular-logo__image {\n  display: block;\n  margin: 0 auto;\n}\n.angular-logo__part-one {\n  fill: #dd0031;\n}\n.angular-logo__part-two {\n  fill: #c3002f;\n}\n.angular-logo__letter {\n  fill: #fff;\n}\n.logo {\n  display: block;\n}\n.logo__part-one {\n  fill: #e50032;\n}\n.logo__part-two {\n  fill: #303040;\n}\n.intro {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 56px 0 92px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.intro__logo {\n  margin: 0 auto;\n}\n.intro__version {\n  font-size: 14px;\n  padding: 20px 0 14px;\n}\n.intro__version a {\n  color: #6f7275;\n  text-decoration: none;\n}\n.intro__version a:hover {\n  text-decoration: underline;\n}\n.intro__text {\n  font-size: 17px;\n  line-height: 29px;\n}\n.intro__code {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 16px;\n}\n.intro__code code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 2px 9px;\n  border-radius: 2px;\n  cursor: pointer;\n  -webkit-transition: background 0.15s, color 0.15s;\n  transition: background 0.15s, color 0.15s;\n}\n.intro__code code:hover {\n  background: #e5e5e5;\n  color: inherit;\n}\n.intro__code code:active {\n  background: #e0e0e0;\n  color: inherit;\n}\n.intro__code-caption {\n  font-size: 10px;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  margin-top: 8px;\n}\n.section {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.section + .section {\n  margin-top: 48px;\n}\n.example {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.example + .example {\n  margin-top: 48px;\n}\n.example__body {\n  display: -webkit-box;\n  display: flex;\n}\n.example__image img {\n  display: block;\n}\n.example__content {\n  margin-left: 56px;\n  margin-top: 20px;\n}\n.typography {\n  font-size: 16px;\n}\n.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {\n  line-height: 1.25;\n  margin: 0 0 1em;\n}\n.typography ol {\n  counter-reset: list;\n  list-style: none;\n  padding: 0;\n}\n.typography ol li {\n  margin: 0.375rem 0;\n  counter-increment: list;\n}\n.typography ol li:before {\n  content: counter(list) \".\";\n  padding-right: 6px;\n}\n.typography code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 3px 9px;\n  border-radius: 2px;\n}\n.typography table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 15px;\n}\n.typography th,\n.typography td {\n  border-spacing: 0;\n  padding: 7px 12px;\n}\n.typography table,\n.typography th,\n.typography td {\n  border: 1px solid #e0e0e0;\n}\n.typography tbody th,\n.typography tbody td {\n  text-align: left;\n}\n.red-zoom {\n  pointer-events: none;\n}\n.red-zoom__overlay {\n  position: absolute;\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: var(--red-zoom-thumbnail-w, 0px);\n  height: var(--red-zoom-thumbnail-h, 0px);\n}\n.red-zoom__window {\n  display: -webkit-box;\n  display: flex;\n}\n.red-zoom__window-body {\n  position: relative;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.red-zoom__window-image {\n  position: absolute;\n  -webkit-transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n}\n.red-zoom__lens {\n  position: absolute;\n  -webkit-transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n          transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n}\n.red-zoom__lens-body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.red-zoom__lens-image {\n  -webkit-transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--01 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--01 .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.5);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--01 .red-zoom__lens {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01 .red-zoom__lens:before {\n  position: absolute;\n  content: \"\";\n  left: -6px;\n  top: -6px;\n  width: 100%;\n  height: 100%;\n  border: 6px solid #fff;\n  box-sizing: content-box;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);\n}\n.red-zoom--style--01 .red-zoom__window {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n  border: 12px solid #fff;\n  position: absolute;\n  -webkit-transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n          transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: calc(var(--red-zoom-thumbnail-w, 0px) * 2);\n  height: var(--red-zoom-thumbnail-h, 0px);\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--01.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--01.red-zoom--loaded .red-zoom__window,\n.red-zoom--style--01.red-zoom--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--error .red-zoom__overlay:after {\n  content: \"Loading error\";\n}\n.red-zoom--style--02 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--02 .red-zoom__lens {\n  display: none;\n}\n.red-zoom--style--02 .red-zoom__window {\n  border: 0 solid #fff;\n  position: absolute;\n  display: block;\n  left: var(--red-zoom-thumbnail-x);\n  top: var(--red-zoom-thumbnail-y);\n  width: var(--red-zoom-thumbnail-w);\n  height: var(--red-zoom-thumbnail-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__window-body {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 100px - var(--red-zoom-thumbnail-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 100px - var(--red-zoom-thumbnail-y));\n  width: 200px;\n  height: 200px;\n}\n.red-zoom--style--02 .red-zoom__window-image {\n  -webkit-transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n          transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n}\n.red-zoom--style--02.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--02.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--02.red-zoom--loaded .red-zoom__window,\n.red-zoom--style--02.red-zoom--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--error .red-zoom__overlay:after {\n  content: \"Loading error\";\n}\n@-webkit-keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\nbody {\n  padding: 0 48px 48px;\n}\n.zoom {\n  cursor: crosshair;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2FuZ3VsYXItbG9nby5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfbG9nby5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfaW50cm8uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX3NlY3Rpb24uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2V4YW1wbGUuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcYmFzZS5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxzdHlsZXNcXF8wMS5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxzdHlsZXNcXF8wMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7OztFQUdJLHNCQUFBO0FDRUo7QURDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QUNwQkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBRHVCSjtBQ3JCQTtFQUNJLGFBQUE7QUR3Qko7QUN0QkE7RUFD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Q0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0FUK1NaO0FTNVNJO0VBQ0ksYUFBQTtBVDhTUjtBUzVTSTtFQUNJLG9CQXZDdUI7RUF3Q3ZCLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QVQ2U1I7QVMzU0k7RUFDSSx3Q0FwRHVCO0VBcUR2QixtQkFBQTtFQUNBLDhFQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBVDZTUjtBUzNTSTtFQUNJLDBPQUNJO1VBREosa09BQ0k7QVQ0U1o7QVN2U0k7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsbUJBQUE7QVR5U1I7QVN2U1E7RUFDSSxVQUFBO0FUeVNaO0FTcFNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QVRzU1o7QVNqU1E7O0VBRUksVUFBQTtBVG1TWjtBUzlSUTtFQUNJLHdCQUFBO0FUZ1NaO0FGbFhBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VFcVhOO0VGblhFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFRXFYTjtBQUNGO0FGM1hBO0VBQ0k7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VFcVhOO0VGblhFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFRXFYTjtBQUNGO0FGalhBO0VBQ0ksb0JBQUE7QUVtWEo7QUZqWEE7RUFDSSxpQkFBQTtBRW9YSiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbi8vIHNpdGVcbkBpbXBvcnQgJ3Njc3MvY29tbW9uJztcbkBpbXBvcnQgJ3Njc3MvYW5ndWxhci1sb2dvJztcbkBpbXBvcnQgJ3Njc3MvbG9nbyc7XG5AaW1wb3J0ICdzY3NzL2ludHJvJztcbkBpbXBvcnQgJ3Njc3Mvc2VjdGlvbic7XG5AaW1wb3J0ICdzY3NzL2V4YW1wbGUnO1xuQGltcG9ydCAnc2Nzcy90eXBvZ3JhcGh5Jztcbi8vIHJlZC16b29tXG5AaW1wb3J0ICdzY3NzL2Jhc2UnO1xuQGltcG9ydCAnc2Nzcy9zdHlsZXMvMDEnO1xuQGltcG9ydCAnc2Nzcy9zdHlsZXMvMDInO1xuXG5cbkBrZXlmcmFtZXMgcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG59XG5cblxuYm9keSB7XG4gICAgcGFkZGluZzogMCA0OHB4IDQ4cHg7XG59XG4uem9vbSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cblxuLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xuICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgLy9tYXgtd2lkdGg6IGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy13KSk7XG4gICAgLy9tYXgtd2lkdGg6IGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcpICogMik7XG59XG4iLCIqLFxyXG46YWZ0ZXIsXHJcbjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qLFxuOmFmdGVyLFxuOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYW5ndWxhci1sb2dvX19pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFuZ3VsYXItbG9nb19fcGFydC1vbmUge1xuICBmaWxsOiAjZGQwMDMxO1xufVxuXG4uYW5ndWxhci1sb2dvX19wYXJ0LXR3byB7XG4gIGZpbGw6ICNjMzAwMmY7XG59XG5cbi5hbmd1bGFyLWxvZ29fX2xldHRlciB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvX19wYXJ0LW9uZSB7XG4gIGZpbGw6ICNlNTAwMzI7XG59XG5cbi5sb2dvX19wYXJ0LXR3byB7XG4gIGZpbGw6ICMzMDMwNDA7XG59XG5cbi5pbnRybyB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1NnB4IDAgOTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW50cm9fX2xvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmludHJvX192ZXJzaW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMTRweDtcbn1cbi5pbnRyb19fdmVyc2lvbiBhIHtcbiAgY29sb3I6ICM2ZjcyNzU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pbnRyb19fdmVyc2lvbiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbnRyb19fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5pbnRyb19fY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uaW50cm9fX2NvZGUgY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcbn1cbi5pbnRyb19fY29kZSBjb2RlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uaW50cm9fX2NvZGUgY29kZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmludHJvX19jb2RlLWNhcHRpb24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2E2YTZhNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWN0aW9uICsgLnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uZXhhbXBsZSB7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5leGFtcGxlICsgLmV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uZXhhbXBsZV9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlX19pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4YW1wbGVfX2NvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnR5cG9ncmFwaHkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udHlwb2dyYXBoeSBoMSwgLnR5cG9ncmFwaHkgaDIsIC50eXBvZ3JhcGh5IGgzLCAudHlwb2dyYXBoeSBoNCwgLnR5cG9ncmFwaHkgaDUsIC50eXBvZ3JhcGh5IGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbjogMCAwIDFlbTtcbn1cbi50eXBvZ3JhcGh5IG9sIHtcbiAgY291bnRlci1yZXNldDogbGlzdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi50eXBvZ3JhcGh5IG9sIGxpIHtcbiAgbWFyZ2luOiAwLjM3NXJlbSAwO1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdDtcbn1cbi50eXBvZ3JhcGh5IG9sIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdCkgXCIuXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cbi50eXBvZ3JhcGh5IGNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4udHlwb2dyYXBoeSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udHlwb2dyYXBoeSB0aCxcbi50eXBvZ3JhcGh5IHRkIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xufVxuLnR5cG9ncmFwaHkgdGFibGUsXG4udHlwb2dyYXBoeSB0aCxcbi50eXBvZ3JhcGh5IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi50eXBvZ3JhcGh5IHRib2R5IHRoLFxuLnR5cG9ncmFwaHkgdGJvZHkgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmVkLXpvb20ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJlZC16b29tX19vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCwgMHB4KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSwgMHB4KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xufVxuXG4ucmVkLXpvb21fX3dpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZWQtem9vbV9fd2luZG93LWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXgsIDBweCkpIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpKSB0cmFuc2xhdGVaKDApO1xufVxuXG4ucmVkLXpvb21fX2xlbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1sZW5zLXgsIDBweCkpIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tbGVucy15LCAwcHgpKTtcbn1cblxuLnJlZC16b29tX19sZW5zLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVkLXpvb21fX2xlbnMtaW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS14LCAwcHgpKSB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLWxlbnMtaW1hZ2UteSwgMHB4KSkgdHJhbnNsYXRlWigwKTtcbn1cblxuLnJlZC16b29tLS1zdHlsZS0tMDEge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI5LCAwLCA1MCwgMC41KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEgLnJlZC16b29tX19vdmVybGF5OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJlZC16b29tLWxvYWRlci1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgb3BhY2l0eTogMDtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fbGVucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fbGVuczpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogLTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEgLnJlZC16b29tX193aW5kb3cge1xuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDEycHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KSArIDMycHgpKTtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgsIDBweCk7XG4gIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XG4gIHdpZHRoOiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpICogMik7XG4gIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgsIDBweCk7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUgLnJlZC16b29tX19vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1sb2FkaW5nIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1sb2FkZWQgLnJlZC16b29tX193aW5kb3csXG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tbG9hZGVkIC5yZWQtem9vbV9fbGVucyB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tZXJyb3IgLnJlZC16b29tX19vdmVybGF5OmFmdGVyIHtcbiAgY29udGVudDogXCJMb2FkaW5nIGVycm9yXCI7XG59XG5cbi5yZWQtem9vbS0tc3R5bGUtLTAyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByZWQtem9vbS1sb2FkZXItYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIG9wYWNpdHk6IDA7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX2xlbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX193aW5kb3cge1xuICBib3JkZXI6IDAgc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyIC5yZWQtem9vbV9fd2luZG93LWJvZHkge1xuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBsZWZ0OiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXgsIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KSk7XG4gIHRvcDogY2FsYyh2YXIoLS1yZWQtem9vbS1tb3VzZS15LCAwcHgpIC0gMTAwcHggLSB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSkpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSArIHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2Utb2Zmc2V0LXgsIDBweCkpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS1vZmZzZXQteSwgMHB4KSkpIHRyYW5zbGF0ZVooMCk7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tYWN0aXZlIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tbG9hZGluZyAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tbG9hZGVkIC5yZWQtem9vbV9fd2luZG93LFxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWxvYWRlZCAucmVkLXpvb21fX2xlbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWVycm9yIC5yZWQtem9vbV9fb3ZlcmxheTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiTG9hZGluZyBlcnJvclwiO1xufVxuXG5Aa2V5ZnJhbWVzIHJlZC16b29tLWxvYWRlci1hbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5ib2R5IHtcbiAgcGFkZGluZzogMCA0OHB4IDQ4cHg7XG59XG5cbi56b29tIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59IiwiLmFuZ3VsYXItbG9nbyB7XHJcbn1cclxuLmFuZ3VsYXItbG9nb19faW1hZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYW5ndWxhci1sb2dvX19wYXJ0LW9uZSB7XHJcbiAgICBmaWxsOiAjZGQwMDMxO1xyXG59XHJcbi5hbmd1bGFyLWxvZ29fX3BhcnQtdHdvIHtcclxuICAgIGZpbGw6ICNjMzAwMmY7XHJcbn1cclxuLmFuZ3VsYXItbG9nb19fbGV0dGVyIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbn1cclxuIiwiLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ29fX3BhcnQtb25lIHtcclxuICAgIGZpbGw6ICNlNTAwMzI7XHJcbn1cclxuLmxvZ29fX3BhcnQtdHdvIHtcclxuICAgIGZpbGw6ICMzMDMwNDA7XHJcbn1cclxuIiwiLmludHJvIHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDU2cHggMCA5MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmludHJvX19sb2dvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pbnRyb19fdmVyc2lvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTRweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzZmNzI3NTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxufVxyXG4uaW50cm9fX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuLmludHJvX19jb2RlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcblxyXG4gICAgY29kZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgLjE1cyxcclxuICAgICAgICAgICAgY29sb3IgLjE1cztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW50cm9fX2NvZGUtY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2E2YTZhNjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4iLCIuc2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDkyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAmICsgJiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDhweDtcclxuICAgIH1cclxufVxyXG4iLCIuZXhhbXBsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDkyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAmICsgJiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDhweDtcclxuICAgIH1cclxufVxyXG4uZXhhbXBsZV9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5leGFtcGxlX19pbWFnZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi5leGFtcGxlX19jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCIudHlwb2dyYXBoeSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMWVtO1xyXG4gICAgfVxyXG4gICAgb2wge1xyXG4gICAgICAgIGNvdW50ZXItcmVzZXQ6IGxpc3Q7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLjM3NXJlbSAwO1xyXG4gICAgICAgICAgICBjb3VudGVyLWluY3JlbWVudDogbGlzdDtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIobGlzdCkgJy4nO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29kZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgIH1cclxuICAgIHRhYmxlLFxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5yZWQtem9vbSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4vLyBvdmVybGF5XHJcbi5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCwgMHB4KTtcclxuICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XHJcbiAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcsIDBweCk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xyXG59XHJcbi8vIHdpbmRvd1xyXG4ucmVkLXpvb21fX3dpbmRvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yZWQtem9vbV9fd2luZG93LWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG4ucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXgsIDBweCkpXHJcbiAgICAgICAgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkpXHJcbiAgICAgICAgdHJhbnNsYXRlWigwKTtcclxufVxyXG4vLyBsZW5zXHJcbi5yZWQtem9vbV9fbGVucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1sZW5zLXgsIDBweCkpXHJcbiAgICAgICAgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1sZW5zLXksIDBweCkpO1xyXG59XHJcbi5yZWQtem9vbV9fbGVucy1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucmVkLXpvb21fX2xlbnMtaW1hZ2Uge1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgICAgIHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS14LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS15LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuIiwiJHJlZC16b29tLXN0eWxlLW5hbWU6ICAgICAgICAgICcwMScgICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS1vdmVybGF5LWNvbG9yOiAgICAgICByZ2JhKCNlNTAwMzIsIC41KSAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzICAgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcclxuJHJlZC16b29tLWxlbnMtYm9yZGVyLXdpZHRoOiAgIDZweCAgICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci1jb2xvcjogICAjZmZmICAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tbGVucy1zaGFkb3c6ICAgICAgICAgMCAxcHggN3B4IHJnYmEoIzAwMCwgLjI1KSAhZGVmYXVsdDtcclxuJHJlZC16b29tLXdpbmRvdy1ib3JkZXI6ICAgICAgIDEycHggc29saWQgI2ZmZiAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS13aW5kb3ctc2hhZG93OiAgICAgICAwIDFweCA5cHggcmdiYSgjMDAwLCAuMikgICFkZWZhdWx0O1xyXG5cclxuXHJcbi5yZWQtem9vbS0tc3R5bGUtLSN7JHJlZC16b29tLXN0eWxlLW5hbWV9IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgLnJlZC16b29tX19vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkLXpvb20tb3ZlcmxheS1jb2xvcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCNmZmYsIC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgjZmZmLCAxKTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgbGVmdDogLSRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDtcclxuICAgICAgICAgICAgdG9wOiAtJHJlZC16b29tLWxlbnMtYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6ICRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aCBzb2xpZCAkcmVkLXpvb20tbGVucy1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkcmVkLXpvb20tbGVucy1zaGFkb3c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRyZWQtem9vbS13aW5kb3ctc2hhZG93O1xyXG4gICAgICAgIGJvcmRlcjogJHJlZC16b29tLXdpbmRvdy1ib3JkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpICsgMzJweCkpO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14LCAwcHgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XHJcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcsIDBweCkgKiAyKTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWxvYWRpbmcge1xyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tbG9hZGVkIHtcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyxcclxuICAgICAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1lcnJvciB7XHJcbiAgICAgICAgLnJlZC16b29tX19vdmVybGF5OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ0xvYWRpbmcgZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkcmVkLXpvb20tc3R5bGUtbmFtZTogICAgICAgICAgJzAyJyAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLW92ZXJsYXktY29sb3I6ICAgICAgIHJnYmEoI2ZmZiwgLjYpICAgICAgICAgICA7XHJcbiRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXMgICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tbGVucy1ib3JkZXItd2lkdGg6ICAgNnB4ICAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLWxlbnMtYm9yZGVyLWNvbG9yOiAgICNmZmYgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1sZW5zLXNoYWRvdzogICAgICAgICAwIDFweCA3cHggcmdiYSgjMDAwLCAuMjUpO1xyXG4kcmVkLXpvb20td2luZG93LWJvcmRlcjogICAgICAgMCBzb2xpZCAjZmZmICAgICAgICAgICA7XHJcbiRyZWQtem9vbS13aW5kb3ctc2hhZG93OiAgICAgICAwIDFweCA5cHggcmdiYSgjMDAwLCAuNCkgO1xyXG5cclxuXHJcbi5yZWQtem9vbS0tc3R5bGUtLSN7JHJlZC16b29tLXN0eWxlLW5hbWV9IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgLnJlZC16b29tX19vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkLXpvb20tb3ZlcmxheS1jb2xvcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCNmZmYsIC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgjZmZmLCAxKTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgICAgIGJvcmRlcjogJHJlZC16b29tLXdpbmRvdy1ib3JkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcpO1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3ctYm9keSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHJlZC16b29tLXdpbmRvdy1zaGFkb3c7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXgsIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KSk7XHJcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLXJlZC16b29tLW1vdXNlLXksIDBweCkgLSAxMDBweCAtIHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KSk7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAucmVkLXpvb21fX3dpbmRvdy1pbWFnZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYKGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS1vZmZzZXQteCwgMHB4KSkpXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkgKyB2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLW9mZnNldC15LCAwcHgpKSlcclxuICAgICAgICAgICAgdHJhbnNsYXRlWigwKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWxvYWRpbmcge1xyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tbG9hZGVkIHtcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyxcclxuICAgICAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1lcnJvciB7XHJcbiAgICAgICAgLnJlZC16b29tX19vdmVybGF5OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ0xvYWRpbmcgZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */", '', '']]

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