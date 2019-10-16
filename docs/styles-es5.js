(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n.owl-carousel .owl-stage {\n  position: relative;\n  touch-action: manipulation;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel .owl-nav button.owl-prev,\n.owl-carousel .owl-nav button.owl-next,\n.owl-carousel button.owl-dot {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0 !important;\n  font: inherit;\n}\n.owl-carousel.owl-loaded {\n  display: block;\n}\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n.owl-carousel.owl-drag .owl-item {\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n/* No Js */\n.no-js .owl-carousel {\n  display: block;\n}\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n.owl-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  -webkit-transition: height 500ms ease-in-out;\n  transition: height 500ms ease-in-out;\n}\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n  \tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n  \tcalculation of the height of the owl-item that breaks page layouts\n   */\n}\n.owl-carousel .owl-item .owl-lazy {\n  -webkit-transition: opacity 400ms ease;\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-item .owl-lazy[src^=\"\"], .owl-carousel .owl-item .owl-lazy:not([src]) {\n  max-height: 0;\n}\n.owl-carousel .owl-item img.owl-lazy {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nbody {\n  color: #333;\n  background: #fafafa;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto, sans-serif;\n  line-height: 1.5;\n  overflow-y: scroll;\n}\na {\n  color: #e50032;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.angular-logo__image {\n  display: block;\n  margin: 0 auto;\n}\n.angular-logo__part-one {\n  fill: #dd0031;\n}\n.angular-logo__part-two {\n  fill: #c3002f;\n}\n.angular-logo__letter {\n  fill: #fff;\n}\n.logo {\n  display: block;\n}\n.logo__part-one {\n  fill: #e50032;\n}\n.logo__part-two {\n  fill: #303040;\n}\n.intro {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 56px 0 92px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.intro__logo {\n  margin: 0 auto;\n}\n.intro__version {\n  font-size: 14px;\n  padding: 20px 0 14px;\n}\n.intro__version a {\n  color: #6f7275;\n  text-decoration: none;\n}\n.intro__version a:hover {\n  text-decoration: underline;\n}\n.intro__text {\n  font-size: 17px;\n  line-height: 29px;\n}\n.intro__code {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 16px;\n}\n.intro__code code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 2px 9px;\n  border-radius: 2px;\n  cursor: pointer;\n  -webkit-transition: background 0.15s, color 0.15s;\n  transition: background 0.15s, color 0.15s;\n}\n.intro__code code:hover {\n  background: #e5e5e5;\n  color: inherit;\n}\n.intro__code code:active {\n  background: #e0e0e0;\n  color: inherit;\n}\n.intro__code-caption {\n  font-size: 10px;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  margin-top: 8px;\n}\n.section {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.section + .section {\n  margin-top: 48px;\n}\n.example {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.example + .example {\n  margin-top: 48px;\n}\n.example__body {\n  display: -webkit-box;\n  display: flex;\n}\n.example__image {\n  width: 320px;\n}\n.example__image img {\n  display: block;\n}\n.example__content {\n  margin-left: 56px;\n  margin-top: 20px;\n}\n.typography {\n  font-size: 16px;\n}\n.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {\n  line-height: 1.25;\n  margin: 1.5em 0 1em;\n}\n.typography h1:first-child, .typography h2:first-child, .typography h3:first-child, .typography h4:first-child, .typography h5:first-child, .typography h6:first-child {\n  margin-top: 0;\n}\n.typography ol {\n  counter-reset: list;\n  list-style: none;\n  padding: 0;\n}\n.typography ol li {\n  margin: 0.375rem 0;\n  counter-increment: list;\n}\n.typography ol li:before {\n  content: counter(list) \".\";\n  padding-right: 6px;\n}\n.typography code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 3px 9px;\n  border-radius: 2px;\n}\n.typography table {\n  margin: 1.25rem 0;\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 15px;\n}\n.typography th,\n.typography td {\n  border-spacing: 0;\n  padding: 7px 12px;\n}\n.typography table,\n.typography th,\n.typography td {\n  border: 1px solid #e0e0e0;\n}\n.typography tbody th,\n.typography tbody td {\n  text-align: left;\n}\n.copyright {\n  text-align: center;\n  font-size: 14px;\n  padding: 32px 0;\n  margin-top: 64px;\n}\n.changelog {\n  list-style: none;\n  padding: 0;\n}\n.gallery__thumbnails-list {\n  list-style: none;\n  padding: 0;\n  margin-top: 16px;\n  display: -webkit-box;\n  display: flex;\n}\n.gallery__thumbnail {\n  width: calc((100% - 24px) / 3);\n}\n.gallery__thumbnail + .gallery__thumbnail {\n  margin-left: 12px;\n}\n.gallery__thumbnail img {\n  max-width: 100%;\n  opacity: 0.4;\n}\n.gallery__thumbnail--current img {\n  opacity: 1;\n}\n.red-zoom {\n  pointer-events: none;\n}\n.red-zoom__overlay,\n.red-zoom__error {\n  position: absolute;\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: var(--red-zoom-thumbnail-w, 0px);\n  height: var(--red-zoom-thumbnail-h, 0px);\n}\n.red-zoom__window {\n  display: -webkit-box;\n  display: flex;\n}\n.red-zoom__window-body {\n  position: relative;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.red-zoom__window-image {\n  position: absolute;\n  -webkit-transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n}\n.red-zoom__lens {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--red-zoom-lens-w, 0px);\n  height: var(--red-zoom-lens-h, 0px);\n  -webkit-transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n          transform: translateX(var(--red-zoom-lens-x, 0px)) translateY(var(--red-zoom-lens-y, 0px));\n}\n.red-zoom__lens-body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.red-zoom__lens-image {\n  -webkit-transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-lens-image-x, 0px)) translateY(var(--red-zoom-lens-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--01 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--01 .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.5);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  z-index: 1;\n}\n.red-zoom--style--01 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--01 .red-zoom__error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n}\n.red-zoom--style--01 .red-zoom__lens {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  z-index: 1;\n}\n.red-zoom--style--01 .red-zoom__lens:before {\n  position: absolute;\n  content: \"\";\n  left: -6px;\n  top: -6px;\n  width: 100%;\n  height: 100%;\n  border: 6px solid #fff;\n  box-sizing: content-box;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);\n}\n.red-zoom--style--01 .red-zoom__window {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n  border: 12px solid #fff;\n  position: absolute;\n  -webkit-transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n          transform: translateX(calc(var(--red-zoom-thumbnail-w, 0px) + 32px));\n  left: var(--red-zoom-thumbnail-x, 0px);\n  top: var(--red-zoom-thumbnail-y, 0px);\n  width: calc(var(--red-zoom-thumbnail-w, 0px) * 2);\n  height: var(--red-zoom-thumbnail-h, 0px);\n  z-index: 2;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--01.red-zoom--state--error .red-zoom__lens,\n.red-zoom--style--01.red-zoom--state--error .red-zoom__window {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--01.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--01.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--active.red-zoom--state--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--01.red-zoom--active.red-zoom--state--loaded .red-zoom__window,\n.red-zoom--style--01.red-zoom--active.red-zoom--state--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--01.red-zoom--active.red-zoom--state--error .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.8);\n}\n.red-zoom--style--01.red-zoom--active.red-zoom--state--error .red-zoom__error {\n  visibility: visible;\n}\n.red-zoom--style--01.red-zoom--disabled {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--01.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--01.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--01.red-zoom--disabled .red-zoom__window {\n  -webkit-transition-duration: 0s !important;\n          transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n.red-zoom--style--02 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--02 .red-zoom__error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #333;\n  padding: 32px;\n  visibility: hidden;\n}\n.red-zoom--style--02 .red-zoom__lens {\n  display: none;\n}\n.red-zoom--style--02 .red-zoom__window {\n  border: 0 solid #fff;\n  position: absolute;\n  display: block;\n  left: var(--red-zoom-thumbnail-x);\n  top: var(--red-zoom-thumbnail-y);\n  width: var(--red-zoom-thumbnail-w);\n  height: var(--red-zoom-thumbnail-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--02 .red-zoom__window-body {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 100px - var(--red-zoom-thumbnail-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 100px - var(--red-zoom-thumbnail-y));\n  width: 200px;\n  height: 200px;\n}\n.red-zoom--style--02 .red-zoom__window-image {\n  -webkit-transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n          transform: translateX(calc(var(--red-zoom-preview-image-x, 0px) + var(--red-zoom-preview-image-offset-x, 0px))) translateY(calc(var(--red-zoom-preview-image-y, 0px) + var(--red-zoom-preview-image-offset-y, 0px))) translateZ(0);\n}\n.red-zoom--style--02.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--02.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--state--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--02.red-zoom--state--loaded .red-zoom__window,\n.red-zoom--style--02.red-zoom--state--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--02.red-zoom--state--error .red-zoom__lens,\n.red-zoom--style--02.red-zoom--state--error .red-zoom__window {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--02.red-zoom--state--error .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.8);\n}\n.red-zoom--style--02.red-zoom--state--error .red-zoom__error {\n  visibility: visible;\n}\n.red-zoom--style--03 {\n  visibility: hidden;\n  -webkit-transition: visibility 0s 0.5s;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--03 .red-zoom__overlay {\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--03 .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--03 .red-zoom__error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n}\n.red-zoom--style--03 .red-zoom__lens {\n  display: none;\n}\n.red-zoom--style--03 .red-zoom__window {\n  border: 0 solid #fff;\n  position: absolute;\n  left: var(--red-zoom-thumbnail-x);\n  top: var(--red-zoom-thumbnail-y);\n  width: var(--red-zoom-thumbnail-w);\n  height: var(--red-zoom-thumbnail-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--03 .red-zoom__window-image {\n  -webkit-transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n          transform: translateX(var(--red-zoom-preview-image-x, 0px)) translateY(var(--red-zoom-preview-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--03.red-zoom--active {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--03.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--03.red-zoom--state--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--03.red-zoom--state--loaded .red-zoom__window,\n.red-zoom--style--03.red-zoom--state--loaded .red-zoom__lens {\n  opacity: 1;\n}\n.red-zoom--style--03.red-zoom--state--error .red-zoom__lens,\n.red-zoom--style--03.red-zoom--state--error .red-zoom__window {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--03.red-zoom--state--error .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.8);\n}\n.red-zoom--style--03.red-zoom--state--error .red-zoom__error {\n  visibility: visible;\n}\n@-webkit-keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@keyframes red-zoom-loader-animation {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  to {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n.zoom {\n  cursor: crosshair;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9ub2RlX21vZHVsZXNcXG5neC1vd2wtY2Fyb3VzZWwtb1xcbGliXFxzdHlsZXNcXHNjc3NcXF9jb3JlLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9ub2RlX21vZHVsZXNcXG5neC1vd2wtY2Fyb3VzZWwtb1xcbGliXFxzdHlsZXNcXHNjc3NcXF9hbmltYXRlLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9ub2RlX21vZHVsZXNcXG5neC1vd2wtY2Fyb3VzZWwtb1xcbGliXFxzdHlsZXNcXHNjc3NcXF9hdXRvaGVpZ2h0LnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9ub2RlX21vZHVsZXNcXG5neC1vd2wtY2Fyb3VzZWwtb1xcbGliXFxzdHlsZXNcXHNjc3NcXF9sYXp5bG9hZC5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9hbmd1bGFyLWxvZ28uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2xvZ28uc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2ludHJvLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9zZWN0aW9uLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9leGFtcGxlLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF90eXBvZ3JhcGh5LnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXF9jb3B5cmlnaHQuc2NzcyIsInNyYy9GOlxccHJvamVjdHNcXHJlZC16b29tL3NyY1xcc2Nzc1xcX2NoYW5nZWxvZy5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxfZ2FsbGVyeS5zY3NzIiwic3JjL0Y6XFxwcm9qZWN0c1xccmVkLXpvb20vc3JjXFxzY3NzXFxiYXNlLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXHN0eWxlc1xcXzAxLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXHN0eWxlc1xcXzAyLnNjc3MiLCJzcmMvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXHNjc3NcXHN0eWxlc1xcXzAzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTs7RUFBQTtBQUdBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRUQ7QURBQztFQUNDLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQ0FBQTtFQUFrQyxpQ0FBQTtBQ0dwQztBREFDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0VGO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2Q0FBQTtBQ0NGO0FERUM7O0VBRUMsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FDQUY7QURHQztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNERjtBREdDO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUNERjtBRElDOztFQUVDLGFBQUE7QUNGRjtBREtDOzs7RUFHQyxlQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJB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WUFBQSwwQkFBQTtFRW90Qk47QUFDRjtBRjF0QkE7RUFDSTtJQUNJLGdDQUFBO1lBQUEsd0JBQUE7RUVvdEJOO0VGbHRCRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUVvdEJOO0FBQ0Y7QUYvc0JBO0VBQ0ksaUJBQUE7QUVpdEJKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCAnfm5neC1vd2wtY2Fyb3VzZWwtby9saWIvc3R5bGVzL3Njc3Mvb3dsLmNhcm91c2VsJztcblxuLy8gc2l0ZVxuQGltcG9ydCAnc2Nzcy9jb21tb24nO1xuQGltcG9ydCAnc2Nzcy9hbmd1bGFyLWxvZ28nO1xuQGltcG9ydCAnc2Nzcy9sb2dvJztcbkBpbXBvcnQgJ3Njc3MvaW50cm8nO1xuQGltcG9ydCAnc2Nzcy9zZWN0aW9uJztcbkBpbXBvcnQgJ3Njc3MvZXhhbXBsZSc7XG5AaW1wb3J0ICdzY3NzL3R5cG9ncmFwaHknO1xuQGltcG9ydCAnc2Nzcy9jb3B5cmlnaHQnO1xuQGltcG9ydCAnc2Nzcy9jaGFuZ2Vsb2cnO1xuQGltcG9ydCAnc2Nzcy9nYWxsZXJ5Jztcbi8vIHJlZC16b29tXG5AaW1wb3J0ICdzY3NzL2Jhc2UnO1xuQGltcG9ydCAnc2Nzcy9zdHlsZXMvMDEnO1xuQGltcG9ydCAnc2Nzcy9zdHlsZXMvMDInO1xuQGltcG9ydCAnc2Nzcy9zdHlsZXMvMDMnO1xuXG5cbkBrZXlmcmFtZXMgcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG59XG5cblxuXG4uem9vbSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG4iLCIvKlxyXG4gKiAgT3dsIENhcm91c2VsIC0gQ29yZVxyXG4gKi9cclxuLm93bC1jYXJvdXNlbCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdC8qIHBvc2l0aW9uIHJlbGF0aXZlIGFuZCB6LWluZGV4IGZpeCB3ZWJraXQgcmVuZGVyaW5nIGZvbnRzIGlzc3VlICovXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcblxyXG5cdC5vd2wtc3RhZ2Uge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLVk7XHJcblx0XHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuXHRcdC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBmaXggZmlyZWZveCBhbmltYXRpb24gZ2xpdGNoICovXHJcblx0fVxyXG5cclxuXHQub3dsLXN0YWdlOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6IFwiLlwiO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0Lm93bC1zdGFnZS1vdXRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0LyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcblx0fVxyXG5cclxuXHQub3dsLXdyYXBwZXIsXHJcblx0Lm93bC1pdGVte1xyXG5cdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHQtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuXHR9XHJcblxyXG5cdC5vd2wtaXRlbSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuXHR9XHJcblx0Lm93bC1pdGVtIGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Lm93bC1uYXYuZGlzYWJsZWQsXHJcblx0Lm93bC1kb3RzLmRpc2FibGVkIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQub3dsLW5hdiAub3dsLXByZXYsXHJcblx0Lm93bC1uYXYgLm93bC1uZXh0LFxyXG5cdC5vd2wtZG90IHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQub3dsLW5hdiBidXR0b24ub3dsLXByZXYsXHJcblx0Lm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LFxyXG5cdGJ1dHRvbi5vd2wtZG90IHtcclxuXHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcblx0XHRmb250OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0Ji5vd2wtbG9hZGVkIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0Ji5vd2wtbG9hZGluZyB7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHQmLm93bC1oaWRkZW4ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdCYub3dsLXJlZnJlc2ggLm93bC1pdGVtIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdCYub3dsLWRyYWcgLm93bC1pdGVtIHtcclxuXHRcdHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcblx0XHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdH1cclxuXHJcblx0Ji5vd2wtZ3JhYiB7XHJcblx0XHRjdXJzb3I6IG1vdmU7XHJcblx0XHRjdXJzb3I6IGdyYWI7XHJcblx0fVxyXG5cclxuXHQmLm93bC1ydGwge1xyXG5cdFx0ZGlyZWN0aW9uOiBydGw7XHJcblx0fVxyXG5cclxuXHQmLm93bC1ydGwgLm93bC1pdGVtIHtcclxuXHRcdGZsb2F0OiByaWdodDtcclxuXHR9XHJcbn1cclxuXHJcbi8qIE5vIEpzICovXHJcbi5uby1qcyAub3dsLWNhcm91c2VsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuICogIE93bCBDYXJvdXNlbCAtIENvcmVcbiAqL1xuLm93bC1jYXJvdXNlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBwb3NpdGlvbiByZWxhdGl2ZSBhbmQgei1pbmRleCBmaXggd2Via2l0IHJlbmRlcmluZyBmb250cyBpc3N1ZSAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4ub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi1ZO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIGZpeCBmaXJlZm94IGFuaW1hdGlvbiBnbGl0Y2ggKi9cbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC13cmFwcGVyLFxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm93bC1jYXJvdXNlbCAub3dsLW5hdi5kaXNhYmxlZCxcbi5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzLmRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2LFxuLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQsXG4ub3dsLWNhcm91c2VsIC5vd2wtZG90IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldixcbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LFxuLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZm9udDogaW5oZXJpdDtcbn1cbi5vd2wtY2Fyb3VzZWwub3dsLWxvYWRlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm93bC1jYXJvdXNlbC5vd2wtbG9hZGluZyB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm93bC1jYXJvdXNlbC5vd2wtaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5vd2wtY2Fyb3VzZWwub3dsLXJlZnJlc2ggLm93bC1pdGVtIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm93bC1jYXJvdXNlbC5vd2wtZHJhZyAub3dsLWl0ZW0ge1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLm93bC1jYXJvdXNlbC5vd2wtZ3JhYiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xufVxuLm93bC1jYXJvdXNlbC5vd2wtcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG4ub3dsLWNhcm91c2VsLm93bC1ydGwgLm93bC1pdGVtIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiBObyBKcyAqL1xuLm5vLWpzIC5vd2wtY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqICBPd2wgQ2Fyb3VzZWwgLSBBbmltYXRlIFBsdWdpblxuICovXG4ub3dsLWNhcm91c2VsIC5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuLm93bC1jYXJvdXNlbCAub3dsLWFuaW1hdGVkLWluIHtcbiAgei1pbmRleDogMDtcbn1cbi5vd2wtY2Fyb3VzZWwgLm93bC1hbmltYXRlZC1vdXQge1xuICB6LWluZGV4OiAxO1xufVxuLm93bC1jYXJvdXNlbCAuZmFkZU91dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vKlxuICogXHRPd2wgQ2Fyb3VzZWwgLSBBdXRvIEhlaWdodCBQbHVnaW5cbiAqL1xuLm93bC1oZWlnaHQge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qXG4gKiBcdE93bCBDYXJvdXNlbCAtIExhenkgTG9hZCBQbHVnaW5cbiAqL1xuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xuICAvKipcbiAgXHRUaGlzIGlzIGludHJvZHVjZWQgZHVlIHRvIGEgYnVnIGluIElFMTEgd2hlcmUgbGF6eSBsb2FkaW5nIGNvbWJpbmVkIHdpdGggYXV0b2hlaWdodCBwbHVnaW4gY2F1c2VzIGEgd3JvbmdcbiAgXHRjYWxjdWxhdGlvbiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSBvd2wtaXRlbSB0aGF0IGJyZWFrcyBwYWdlIGxheW91dHNcbiAgICovXG59XG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSAub3dsLWxhenkge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG59XG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSAub3dsLWxhenlbc3JjXj1cIlwiXSwgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gLm93bC1sYXp5Om5vdChbc3JjXSkge1xuICBtYXgtaGVpZ2h0OiAwO1xufVxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nLm93bC1sYXp5IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuKixcbjphZnRlcixcbjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZTUwMDMyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFuZ3VsYXItbG9nb19faW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hbmd1bGFyLWxvZ29fX3BhcnQtb25lIHtcbiAgZmlsbDogI2RkMDAzMTtcbn1cblxuLmFuZ3VsYXItbG9nb19fcGFydC10d28ge1xuICBmaWxsOiAjYzMwMDJmO1xufVxuXG4uYW5ndWxhci1sb2dvX19sZXR0ZXIge1xuICBmaWxsOiAjZmZmO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb19fcGFydC1vbmUge1xuICBmaWxsOiAjZTUwMDMyO1xufVxuXG4ubG9nb19fcGFydC10d28ge1xuICBmaWxsOiAjMzAzMDQwO1xufVxuXG4uaW50cm8ge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNTZweCAwIDkycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmludHJvX19sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbnRyb19fdmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMjBweCAwIDE0cHg7XG59XG4uaW50cm9fX3ZlcnNpb24gYSB7XG4gIGNvbG9yOiAjNmY3Mjc1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaW50cm9fX3ZlcnNpb24gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW50cm9fX3RleHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uaW50cm9fX2NvZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmludHJvX19jb2RlIGNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggOXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXM7XG59XG4uaW50cm9fX2NvZGUgY29kZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmludHJvX19jb2RlIGNvZGU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5pbnRyb19fY29kZS1jYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNhNmE2YTY7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VjdGlvbiArIC5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLmV4YW1wbGUge1xuICBtYXgtd2lkdGg6IDkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhhbXBsZSArIC5leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLmV4YW1wbGVfX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZV9faW1hZ2Uge1xuICB3aWR0aDogMzIwcHg7XG59XG4uZXhhbXBsZV9faW1hZ2UgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlX19jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50eXBvZ3JhcGh5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnR5cG9ncmFwaHkgaDEsIC50eXBvZ3JhcGh5IGgyLCAudHlwb2dyYXBoeSBoMywgLnR5cG9ncmFwaHkgaDQsIC50eXBvZ3JhcGh5IGg1LCAudHlwb2dyYXBoeSBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW46IDEuNWVtIDAgMWVtO1xufVxuLnR5cG9ncmFwaHkgaDE6Zmlyc3QtY2hpbGQsIC50eXBvZ3JhcGh5IGgyOmZpcnN0LWNoaWxkLCAudHlwb2dyYXBoeSBoMzpmaXJzdC1jaGlsZCwgLnR5cG9ncmFwaHkgaDQ6Zmlyc3QtY2hpbGQsIC50eXBvZ3JhcGh5IGg1OmZpcnN0LWNoaWxkLCAudHlwb2dyYXBoeSBoNjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4udHlwb2dyYXBoeSBvbCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3Q7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4udHlwb2dyYXBoeSBvbCBsaSB7XG4gIG1hcmdpbjogMC4zNzVyZW0gMDtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3Q7XG59XG4udHlwb2dyYXBoeSBvbCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QpIFwiLlwiO1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG4udHlwb2dyYXBoeSBjb2RlIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnR5cG9ncmFwaHkgdGFibGUge1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50eXBvZ3JhcGh5IHRoLFxuLnR5cG9ncmFwaHkgdGQge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgcGFkZGluZzogN3B4IDEycHg7XG59XG4udHlwb2dyYXBoeSB0YWJsZSxcbi50eXBvZ3JhcGh5IHRoLFxuLnR5cG9ncmFwaHkgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuLnR5cG9ncmFwaHkgdGJvZHkgdGgsXG4udHlwb2dyYXBoeSB0Ym9keSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMzJweCAwO1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuXG4uY2hhbmdlbG9nIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdhbGxlcnlfX3RodW1ibmFpbHMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5nYWxsZXJ5X190aHVtYm5haWwge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDI0cHgpIC8gMyk7XG59XG4uZ2FsbGVyeV9fdGh1bWJuYWlsICsgLmdhbGxlcnlfX3RodW1ibmFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmdhbGxlcnlfX3RodW1ibmFpbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmdhbGxlcnlfX3RodW1ibmFpbC0tY3VycmVudCBpbWcge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucmVkLXpvb20ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJlZC16b29tX19vdmVybGF5LFxuLnJlZC16b29tX19lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgsIDBweCk7XG4gIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCwgMHB4KTtcbn1cblxuLnJlZC16b29tX193aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVkLXpvb21fX3dpbmRvdy1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS14LCAwcHgpKSB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteSwgMHB4KSkgdHJhbnNsYXRlWigwKTtcbn1cblxuLnJlZC16b29tX19sZW5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS1sZW5zLXcsIDBweCk7XG4gIGhlaWdodDogdmFyKC0tcmVkLXpvb20tbGVucy1oLCAwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy14LCAwcHgpKSB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLWxlbnMteSwgMHB4KSk7XG59XG5cbi5yZWQtem9vbV9fbGVucy1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlZC16b29tX19sZW5zLWltYWdlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLWxlbnMtaW1hZ2UteCwgMHB4KSkgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1sZW5zLWltYWdlLXksIDBweCkpIHRyYW5zbGF0ZVooMCk7XG59XG5cbi5yZWQtem9vbS0tc3R5bGUtLTAxIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMSAucmVkLXpvb21fX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSwgMCwgNTAsIDAuNSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgei1pbmRleDogMTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByZWQtem9vbS1sb2FkZXItYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIG9wYWNpdHk6IDA7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMSAucmVkLXpvb21fX2Vycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzMnB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMSAucmVkLXpvb21fX2xlbnMge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIHotaW5kZXg6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMSAucmVkLXpvb21fX2xlbnM6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtNnB4O1xuICB0b3A6IC02cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxIC5yZWQtem9vbV9fd2luZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxMnB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcsIDBweCkgKyAzMnB4KSk7XG4gIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14LCAwcHgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15LCAwcHgpO1xuICB3aWR0aDogY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KSAqIDIpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tc3RhdGUtLWVycm9yIC5yZWQtem9vbV9fbGVucyxcbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1zdGF0ZS0tZXJyb3IgLnJlZC16b29tX193aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUgLnJlZC16b29tX19vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUucmVkLXpvb20tLXN0YXRlLS1sb2FkaW5nIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1hY3RpdmUucmVkLXpvb20tLXN0YXRlLS1sb2FkZWQgLnJlZC16b29tX193aW5kb3csXG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tYWN0aXZlLnJlZC16b29tLS1zdGF0ZS0tbG9hZGVkIC5yZWQtem9vbV9fbGVucyB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tYWN0aXZlLnJlZC16b29tLS1zdGF0ZS0tZXJyb3IgLnJlZC16b29tX19vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjksIDAsIDUwLCAwLjgpO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEucmVkLXpvb20tLWFjdGl2ZS5yZWQtem9vbS0tc3RhdGUtLWVycm9yIC5yZWQtem9vbV9fZXJyb3Ige1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDEucmVkLXpvb20tLWRpc2FibGVkIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAxLnJlZC16b29tLS1kaXNhYmxlZCAucmVkLXpvb21fX292ZXJsYXksXG4ucmVkLXpvb20tLXN0eWxlLS0wMS5yZWQtem9vbS0tZGlzYWJsZWQgLnJlZC16b29tX19sZW5zLFxuLnJlZC16b29tLS1zdHlsZS0tMDEucmVkLXpvb20tLWRpc2FibGVkIC5yZWQtem9vbV9fd2luZG93IHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuXG4ucmVkLXpvb20tLXN0eWxlLS0wMiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjVzO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX19vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBvcGFjaXR5OiAwO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX19lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMzJweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX19sZW5zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyIC5yZWQtem9vbV9fd2luZG93IHtcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdyk7XG4gIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMiAucmVkLXpvb21fX3dpbmRvdy1ib2R5IHtcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbGVmdDogY2FsYyh2YXIoLS1yZWQtem9vbS1tb3VzZS14LCAwcHgpIC0gMTAwcHggLSB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCkpO1xuICB0b3A6IGNhbGModmFyKC0tcmVkLXpvb20tbW91c2UteSwgMHB4KSAtIDEwMHB4IC0gdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXkpKTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIgLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLW9mZnNldC14LCAwcHgpKSkgdHJhbnNsYXRlWShjYWxjKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteSwgMHB4KSArIHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2Utb2Zmc2V0LXksIDBweCkpKSB0cmFuc2xhdGVaKDApO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLWFjdGl2ZSAucmVkLXpvb21fX292ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLXN0YXRlLS1sb2FkaW5nIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyLnJlZC16b29tLS1zdGF0ZS0tbG9hZGVkIC5yZWQtem9vbV9fd2luZG93LFxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLXN0YXRlLS1sb2FkZWQgLnJlZC16b29tX19sZW5zIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAyLnJlZC16b29tLS1zdGF0ZS0tZXJyb3IgLnJlZC16b29tX19sZW5zLFxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLXN0YXRlLS1lcnJvciAucmVkLXpvb21fX3dpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDIucmVkLXpvb20tLXN0YXRlLS1lcnJvciAucmVkLXpvb21fX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMi5yZWQtem9vbS0tc3RhdGUtLWVycm9yIC5yZWQtem9vbV9fZXJyb3Ige1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucmVkLXpvb20tLXN0eWxlLS0wMyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjVzO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMgLnJlZC16b29tX19vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMyAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBvcGFjaXR5OiAwO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMgLnJlZC16b29tX19lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzJweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMgLnJlZC16b29tX19sZW5zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAzIC5yZWQtem9vbV9fd2luZG93IHtcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC15KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtaCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAzIC5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSkgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1wcmV2aWV3LWltYWdlLXksIDBweCkpIHRyYW5zbGF0ZVooMCk7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tYWN0aXZlIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tc3RhdGUtLWxvYWRpbmcgLnJlZC16b29tX19vdmVybGF5OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMucmVkLXpvb20tLXN0YXRlLS1sb2FkZWQgLnJlZC16b29tX193aW5kb3csXG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tc3RhdGUtLWxvYWRlZCAucmVkLXpvb21fX2xlbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZC16b29tLS1zdHlsZS0tMDMucmVkLXpvb20tLXN0YXRlLS1lcnJvciAucmVkLXpvb21fX2xlbnMsXG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tc3RhdGUtLWVycm9yIC5yZWQtem9vbV9fd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVkLXpvb20tLXN0eWxlLS0wMy5yZWQtem9vbS0tc3RhdGUtLWVycm9yIC5yZWQtem9vbV9fb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI5LCAwLCA1MCwgMC44KTtcbn1cbi5yZWQtem9vbS0tc3R5bGUtLTAzLnJlZC16b29tLS1zdGF0ZS0tZXJyb3IgLnJlZC16b29tX19lcnJvciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBrZXlmcmFtZXMgcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn1cbi56b29tIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59IiwiLypcclxuICogIE93bCBDYXJvdXNlbCAtIEFuaW1hdGUgUGx1Z2luXHJcbiAqL1xyXG4ub3dsLWNhcm91c2Vse1xyXG5cdC5hbmltYXRlZCB7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcblx0fVxyXG5cdC5vd2wtYW5pbWF0ZWQtaW4ge1xyXG5cdFx0ei1pbmRleDogMDtcclxuXHR9XHJcblx0Lm93bC1hbmltYXRlZC1vdXQge1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LmZhZGVPdXQge1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcblx0fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG5cdDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQxMDAlIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG59XHJcbiIsIi8qXHJcbiAqIFx0T3dsIENhcm91c2VsIC0gQXV0byBIZWlnaHQgUGx1Z2luXHJcbiAqL1xyXG5cclxuLm93bC1oZWlnaHQge1xyXG5cdHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4iLCIvKlxyXG4gKiBcdE93bCBDYXJvdXNlbCAtIExhenkgTG9hZCBQbHVnaW5cclxuICovXHJcblxyXG4ub3dsLWNhcm91c2VsIHtcclxuXHQub3dsLWl0ZW0ge1xyXG5cdFx0Lm93bC1sYXp5IHtcclxuXHRcdFx0XHQvLyBvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdFx0VGhpcyBpcyBpbnRyb2R1Y2VkIGR1ZSB0byBhIGJ1ZyBpbiBJRTExIHdoZXJlIGxhenkgbG9hZGluZyBjb21iaW5lZCB3aXRoIGF1dG9oZWlnaHQgcGx1Z2luIGNhdXNlcyBhIHdyb25nXHJcblx0XHRcdGNhbGN1bGF0aW9uIG9mIHRoZSBoZWlnaHQgb2YgdGhlIG93bC1pdGVtIHRoYXQgYnJlYWtzIHBhZ2UgbGF5b3V0c1xyXG5cdFx0ICovXHJcblx0XHQub3dsLWxhenlbc3JjXj1cIlwiXSwgLm93bC1sYXp5Om5vdChbc3JjXSkge1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGltZy5vd2wtbGF6eSB7XHJcblx0XHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4iLCIqLFxyXG46YWZ0ZXIsXHJcbjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogI2U1MDAzMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiIsIi5hbmd1bGFyLWxvZ28ge1xyXG59XHJcbi5hbmd1bGFyLWxvZ29fX2ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmFuZ3VsYXItbG9nb19fcGFydC1vbmUge1xyXG4gICAgZmlsbDogI2RkMDAzMTtcclxufVxyXG4uYW5ndWxhci1sb2dvX19wYXJ0LXR3byB7XHJcbiAgICBmaWxsOiAjYzMwMDJmO1xyXG59XHJcbi5hbmd1bGFyLWxvZ29fX2xldHRlciB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcbiIsIi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sb2dvX19wYXJ0LW9uZSB7XHJcbiAgICBmaWxsOiAjZTUwMDMyO1xyXG59XHJcbi5sb2dvX19wYXJ0LXR3byB7XHJcbiAgICBmaWxsOiAjMzAzMDQwO1xyXG59XHJcbiIsIi5pbnRybyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1NnB4IDAgOTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5pbnRyb19fbG9nbyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uaW50cm9fX3ZlcnNpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDE0cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM2ZjcyNzU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbn1cclxuLmludHJvX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5pbnRyb19fY29kZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG5cclxuICAgIGNvZGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIC4xNXMsXHJcbiAgICAgICAgICAgIGNvbG9yIC4xNXM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmludHJvX19jb2RlLWNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNhNmE2YTY7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiA5MjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgJiArICYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmV4YW1wbGUge1xyXG4gICAgbWF4LXdpZHRoOiA5MjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgJiArICYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICB9XHJcbn1cclxuLmV4YW1wbGVfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZXhhbXBsZV9faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuLmV4YW1wbGVfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiIsIi50eXBvZ3JhcGh5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgICBtYXJnaW46IDEuNWVtIDAgMWVtO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbCB7XHJcbiAgICAgICAgY291bnRlci1yZXNldDogbGlzdDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAuMzc1cmVtIDA7XHJcbiAgICAgICAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0O1xyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogY291bnRlcihsaXN0KSAnLic7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBtYXJnaW46IDEuMjVyZW0gMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gICAgfVxyXG4gICAgdGFibGUsXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG59XHJcbiIsIi5jaGFuZ2Vsb2cge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuIiwiLmdhbGxlcnkge31cclxuLmdhbGxlcnlfX3RodW1ibmFpbHMtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5nYWxsZXJ5X190aHVtYm5haWwge1xyXG4gICAgJGxvY2FsLWd1dHRlcjogMTJweDtcclxuXHJcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGxvY2FsLWd1dHRlciAqIDJ9KSAvIDMpO1xyXG5cclxuICAgICYgKyAmIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJGxvY2FsLWd1dHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAuNDtcclxuICAgIH1cclxufVxyXG4uZ2FsbGVyeV9fdGh1bWJuYWlsLS1jdXJyZW50IHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG4iLCIucmVkLXpvb20ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLy8gb3ZlcmxheSwgZXJyb3JcclxuLnJlZC16b29tX19vdmVybGF5LFxyXG4ucmVkLXpvb21fX2Vycm9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14LCAwcHgpO1xyXG4gICAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSwgMHB4KTtcclxuICAgIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwtdywgMHB4KTtcclxuICAgIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLWgsIDBweCk7XHJcbn1cclxuLy8gd2luZG93XHJcbi5yZWQtem9vbV9fd2luZG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJlZC16b29tX193aW5kb3ctYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcbi5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgICAgICB0cmFuc2xhdGVYKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSlcclxuICAgICAgICB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteSwgMHB4KSlcclxuICAgICAgICB0cmFuc2xhdGVaKDApO1xyXG59XHJcbi8vIGxlbnNcclxuLnJlZC16b29tX19sZW5zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tbGVucy13LCAwcHgpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS1sZW5zLWgsIDBweCk7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgdHJhbnNsYXRlWCh2YXIoLS1yZWQtem9vbS1sZW5zLXgsIDBweCkpXHJcbiAgICAgICAgdHJhbnNsYXRlWSh2YXIoLS1yZWQtem9vbS1sZW5zLXksIDBweCkpO1xyXG59XHJcbi5yZWQtem9vbV9fbGVucy1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucmVkLXpvb21fX2xlbnMtaW1hZ2Uge1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgICAgIHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS14LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVkodmFyKC0tcmVkLXpvb20tbGVucy1pbWFnZS15LCAwcHgpKVxyXG4gICAgICAgIHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuIiwiJHJlZC16b29tLXN0eWxlLW5hbWU6ICAgICAgICAgICcwMScgICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS1vdmVybGF5LWNvbG9yOiAgICAgICByZ2JhKCNlNTAwMzIsIC41KSAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzICAgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcclxuJHJlZC16b29tLWxlbnMtYm9yZGVyLXdpZHRoOiAgIDZweCAgICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci1jb2xvcjogICAjZmZmICAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4kcmVkLXpvb20tbGVucy1zaGFkb3c6ICAgICAgICAgMCAxcHggN3B4IHJnYmEoIzAwMCwgLjI1KSAhZGVmYXVsdDtcclxuJHJlZC16b29tLXdpbmRvdy1ib3JkZXI6ICAgICAgIDEycHggc29saWQgI2ZmZiAgICAgICAgICAgIWRlZmF1bHQ7XHJcbiRyZWQtem9vbS13aW5kb3ctc2hhZG93OiAgICAgICAwIDFweCA5cHggcmdiYSgjMDAwLCAuMikgICFkZWZhdWx0O1xyXG5cclxuXHJcbi5yZWQtem9vbS0tc3R5bGUtLSN7JHJlZC16b29tLXN0eWxlLW5hbWV9IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgLnJlZC16b29tX19vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkLXpvb20tb3ZlcmxheS1jb2xvcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCNmZmYsIC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgjZmZmLCAxKTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcmVkLXpvb20tbG9hZGVyLWFuaW1hdGlvbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19lcnJvciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb247XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgbGVmdDogLSRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDtcclxuICAgICAgICAgICAgdG9wOiAtJHJlZC16b29tLWxlbnMtYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6ICRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aCBzb2xpZCAkcmVkLXpvb20tbGVucy1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkcmVkLXpvb20tbGVucy1zaGFkb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRyZWQtem9vbS13aW5kb3ctc2hhZG93O1xyXG4gICAgICAgIGJvcmRlcjogJHJlZC16b29tLXdpbmRvdy1ib3JkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13LCAwcHgpICsgMzJweCkpO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC14LCAwcHgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXksIDBweCk7XHJcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWJuYWlsLXcsIDBweCkgKiAyKTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oLCAwcHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1zdGF0ZS0tZXJyb3Ige1xyXG4gICAgICAgIC5yZWQtem9vbV9fbGVucyxcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJlZC16b29tLS1zdGF0ZS0tbG9hZGluZyB7XHJcbiAgICAgICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJlZC16b29tLS1zdGF0ZS0tbG9hZGVkIHtcclxuICAgICAgICAgICAgLnJlZC16b29tX193aW5kb3csXHJcbiAgICAgICAgICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJlZC16b29tLS1zdGF0ZS0tZXJyb3Ige1xyXG4gICAgICAgICAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgjZTUwMDMyLCAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlZC16b29tX19lcnJvciB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLWRpc2FibGVkIHtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSxcclxuICAgICAgICAucmVkLXpvb21fX2xlbnMsXHJcbiAgICAgICAgLnJlZC16b29tX193aW5kb3cge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRyZWQtem9vbS1zdHlsZS1uYW1lOiAgICAgICAgICAnMDInICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tb3ZlcmxheS1jb2xvcjogICAgICAgcmdiYSgjZmZmLCAuNikgICAgICAgICAgIDtcclxuJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb246IC41cyAgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDogICA2cHggICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tbGVucy1ib3JkZXItY29sb3I6ICAgI2ZmZiAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLWxlbnMtc2hhZG93OiAgICAgICAgIDAgMXB4IDdweCByZ2JhKCMwMDAsIC4yNSk7XHJcbiRyZWQtem9vbS13aW5kb3ctYm9yZGVyOiAgICAgICAwIHNvbGlkICNmZmYgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20td2luZG93LXNoYWRvdzogICAgICAgMCAxcHggOXB4IHJnYmEoIzAwMCwgLjQpIDtcclxuXHJcblxyXG4ucmVkLXpvb20tLXN0eWxlLS0jeyRyZWQtem9vbS1zdHlsZS1uYW1lfSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZC16b29tLW92ZXJsYXktY29sb3I7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgjZmZmLCAuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoI2ZmZiwgMSk7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJlZC16b29tLWxvYWRlci1hbmltYXRpb247XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fZXJyb3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fd2luZG93IHtcclxuICAgICAgICBib3JkZXI6ICRyZWQtem9vbS13aW5kb3ctYm9yZGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCk7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSk7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fd2luZG93LWJvZHkge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRyZWQtem9vbS13aW5kb3ctc2hhZG93O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1yZWQtem9vbS1tb3VzZS14LCAwcHgpIC0gMTAwcHggLSB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCkpO1xyXG4gICAgICAgIHRvcDogY2FsYyh2YXIoLS1yZWQtem9vbS1tb3VzZS15LCAwcHgpIC0gMTAwcHggLSB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSkpO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX193aW5kb3ctaW1hZ2Uge1xyXG4gICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgdHJhbnNsYXRlWChjYWxjKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteCwgMHB4KSArIHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2Utb2Zmc2V0LXgsIDBweCkpKVxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS15LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS1vZmZzZXQteSwgMHB4KSkpXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVooMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQtem9vbS0tYWN0aXZlIHtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1zdGF0ZS0tbG9hZGluZyB7XHJcbiAgICAgICAgLnJlZC16b29tX19vdmVybGF5OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1zdGF0ZS0tbG9hZGVkIHtcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyxcclxuICAgICAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1zdGF0ZS0tZXJyb3Ige1xyXG4gICAgICAgIC5yZWQtem9vbV9fbGVucyxcclxuICAgICAgICAucmVkLXpvb21fX3dpbmRvdyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCNmZmYsIC44KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZC16b29tX19lcnJvciB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRyZWQtem9vbS1zdHlsZS1uYW1lOiAgICAgICAgICAnMDMnICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tb3ZlcmxheS1jb2xvcjogICAgICAgcmdiYSgjZmZmLCAuNikgICAgICAgICAgIDtcclxuJHJlZC16b29tLXRyYW5zaXRpb24tZHVyYXRpb246IC41cyAgICAgICAgICAgICAgICAgICAgICA7XHJcbiRyZWQtem9vbS1sZW5zLWJvcmRlci13aWR0aDogICA2cHggICAgICAgICAgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20tbGVucy1ib3JkZXItY29sb3I6ICAgI2ZmZiAgICAgICAgICAgICAgICAgICAgIDtcclxuJHJlZC16b29tLWxlbnMtc2hhZG93OiAgICAgICAgIDAgMXB4IDdweCByZ2JhKCMwMDAsIC4yNSk7XHJcbiRyZWQtem9vbS13aW5kb3ctYm9yZGVyOiAgICAgICAwIHNvbGlkICNmZmYgICAgICAgICAgICAgO1xyXG4kcmVkLXpvb20td2luZG93LXNoYWRvdzogICAgICAgMCAxcHggOXB4IHJnYmEoIzAwMCwgLjQpIDtcclxuXHJcblxyXG4ucmVkLXpvb20tLXN0eWxlLS0jeyRyZWQtem9vbS1zdHlsZS1uYW1lfSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzICRyZWQtem9vbS10cmFuc2l0aW9uLWR1cmF0aW9uO1xyXG5cclxuICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZC16b29tLW92ZXJsYXktY29sb3I7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgjZmZmLCAuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoI2ZmZiwgMSk7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJlZC16b29tLWxvYWRlci1hbmltYXRpb247XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fZXJyb3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fd2luZG93IHtcclxuICAgICAgICBib3JkZXI6ICRyZWQtem9vbS13aW5kb3ctYm9yZGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteCk7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYm5haWwteSk7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC13KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1ibmFpbC1oKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkcmVkLXpvb20tdHJhbnNpdGlvbi1kdXJhdGlvbjtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fd2luZG93LWltYWdlIHtcclxuICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVgodmFyKC0tcmVkLXpvb20tcHJldmlldy1pbWFnZS14LCAwcHgpKVxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZKHZhcigtLXJlZC16b29tLXByZXZpZXctaW1hZ2UteSwgMHB4KSlcclxuICAgICAgICAgICAgdHJhbnNsYXRlWigwKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZC16b29tLS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLXN0YXRlLS1sb2FkaW5nIHtcclxuICAgICAgICAucmVkLXpvb21fX292ZXJsYXk6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLXN0YXRlLS1sb2FkZWQge1xyXG4gICAgICAgIC5yZWQtem9vbV9fd2luZG93LFxyXG4gICAgICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXpvb20tLXN0YXRlLS1lcnJvciB7XHJcbiAgICAgICAgLnJlZC16b29tX19sZW5zLFxyXG4gICAgICAgIC5yZWQtem9vbV9fd2luZG93IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQtem9vbV9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoI2U1MDAzMiwgLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkLXpvb21fX2Vycm9yIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */", '', '']]

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