function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js":
  /*!*****************************************************************!*\
    !*** ./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js ***!
    \*****************************************************************/

  /*! exports provided: RedZoomDirective, RedZoomModule */

  /***/
  function distNgxRedZoom__ivy_ngcc__Fesm2015NgxRedZoomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedZoomDirective", function () {
      return RedZoomDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedZoomModule", function () {
      return RedZoomModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ɵ0 = function ɵ0() {
      var template = null;
      return function () {
        if (!template) {
          template = document.createElement('template');
          template.innerHTML = "<div class=\"red-zoom\">\n                <div class=\"red-zoom__overlay\"></div>\n                <div class=\"red-zoom__frame\">\n                    <div class=\"red-zoom__frame-body\"></div>\n                </div>\n                <div class=\"red-zoom__lens\">\n                    <div class=\"red-zoom__lens-body\"></div>\n                </div>\n                <div class=\"red-zoom__error\">\n                    <div class=\"red-zoom__error-message\"></div>\n                </div>\n            </div>";
        }

        return template.content.cloneNode(true).firstChild;
      };
    };

    var makeTemplate = ɵ0();

    var RedZoomTemplate = /*#__PURE__*/function () {
      function RedZoomTemplate() {
        var _this = this;

        _classCallCheck(this, RedZoomTemplate);

        this._status = null;
        this.appliedClasses = [];

        this.onTransitionEnd = function (event) {
          if (event.propertyName === 'visibility' && _this.isHidden) {
            _this.template.remove();
          }
        };

        this.template = makeTemplate();
        this.lens = this.template.querySelector('.red-zoom__lens');
        this.lensBody = this.template.querySelector('.red-zoom__lens-body');
        this.frame = this.template.querySelector('.red-zoom__frame');
        this.frameBody = this.template.querySelector('.red-zoom__frame-body');
        this.error = this.template.querySelector('.red-zoom__error');
        this.errorMessage = this.template.querySelector('.red-zoom__error-message');
        this.template.addEventListener('transitionend', this.onTransitionEnd);
        this.status = 'loading';
      }

      _createClass(RedZoomTemplate, [{
        key: "setProperties",
        value: function setProperties(properties) {
          for (var name in properties) {
            this.template.style.setProperty(name, properties[name]);
          }
        }
      }, {
        key: "detach",
        value: function detach() {
          this.template.classList.remove('red-zoom--active');

          if (this.isHidden) {
            this.template.remove();
          }
        }
      }, {
        key: "attach",
        value: function attach() {
          if (this.template.parentNode !== document.body) {
            document.body.appendChild(this.template);
          }
        }
      }, {
        key: "activate",
        value: function activate() {
          this.template.classList.add('red-zoom--active');
        }
      }, {
        key: "status",
        set: function set(state) {
          if (this._status !== null) {
            this.template.classList.remove("red-zoom--status--".concat(this._status));
          }

          this._status = state;
          this.template.classList.add("red-zoom--status--".concat(state));
        },
        get: function get() {
          return this._status;
        }
      }, {
        key: "classes",
        set: function set(classes) {
          var _this$template$classL;

          (_this$template$classL = this.template.classList).remove.apply(_this$template$classL, _toConsumableArray(this.appliedClasses));

          classes = classes.trim();

          if (classes) {
            var _this$template$classL2;

            this.appliedClasses = classes.replace(/ +/, ' ').split(' ');

            (_this$template$classL2 = this.template.classList).add.apply(_this$template$classL2, _toConsumableArray(this.appliedClasses));
          }
        }
      }, {
        key: "isHidden",
        get: function get() {
          return getComputedStyle(this.template).visibility === 'hidden';
        }
      }]);

      return RedZoomTemplate;
    }();

    var RedZoomImage = /*#__PURE__*/function () {
      function RedZoomImage() {
        var _this2 = this;

        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, RedZoomImage);

        this.element = element;
        this.listener = listener;
        this.loading = false;
        this.isFirst = true;

        if (element === null) {
          this.element = document.createElement('img');
        }

        var _listener = function _listener() {
          if (_this2.status !== 'loading') {
            _this2.isFirst = false;
          }

          _this2.listener();
        };

        this.element.addEventListener('load', _listener);
        this.element.addEventListener('error', _listener);

        this.destroy = function () {
          _this2.element.removeEventListener('load', _listener);

          _this2.element.removeEventListener('error', _listener);
        };

        if (className !== null) {
          this.element.classList.add(className);
        }
      }

      _createClass(RedZoomImage, [{
        key: "reset",
        value: function reset() {
          this.loading = true;
          this.listener();
        }
      }, {
        key: "width",
        get: function get() {
          return this.element.width;
        }
      }, {
        key: "height",
        get: function get() {
          return this.element.height;
        }
      }, {
        key: "size",
        get: function get() {
          return {
            x: this.width,
            y: this.height
          };
        }
      }, {
        key: "naturalWidth",
        get: function get() {
          return this.element.naturalWidth;
        }
      }, {
        key: "naturalHeight",
        get: function get() {
          return this.element.naturalHeight;
        }
      }, {
        key: "naturalSize",
        get: function get() {
          return {
            x: this.naturalWidth,
            y: this.naturalHeight
          };
        }
      }, {
        key: "style",
        get: function get() {
          return this.element.style;
        }
      }, {
        key: "styleSize",
        set: function set(value) {
          this.element.style.width = value.x;
          this.element.style.height = value.y;
        }
      }, {
        key: "status",
        get: function get() {
          if (this.loading) {
            return 'loading';
          }

          if (this.element.complete) {
            if (!this.element.src) {
              return 'loading';
            } else if (this.naturalWidth === 0) {
              return 'error';
            }

            return 'loaded';
          }

          return 'loading';
        }
      }, {
        key: "src",
        set: function set(value) {
          this.loading = false;
          this.element.setAttribute('src', value);
        }
      }]);

      return RedZoomImage;
    }();

    function calc(a, op, b) {
      switch (op) {
        case '+':
          return a + b;

        case '-':
          return a - b;

        case '*':
          return a * b;

        case '/':
          return a / b;

        case 'min':
          return Math.min(a, b);

        case 'max':
          return Math.max(a, b);
      }
    }

    function fromRectPos(rect) {
      return {
        x: rect.left,
        y: rect.top
      };
    }

    function fromRectSize(rect) {
      return {
        x: rect.width,
        y: rect.height
      };
    }

    function fromScroll() {
      return {
        x: scrollX,
        y: scrollY
      };
    }

    function fromMouseEvent(event) {
      return add({
        x: event.clientX,
        y: event.clientY
      }, fromScroll());
    }

    function op(a, op, b) {
      if (typeof b === 'number') {
        b = {
          x: b,
          y: b
        };
      }

      return {
        x: calc(a.x, op, b.x),
        y: calc(a.y, op, b.y)
      };
    }

    function add(a, b) {
      return op(a, '+', b);
    }

    function sub(a, b) {
      return op(a, '-', b);
    }

    function mul(a, b) {
      return op(a, '*', b);
    }

    function div(a, b) {
      return op(a, '/', b);
    }

    function min(a, b) {
      return op(a, 'min', b);
    }

    function max(a, b) {
      return op(a, 'max', b);
    }

    function round(a) {
      return map(a, Math.round);
    }

    function map(a, fn) {
      return {
        x: fn(a.x, 'x'),
        y: fn(a.y, 'y')
      };
    }

    function equal(a, b) {
      if (typeof b === 'number') {
        b = {
          x: b,
          y: b
        };
      }

      return {
        x: a.x === b.x,
        y: a.y === b.y
      };
    }

    function notEqual(a, b) {
      return {
        x: a.x !== b.x,
        y: a.y !== b.y
      };
    }

    function flatMax(a) {
      return Math.max(a.x, a.y);
    }

    function flatMin(a) {
      return Math.min(a.x, a.y);
    }

    function flatOr(a) {
      return a.x || a.y;
    }

    var RedZoomDirective = /*#__PURE__*/function () {
      function RedZoomDirective(element, renderer, zone, platformId) {
        var _this3 = this;

        _classCallCheck(this, RedZoomDirective);

        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.platformId = platformId;
        this.lazy = false;
        this.classes = '';
        this.behavior = 'hover';
        this.wheel = true;
        this.errorMessage = 'An error occurred while loading the image.';
        this.scaleFactor = 1;
        this.requestAnimationFrameId = null;

        this.unlisten = function () {};

        this.onImageChangeStatus = function () {
          var previousStatus;
          return function () {
            if (previousStatus === _this3.status) {
              return;
            }

            previousStatus = _this3.status;

            _this3.onImageChangeStatusDistinct();
          };
        }();

        this.onImageChangeStatusDistinct = function () {
          _this3.template.status = _this3.status;

          if (_this3.status === 'loaded') {
            _this3.template.setProperties({
              '--red-zoom-lens-image-natural-w': "".concat(_this3.lensImage.naturalWidth, "px"),
              '--red-zoom-lens-image-natural-h': "".concat(_this3.lensImage.naturalHeight, "px")
            });

            if (_this3.session && _this3.session.active) {
              _this3.calcScaleFactor();

              _this3.calcFrameSize();

              _this3.move();

              _this3.scaleFactor = _this3.lensImage.width / _this3.lensImage.naturalWidth;
            }
          }
        };

        this.mouseEnter = function (event) {
          if (event.cancelable) {
            event.preventDefault();
          }

          _this3.session = {
            active: false,
            thumbSize: null,
            thumbPos: null,
            lensContainerSize: null,
            lensImageSize: null,
            frameSize: null,
            mousePos: fromMouseEvent(event),
            destroy: function destroy() {}
          };

          var onWheel = function onWheel(wheelEvent) {
            if (!wheelEvent.cancelable || _this3.status !== 'loaded' || !_this3.wheel) {
              return;
            }

            wheelEvent.preventDefault();
            var delta = Math.sign(wheelEvent.deltaY);
            _this3.scaleFactor += .01 * -delta;

            _this3.calcScaleFactor();

            _this3.calcFrameSize();

            _this3.onMouseMove(wheelEvent);
          };

          var onMove = function onMove(mouseEvent) {
            _this3.onMouseMove(mouseEvent);
          };

          var onLeave = function onLeave() {
            _this3.session = null;

            _this3.template.detach();

            unListenMove();
            unListenLeave();
            unListenWheel();
          };

          var unListenMove;
          var unListenLeave;
          var unListenWheel;

          if (_this3.behavior === 'hover') {
            unListenMove = _this3.renderer.listen(_this3.element.nativeElement, 'mousemove', onMove);
            unListenLeave = _this3.renderer.listen(_this3.element.nativeElement, 'mouseleave', onLeave);
          } else {
            unListenMove = _this3.renderer.listen(document, 'mousemove', onMove);
            unListenLeave = _this3.renderer.listen(document, 'mouseup', onLeave);
          }

          unListenWheel = _this3.renderer.listen(_this3.element.nativeElement, 'wheel', onWheel);

          _this3.onMouseMove(event);

          _this3.forceReflow();

          _this3.template.activate();

          if (_this3.status !== 'loaded') {
            _this3.loadLensImage();

            _this3.loadFrameImage();
          }

          _this3.session.destroy = onLeave;
        };

        this.onMouseMove = function (event) {
          if (_this3.isImage && _this3.thumbImage.status !== 'loaded' && _this3.thumbImage.isFirst) {
            return;
          }

          if (!_this3.session.active) {
            _this3.session.active = true;

            _this3.initSession();
          }

          _this3.session.mousePos = fromMouseEvent(event);

          if (_this3.status === 'loaded') {
            cancelAnimationFrame(_this3.requestAnimationFrameId);
            _this3.requestAnimationFrameId = requestAnimationFrame(function () {
              return _this3.move();
            });
          }
        };
      }

      _createClass(RedZoomDirective, [{
        key: "listen",
        value: function listen() {
          var startEventName = {
            'hover': 'mouseenter',
            'grab': 'mousedown'
          }[this.behavior];
          this.unlisten();
          this.unlisten = this.renderer.listen(this.element.nativeElement, startEventName, this.mouseEnter);
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
          }

          this.zone.runOutsideAngular(function () {
            _this4.template = new RedZoomTemplate();
            _this4.template.classes = _this4.classes;
            _this4.template.errorMessage.innerHTML = _this4.errorMessage;

            if (_this4.isImage) {
              _this4.thumbImage = new RedZoomImage(_this4.element.nativeElement, _this4.onImageChangeStatus);
            }

            _this4.frameImage = new RedZoomImage(null, _this4.onImageChangeStatus, 'red-zoom__frame-image');
            _this4.lensImage = new RedZoomImage(null, _this4.onImageChangeStatus, 'red-zoom__lens-image');

            if (!_this4.lazy) {
              _this4.loadFrameImage();

              _this4.loadLensImage();
            }

            _this4.listen();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
          }

          if ('src' in changes && !changes.src.firstChange) {
            this.onChangeThumbSrc();
          }

          if ('thumbSrc' in changes && !changes.thumbSrc.firstChange) {
            this.onChangeThumbSrc();
          }

          if ('lensSrc' in changes && !changes.lensSrc.firstChange) {
            this.onChangeLensSrc();
          }

          if ('behavior' in changes && !changes.behavior.firstChange) {
            this.listen();
          }

          if ('classes' in changes && !changes.classes.firstChange) {
            this.template.classes = this.classes;
            this.invalidate();
          }

          if ('errorMessage' in changes && !changes.errorMessage.firstChange) {
            this.template.errorMessage.innerHTML = this.errorMessage;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
          }

          if (this.session) {
            this.session.destroy();
          }
        }
      }, {
        key: "onChangeThumbSrc",
        value: function onChangeThumbSrc() {
          this.frameImage.reset();

          if (!this.lazy || this.session) {
            this.loadFrameImage();
          }
        }
      }, {
        key: "onChangeLensSrc",
        value: function onChangeLensSrc() {
          this.lensImage.reset();

          if (!this.lazy || this.session) {
            this.loadLensImage();
          }
        }
      }, {
        key: "getThumbSrc",
        value: function getThumbSrc() {
          if (!this.isImage || !this.src) {
            return this.thumbSrc;
          }

          return this.src;
        }
      }, {
        key: "loadLensImage",
        value: function loadLensImage() {
          if (this.lensImage.status !== 'loaded') {
            this.lensImage.src = this.lensSrc;
          }
        }
      }, {
        key: "loadFrameImage",
        value: function loadFrameImage() {
          if (this.frameImage.status !== 'loaded') {
            this.frameImage.src = this.getThumbSrc();
          }
        }
      }, {
        key: "initSession",
        value: function initSession() {
          var thumbRect = this.element.nativeElement.getBoundingClientRect();
          this.session.thumbSize = fromRectSize(thumbRect);
          this.session.thumbPos = add(fromRectPos(thumbRect), fromScroll());
          this.template.attach();
          this.template.lensBody.appendChild(this.lensImage.element);
          this.template.frameBody.appendChild(this.frameImage.element);
          this.template.setProperties({
            '--red-zoom-thumb-x': "".concat(this.session.thumbPos.x, "px"),
            '--red-zoom-thumb-y': "".concat(this.session.thumbPos.y, "px"),
            '--red-zoom-thumb-w': "".concat(this.session.thumbSize.x, "px"),
            '--red-zoom-thumb-h': "".concat(this.session.thumbSize.y, "px"),
            '--red-zoom-thumb-size-max': "".concat(flatMax(this.session.thumbSize), "px"),
            '--red-zoom-thumb-size-min': "".concat(flatMin(this.session.thumbSize), "px")
          });

          if (this.status === 'loaded') {
            this.calcScaleFactor();
            this.calcFrameSize();
            this.scaleFactor = this.lensImage.width / this.lensImage.naturalWidth;
          }
        }
      }, {
        key: "calcScaleFactor",
        value: function calcScaleFactor() {
          var scaledSize = mul(this.lensImage.naturalSize, this.scaleFactor);
          this.lensImage.styleSize = map(scaledSize, function (c) {
            return "".concat(c, "px");
          });
          var scaleFactorIsLimited = flatOr(notEqual(this.lensImage.size, round(scaledSize)));

          if (scaleFactorIsLimited) {
            this.scaleFactor = flatMax(div(this.lensImage.size, this.lensImage.naturalSize));
            this.lensImage.styleSize = map(mul(this.lensImage.naturalSize, this.scaleFactor), function (c) {
              return "".concat(c, "px");
            });
          }
        }
      }, {
        key: "calcFrameSize",
        value: function calcFrameSize() {
          this.session.lensContainerSize = fromRectSize(this.template.lensBody.getBoundingClientRect());
          this.session.lensImageSize = fromRectSize(this.lensImage.element.getBoundingClientRect());
          this.session.frameSize = min(this.session.thumbSize, round(mul(this.session.thumbSize, div(this.session.lensContainerSize, this.session.lensImageSize))));
          this.template.setProperties({
            '--red-zoom-frame-w': "".concat(this.session.frameSize.x, "px"),
            '--red-zoom-frame-h': "".concat(this.session.frameSize.y, "px")
          });
        }
      }, {
        key: "move",
        value: function move() {
          if (!this.session || !this.session.active) {
            return;
          }

          var _this$session = this.session,
              mousePos = _this$session.mousePos,
              thumbSize = _this$session.thumbSize,
              thumbPos = _this$session.thumbPos,
              frameSize = _this$session.frameSize,
              lensContainerSize = _this$session.lensContainerSize,
              lensImageSize = _this$session.lensImageSize;
          this.template.setProperties({
            '--red-zoom-mouse-x': "".concat(mousePos.x, "px"),
            '--red-zoom-mouse-y': "".concat(mousePos.y, "px")
          });
          var framePos = sub(mousePos, div(frameSize, 2));
          var frameLimitedPos = min(max(framePos, thumbPos), sub(add(thumbPos, thumbSize), frameSize));
          var frameImagePos = sub(thumbPos, round(frameLimitedPos));
          this.template.setProperties({
            '--red-zoom-frame-x': "".concat(Math.round(frameLimitedPos.x), "px"),
            '--red-zoom-frame-y': "".concat(Math.round(frameLimitedPos.y), "px"),
            '--red-zoom-frame-image-x': "".concat(Math.round(frameImagePos.x), "px"),
            '--red-zoom-frame-image-y': "".concat(Math.round(frameImagePos.y), "px")
          });
          var frameRelativePos = map(sub(thumbSize, frameSize), function (value, axis) {
            return value === 0 ? 0 : (frameLimitedPos[axis] - thumbPos[axis]) / value;
          });
          var lensImagePos = mul(frameRelativePos, sub(lensImageSize, lensContainerSize));
          var lensImageCenterOffset = max(div(sub(lensContainerSize, lensImageSize), 2), 0);
          var lensImageFrameOffset = mul(div(sub(framePos, frameLimitedPos), div(frameSize, 2)), div(lensContainerSize, 2));
          this.template.setProperties({
            '--red-zoom-lens-image-base-x': "".concat(-lensImagePos.x, "px"),
            '--red-zoom-lens-image-base-y': "".concat(-lensImagePos.y, "px"),
            '--red-zoom-lens-image-center-offset-x': "".concat(lensImageCenterOffset.x, "px"),
            '--red-zoom-lens-image-center-offset-y': "".concat(lensImageCenterOffset.y, "px"),
            '--red-zoom-lens-image-frame-offset-x': "".concat(-lensImageFrameOffset.x, "px"),
            '--red-zoom-lens-image-frame-offset-y': "".concat(-lensImageFrameOffset.y, "px")
          });
        }
      }, {
        key: "invalidate",
        value: function invalidate() {
          if (this.session && this.session.active) {
            this.initSession();
            this.move();
          }
        }
      }, {
        key: "forceReflow",
        value: function forceReflow() {
          this.element.nativeElement.getBoundingClientRect();
        }
      }, {
        key: "isImage",
        get: function get() {
          return this.element.nativeElement.tagName === 'IMG';
        }
      }, {
        key: "status",
        get: function get() {
          var status = 'loaded';
          var images = [this.frameImage, this.lensImage];

          if (this.isImage) {
            images.push(this.thumbImage);
          }

          for (var _i = 0, _images = images; _i < _images.length; _i++) {
            var image = _images[_i];

            if (status === 'error' || image.status === 'error') {
              status = 'error';
            } else if (status === 'loading' || image.status === 'loading') {
              status = 'loading';
            }
          }

          return status;
        }
      }]);

      return RedZoomDirective;
    }();

    RedZoomDirective.ɵfac = function RedZoomDirective_Factory(t) {
      return new (t || RedZoomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
    };

    RedZoomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: RedZoomDirective,
      selectors: [["", "redZoom", ""]],
      hostVars: 1,
      hostBindings: function RedZoomDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrlOrResourceUrl"]);
        }
      },
      inputs: {
        lazy: ["redZoomLazy", "lazy"],
        classes: ["redZoomClass", "classes"],
        behavior: ["redZoomBehavior", "behavior"],
        wheel: ["redZoomMouseWheel", "wheel"],
        errorMessage: ["redZoomErrorMessage", "errorMessage"],
        src: "src",
        lensSrc: ["redZoom", "lensSrc"],
        thumbSrc: ["redZoomThumb", "thumbSrc"]
      },
      exportAs: ["redZoom"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    RedZoomDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('src'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.src')], RedZoomDirective.prototype, "src", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoom')], RedZoomDirective.prototype, "lensSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomThumb')], RedZoomDirective.prototype, "thumbSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomLazy')], RedZoomDirective.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomClass')], RedZoomDirective.prototype, "classes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomBehavior')], RedZoomDirective.prototype, "behavior", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomMouseWheel')], RedZoomDirective.prototype, "wheel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('redZoomErrorMessage')], RedZoomDirective.prototype, "errorMessage", void 0);
    RedZoomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], RedZoomDirective);

    var RedZoomModule = function RedZoomModule() {
      _classCallCheck(this, RedZoomModule);
    };

    RedZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RedZoomModule
    });
    RedZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RedZoomModule_Factory(t) {
        return new (t || RedZoomModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedZoomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[redZoom]',
          exportAs: 'redZoom'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      }, {
        lazy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomLazy']
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomClass']
        }],
        behavior: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomBehavior']
        }],
        wheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomMouseWheel']
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomErrorMessage']
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['src']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.src']
        }],
        lensSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoom']
        }],
        thumbSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['redZoomThumb']
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RedZoomModule, {
        declarations: [RedZoomDirective],
        exports: [RedZoomDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [RedZoomDirective],
          exports: [RedZoomDirective]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of ngx-red-zoom
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-red-zoom.js.map

    /***/

  },

  /***/
  "./projects/ngx-red-zoom/package.json":
  /*!********************************************!*\
    !*** ./projects/ngx-red-zoom/package.json ***!
    \********************************************/

  /*! exports provided: name, description, keywords, homepage, bugs, repository, license, version, peerDependencies, default */

  /***/
  function projectsNgxRedZoomPackageJson(module) {
    module.exports = JSON.parse("{\"name\":\"ngx-red-zoom\",\"description\":\"RedZoom is a modern very easy-to-use image zoom library which made as Angular directive and fully stylable via CSS/SCSS\",\"keywords\":[\"zoom\",\"gallery\",\"image\",\"cloud zoom\"],\"homepage\":\"https://scompiler.github.io/red-zoom-angular/\",\"bugs\":\"https://github.com/scompiler/red-zoom-angular/issues\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/scompiler/red-zoom-angular.git\",\"directory\":\"projects/ngx-red-zoom\"},\"license\":\"MIT\",\"version\":\"0.3.0\",\"peerDependencies\":{\"@angular/common\":\"^9.1.0\",\"@angular/core\":\"^9.1.0\",\"tslib\":\"^1.10.0\"}}");
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../projects/ngx-red-zoom/package.json */
    "./projects/ngx-red-zoom/package.json");

    var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../projects/ngx-red-zoom/package.json */
    "./projects/ngx-red-zoom/package.json", 1);
    /* harmony import */


    var angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angulartics2/ga */
    "./node_modules/angulartics2/__ivy_ngcc__/ga/fesm2015/angulartics2-ga.js");
    /* harmony import */


    var _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./example-n01/example-n01.component */
    "./src/app/example-n01/example-n01.component.ts");
    /* harmony import */


    var _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./example-n02/example-n02.component */
    "./src/app/example-n02/example-n02.component.ts");
    /* harmony import */


    var _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./example-n03/example-n03.component */
    "./src/app/example-n03/example-n03.component.ts");
    /* harmony import */


    var _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./example-n04/example-n04.component */
    "./src/app/example-n04/example-n04.component.ts");
    /* harmony import */


    var _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./example-n05/example-n05.component */
    "./src/app/example-n05/example-n05.component.ts");
    /* harmony import */


    var _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./example-n06/example-n06.component */
    "./src/app/example-n06/example-n06.component.ts");
    /* harmony import */


    var _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./example-n07/example-n07.component */
    "./src/app/example-n07/example-n07.component.ts");
    /* harmony import */


    var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./documentation/documentation.component */
    "./src/app/documentation/documentation.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(analytics) {
        _classCallCheck(this, AppComponent);

        this.analytics = analytics;
        this.version = _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
        this.year = new Date().getFullYear();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.analytics.startTracking();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 31,
      vars: 2,
      consts: [[1, "angular-logo"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100px", "height", "90px", 1, "angular-logo__image"], ["d", "M8,67L50,90L50,-0L-0,-0L8,67Z", 1, "angular-logo__part-one"], ["d", "M92,67L50,90L50,-0L100,-0L92,67Z", 1, "angular-logo__part-two"], ["d", "M80,61.750 L52.660,-0 L47.340,-0 L20,61.750 C19.530,62.810 20.300,64 21.460,64 L29.610,64 C30.450,64 31.190,63.480 31.490,62.700 L36.760,48.650 C36.900,48.260 37.280,48 37.690,48 L62.410,48 C62.830,48 63.210,48.260 63.350,48.650 L68.520,62.690 C68.810,63.480 69.560,64 70.390,64 L78.540,64 C79.700,64 80.470,62.810 80,61.750 ZM57.060,39 L42.940,39 C42.010,39 41.380,38.060 41.730,37.210 L48.980,19.490 C49.350,18.580 50.650,18.580 51.020,19.490 L58.270,37.210 C58.620,38.060 57.990,39 57.060,39 Z", 1, "angular-logo__letter"], [1, "intro"], ["xmlns", "http://www.w3.org/2000/svg", "width", "248px", "height", "39px", 1, "intro__logo", "logo"], ["d", "M76,38.740 L76,39 L65.500,39 C64.125,39 63,37.875 63,36.500 L63,2.500 C63,1.125 64.125,-0 65.500,-0 L73,-0 C74.020,-0 75.030,0.090 76,0.260 C84.510,1.680 91,9.080 91,18 L91,21 C91,29.920 84.510,37.320 76,38.740 ZM84,18 C84,11.925 79.075,7 73,7 L71.500,7 C70.672,7 70,7.671 70,8.500 L70,30.500 C70,31.328 70.672,32 71.500,32 L73,32 C79.075,32 84,27.075 84,21 L84,18 ZM57,39 L37,39 L34,39 C32.895,39 32,38.104 32,37 L32,2 C32,0.895 32.895,-0 34,-0 L37,-0 L57,-0 C58.104,-0 59,0.895 59,2 L59,5 C59,6.105 58.104,7 57,7 L39,7 L39,15 L54,15 C55.104,15 56,15.895 56,17 L56,20 C56,21.104 55.104,22 54,22 L39,22 L39,32 L57,32 C58.104,32 59,32.895 59,34 L59,37 C59,38.104 58.104,39 57,39 ZM27.344,34.556 C27.774,35.299 28,36.142 28,37 C28,38.104 27.105,39 26,39 L22.984,39 C22.270,39 21.610,38.619 21.253,38 L16.630,30 L14.900,26.990 C14.770,27 14.630,27 14.500,27 L8,27 C7.448,27 7,27.448 7,28 L7,37 C7,38.100 6.100,39 5,39 L2,39 C0.900,39 -0,38.100 -0,37 L-0,2 C-0,0.900 0.900,-0 2,-0 L14.500,-0 C18.740,-0 22.520,1.950 25,5.010 C26.880,7.330 28,10.280 28,13.500 C28,16.720 26.880,19.670 25,21.990 C24.080,23.120 22.990,24.100 21.760,24.890 L24.710,30 L27.344,34.556 ZM18,8.020 C16.990,7.380 15.790,7 14.500,7 L8.500,7 C7.671,7 7,7.671 7,8.500 L7,18.500 C7,19.328 7.671,20 8.500,20 L14.500,20 C15.790,20 16.990,19.620 18,18.980 C19.800,17.820 21,15.800 21,13.500 C21,11.200 19.800,9.180 18,8.020 Z", 1, "logo__part-one"], ["d", "M246,39 L243,39 C241.895,39 241,38.105 241,37 L241,14.921 C241,14.144 240.002,13.823 239.550,14.456 L232.898,23.746 C232.334,24.533 231.426,25 230.458,25 L228.542,25 C227.574,25 226.666,24.533 226.103,23.746 L219.451,14.456 C218.998,13.823 218,14.144 218,14.921 L218,37 C218,38.105 217.105,39 216,39 L213,39 C211.895,39 211,38.105 211,37 L211,2.200 C211,0.985 211.985,-0 213.200,-0 L215.458,-0 C216.426,-0 217.334,0.467 217.898,1.254 L228.687,16.333 C229.086,16.891 229.914,16.891 230.313,16.333 L241.103,1.254 C241.666,0.467 242.574,-0 243.542,-0 L245.800,-0 C247.015,-0 248,0.985 248,2.200 L248,37 C248,38.105 247.105,39 246,39 ZM187.500,39 C176.730,39 168,30.270 168,19.500 C168,8.730 176.730,-0 187.500,-0 C198.270,-0 207,8.730 207,19.500 C207,30.270 198.270,39 187.500,39 ZM187.500,7 C180.596,7 175,12.596 175,19.500 C175,26.404 180.596,32 187.500,32 C194.404,32 200,26.404 200,19.500 C200,12.596 194.404,7 187.500,7 ZM144.500,39 C133.730,39 125,30.270 125,19.500 C125,8.730 133.730,-0 144.500,-0 C155.270,-0 164,8.730 164,19.500 C164,30.270 155.270,39 144.500,39 ZM144.500,7 C137.596,7 132,12.596 132,19.500 C132,26.404 137.596,32 144.500,32 C151.404,32 157,26.404 157,19.500 C157,12.596 151.404,7 144.500,7 ZM122,39 L97,39 C95.900,39 95,38.100 95,37 L95,33.404 C95,32.495 95.310,31.613 95.878,30.904 L114.369,7.812 C114.632,7.485 114.398,7 113.979,7 L97,7 C95.900,7 95,6.100 95,5 L95,2 C95,0.900 95.900,-0 97,-0 L122,-0 C123.100,-0 124,0.900 124,2 L124,5.595 C124,6.504 123.690,7.387 123.122,8.096 L104.621,31.187 C104.359,31.515 104.592,32 105.011,32 L122,32 C123.100,32 124,32.900 124,34 L124,37 C124,38.100 123.100,39 122,39 Z", 1, "logo__part-two"], [1, "intro__version"], ["href", "https://github.com/scompiler/red-zoom/releases"], [1, "intro__text"], [1, "intro__code"], [1, "copyright"], ["href", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " RedZoom is a modern very easy-to-use image zoom library which made as Angular directive and fully stylable via CSS/SCSS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "npm install ngx-red-zoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-example-n01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-example-n02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-example-n03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-example-n04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-example-n05");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-example-n06");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-example-n07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Code licensed under an MIT License");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Konstantin Veselovsky");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version ", ctx.version, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \xA9 ", ctx.year, " ");
        }
      },
      directives: [_example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_3__["ExampleN01Component"], _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_4__["ExampleN02Component"], _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_5__["ExampleN03Component"], _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_6__["ExampleN04Component"], _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_7__["ExampleN05Component"], _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_8__["ExampleN06Component"], _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_9__["ExampleN07Component"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["DocumentationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/__ivy_ngcc__/fesm2015/angulartics2.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./example-n01/example-n01.component */
    "./src/app/example-n01/example-n01.component.ts");
    /* harmony import */


    var _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./example-n02/example-n02.component */
    "./src/app/example-n02/example-n02.component.ts");
    /* harmony import */


    var _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./example-n03/example-n03.component */
    "./src/app/example-n03/example-n03.component.ts");
    /* harmony import */


    var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./documentation/documentation.component */
    "./src/app/documentation/documentation.component.ts");
    /* harmony import */


    var _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./example-n04/example-n04.component */
    "./src/app/example-n04/example-n04.component.ts");
    /* harmony import */


    var _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./example-n05/example-n05.component */
    "./src/app/example-n05/example-n05.component.ts");
    /* harmony import */


    var _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./example-n06/example-n06.component */
    "./src/app/example-n06/example-n06.component.ts");
    /* harmony import */


    var _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./example-n07/example-n07.component */
    "./src/app/example-n07/example-n07.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomModule"], angulartics2__WEBPACK_IMPORTED_MODULE_3__["Angulartics2Module"].forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_8__["ExampleN01Component"], _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_9__["ExampleN02Component"], _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_10__["ExampleN03Component"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["DocumentationComponent"], _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_12__["ExampleN04Component"], _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_13__["ExampleN05Component"], _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_14__["ExampleN06Component"], _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_15__["ExampleN07Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomModule"], angulartics2__WEBPACK_IMPORTED_MODULE_3__["Angulartics2Module"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_8__["ExampleN01Component"], _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_9__["ExampleN02Component"], _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_10__["ExampleN03Component"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["DocumentationComponent"], _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_12__["ExampleN04Component"], _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_13__["ExampleN05Component"], _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_14__["ExampleN06Component"], _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_15__["ExampleN07Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomModule"], angulartics2__WEBPACK_IMPORTED_MODULE_3__["Angulartics2Module"].forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/documentation/documentation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/documentation/documentation.component.ts ***!
    \**********************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppDocumentationDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DocumentationComponent = function DocumentationComponent() {
      _classCallCheck(this, DocumentationComponent);
    };

    DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) {
      return new (t || DocumentationComponent)();
    };

    DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentationComponent,
      selectors: [["app-documentation"]],
      hostVars: 2,
      hostBindings: function DocumentationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("section", true);
        }
      },
      decls: 230,
      vars: 0,
      consts: [[1, "typography"], [1, "changelog"], [1, "changelog__item"], [1, "changelog__title"], [1, "changelog__list"]],
      template: function DocumentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Responsive;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Support server side rendering (SSR);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chrome (and others based on chrome), Safari, Firefox, Edge;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customizing via CSS/SCSS;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lazy loading;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Error Handling;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support hot swap images;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Exported as: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "redZoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "redZoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " The path to the full version of the image. Required. Can be empty.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "If left blank, the path to the full version of the image will be the same as in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "redZoomThumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " attribute. TODO: not implemented.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "redZoomThumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "The path to the thumbnail image used in the frame. Required if the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " attribute is missing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "redZoomLazy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "If true, the full version of the image will only start loading after the activation event (mouseenter/mousedown) is triggered. (default: false)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "redZoomBehavior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Activation event. (default: 'hover')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Possible values: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "'hover'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "'grab'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "redZoomClass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "A list of CSS classes that should be applied to the root (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".red-zoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ") element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "redZoomMouseWheel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Enables or disables changing the magnification factor using the mouse wheel. (default: true) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "redZoomTouch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "TODO: Not implemented.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "redZoomGestures");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "TODO: Not implemented.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "redZoomErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Use this attribute to provide your own error message.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CSS variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "--red-zoom-thumb-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Thumbnail position relative to the page in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "--red-zoom-thumb-[w/h]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Thumbnail size in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "--red-zoom-thumb-size-[max/min]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Max/min size of thumbnail in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "--red-zoom-frame-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Position of the frame relative to the page in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "--red-zoom-frame-[w/h]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Size of the frame in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "--red-zoom-frame-image-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Position of the frame image relative to the frame in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "--red-zoom-lens-image-natural-[w/h]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Original size of lens image in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "--red-zoom-lens-image-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Lens image position relative to the lens in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "--red-zoom-lens-image-center-offset-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "TODO: describe.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "--red-zoom-lens-image-frame-offset-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "TODO: describe.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "--red-zoom-scale-factor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "TODO: Not implemented.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "--red-zoom-mouse-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Mouse position relative to the page in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Changing zoom ratio with touch gestures (pinch to zoom);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Support touch events;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Support <source> tag and srcset attribute;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Support keyboard;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Reflect some settings in the CSS classes of the root element;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Provide the ability to globally define settings;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Support for scrollable containers;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Add the ability to follow the scroll position;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Add \"toggle\" behavior;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Add the ability to customize the step of changing the zoom ratio;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Provide the ability to replace the template;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Describe how to limit the scale factor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Changelog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "May 13, 2020 \u2014 Version 0.3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Updated Angular from 8.1 to 9.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "October 25, 2019 \u2014 Version 0.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "October 25, 2019 \u2014 Version 0.2.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "October 14, 2019 \u2014 Version 0.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Initial release.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-documentation',
          templateUrl: './documentation.component.html',
          styleUrls: ['./documentation.component.scss'],
          host: {
            '[class.section]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n01/example-n01.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n01/example-n01.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN01Component */

  /***/
  function srcAppExampleN01ExampleN01ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN01Component", function () {
      return ExampleN01Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");

    var ExampleN01Component = function ExampleN01Component() {
      _classCallCheck(this, ExampleN01Component);
    };

    ExampleN01Component.ɵfac = function ExampleN01Component_Factory(t) {
      return new (t || ExampleN01Component)();
    };

    ExampleN01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN01Component,
      selectors: [["app-example-n01"]],
      hostVars: 2,
      hostBindings: function ExampleN01Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 28,
      vars: 4,
      consts: [[1, "example__body"], [1, "example__image"], ["src", "./assets/image-1.jpg", "alt", "", "width", "320", "redZoom", "./assets/image-1-full.jpg", "redZoomClass", "red-zoom--style--window", 1, "zoom", 3, "redZoomLazy"], [1, "example__content"], [1, "typography"]],
      template: function ExampleN01Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Getting Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To install RedZoom, run the command below: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "npm install ngx-red-zoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import module: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Import styles: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/style-window.scss';");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Add directive to your image tag: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "<img\n    src=\"example.jpg\"\n    redZoom=\"example.full.jpg\"\n    redZoomClass=\"red-zoom--style--window\"\n>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoomLazy", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("import ", "{", " RedZoomModule } from 'ngx-red-zoom';\n\n@NgModule(", "{", "\n    imports: [\n        RedZoomModule\n    ]\n})\nexport class AppModule ", "{", " }");
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__["RedZoomDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAxL2V4YW1wbGUtbjAxLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n01',
          templateUrl: './example-n01.component.html',
          styleUrls: ['./example-n01.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n02/example-n02.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n02/example-n02.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN02Component */

  /***/
  function srcAppExampleN02ExampleN02ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN02Component", function () {
      return ExampleN02Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");

    var ExampleN02Component = function ExampleN02Component() {
      _classCallCheck(this, ExampleN02Component);

      this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('square');
    };

    ExampleN02Component.ɵfac = function ExampleN02Component_Factory(t) {
      return new (t || ExampleN02Component)();
    };

    ExampleN02Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN02Component,
      selectors: [["app-example-n02"]],
      hostVars: 2,
      hostBindings: function ExampleN02Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 49,
      vars: 7,
      consts: [[1, "example__body"], [1, "example__image"], ["src", "./assets/image-2.jpg", "alt", "", "width", "320", "redZoom", "./assets/image-2-full.jpg", 1, "zoom", 3, "redZoomClass", "redZoomLazy"], [1, "example__content"], [1, "typography"], [1, "button-group"], ["type", "radio", "name", "mode", "value", "square", 3, "formControl"], ["type", "radio", "name", "mode", "value", "landscape", 3, "formControl"], ["type", "radio", "name", "mode", "value", "portrait", 3, "formControl"], ["type", "radio", "name", "mode", "value", "fixed", 3, "formControl"], ["type", "radio", "name", "mode", "value", "overlay", 3, "formControl"]],
      template: function ExampleN02Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Size And Position Of The Lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You can set any size of the lens image via CSS/SCSS, red-zoom automatically detect it, and you do not need to edit ts/html files for this purpose. This also means that you can set different sizes of the lens depend on screen size using CSS media queries. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Square");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Landscape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Portrait");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Overlay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Use the following CSS variables to position the lens relative to the thumbnail: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "--red-zoom-thumb-[x/y]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Thumbnail position relative to the page in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "--red-zoom-thumb-[w/h]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Thumbnail size in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "--red-zoom-thumb-size-[max/min]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Max/min size of thumbnail in pixels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("redZoomClass", "red-zoom--style--window red-zoom--mode--", ctx.mode.value, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoomLazy", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.mode);
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: [".red-zoom--mode--square .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-w, 0px);\n}\n\n.red-zoom--mode--landscape .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-h, 0px);\n  height: var(--red-zoom-thumb-w, 0px);\n}\n\n.red-zoom--mode--portrait .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom--mode--fixed .red-zoom__lens {\n  transform: none;\n  position: fixed;\n  left: 40px;\n  top: auto;\n  bottom: 40px;\n  width: 320px;\n  height: 320px;\n}\n\n.red-zoom--mode--overlay .red-zoom__lens {\n  left: var(--red-zoom-thumb-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom--mode--overlay .red-zoom__frame {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS1uMDIvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXGFwcFxcZXhhbXBsZS1uMDJcXGV4YW1wbGUtbjAyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtcGxlLW4wMi9leGFtcGxlLW4wMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNEUjs7QURLSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNIUjs7QURPSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNMUjs7QURTSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNOUjs7QURVSTtFQUNJLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FDUFI7O0FEU0k7RUFDSSxhQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9leGFtcGxlLW4wMi9leGFtcGxlLW4wMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQtem9vbS0tbW9kZS0tc3F1YXJlIHtcclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgLS13aW5kb3cteDogY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYi14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KSArIDMycHgpO1xyXG5cclxuICAgICAgICBsZWZ0OiB2YXIoLS13aW5kb3cteCwgMHB4KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xyXG4gICAgfVxyXG59XHJcbi5yZWQtem9vbS0tbW9kZS0tbGFuZHNjYXBlIHtcclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgLS13aW5kb3cteDogY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYi14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KSArIDMycHgpO1xyXG5cclxuICAgICAgICBsZWZ0OiB2YXIoLS13aW5kb3cteCwgMHB4KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1iLWgsIDBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xyXG4gICAgfVxyXG59XHJcbi5yZWQtem9vbS0tbW9kZS0tcG9ydHJhaXQge1xyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XHJcblxyXG4gICAgICAgIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWIteSwgMHB4KTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLWgsIDBweCk7XHJcbiAgICB9XHJcbn1cclxuLnJlZC16b29tLS1tb2RlLS1maXhlZCB7XHJcbiAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5yZWQtem9vbS0tbW9kZS0tb3ZlcmxheSB7XHJcbiAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCk7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYi15LCAwcHgpO1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWItaCwgMHB4KTtcclxuICAgIH1cclxuICAgIC5yZWQtem9vbV9fZnJhbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiLnJlZC16b29tLS1tb2RlLS1zcXVhcmUgLnJlZC16b29tX19sZW5zIHtcbiAgLS13aW5kb3cteDogY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYi14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KSArIDMycHgpO1xuICBsZWZ0OiB2YXIoLS13aW5kb3cteCwgMHB4KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYi15LCAwcHgpO1xuICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xufVxuXG4ucmVkLXpvb20tLW1vZGUtLWxhbmRzY2FwZSAucmVkLXpvb21fX2xlbnMge1xuICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XG4gIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi1oLCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XG59XG5cbi5yZWQtem9vbS0tbW9kZS0tcG9ydHJhaXQgLnJlZC16b29tX19sZW5zIHtcbiAgLS13aW5kb3cteDogY2FsYyh2YXIoLS1yZWQtem9vbS10aHVtYi14LCAwcHgpICsgdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KSArIDMycHgpO1xuICBsZWZ0OiB2YXIoLS13aW5kb3cteCwgMHB4KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYi15LCAwcHgpO1xuICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi1oLCAwcHgpO1xufVxuXG4ucmVkLXpvb20tLW1vZGUtLWZpeGVkIC5yZWQtem9vbV9fbGVucyB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA0MHB4O1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogNDBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xufVxuXG4ucmVkLXpvb20tLW1vZGUtLW92ZXJsYXkgLnJlZC16b29tX19sZW5zIHtcbiAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWIteCwgMHB4KTtcbiAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYi15LCAwcHgpO1xuICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcbiAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi1oLCAwcHgpO1xufVxuLnJlZC16b29tLS1tb2RlLS1vdmVybGF5IC5yZWQtem9vbV9fZnJhbWUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN02Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n02',
          templateUrl: './example-n02.component.html',
          styleUrls: ['./example-n02.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n03/example-n03.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n03/example-n03.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN03Component */

  /***/
  function srcAppExampleN03ExampleN03ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN03Component", function () {
      return ExampleN03Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");

    var ExampleN03Component = function ExampleN03Component() {
      _classCallCheck(this, ExampleN03Component);

      this.style = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('magnifier');
    };

    ExampleN03Component.ɵfac = function ExampleN03Component_Factory(t) {
      return new (t || ExampleN03Component)();
    };

    ExampleN03Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN03Component,
      selectors: [["app-example-n03"]],
      hostVars: 2,
      hostBindings: function ExampleN03Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 49,
      vars: 10,
      consts: [[1, "example__body"], [1, "example__image"], ["src", "./assets/image-4.jpg", "alt", "", "width", "320", "redZoom", "./assets/image-4-full.jpg", 1, "zoom", 3, "redZoomLazy", "redZoomClass"], [1, "example__content"], [1, "typography"], [1, "button-group"], ["type", "radio", "name", "style", "value", "magnifier", 3, "formControl"], ["type", "radio", "name", "style", "value", "window", 3, "formControl"], ["type", "radio", "name", "style", "value", "overlay", 3, "formControl"], [1, "code"], [1, "code__comment"], [1, "code__mark"]],
      template: function ExampleN03Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customization And Styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Magnifier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Overlay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " RedZoom comes with three predefined styles, you can use one of them as shown below: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "// sass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/style-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ".scss';\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "// html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n<img\n    src=\"./assets/image.jpg\"\n    redZoom=\"./assets/image-full.jpg\"\n    redZoomClass=\"red-zoom--style--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\"\n>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " You can also create your own amazing style or customize an existing style using mixins: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "// sass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/mixins/style-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(\n        // you settings here\n    );\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoomLazy", false)("redZoomClass", "red-zoom--style--" + ctx.style.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.style.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.style.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.style.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".scss';\n\n.red-zoom--style--custom ", "{", "\n    @include red-zoom-style-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.style.value);
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAzL2V4YW1wbGUtbjAzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN03Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n03',
          templateUrl: './example-n03.component.html',
          styleUrls: ['./example-n03.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n04/example-n04.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n04/example-n04.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN04Component */

  /***/
  function srcAppExampleN04ExampleN04ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN04Component", function () {
      return ExampleN04Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");

    var ExampleN04Component = function ExampleN04Component() {
      _classCallCheck(this, ExampleN04Component);

      this.behavior = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('hover');
    };

    ExampleN04Component.ɵfac = function ExampleN04Component_Factory(t) {
      return new (t || ExampleN04Component)();
    };

    ExampleN04Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN04Component,
      selectors: [["app-example-n04"]],
      hostVars: 2,
      hostBindings: function ExampleN04Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 21,
      vars: 7,
      consts: [[1, "example__body"], [1, "example__image"], ["src", "./assets/image-3.jpg", "alt", "", "width", "320", "redZoom", "./assets/image-3-full.jpg", "redZoomClass", "red-zoom--style--window", 1, "zoom", 3, "redZoomLazy", "redZoomBehavior"], [1, "example__content"], [1, "typography"], [1, "button-group"], ["type", "radio", "name", "behavior", "value", "hover", 3, "formControl"], ["type", "radio", "name", "behavior", "value", "grab", 3, "formControl"]],
      template: function ExampleN04Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Behavior And Activation Event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Grab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Choose your desired behavior: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx.behavior.value == "hover" ? "crosshair" : "zoom-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoomLazy", false)("redZoomBehavior", ctx.behavior.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.behavior);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.behavior);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<img\n    src=\"image.jpg\"\n    redZoom=\"image-full.jpg\"\n    redZoomBehavior=\"", ctx.behavior.value, "\"\n>");
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA0L2V4YW1wbGUtbjA0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN04Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n04',
          templateUrl: './example-n04.component.html',
          styleUrls: ['./example-n04.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n05/example-n05.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n05/example-n05.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN05Component */

  /***/
  function srcAppExampleN05ExampleN05ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN05Component", function () {
      return ExampleN05Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");

    var ExampleN05Component = function ExampleN05Component() {
      _classCallCheck(this, ExampleN05Component);

      this.url = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('incorrect');
    };

    ExampleN05Component.ɵfac = function ExampleN05Component_Factory(t) {
      return new (t || ExampleN05Component)();
    };

    ExampleN05Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN05Component,
      selectors: [["app-example-n05"]],
      hostVars: 2,
      hostBindings: function ExampleN05Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 21,
      vars: 5,
      consts: [[1, "example__body"], [1, "example__image"], ["src", "./assets/image-5.jpg", "alt", "", "width", "320", "redZoomClass", "red-zoom--style--window", 1, "zoom", 3, "redZoom", "redZoomLazy"], [1, "example__content"], [1, "typography"], [1, "button-group"], ["type", "radio", "name", "error", "value", "incorrect", 3, "formControl"], ["type", "radio", "name", "error", "value", "correct", 3, "formControl"]],
      template: function ExampleN05Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error Handling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Incorrect URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correct URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " If an error occurs while loading the image, RedZoom will display a corresponding error message. You can also provide your own error message: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoom", ctx.url.value === "correct" ? "./assets/image-5-full.jpg" : "./assets/404.jpg")("redZoomLazy", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<img\n    src=\"image.jpg\"\n    redZoom=\"", ctx.url.value === "correct" ? "image-full.jpg" : "404.jpg", "\"\n    redZoomErrorMessage=\"Custom error message\"\n>");
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA1L2V4YW1wbGUtbjA1LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN05Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n05',
          templateUrl: './example-n05.component.html',
          styleUrls: ['./example-n05.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n06/example-n06.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n06/example-n06.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN06Component */

  /***/
  function srcAppExampleN06ExampleN06ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN06Component", function () {
      return ExampleN06Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExampleN06Component_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.currentImage)("value", image_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ExampleN06Component = function ExampleN06Component() {
      _classCallCheck(this, ExampleN06Component);

      this.images = [{
        thumbnail: './assets/image-6.jpg',
        full: './assets/image-6-full.jpg'
      }, {
        thumbnail: './assets/image-7.jpg',
        full: './assets/image-7-full.jpg'
      }, {
        thumbnail: './assets/image-8.jpg',
        full: './assets/image-8-full.jpg'
      }];
      this.currentImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.images[0]);
    };

    ExampleN06Component.ɵfac = function ExampleN06Component_Factory(t) {
      return new (t || ExampleN06Component)();
    };

    ExampleN06Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN06Component,
      selectors: [["app-example-n06"]],
      hostVars: 2,
      hostBindings: function ExampleN06Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 14,
      vars: 7,
      consts: [[1, "example__body"], [1, "example__image"], ["alt", "", "width", "320", "redZoomClass", "red-zoom--style--window", 1, "zoom", 3, "src", "redZoom", "redZoomLazy"], [1, "example__content"], [1, "typography"], [1, "radio-image"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "gallery", 3, "formControl", "value"], ["alt", "", 3, "src"]],
      template: function ExampleN06Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleN06Component_label_8_Template, 4, 3, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RedZoom supports hot swap images. So you can use it in image gallery.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImage.value.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("redZoom", ctx.currentImage.value.full)("redZoomLazy", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("// code\nconst currentImage = ", "{", "\n    thumbnail: '", ctx.currentImage.value.thumbnail, "',\n    full: '", ctx.currentImage.value.full, "',\n};\n\n// template\n<img\n    [src]=\"currentImage.thumbnail\"\n    [redZoom]=\"currentImage.full\"\n>");
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA2L2V4YW1wbGUtbjA2LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN06Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n06',
          templateUrl: './example-n06.component.html',
          styleUrls: ['./example-n06.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-n07/example-n07.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-n07/example-n07.component.ts ***!
    \******************************************************/

  /*! exports provided: ExampleN07Component */

  /***/
  function srcAppExampleN07ExampleN07ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleN07Component", function () {
      return ExampleN07Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-red-zoom */
    "./dist/ngx-red-zoom/__ivy_ngcc__/fesm2015/ngx-red-zoom.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExampleN07Component_ng_container_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
      }

      if (rf & 2) {
        var image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ExampleN07Component_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleN07Component_ng_container_4_ng_template_1_Template, 1, 1, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ExampleN07Component = /*#__PURE__*/function () {
      function ExampleN07Component(cd) {
        _classCallCheck(this, ExampleN07Component);

        this.cd = cd;
        this.images = [{
          thumbnail: './assets/image-9.jpg',
          full: './assets/image-9-full.jpg'
        }, {
          thumbnail: './assets/image-10.jpg',
          full: './assets/image-10-full.jpg'
        }, {
          thumbnail: './assets/image-11.jpg',
          full: './assets/image-11-full.jpg'
        }];
        this.currentImage = this.images[0];
        this.options = {
          items: 1
        };
        this.dragging = false;
      }

      _createClass(ExampleN07Component, [{
        key: "dragged",
        value: function dragged(data) {
          this.dragging = data.dragging;
          this.cd.detectChanges();
        }
      }, {
        key: "translated",
        value: function translated(data) {
          this.currentImage = this.images[data.startPosition];
        }
      }, {
        key: "classes",
        get: function get() {
          return 'red-zoom--style--window' + (this.dragging ? ' red-zoom--disabled' : '');
        }
      }]);

      return ExampleN07Component;
    }();

    ExampleN07Component.ɵfac = function ExampleN07Component_Factory(t) {
      return new (t || ExampleN07Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ExampleN07Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleN07Component,
      selectors: [["app-example-n07"]],
      viewQuery: function ExampleN07Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__["RedZoomDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.redZoom = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ExampleN07Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example", true);
        }
      },
      decls: 14,
      vars: 6,
      consts: [[1, "example__body"], [1, "example__image", 3, "redZoom", "redZoomThumb", "redZoomClass", "redZoomLazy"], ["redZoom", "redZoom"], [3, "options", "dragging", "translated"], [4, "ngFor", "ngForOf"], [1, "example__content"], [1, "typography"], ["carouselSlide", ""], ["alt", "", "width", "320", 1, "zoom", 3, "src"]],
      template: function ExampleN07Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel-o", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragging", function ExampleN07Component_Template_owl_carousel_o_dragging_3_listener($event) {
            return ctx.dragged($event);
          })("translated", function ExampleN07Component_Template_owl_carousel_o_translated_3_listener($event) {
            return ctx.translated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleN07Component_ng_container_4_Template, 2, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You can also use the redZoom directive, for example with a DIV tag. This ability is useful when your images are in a carousel, and they can change their position when swiping. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "<div\n    [redZoom]=\"currentImage.full\"\n    [redZoomThumb]=\"currentImage.thumbnail\"\n>\n    <owl-carousel-o>\n        <ng-container *ngFor=\"let image of images\">\n            <ng-template carouselSlide>\n                <img [src]=\"image.thumbnail\">\n            </ng-template>\n        </ng-container>\n    </owl-carousel-o>\n</div>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoom", ctx.currentImage.full)("redZoomThumb", ctx.currentImage.thumbnail)("redZoomClass", ctx.classes)("redZoomLazy", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__["RedZoomDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA3L2V4YW1wbGUtbjA3LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleN07Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-n07',
          templateUrl: './example-n07.component.html',
          styleUrls: ['./example-n07.component.scss'],
          host: {
            '[class.example]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        redZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_1__["RedZoomDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\projects\red-zoom\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map