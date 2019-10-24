(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ngx-red-zoom/fesm5/ngx-red-zoom.js":
/*!*************************************************!*\
  !*** ./dist/ngx-red-zoom/fesm5/ngx-red-zoom.js ***!
  \*************************************************/
/*! exports provided: RedZoomDirective, RedZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedZoomDirective", function() { return RedZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedZoomModule", function() { return RedZoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var template = null;
    return (/**
     * @return {?}
     */
    function () {
        if (!template) {
            template = document.createElement('template');
            template.innerHTML = "<div class=\"red-zoom\">\n                <div class=\"red-zoom__overlay\"></div>\n                <div class=\"red-zoom__frame\">\n                    <div class=\"red-zoom__frame-body\"></div>\n                </div>\n                <div class=\"red-zoom__lens\">\n                    <div class=\"red-zoom__lens-body\"></div>\n                </div>\n                <div class=\"red-zoom__error\">\n                    <div class=\"red-zoom__error-message\"></div>\n                </div>\n            </div>";
        }
        return (/** @type {?} */ (template.content.cloneNode(true).firstChild));
    });
};
/** @type {?} */
var makeTemplate = ((ɵ0))();
var RedZoomTemplate = /** @class */ (function () {
    function RedZoomTemplate() {
        var _this = this;
        this._status = null;
        this.appliedClasses = [];
        this.onTransitionEnd = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.propertyName === 'visibility' && _this.isHidden) {
                _this.template.remove();
            }
        });
        this.template = makeTemplate();
        this.lens = this.template.querySelector('.red-zoom__lens');
        this.lensBody = this.template.querySelector('.red-zoom__lens-body');
        this.frame = this.template.querySelector('.red-zoom__frame');
        this.frameBody = this.template.querySelector('.red-zoom__frame-body');
        this.error = this.template.querySelector('.red-zoom__error');
        this.errorMessage = this.template.querySelector('.red-zoom__error-message');
        this.template.addEventListener('transitionend', this.onTransitionEnd);
        this.status = 'pending';
    }
    Object.defineProperty(RedZoomTemplate.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (this._status !== null) {
                this.template.classList.remove("red-zoom--status--" + this._status);
            }
            this._status = state;
            this.template.classList.add("red-zoom--status--" + state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomTemplate.prototype, "classes", {
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            var _a, _b;
            (_a = this.template.classList).remove.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this.appliedClasses));
            classes = classes.trim();
            if (classes) {
                this.appliedClasses = classes.replace(/ +/, ' ').split(' ');
                (_b = this.template.classList).add.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this.appliedClasses));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomTemplate.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return getComputedStyle(this.template).visibility === 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} properties
     * @return {?}
     */
    RedZoomTemplate.prototype.setProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        for (var name_1 in properties) {
            this.template.style.setProperty(name_1, properties[name_1]);
        }
    };
    /**
     * @return {?}
     */
    RedZoomTemplate.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.template.classList.remove('red-zoom--active');
        if (this.isHidden) {
            this.template.remove();
        }
    };
    /**
     * @return {?}
     */
    RedZoomTemplate.prototype.attach = /**
     * @return {?}
     */
    function () {
        document.body.appendChild(this.template);
    };
    /**
     * @return {?}
     */
    RedZoomTemplate.prototype.activate = /**
     * @return {?}
     */
    function () {
        this.template.classList.add('red-zoom--active');
    };
    return RedZoomTemplate;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RedZoomImage = /** @class */ (function () {
    function RedZoomImage(element, listener, className) {
        var _this = this;
        if (element === void 0) { element = null; }
        if (listener === void 0) { listener = (/**
         * @return {?}
         */
        function () { }); }
        if (className === void 0) { className = null; }
        this.element = element;
        this.listener = listener;
        this.pending = false;
        if (element === null) {
            this.element = document.createElement('img');
        }
        /** @type {?} */
        var _listener = (/**
         * @return {?}
         */
        function () { return _this.listener(); });
        this.element.addEventListener('load', _listener);
        this.element.addEventListener('error', _listener);
        this.destroy = (/**
         * @return {?}
         */
        function () {
            _this.element.removeEventListener('load', _listener);
            _this.element.removeEventListener('error', _listener);
        });
        if (className !== null) {
            this.element.classList.add(className);
        }
    }
    Object.defineProperty(RedZoomImage.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return { x: this.width, y: this.height };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "naturalWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.naturalWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "naturalHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.naturalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "naturalSize", {
        get: /**
         * @return {?}
         */
        function () {
            return { x: this.naturalWidth, y: this.naturalHeight };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "style", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "styleSize", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.element.style.width = value.x;
            this.element.style.height = value.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.pending) {
                return 'pending';
            }
            if (this.element.complete) {
                if (!this.element.src) {
                    return 'pending';
                }
                else if (this.naturalWidth === 0) {
                    return 'error';
                }
                return 'loaded';
            }
            return 'loading';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomImage.prototype, "src", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.pending = false;
            this.element.setAttribute('src', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RedZoomImage.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.pending = true;
        this.listener();
    };
    return RedZoomImage;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} a
 * @param {?} op
 * @param {?} b
 * @return {?}
 */
function calc(a, op, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case 'min': return Math.min(a, b);
        case 'max': return Math.max(a, b);
    }
}
/**
 * @record
 * @template T
 */
function Vector() { }
if (false) {}
/**
 * @param {?} rect
 * @return {?}
 */
function fromRectPos(rect) {
    return { x: rect.left, y: rect.top };
}
/**
 * @param {?} rect
 * @return {?}
 */
function fromRectSize(rect) {
    return { x: rect.width, y: rect.height };
}
/**
 * @return {?}
 */
function fromScroll() {
    return { x: scrollX, y: scrollY };
}
/**
 * @param {?} event
 * @return {?}
 */
function fromMouseEvent(event) {
    return add({ x: event.clientX, y: event.clientY }, fromScroll());
}
/**
 * @param {?} a
 * @param {?} op
 * @param {?} b
 * @return {?}
 */
function op(a, op, b) {
    if (typeof b === 'number') {
        b = { x: b, y: b };
    }
    return {
        x: calc(a.x, op, b.x),
        y: calc(a.y, op, b.y)
    };
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function add(a, b) {
    return op(a, '+', b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sub(a, b) {
    return op(a, '-', b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function mul(a, b) {
    return op(a, '*', b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function div(a, b) {
    return op(a, '/', b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function min(a, b) {
    return op(a, 'min', b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function max(a, b) {
    return op(a, 'max', b);
}
/**
 * @param {?} a
 * @return {?}
 */
function round(a) {
    return map(a, Math.round);
}
/**
 * @template T, B
 * @param {?} a
 * @param {?} fn
 * @return {?}
 */
function map(a, fn) {
    return { x: fn(a.x, 'x'), y: fn(a.y, 'y') };
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equal(a, b) {
    if (typeof b === 'number') {
        b = { x: b, y: b };
    }
    return {
        x: a.x === b.x,
        y: a.y === b.y,
    };
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function notEqual(a, b) {
    return { x: a.x !== b.x, y: a.y !== b.y };
}
/**
 * @param {?} a
 * @return {?}
 */
function flatMax(a) {
    return Math.max(a.x, a.y);
}
/**
 * @param {?} a
 * @return {?}
 */
function flatMin(a) {
    return Math.min(a.x, a.y);
}
/**
 * @param {?} a
 * @return {?}
 */
function flatOr(a) {
    return a.x || a.y;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Session() { }
if (false) {}
var RedZoomDirective = /** @class */ (function () {
    function RedZoomDirective(element, renderer, zone, platformId) {
        var _this = this;
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
        this.unlisten = (/**
         * @return {?}
         */
        function () { });
        this.onImageChangeStatus = ((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var previousStatus;
            return (/**
             * @return {?}
             */
            function () {
                if (previousStatus === _this.status) {
                    return;
                }
                previousStatus = _this.status;
                _this.onImageChangeStatusDistinct();
            });
        }))();
        this.onImageChangeStatusDistinct = (/**
         * @return {?}
         */
        function () {
            _this.template.status = _this.status;
            if (_this.status === 'loaded') {
                _this.template.setProperties({
                    '--red-zoom-lens-image-natural-w': _this.lensImage.naturalWidth + "px",
                    '--red-zoom-lens-image-natural-h': _this.lensImage.naturalHeight + "px",
                });
                if (_this.session) {
                    _this.calcScaleFactor();
                    _this.calcFrameSize();
                    _this.move();
                    _this.scaleFactor = _this.lensImage.width / _this.lensImage.naturalWidth;
                }
            }
        });
        this.mouseEnter = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.cancelable) {
                event.preventDefault();
            }
            _this.session = {
                active: false,
                thumbSize: null,
                thumbPos: null,
                lensContainerSize: null,
                lensImageSize: null,
                frameSize: null,
                mousePos: fromMouseEvent(event),
                destroy: (/**
                 * @return {?}
                 */
                function () { }),
            };
            /** @type {?} */
            var onWheel = (/**
             * @param {?} wheelEvent
             * @return {?}
             */
            function (wheelEvent) {
                if (!wheelEvent.cancelable || _this.status !== 'loaded' || !_this.wheel) {
                    return;
                }
                wheelEvent.preventDefault();
                /** @type {?} */
                var delta = Math.sign(wheelEvent.deltaY);
                _this.scaleFactor += .01 * -delta;
                _this.calcScaleFactor();
                _this.calcFrameSize();
                _this.onMouseMove(wheelEvent);
            });
            /** @type {?} */
            var onMove = (/**
             * @param {?} mouseEvent
             * @return {?}
             */
            function (mouseEvent) {
                _this.onMouseMove(mouseEvent);
            });
            /** @type {?} */
            var onLeave = (/**
             * @return {?}
             */
            function () {
                _this.session = null;
                _this.template.detach();
                unListenMove();
                unListenLeave();
                unListenWheel();
            });
            /** @type {?} */
            var unListenMove;
            /** @type {?} */
            var unListenLeave;
            /** @type {?} */
            var unListenWheel;
            if (_this.behavior === 'hover') {
                unListenMove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', onMove);
                unListenLeave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', onLeave);
            }
            else {
                unListenMove = _this.renderer.listen(document, 'mousemove', onMove);
                unListenLeave = _this.renderer.listen(document, 'mouseup', onLeave);
            }
            unListenWheel = _this.renderer.listen(_this.element.nativeElement, 'wheel', onWheel);
            _this.onMouseMove(event);
            _this.forceReflow();
            _this.template.activate();
            if (_this.status !== 'loaded') {
                _this.loadLensImage();
                _this.loadFrameImage();
            }
            _this.session.destroy = onLeave;
        });
        this.onMouseMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.isImage && _this.thumbImage.status !== 'loaded') {
                return;
            }
            if (!_this.session.active) {
                _this.session.active = true;
                _this.initSession();
            }
            _this.session.mousePos = fromMouseEvent(event);
            if (_this.status === 'loaded') {
                cancelAnimationFrame(_this.requestAnimationFrameId);
                _this.requestAnimationFrameId = requestAnimationFrame((/**
                 * @return {?}
                 */
                function () { return _this.move(); }));
            }
        });
    }
    Object.defineProperty(RedZoomDirective.prototype, "isImage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.nativeElement.tagName === 'IMG';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedZoomDirective.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var status = 'loaded';
            /** @type {?} */
            var images = [this.frameImage, this.lensImage];
            if (this.isImage) {
                images.push(this.thumbImage);
            }
            try {
                for (var images_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(images), images_1_1 = images_1.next(); !images_1_1.done; images_1_1 = images_1.next()) {
                    var image = images_1_1.value;
                    if (status === 'error' || image.status === 'error') {
                        status = 'error';
                    }
                    else if (status === 'loading' || image.status === 'loading') {
                        status = 'loading';
                    }
                    else if (status === 'pending' || image.status === 'pending') {
                        status = 'pending';
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (images_1_1 && !images_1_1.done && (_a = images_1.return)) _a.call(images_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return status;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.listen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startEventName = {
            'hover': 'mouseenter',
            'grab': 'mousedown',
        }[this.behavior];
        this.unlisten();
        this.unlisten = this.renderer.listen(this.element.nativeElement, startEventName, this.mouseEnter);
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.template = new RedZoomTemplate();
            _this.template.classes = _this.classes;
            _this.template.errorMessage.innerHTML = _this.errorMessage;
            if (_this.isImage) {
                _this.thumbImage = new RedZoomImage(_this.element.nativeElement, _this.onImageChangeStatus);
            }
            _this.frameImage = new RedZoomImage(null, _this.onImageChangeStatus, 'red-zoom__frame-image');
            _this.lensImage = new RedZoomImage(null, _this.onImageChangeStatus, 'red-zoom__lens-image');
            if (!_this.lazy) {
                _this.loadFrameImage();
                _this.loadLensImage();
            }
            _this.listen();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RedZoomDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (this.session) {
            this.session.destroy();
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.onChangeThumbSrc = /**
     * @return {?}
     */
    function () {
        this.frameImage.reset();
        if (!this.lazy || this.session) {
            this.loadFrameImage();
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.onChangeLensSrc = /**
     * @return {?}
     */
    function () {
        this.lensImage.reset();
        if (!this.lazy || this.session) {
            this.loadLensImage();
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.getThumbSrc = /**
     * @return {?}
     */
    function () {
        if (!this.isImage || !this.src) {
            return this.thumbSrc;
        }
        return this.src;
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.loadLensImage = /**
     * @return {?}
     */
    function () {
        if (this.lensImage.status !== 'loaded') {
            this.lensImage.src = this.lensSrc;
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.loadFrameImage = /**
     * @return {?}
     */
    function () {
        if (this.frameImage.status !== 'loaded') {
            this.frameImage.src = this.getThumbSrc();
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.initSession = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var thumbRect = this.element.nativeElement.getBoundingClientRect();
        this.session.thumbSize = fromRectSize(thumbRect);
        this.session.thumbPos = add(fromRectPos(thumbRect), fromScroll());
        this.template.attach();
        this.template.lensBody.appendChild(this.lensImage.element);
        this.template.frameBody.appendChild(this.frameImage.element);
        this.template.setProperties({
            '--red-zoom-thumb-x': this.session.thumbPos.x + "px",
            '--red-zoom-thumb-y': this.session.thumbPos.y + "px",
            '--red-zoom-thumb-w': this.session.thumbSize.x + "px",
            '--red-zoom-thumb-h': this.session.thumbSize.y + "px",
            '--red-zoom-thumb-size-max': flatMax(this.session.thumbSize) + "px",
            '--red-zoom-thumb-size-min': flatMin(this.session.thumbSize) + "px",
        });
        if (this.status === 'loaded') {
            this.calcScaleFactor();
            this.calcFrameSize();
            this.scaleFactor = this.lensImage.width / this.lensImage.naturalWidth;
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.calcScaleFactor = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scaledSize = mul(this.lensImage.naturalSize, this.scaleFactor);
        this.lensImage.styleSize = map(scaledSize, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c + "px"; }));
        /** @type {?} */
        var scaleFactorIsLimited = flatOr(notEqual(this.lensImage.size, round(scaledSize)));
        if (scaleFactorIsLimited) {
            this.scaleFactor = flatMax(div(this.lensImage.size, this.lensImage.naturalSize));
            this.lensImage.styleSize = map(mul(this.lensImage.naturalSize, this.scaleFactor), (/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c + "px"; }));
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.calcFrameSize = /**
     * @return {?}
     */
    function () {
        this.session.lensContainerSize = fromRectSize(this.template.lensBody.getBoundingClientRect());
        this.session.lensImageSize = fromRectSize(this.lensImage.element.getBoundingClientRect());
        this.session.frameSize = min(this.session.thumbSize, round(mul(this.session.thumbSize, div(this.session.lensContainerSize, this.session.lensImageSize))));
        this.template.setProperties({
            '--red-zoom-frame-w': this.session.frameSize.x + "px",
            '--red-zoom-frame-h': this.session.frameSize.y + "px",
        });
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.move = /**
     * @return {?}
     */
    function () {
        if (!this.session) {
            return;
        }
        var _a = this.session, mousePos = _a.mousePos, thumbSize = _a.thumbSize, thumbPos = _a.thumbPos, frameSize = _a.frameSize, lensContainerSize = _a.lensContainerSize, lensImageSize = _a.lensImageSize;
        this.template.setProperties({
            '--red-zoom-mouse-x': mousePos.x + "px",
            '--red-zoom-mouse-y': mousePos.y + "px",
        });
        /** @type {?} */
        var framePos = sub(mousePos, div(frameSize, 2));
        /** @type {?} */
        var frameLimitedPos = min(max(framePos, thumbPos), sub(add(thumbPos, thumbSize), frameSize));
        /** @type {?} */
        var frameImagePos = sub(thumbPos, round(frameLimitedPos));
        this.template.setProperties({
            '--red-zoom-frame-x': Math.round(frameLimitedPos.x) + "px",
            '--red-zoom-frame-y': Math.round(frameLimitedPos.y) + "px",
            '--red-zoom-frame-image-x': Math.round(frameImagePos.x) + "px",
            '--red-zoom-frame-image-y': Math.round(frameImagePos.y) + "px",
        });
        /** @type {?} */
        var frameRelativePos = map(sub(thumbSize, frameSize), (/**
         * @param {?} value
         * @param {?} axis
         * @return {?}
         */
        function (value, axis) {
            return value === 0 ? 0 : (frameLimitedPos[axis] - thumbPos[axis]) / value;
        }));
        /** @type {?} */
        var lensImagePos = mul(frameRelativePos, sub(lensImageSize, lensContainerSize));
        /** @type {?} */
        var lensImageCenterOffset = max(div(sub(lensContainerSize, lensImageSize), 2), 0);
        /** @type {?} */
        var lensImageFrameOffset = mul(div(sub(framePos, frameLimitedPos), div(frameSize, 2)), div(lensContainerSize, 2));
        this.template.setProperties({
            '--red-zoom-lens-image-base-x': -lensImagePos.x + "px",
            '--red-zoom-lens-image-base-y': -lensImagePos.y + "px",
            '--red-zoom-lens-image-center-offset-x': lensImageCenterOffset.x + "px",
            '--red-zoom-lens-image-center-offset-y': lensImageCenterOffset.y + "px",
            '--red-zoom-lens-image-frame-offset-x': -lensImageFrameOffset.x + "px",
            '--red-zoom-lens-image-frame-offset-y': -lensImageFrameOffset.y + "px",
        });
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.invalidate = /**
     * @return {?}
     */
    function () {
        if (this.session && this.session.active) {
            this.initSession();
            this.move();
        }
    };
    /**
     * @return {?}
     */
    RedZoomDirective.prototype.forceReflow = /**
     * @return {?}
     */
    function () {
        this.element.nativeElement.getBoundingClientRect();
    };
    RedZoomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[redZoom]',
                    exportAs: 'redZoom',
                },] }
    ];
    /** @nocollapse */
    RedZoomDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    RedZoomDirective.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.src',] }],
        lensSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoom',] }],
        thumbSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomThumb',] }],
        lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomLazy',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomClass',] }],
        behavior: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomBehavior',] }],
        wheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomMouseWheel',] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomErrorMessage',] }]
    };
    return RedZoomDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RedZoomModule = /** @class */ (function () {
    function RedZoomModule() {
    }
    RedZoomModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        RedZoomDirective
                    ],
                    exports: [
                        RedZoomDirective
                    ]
                },] }
    ];
    return RedZoomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-red-zoom.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"angular-logo\">\n    <svg class=\"angular-logo__image\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100px\" height=\"90px\">\n        <path class=\"angular-logo__part-one\" d=\"M8,67L50,90L50,-0L-0,-0L8,67Z\"/>\n        <path class=\"angular-logo__part-two\" d=\"M92,67L50,90L50,-0L100,-0L92,67Z\"/>\n        <path class=\"angular-logo__letter\" d=\"M80,61.750 L52.660,-0 L47.340,-0 L20,61.750 C19.530,62.810 20.300,64 21.460,64 L29.610,64 C30.450,64 31.190,63.480 31.490,62.700 L36.760,48.650 C36.900,48.260 37.280,48 37.690,48 L62.410,48 C62.830,48 63.210,48.260 63.350,48.650 L68.520,62.690 C68.810,63.480 69.560,64 70.390,64 L78.540,64 C79.700,64 80.470,62.810 80,61.750 ZM57.060,39 L42.940,39 C42.010,39 41.380,38.060 41.730,37.210 L48.980,19.490 C49.350,18.580 50.650,18.580 51.020,19.490 L58.270,37.210 C58.620,38.060 57.990,39 57.060,39 Z\"/>\n    </svg>\n</div>\n\n\n<div class=\"intro\">\n    <svg class=\"intro__logo logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"248px\" height=\"39px\">\n        <path class=\"logo__part-one\" d=\"M76,38.740 L76,39 L65.500,39 C64.125,39 63,37.875 63,36.500 L63,2.500 C63,1.125 64.125,-0 65.500,-0 L73,-0 C74.020,-0 75.030,0.090 76,0.260 C84.510,1.680 91,9.080 91,18 L91,21 C91,29.920 84.510,37.320 76,38.740 ZM84,18 C84,11.925 79.075,7 73,7 L71.500,7 C70.672,7 70,7.671 70,8.500 L70,30.500 C70,31.328 70.672,32 71.500,32 L73,32 C79.075,32 84,27.075 84,21 L84,18 ZM57,39 L37,39 L34,39 C32.895,39 32,38.104 32,37 L32,2 C32,0.895 32.895,-0 34,-0 L37,-0 L57,-0 C58.104,-0 59,0.895 59,2 L59,5 C59,6.105 58.104,7 57,7 L39,7 L39,15 L54,15 C55.104,15 56,15.895 56,17 L56,20 C56,21.104 55.104,22 54,22 L39,22 L39,32 L57,32 C58.104,32 59,32.895 59,34 L59,37 C59,38.104 58.104,39 57,39 ZM27.344,34.556 C27.774,35.299 28,36.142 28,37 C28,38.104 27.105,39 26,39 L22.984,39 C22.270,39 21.610,38.619 21.253,38 L16.630,30 L14.900,26.990 C14.770,27 14.630,27 14.500,27 L8,27 C7.448,27 7,27.448 7,28 L7,37 C7,38.100 6.100,39 5,39 L2,39 C0.900,39 -0,38.100 -0,37 L-0,2 C-0,0.900 0.900,-0 2,-0 L14.500,-0 C18.740,-0 22.520,1.950 25,5.010 C26.880,7.330 28,10.280 28,13.500 C28,16.720 26.880,19.670 25,21.990 C24.080,23.120 22.990,24.100 21.760,24.890 L24.710,30 L27.344,34.556 ZM18,8.020 C16.990,7.380 15.790,7 14.500,7 L8.500,7 C7.671,7 7,7.671 7,8.500 L7,18.500 C7,19.328 7.671,20 8.500,20 L14.500,20 C15.790,20 16.990,19.620 18,18.980 C19.800,17.820 21,15.800 21,13.500 C21,11.200 19.800,9.180 18,8.020 Z\"/>\n        <path class=\"logo__part-two\" d=\"M246,39 L243,39 C241.895,39 241,38.105 241,37 L241,14.921 C241,14.144 240.002,13.823 239.550,14.456 L232.898,23.746 C232.334,24.533 231.426,25 230.458,25 L228.542,25 C227.574,25 226.666,24.533 226.103,23.746 L219.451,14.456 C218.998,13.823 218,14.144 218,14.921 L218,37 C218,38.105 217.105,39 216,39 L213,39 C211.895,39 211,38.105 211,37 L211,2.200 C211,0.985 211.985,-0 213.200,-0 L215.458,-0 C216.426,-0 217.334,0.467 217.898,1.254 L228.687,16.333 C229.086,16.891 229.914,16.891 230.313,16.333 L241.103,1.254 C241.666,0.467 242.574,-0 243.542,-0 L245.800,-0 C247.015,-0 248,0.985 248,2.200 L248,37 C248,38.105 247.105,39 246,39 ZM187.500,39 C176.730,39 168,30.270 168,19.500 C168,8.730 176.730,-0 187.500,-0 C198.270,-0 207,8.730 207,19.500 C207,30.270 198.270,39 187.500,39 ZM187.500,7 C180.596,7 175,12.596 175,19.500 C175,26.404 180.596,32 187.500,32 C194.404,32 200,26.404 200,19.500 C200,12.596 194.404,7 187.500,7 ZM144.500,39 C133.730,39 125,30.270 125,19.500 C125,8.730 133.730,-0 144.500,-0 C155.270,-0 164,8.730 164,19.500 C164,30.270 155.270,39 144.500,39 ZM144.500,7 C137.596,7 132,12.596 132,19.500 C132,26.404 137.596,32 144.500,32 C151.404,32 157,26.404 157,19.500 C157,12.596 151.404,7 144.500,7 ZM122,39 L97,39 C95.900,39 95,38.100 95,37 L95,33.404 C95,32.495 95.310,31.613 95.878,30.904 L114.369,7.812 C114.632,7.485 114.398,7 113.979,7 L97,7 C95.900,7 95,6.100 95,5 L95,2 C95,0.900 95.900,-0 97,-0 L122,-0 C123.100,-0 124,0.900 124,2 L124,5.595 C124,6.504 123.690,7.387 123.122,8.096 L104.621,31.187 C104.359,31.515 104.592,32 105.011,32 L122,32 C123.100,32 124,32.900 124,34 L124,37 C124,38.100 123.100,39 122,39 Z\"/>\n    </svg>\n    <div class=\"intro__version\">\n        <a href=\"https://github.com/scompiler/red-zoom/releases\">Version {{ version }}</a>\n    </div>\n    <div class=\"intro__text\">\n        RedZoom is a modern very easy-to-use image zoom library which made as\n        Angular directive and fully stylable via CSS/SCSS.\n    </div>\n\n    <div class=\"intro__code\">\n        <code>npm install ngx-red-zoom</code>\n    </div>\n\n    <div class=\"intro__code-caption\">\n        Click to copy\n    </div>\n</div>\n\n\n<app-example-n01></app-example-n01>\n<app-example-n02></app-example-n02>\n<app-example-n03></app-example-n03>\n<app-example-n04></app-example-n04>\n<app-example-n05></app-example-n05>\n<app-example-n06></app-example-n06>\n<app-example-n07></app-example-n07>\n\n<app-section-css-variables></app-section-css-variables>\n\n<div class=\"copyright\">\n    Code licensed under an MIT License<br>\n    Copyright © {{ year }} <a href=\"\">Konstantin Veselovsky</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n01/example-n01.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n01/example-n01.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img src=\"./assets/image-1.jpg\" alt=\"\" width=\"320\" redZoom=\"./assets/image-1-full.jpg\" redZoomClass=\"red-zoom--style--window\" [redZoomLazy]=\"true\" class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Getting Started</h2>\n\n            <ol>\n                <li>\n                    To install RedZoom, run the command below:\n                    <pre><code>npm install ngx-red-zoom</code></pre>\n                </li>\n                <li>\n                    Import module:\n                    <pre><code>import {{ '{' }} RedZoomModule } from 'ngx-red-zoom';\n\n@NgModule({{ '{' }}\n    imports: [\n        RedZoomModule\n    ]\n})\nexport class AppModule {{ '{' }} }</code></pre>\n                </li>\n                <li>\n                    Import styles:\n                    <pre><code>@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/style-window.scss';</code></pre>\n                </li>\n                <li>\n                    Add directive to your image tag:\n                    <pre><code>&lt;img\n    src=\"example.jpg\"\n    redZoom=\"example.full.jpg\"\n    redZoomClass=\"red-zoom--style--window\"\n&gt;</code></pre>\n                </li>\n            </ol>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n02/example-n02.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n02/example-n02.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img src=\"./assets/image-2.jpg\" alt=\"\" width=\"320\" redZoom=\"./assets/image-2-full.jpg\" redZoomClass=\"red-zoom--style--window red-zoom--mode--{{ mode.value }}\" [redZoomLazy]=\"false\" class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Size And Position Of The Lens</h2>\n\n            <p>\n                You can set any size of the lens image via CSS/SCSS, red-zoom automatically detect it,\n                and you do not need to edit ts/html files for this purpose.\n                This also means that you can set different sizes of the lens depend on screen size using CSS media queries.\n            </p>\n\n            <div class=\"button-group\">\n                <label>\n                    <input type=\"radio\" [formControl]=\"mode\" name=\"mode\" value=\"square\">\n                    <span>Square</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"mode\" name=\"mode\" value=\"landscape\">\n                    <span>Landscape</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"mode\" name=\"mode\" value=\"portrait\">\n                    <span>Portrait</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"mode\" name=\"mode\" value=\"fixed\">\n                    <span>Fixed</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"mode\" name=\"mode\" value=\"overlay\">\n                    <span>Overlay</span>\n                </label>\n            </div>\n\n            <p>\n                Use the following CSS variables to position the lens relative to the thumbnail:\n            </p>\n\n            <table>\n                <tbody>\n                <tr>\n                    <th>--red-zoom-thumb-[x/y]</th>\n                    <td>Thumbnail position relative to the page in pixels.</td>\n                </tr>\n                <tr>\n                    <th>--red-zoom-thumb-[w/h]</th>\n                    <td>Thumbnail size in pixels.</td>\n                </tr>\n                <tr>\n                    <th>--red-zoom-thumb-size-[max/min]</th>\n                    <td>Max/min size of thumbnail in pixels.</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n03/example-n03.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n03/example-n03.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img\n            src=\"./assets/image-4.jpg\"\n            alt=\"\"\n            width=\"320\"\n            redZoom=\"./assets/image-4-full.jpg\"\n            [redZoomLazy]=\"false\"\n            [redZoomClass]=\"'red-zoom--style--'+style.value\"\n            class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Customization And Styles</h2>\n\n            <div class=\"button-group\">\n                <label>\n                    <input type=\"radio\" [formControl]=\"style\" name=\"style\" value=\"magnifier\">\n                    <span>Magnifier</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"style\" name=\"style\" value=\"window\">\n                    <span>Window</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"style\" name=\"style\" value=\"overlay\">\n                    <span>Overlay</span>\n                </label>\n            </div>\n\n            <p>\n                RedZoom comes with three predefined styles, you can use one of them as shown below:\n            </p>\n\n            <pre><code class=\"code\"><span class=\"code__comment\">// sass</span>\n@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/style-<span class=\"code__mark\">{{ style.value }}</span>.scss';\n\n<span class=\"code__comment\">// html</span>\n&lt;img\n    src=\"./assets/image.jpg\"\n    redZoom=\"./assets/image-full.jpg\"\n    redZoomClass=\"red-zoom--style--<span>{{ style.value }}</span>\"\n&gt;</code></pre>\n\n            <p>\n                You can also create your own amazing style or customize an existing style using mixins:\n            </p>\n\n            <pre><code class=\"code\"><span class=\"code__comment\">// sass</span>\n@import '~ngx-red-zoom/styles/base.scss';\n@import '~ngx-red-zoom/styles/mixins/style-<span class=\"code__mark\">{{ style.value }}</span>.scss';\n\n.red-zoom--style--custom {{ '{' }}\n    @include red-zoom-style-<span class=\"code__mark\">{{ style.value }}</span>(\n        // you settings here\n    );\n}</code></pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n04/example-n04.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n04/example-n04.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img\n            src=\"./assets/image-3.jpg\"\n            alt=\"\"\n            width=\"320\"\n            redZoom=\"./assets/image-3-full.jpg\"\n            [redZoomLazy]=\"false\"\n            redZoomClass=\"red-zoom--style--window\"\n            [redZoomBehavior]=\"behavior.value\"\n            [style.cursor]=\"behavior.value == 'hover' ? 'crosshair' : 'zoom-in'\"\n            class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Behavior And Activation Event</h2>\n\n            <div class=\"button-group\">\n                <label>\n                    <input type=\"radio\" [formControl]=\"behavior\" name=\"behavior\" value=\"hover\">\n                    <span>Hover</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"behavior\" name=\"behavior\" value=\"grab\">\n                    <span>Grab</span>\n                </label>\n            </div>\n\n            <p>\n                Choose your desired behavior:\n            </p>\n\n            <pre><code>&lt;img\n    src=\"image.jpg\"\n    redZoom=\"image-full.jpg\"\n    redZoomBehavior=\"{{ behavior.value }}\"\n&gt;</code></pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n05/example-n05.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n05/example-n05.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img\n            src=\"./assets/image-5.jpg\"\n            alt=\"\"\n            width=\"320\"\n            [redZoom]=\"url.value === 'correct' ? './assets/image-5-full.jpg' : './assets/404.jpg'\"\n            redZoomClass=\"red-zoom--style--window\"\n            [redZoomLazy]=\"true\"\n            class=\"zoom\"\n        >\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Error Handling</h2>\n\n            <div class=\"button-group\">\n                <label>\n                    <input type=\"radio\" [formControl]=\"url\" name=\"error\" value=\"incorrect\">\n                    <span>Incorrect URL</span>\n                </label>\n                <label>\n                    <input type=\"radio\" [formControl]=\"url\" name=\"error\" value=\"correct\">\n                    <span>Correct URL</span>\n                </label>\n            </div>\n\n            <p>\n                If an error occurs while loading the image, RedZoom will display a corresponding error message.\n                You can also provide your own error message:\n            </p>\n\n            <pre><code>&lt;img\n    src=\"image.jpg\"\n    redZoom=\"{{ url.value === 'correct' ? 'image-full.jpg' : '404.jpg' }}\"\n    redZoomErrorMessage=\"Custom error message\"\n&gt;</code></pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n06/example-n06.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n06/example-n06.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img [src]=\"currentImage.value.thumbnail\" alt=\"\" width=\"320\" [redZoom]=\"currentImage.value.full\" redZoomClass=\"red-zoom--style--window\" [redZoomLazy]=\"true\" class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Gallery</h2>\n\n            <div class=\"radio-image\">\n                <label *ngFor=\"let image of images\">\n                    <input type=\"radio\" [formControl]=\"currentImage\" name=\"gallery\" [value]=\"image\">\n                    <span>\n                        <img [src]=\"image.thumbnail\" alt=\"\">\n                    </span>\n                </label>\n            </div>\n\n            <p>RedZoom supports hot swap images. So you can use it in image gallery.</p>\n\n            <pre><code>// code\nconst currentImage = {{ '{' }}\n    thumbnail: '{{ currentImage.value.thumbnail }}',\n    full: '{{ currentImage.value.full }}',\n};\n\n// template\n&lt;img\n    [src]=\"currentImage.thumbnail\"\n    [redZoom]=\"currentImage.full\"\n&gt;</code></pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n07/example-n07.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n07/example-n07.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\" [redZoom]=\"currentImage.full\" [redZoomThumb]=\"currentImage.thumbnail\" [redZoomClass]=\"classes\" [redZoomLazy]=\"true\" #redZoom=\"redZoom\">\n        <owl-carousel-o [options]=\"options\" (dragging)=\"dragged($event)\" (translated)=\"translated($event)\">\n            <ng-container *ngFor=\"let image of images\">\n                <ng-template carouselSlide>\n                    <img [src]=\"image.thumbnail\" alt=\"\" width=\"320\" class=\"zoom\">\n                </ng-template>\n            </ng-container>\n        </owl-carousel-o>\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Carousel</h2>\n            <p>\n                You can also use the redZoom directive, for example with a DIV tag.\n                This ability is useful when your images are in a carousel, and they can change their position when swiping.\n            </p>\n            <pre><code>&lt;div\n    [redZoom]=\"currentImage.full\"\n    [redZoomThumb]=\"currentImage.thumbnail\"\n&gt;\n    &lt;owl-carousel-o&gt;\n        &lt;ng-container *ngFor=\"let image of images\"&gt;\n            &lt;ng-template carouselSlide&gt;\n                &lt;img [src]=\"image.thumbnail\"&gt;\n            &lt;/ng-template&gt;\n        &lt;/ng-container&gt;\n    &lt;/owl-carousel-o&gt;\n&lt;/div&gt;</code></pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/section-css-variables/section-css-variables.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/section-css-variables/section-css-variables.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"typography\">\r\n    <h2>Features</h2>\r\n    <ul>\r\n        <li>Responsive;</li>\r\n        <li>Support server side rendering (SSR);</li>\r\n        <li>Chrome (and others based on chrome), Safari, Firefox, Edge;</li>\r\n        <li>Customizing via CSS/SCSS;</li>\r\n        <li>Lazy loading;</li>\r\n        <li>Error Handling;</li>\r\n        <li>Support hot swap images;</li>\r\n    </ul>\r\n\r\n    <h2>Anatomy And Terms</h2>\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>div.red-zoom</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>— div.red-zoom__overlay</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>— div.red-zoom__error</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>—— div.red-zoom__error-message</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>— div.red-zoom__frame</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>—— div.red-zoom__frame-body</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>——— img.red-zoom__frame-image</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>— div.red-zoom__lens</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>—— div.red-zoom__lens-body</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>——— img.red-zoom__lens-image</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <p><strong>Terms</strong></p>\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>thumbnail</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>overlay</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>lens</th>\r\n            <td>\r\n                <i>TODO: Describe.</i><br>\r\n                <i>TODO: Rename to 'frame' or 'preview'.</i><br>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>window</th>\r\n            <td>\r\n                <i>TODO: Describe.</i><br>\r\n                <i>TODO: Rename to 'lens'.</i><br>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <h2>API</h2>\r\n\r\n    <h3>Inputs</h3>\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>redZoom</th>\r\n            <td>string</td>\r\n            <td>\r\n                The path to the full version of the image. Required. Can be empty.<br>\r\n                <i>If left blank, the path to the full version of the image will be the same as in the <code>src</code> attribute TODO: not implemented.</i>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomThumb</th>\r\n            <td>string</td>\r\n            <td>TODO: Describe.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomLazy</th>\r\n            <td>boolean</td>\r\n            <td>If true, the full version of the image will only start loading after the activation event (mouseenter/mousedown) is triggered. (default: false)</td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomBehavior</th>\r\n            <td>string</td>\r\n            <td>\r\n                Activation event. (default: 'hover')<br>\r\n                Possible values: <code>'hover'</code>, <code>'grab'</code>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomClass</th>\r\n            <td>string</td>\r\n            <td>A list of CSS classes that should be applied to the root (<code>.red-zoom</code>) element.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomMouseWheel</th>\r\n            <td>boolean</td>\r\n            <td>\r\n                Enables or disables changing the magnification factor using the mouse wheel. (default: true)\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomTouch</th>\r\n            <td>boolean</td>\r\n            <td><i>TODO: Not implemented.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomGestures</th>\r\n            <td>boolean</td>\r\n            <td><i>TODO: Not implemented.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>redZoomErrorMessage</th>\r\n            <td>string</td>\r\n            <td>Use this attribute to provide your own error message.</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <h3>Outputs</h3>\r\n\r\n    <p>...</p>\r\n\r\n    <h3>Methods</h3>\r\n\r\n    <p>Exported as: <code>redZoom</code></p>\r\n\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>disable(): void</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        <tr>\r\n            <th>enable(): void</th>\r\n            <td><i>TODO: Describe.</i></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <h2>CSS variables</h2>\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>--red-zoom-thumb-[x/y]</th>\r\n            <td>Thumbnail position relative to the page in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-thumb-[w/h]</th>\r\n            <td>Thumbnail size in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-thumb-size-[max/min]</th>\r\n            <td>Max/min size of thumbnail in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-frame-[x/y]</th>\r\n            <td>Position of the frame relative to the page in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-frame-[w/h]</th>\r\n            <td>Size of the frame in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-frame-image-[x/y]</th>\r\n            <td>Position of the frame image relative to the frame in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-lens-image-natural-[w/h]</th>\r\n            <td>Original size of lens image in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-lens-image-[x/y]</th>\r\n            <td>Lens image position relative to the lens in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-lens-image-center-offset-[x/y]</th>\r\n            <td>TODO: describe.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-lens-image-frame-offset-[x/y]</th>\r\n            <td>TODO: describe.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-scale-factor</th>\r\n            <td>TODO: Not implemented.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-mouse-[x/y]</th>\r\n            <td>Mouse position relative to the page in pixels.</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <h2>FAQ</h2>\r\n    <ul>\r\n        <li>How to limit zoom ratio? TODO: describe</li>\r\n    </ul>\r\n\r\n    <h2>Roadmap</h2>\r\n    <ul>\r\n        <li>Changing zoom ratio with touch gestures (pinch to zoom)</li>\r\n        <li>Support touch events</li>\r\n        <li>Support &lt;source&gt; tag and srcset attribute</li>\r\n        <li>Support keyboard</li>\r\n        <li>Reflect some settings in the CSS classes of the root element</li>\r\n        <li>Provide the ability to globally define settings</li>\r\n        <li>Support for scrollable containers</li>\r\n        <li>Add the ability to follow the scroll position</li>\r\n\r\n        <li>------</li>\r\n\r\n        <li>Describe how to set zoom ratio via CSS/SCSS</li>\r\n    </ul>\r\n\r\n    <h2>Changelog</h2>\r\n    <ul class=\"changelog\">\r\n        <li class=\"changelog__item\">\r\n            <div class=\"changelog__title\">October 14, 2019 — Version 0.1.0</div>\r\n\r\n            <ul class=\"changelog__list\">\r\n                <li>Initial release</li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ngx-red-zoom/package.json":
/*!********************************************!*\
  !*** ./projects/ngx-red-zoom/package.json ***!
  \********************************************/
/*! exports provided: name, version, peerDependencies, default */
/***/ (function(module) {

module.exports = {"name":"ngx-red-zoom","version":"0.1.0","peerDependencies":{"@angular/common":"^8.1.3","@angular/core":"^8.1.3"}};

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
/* harmony import */ var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ngx-red-zoom/package.json */ "./projects/ngx-red-zoom/package.json");
var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../projects/ngx-red-zoom/package.json */ "./projects/ngx-red-zoom/package.json", 1);




var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
        this.version = _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
        this.year = new Date().getFullYear();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.startTracking();
    };
    AppComponent.ctorParameters = function () { return [
        { type: angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-red-zoom */ "./dist/ngx-red-zoom/fesm5/ngx-red-zoom.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./example-n01/example-n01.component */ "./src/app/example-n01/example-n01.component.ts");
/* harmony import */ var _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./example-n02/example-n02.component */ "./src/app/example-n02/example-n02.component.ts");
/* harmony import */ var _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./example-n03/example-n03.component */ "./src/app/example-n03/example-n03.component.ts");
/* harmony import */ var _section_css_variables_section_css_variables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section-css-variables/section-css-variables.component */ "./src/app/section-css-variables/section-css-variables.component.ts");
/* harmony import */ var _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./example-n04/example-n04.component */ "./src/app/example-n04/example-n04.component.ts");
/* harmony import */ var _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./example-n05/example-n05.component */ "./src/app/example-n05/example-n05.component.ts");
/* harmony import */ var _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./example-n06/example-n06.component */ "./src/app/example-n06/example-n06.component.ts");
/* harmony import */ var _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./example-n07/example-n07.component */ "./src/app/example-n07/example-n07.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_9__["ExampleN01Component"],
                _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_10__["ExampleN02Component"],
                _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_11__["ExampleN03Component"],
                _section_css_variables_section_css_variables_component__WEBPACK_IMPORTED_MODULE_12__["SectionCssVariablesComponent"],
                _example_n04_example_n04_component__WEBPACK_IMPORTED_MODULE_13__["ExampleN04Component"],
                _example_n05_example_n05_component__WEBPACK_IMPORTED_MODULE_14__["ExampleN05Component"],
                _example_n06_example_n06_component__WEBPACK_IMPORTED_MODULE_15__["ExampleN06Component"],
                _example_n07_example_n07_component__WEBPACK_IMPORTED_MODULE_16__["ExampleN07Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_red_zoom__WEBPACK_IMPORTED_MODULE_3__["RedZoomModule"],
                angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2Module"].forRoot(),
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example-n01/example-n01.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n01/example-n01.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAxL2V4YW1wbGUtbjAxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n01/example-n01.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n01/example-n01.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN01Component", function() { return ExampleN01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleN01Component = /** @class */ (function () {
    function ExampleN01Component() {
    }
    ExampleN01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n01',
            template: __webpack_require__(/*! raw-loader!./example-n01.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n01/example-n01.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n01.component.scss */ "./src/app/example-n01/example-n01.component.scss")]
        })
    ], ExampleN01Component);
    return ExampleN01Component;
}());



/***/ }),

/***/ "./src/app/example-n02/example-n02.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n02/example-n02.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-zoom--mode--square .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-w, 0px);\n}\n\n.red-zoom--mode--landscape .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-h, 0px);\n  height: var(--red-zoom-thumb-w, 0px);\n}\n\n.red-zoom--mode--portrait .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom--mode--fixed .red-zoom__lens {\n  -webkit-transform: none;\n          transform: none;\n  position: fixed;\n  left: 40px;\n  top: auto;\n  bottom: 40px;\n  width: 320px;\n  height: 320px;\n}\n\n.red-zoom--mode--overlay .red-zoom__lens {\n  left: var(--red-zoom-thumb-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom--mode--overlay .red-zoom__frame {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS1uMDIvRjpcXHByb2plY3RzXFxyZWQtem9vbS9zcmNcXGFwcFxcZXhhbXBsZS1uMDJcXGV4YW1wbGUtbjAyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtcGxlLW4wMi9leGFtcGxlLW4wMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNEUjs7QURLSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNIUjs7QURPSTtFQUNJLG9GQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNMUjs7QURTSTtFQUNJLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ05SOztBRFVJO0VBQ0ksa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNQUjs7QURTSTtFQUNJLGFBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAyL2V4YW1wbGUtbjAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZC16b29tLS1tb2RlLS1zcXVhcmUge1xyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XHJcblxyXG4gICAgICAgIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWIteSwgMHB4KTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XHJcbiAgICB9XHJcbn1cclxuLnJlZC16b29tLS1tb2RlLS1sYW5kc2NhcGUge1xyXG4gICAgLnJlZC16b29tX19sZW5zIHtcclxuICAgICAgICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XHJcblxyXG4gICAgICAgIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xyXG4gICAgICAgIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWIteSwgMHB4KTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tcmVkLXpvb20tdGh1bWItaCwgMHB4KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XHJcbiAgICB9XHJcbn1cclxuLnJlZC16b29tLS1tb2RlLS1wb3J0cmFpdCB7XHJcbiAgICAucmVkLXpvb21fX2xlbnMge1xyXG4gICAgICAgIC0td2luZG93LXg6IGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWIteCwgMHB4KSArIHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCkgKyAzMnB4KTtcclxuXHJcbiAgICAgICAgbGVmdDogdmFyKC0td2luZG93LXgsIDBweCk7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1yZWQtem9vbS10aHVtYi15LCAwcHgpO1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWItaCwgMHB4KTtcclxuICAgIH1cclxufVxyXG4ucmVkLXpvb20tLW1vZGUtLWZpeGVkIHtcclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBib3R0b206IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbn1cclxuLnJlZC16b29tLS1tb2RlLS1vdmVybGF5IHtcclxuICAgIC5yZWQtem9vbV9fbGVucyB7XHJcbiAgICAgICAgbGVmdDogdmFyKC0tcmVkLXpvb20tdGh1bWIteCwgMHB4KTtcclxuICAgICAgICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWQtem9vbS10aHVtYi1oLCAwcHgpO1xyXG4gICAgfVxyXG4gICAgLnJlZC16b29tX19mcmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCIucmVkLXpvb20tLW1vZGUtLXNxdWFyZSAucmVkLXpvb21fX2xlbnMge1xuICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XG4gIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCk7XG59XG5cbi5yZWQtem9vbS0tbW9kZS0tbGFuZHNjYXBlIC5yZWQtem9vbV9fbGVucyB7XG4gIC0td2luZG93LXg6IGNhbGModmFyKC0tcmVkLXpvb20tdGh1bWIteCwgMHB4KSArIHZhcigtLXJlZC16b29tLXRodW1iLXcsIDBweCkgKyAzMnB4KTtcbiAgbGVmdDogdmFyKC0td2luZG93LXgsIDBweCk7XG4gIHRvcDogdmFyKC0tcmVkLXpvb20tdGh1bWIteSwgMHB4KTtcbiAgd2lkdGg6IHZhcigtLXJlZC16b29tLXRodW1iLWgsIDBweCk7XG4gIGhlaWdodDogdmFyKC0tcmVkLXpvb20tdGh1bWItdywgMHB4KTtcbn1cblxuLnJlZC16b29tLS1tb2RlLS1wb3J0cmFpdCAucmVkLXpvb21fX2xlbnMge1xuICAtLXdpbmRvdy14OiBjYWxjKHZhcigtLXJlZC16b29tLXRodW1iLXgsIDBweCkgKyB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpICsgMzJweCk7XG4gIGxlZnQ6IHZhcigtLXdpbmRvdy14LCAwcHgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLWgsIDBweCk7XG59XG5cbi5yZWQtem9vbS0tbW9kZS0tZml4ZWQgLnJlZC16b29tX19sZW5zIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDQwcHg7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiA0MHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMzIwcHg7XG59XG5cbi5yZWQtem9vbS0tbW9kZS0tb3ZlcmxheSAucmVkLXpvb21fX2xlbnMge1xuICBsZWZ0OiB2YXIoLS1yZWQtem9vbS10aHVtYi14LCAwcHgpO1xuICB0b3A6IHZhcigtLXJlZC16b29tLXRodW1iLXksIDBweCk7XG4gIHdpZHRoOiB2YXIoLS1yZWQtem9vbS10aHVtYi13LCAwcHgpO1xuICBoZWlnaHQ6IHZhcigtLXJlZC16b29tLXRodW1iLWgsIDBweCk7XG59XG4ucmVkLXpvb20tLW1vZGUtLW92ZXJsYXkgLnJlZC16b29tX19mcmFtZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/example-n02/example-n02.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n02/example-n02.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN02Component", function() { return ExampleN02Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ExampleN02Component = /** @class */ (function () {
    function ExampleN02Component() {
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('square');
    }
    ExampleN02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n02',
            template: __webpack_require__(/*! raw-loader!./example-n02.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n02/example-n02.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n02.component.scss */ "./src/app/example-n02/example-n02.component.scss")]
        })
    ], ExampleN02Component);
    return ExampleN02Component;
}());



/***/ }),

/***/ "./src/app/example-n03/example-n03.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n03/example-n03.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAzL2V4YW1wbGUtbjAzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n03/example-n03.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n03/example-n03.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN03Component", function() { return ExampleN03Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ExampleN03Component = /** @class */ (function () {
    function ExampleN03Component() {
        this.style = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('magnifier');
    }
    ExampleN03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n03',
            template: __webpack_require__(/*! raw-loader!./example-n03.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n03/example-n03.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n03.component.scss */ "./src/app/example-n03/example-n03.component.scss")]
        })
    ], ExampleN03Component);
    return ExampleN03Component;
}());



/***/ }),

/***/ "./src/app/example-n04/example-n04.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n04/example-n04.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA0L2V4YW1wbGUtbjA0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n04/example-n04.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n04/example-n04.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN04Component", function() { return ExampleN04Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ExampleN04Component = /** @class */ (function () {
    function ExampleN04Component() {
        this.behavior = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('hover');
    }
    ExampleN04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n04',
            template: __webpack_require__(/*! raw-loader!./example-n04.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n04/example-n04.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n04.component.scss */ "./src/app/example-n04/example-n04.component.scss")]
        })
    ], ExampleN04Component);
    return ExampleN04Component;
}());



/***/ }),

/***/ "./src/app/example-n05/example-n05.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n05/example-n05.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA1L2V4YW1wbGUtbjA1LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n05/example-n05.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n05/example-n05.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN05Component", function() { return ExampleN05Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ExampleN05Component = /** @class */ (function () {
    function ExampleN05Component() {
        this.url = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('incorrect');
    }
    ExampleN05Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n05',
            template: __webpack_require__(/*! raw-loader!./example-n05.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n05/example-n05.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n05.component.scss */ "./src/app/example-n05/example-n05.component.scss")]
        })
    ], ExampleN05Component);
    return ExampleN05Component;
}());



/***/ }),

/***/ "./src/app/example-n06/example-n06.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n06/example-n06.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA2L2V4YW1wbGUtbjA2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n06/example-n06.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n06/example-n06.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN06Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN06Component", function() { return ExampleN06Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ExampleN06Component = /** @class */ (function () {
    function ExampleN06Component() {
        this.images = [
            { thumbnail: './assets/image-6.jpg', full: './assets/image-6-full.jpg' },
            { thumbnail: './assets/image-7.jpg', full: './assets/image-7-full.jpg' },
            { thumbnail: './assets/image-8.jpg', full: './assets/image-8-full.jpg' },
        ];
        this.currentImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.images[0]);
    }
    ExampleN06Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n06',
            template: __webpack_require__(/*! raw-loader!./example-n06.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n06/example-n06.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n06.component.scss */ "./src/app/example-n06/example-n06.component.scss")]
        })
    ], ExampleN06Component);
    return ExampleN06Component;
}());



/***/ }),

/***/ "./src/app/example-n07/example-n07.component.scss":
/*!********************************************************!*\
  !*** ./src/app/example-n07/example-n07.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjA3L2V4YW1wbGUtbjA3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-n07/example-n07.component.ts":
/*!******************************************************!*\
  !*** ./src/app/example-n07/example-n07.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleN07Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleN07Component", function() { return ExampleN07Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-red-zoom */ "./dist/ngx-red-zoom/fesm5/ngx-red-zoom.js");



var ExampleN07Component = /** @class */ (function () {
    function ExampleN07Component(cd) {
        this.cd = cd;
        this.images = [
            { thumbnail: './assets/image-9.jpg', full: './assets/image-9-full.jpg' },
            { thumbnail: './assets/image-10.jpg', full: './assets/image-10-full.jpg' },
            { thumbnail: './assets/image-11.jpg', full: './assets/image-11-full.jpg' },
        ];
        this.currentImage = this.images[0];
        this.options = {
            items: 1,
        };
        this.dragging = false;
    }
    Object.defineProperty(ExampleN07Component.prototype, "classes", {
        get: function () {
            return 'red-zoom--style--window' + (this.dragging ? ' red-zoom--disabled' : '');
        },
        enumerable: true,
        configurable: true
    });
    ExampleN07Component.prototype.dragged = function (data) {
        this.dragging = data.dragging;
        this.cd.detectChanges();
    };
    ExampleN07Component.prototype.translated = function (data) {
        this.currentImage = this.images[data.startPosition];
    };
    ExampleN07Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_red_zoom__WEBPACK_IMPORTED_MODULE_2__["RedZoomDirective"], { static: false })
    ], ExampleN07Component.prototype, "redZoom", void 0);
    ExampleN07Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n07',
            template: __webpack_require__(/*! raw-loader!./example-n07.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n07/example-n07.component.html"),
            host: {
                '[class.example]': 'true'
            },
            styles: [__webpack_require__(/*! ./example-n07.component.scss */ "./src/app/example-n07/example-n07.component.scss")]
        })
    ], ExampleN07Component);
    return ExampleN07Component;
}());



/***/ }),

/***/ "./src/app/section-css-variables/section-css-variables.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/section-css-variables/section-css-variables.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tY3NzLXZhcmlhYmxlcy9zZWN0aW9uLWNzcy12YXJpYWJsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/section-css-variables/section-css-variables.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/section-css-variables/section-css-variables.component.ts ***!
  \**************************************************************************/
/*! exports provided: SectionCssVariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCssVariablesComponent", function() { return SectionCssVariablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionCssVariablesComponent = /** @class */ (function () {
    function SectionCssVariablesComponent() {
    }
    SectionCssVariablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-css-variables',
            template: __webpack_require__(/*! raw-loader!./section-css-variables.component.html */ "./node_modules/raw-loader/index.js!./src/app/section-css-variables/section-css-variables.component.html"),
            host: {
                '[class.section]': 'true'
            },
            styles: [__webpack_require__(/*! ./section-css-variables.component.scss */ "./src/app/section-css-variables/section-css-variables.component.scss")]
        })
    ], SectionCssVariablesComponent);
    return SectionCssVariablesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\red-zoom\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map