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
/*! exports provided: NgxRedZoomComponent, NgxRedZoomModule, NgxRedZoomService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRedZoomComponent", function() { return NgxRedZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRedZoomModule", function() { return NgxRedZoomModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRedZoomService", function() { return NgxRedZoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxRedZoomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRedZoomService = /** @class */ (function () {
    function NgxRedZoomService() {
    }
    NgxRedZoomService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxRedZoomService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxRedZoomService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgxRedZoomService_Factory() { return new NgxRedZoomService(); }, token: NgxRedZoomService, providedIn: "root" });
    return NgxRedZoomService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRedZoomComponent = /** @class */ (function () {
    function NgxRedZoomComponent() {
    }
    /**
     * @return {?}
     */
    NgxRedZoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxRedZoomComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-ngx-red-zoom',
                    template: "\n    <p>\n      ngx-red-zoom works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgxRedZoomComponent.ctorParameters = function () { return []; };
    return NgxRedZoomComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Session() { }
if (false) {}
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
            template.innerHTML = "<div class=\"red-zoom\">\n                <div class=\"red-zoom__overlay\"></div>\n                <div class=\"red-zoom__lens\">\n                    <div class=\"red-zoom__lens-body\"></div>\n                </div>\n                <div class=\"red-zoom__window\">\n                    <div class=\"red-zoom__window-body\"></div>\n                </div>\n            </div>";
        }
        return (/** @type {?} */ (template.content.cloneNode(true).firstChild));
    });
};
/** @type {?} */
var makeTemplate = ((ɵ0))();
/**
 * @record
 */
function RedZoomImage() { }
if (false) {}
var NgxRedZoomDirective = /** @class */ (function () {
    function NgxRedZoomDirective(element, renderer, zone, document) {
        var _this = this;
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.document = document;
        this.lazy = false;
        this.classes = '';
        this.trigger = 'hover';
        this.windowImageLoaded = false;
        this.lensImageLoaded = false;
        this.thumbnailImageLoaded = false;
        this.triggerListener = (/**
         * @return {?}
         */
        function () { });
        this.loaded = false;
        this.initialized = false;
        this.appliedClasses = [];
        this.onWindowImageLoad = (/**
         * @return {?}
         */
        function () {
            console.log('onWindowImageLoad');
            _this.windowImageLoaded = true;
            /** @type {?} */
            var originalWidth = _this.windowImage.style.width;
            /** @type {?} */
            var originalHeight = _this.windowImage.style.height;
            // TODO this.windowImage.naturalWidth
            _this.windowImage.style.width = 'auto';
            _this.windowImage.style.height = 'auto';
            _this.windowImageMeta = {
                w: _this.windowImage.width,
                h: _this.windowImage.height,
                z: 1,
            };
            _this.windowImage.style.width = originalWidth;
            _this.windowImage.style.height = originalHeight;
            _this.template.style.setProperty('--red-zoom-preview-w', _this.windowImageMeta.w + "px");
            _this.template.style.setProperty('--red-zoom-preview-h', _this.windowImageMeta.h + "px");
            _this.afterLoadImages();
        });
        this.onLensImageLoad = (/**
         * @return {?}
         */
        function () {
            console.log('onLensImageLoad');
            _this.lensImageLoaded = true;
            _this.afterLoadImages();
        });
        this.onTransitionEnd = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.propertyName === 'visibility' && getComputedStyle(_this.template).visibility === 'hidden') {
                _this.template.remove();
            }
        });
        this.mouseEnter = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.session = {
                active: false,
                thumbnailRect: null,
                previewContainerRect: null,
                previewImageRect: null,
                lensW: 0,
                lensH: 0,
                scrollX: null,
                scrollY: null,
                prevMouseX: event.clientX,
                prevMouseY: event.clientY,
            };
            /** @type {?} */
            var onWheel = (/**
             * @param {?} wheelEvent
             * @return {?}
             */
            function (wheelEvent) {
                if (!wheelEvent.cancelable) {
                    return;
                }
                wheelEvent.preventDefault();
                /** @type {?} */
                var delta = Math.sign(wheelEvent.deltaY);
                _this.windowImageMeta.z += .01 * -delta;
                _this.windowImageMeta.z = Math.max(_this.windowImageMeta.z, _this.session.previewContainerRect.width / _this.windowImageMeta.w, _this.session.previewContainerRect.height / _this.windowImageMeta.h);
                _this.windowImage.style.width = _this.windowImageMeta.w * _this.windowImageMeta.z + "px";
                _this.windowImage.style.height = _this.windowImageMeta.h * _this.windowImageMeta.z + "px";
                // TODO: check image size again, because it can be limited
                _this.calcLensSize();
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
                _this.template.classList.remove('red-zoom--active', 'red-zoom--loading', 'red-zoom--loaded', 'red-zoom--error');
                if (getComputedStyle(_this.template).visibility === 'hidden') {
                    _this.template.remove();
                }
                unListenMove();
                unListenLeave();
                unListenWheel();
            });
            _this.onMouseMove(event);
            /** @type {?} */
            var unListenMove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', onMove);
            /** @type {?} */
            var unListenLeave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', onLeave);
            /** @type {?} */
            var unListenWheel = _this.renderer.listen(_this.element.nativeElement, 'mousewheel', onWheel);
            _this.element.nativeElement.getBoundingClientRect(); // force reflow
            _this.template.classList.add('red-zoom--active');
            if (!_this.windowImageLoaded || !_this.lensImageLoaded) {
                _this.template.classList.add('red-zoom--loading');
                _this.loadWindowImage();
                _this.loadLensImage();
            }
        });
        this.onMouseMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.loaded) {
                return;
            }
            if (!_this.session.active) {
                _this.session.active = true;
                _this.session.thumbnailRect = _this.element.nativeElement.getBoundingClientRect();
                _this.session.scrollX = scrollX;
                _this.session.scrollY = scrollY;
                // TODO: show preloader if preview doesn't loaded
                /** @type {?} */
                var thumbnailRect = _this.session.thumbnailRect;
                /** @type {?} */
                var x = thumbnailRect.left + scrollX;
                /** @type {?} */
                var y = thumbnailRect.top + scrollY;
                /** @type {?} */
                var w = thumbnailRect.width;
                /** @type {?} */
                var h = thumbnailRect.height;
                _this.document.body.appendChild(_this.template);
                _this.windowBody.appendChild(_this.windowImage);
                _this.lensBody.appendChild(_this.lensImage);
                _this.template.style.setProperty('--red-zoom-thumbnail-x', x + "px");
                _this.template.style.setProperty('--red-zoom-thumbnail-y', y + "px");
                _this.template.style.setProperty('--red-zoom-thumbnail-w', w + "px");
                _this.template.style.setProperty('--red-zoom-thumbnail-h', h + "px");
                _this.template.style.setProperty('--red-zoom-thumbnail-size-max', Math.max(w, h) + "px");
                _this.template.style.setProperty('--red-zoom-thumbnail-size-min', Math.min(w, h) + "px");
                _this.calcLensSize();
                _this.lensImage.style.width = w + "px";
                _this.lensImage.style.height = h + "px";
                if (_this.windowImageLoaded && _this.lensImageLoaded) {
                    _this.template.classList.remove('red-zoom--loading');
                    _this.template.classList.add('red-zoom--loaded');
                    _this.windowImageMeta.z = _this.windowImage.width / _this.windowImageMeta.w;
                    _this.windowImageMeta.z = Math.max(_this.windowImageMeta.z, _this.session.previewContainerRect.width / _this.windowImageMeta.w, _this.session.previewContainerRect.height / _this.windowImageMeta.h);
                }
            }
            _this.session.prevMouseX = event.clientX;
            _this.session.prevMouseY = event.clientY;
            if (_this.windowImageLoaded && _this.lensImageLoaded) {
                _this.move(event.clientX, event.clientY);
            }
        });
    }
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.load = /**
     * @return {?}
     */
    function () {
        this.thumbnailImageLoaded = true;
        this.loaded = true;
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.error = /**
     * @return {?}
     */
    function () {
        this.loaded = false;
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initialized = true;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            var _a;
            _this.triggerListener = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', _this.mouseEnter);
            // TODO: mouse down
            _this.template = makeTemplate();
            _this.window = _this.template.querySelector('.red-zoom__window');
            _this.windowBody = _this.template.querySelector('.red-zoom__window-body');
            _this.lens = _this.template.querySelector('.red-zoom__lens');
            _this.lensBody = _this.template.querySelector('.red-zoom__lens-body');
            _this.windowImage = document.createElement('img');
            _this.windowImage.classList.add('red-zoom__window-image');
            _this.windowImage.addEventListener('load', _this.onWindowImageLoad);
            _this.lensImage = document.createElement('img');
            _this.lensImage.classList.add('red-zoom__lens-image');
            _this.lensImage.addEventListener('load', _this.onLensImageLoad);
            if (_this.classes.trim()) {
                (_a = _this.template.classList).add.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(_this.classes.trim().replace(/ +/, ' ').split(' ')));
            }
            _this.template.addEventListener('transitionend', _this.onTransitionEnd);
            if (!_this.lazy) {
                _this.loadWindowImage();
                _this.loadLensImage();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxRedZoomDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _a, _b;
        if ('src' in changes && !changes.src.firstChange) {
            this.thumbnailImageLoaded = false;
            this.lensImageLoaded = false;
            if (!this.lazy) {
                this.loadLensImage();
            }
            this.updateState();
        }
        if ('libNgxRedZoom' in changes && !changes.libNgxRedZoom.firstChange) {
            this.windowImageLoaded = false;
            if (!this.lazy) {
                this.loadWindowImage();
            }
            this.updateState();
        }
        if ('redZoomTrigger' in changes && !changes.redZoomTrigger.firstChange) {
        }
        if ('classes' in changes && !changes.classes.firstChange) {
            (_a = this.template.classList).remove.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(changes.classes.previousValue.trim().replace(/ +/, ' ').split(' ')));
            (_b = this.template.classList).add.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(changes.classes.currentValue.trim().replace(/ +/, ' ').split(' ')));
            // TODO: invalidate if session active
        }
        // TODO: reload preview if changed
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.loadWindowImage = /**
     * @return {?}
     */
    function () {
        if (!this.windowImageLoaded) {
            this.windowImage.setAttribute('src', this.libNgxRedZoom);
        }
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.loadLensImage = /**
     * @return {?}
     */
    function () {
        if (!this.lensImageLoaded) {
            this.lensImage.setAttribute('src', this.src);
        }
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.afterLoadImages = /**
     * @return {?}
     */
    function () {
        if (this.session && this.windowImageLoaded && this.lensImageLoaded) {
            this.template.classList.remove('red-zoom--loading');
            this.template.classList.add('red-zoom--loaded');
            this.calcLensSize();
            this.move(this.session.prevMouseX, this.session.prevMouseY);
            this.windowImageMeta.z = this.windowImage.width / this.windowImageMeta.w;
            this.windowImageMeta.z = Math.max(this.windowImageMeta.z, this.session.previewContainerRect.width / this.windowImageMeta.w, this.session.previewContainerRect.height / this.windowImageMeta.h);
        }
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.calcLensSize = /**
     * @return {?}
     */
    function () {
        this.session.previewContainerRect = this.windowBody.getBoundingClientRect();
        this.session.previewImageRect = this.windowImage.getBoundingClientRect();
        /** @type {?} */
        var thumbnailRect = this.session.thumbnailRect;
        /** @type {?} */
        var previewContainerRect = this.session.previewContainerRect;
        /** @type {?} */
        var previewImageRect = this.session.previewImageRect;
        this.session.lensW = Math.round(thumbnailRect.width * (previewContainerRect.width / previewImageRect.width));
        this.session.lensH = Math.round(thumbnailRect.height * (previewContainerRect.height / previewImageRect.height));
        this.lens.style.width = this.session.lensW + "px";
        this.lens.style.height = this.session.lensH + "px";
        this.lens.style.left = "0px";
        this.lens.style.top = "0px";
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgxRedZoomDirective.prototype.move = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var thumbnailRect = this.session.thumbnailRect;
        /** @type {?} */
        var previewContainerRect = this.session.previewContainerRect;
        /** @type {?} */
        var previewImageRect = this.session.previewImageRect;
        /** @type {?} */
        var lensW = this.session.lensW;
        /** @type {?} */
        var lensH = this.session.lensH;
        /** @type {?} */
        var scrollDeltaX = this.session.scrollX - scrollX;
        /** @type {?} */
        var scrollDeltaY = this.session.scrollY - scrollY;
        /** @type {?} */
        var thumbnailLeft = thumbnailRect.left + scrollDeltaX;
        /** @type {?} */
        var thumbnailTop = thumbnailRect.top + scrollDeltaY;
        this.template.style.setProperty('--red-zoom-mouse-x', x + scrollX + "px");
        this.template.style.setProperty('--red-zoom-mouse-y', y + scrollY + "px");
        /** @type {?} */
        var lensXr = x - lensW / 2;
        /** @type {?} */
        var lensX = Math.round(Math.min(thumbnailLeft + thumbnailRect.width - lensW, Math.max(thumbnailLeft, lensXr)));
        /** @type {?} */
        var lensYr = y - lensH / 2;
        /** @type {?} */
        var lensY = Math.min(thumbnailTop + thumbnailRect.height - lensH, Math.max(thumbnailTop, lensYr));
        this.template.style.setProperty('--red-zoom-lens-x', Math.round(lensX) + scrollX + "px");
        this.template.style.setProperty('--red-zoom-lens-y', Math.round(lensY) + scrollY + "px");
        this.template.style.setProperty('--red-zoom-lens-image-x', Math.round(-lensX + thumbnailLeft) + "px");
        this.template.style.setProperty('--red-zoom-lens-image-y', Math.floor(-lensY + thumbnailTop) + "px");
        /** @type {?} */
        var posX = thumbnailRect.width - lensW === 0 ? 0 : Math.max(0, Math.min(previewImageRect.width - previewContainerRect.width, ((lensX - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width)));
        /** @type {?} */
        var posX2 = thumbnailRect.width - lensW === 0 ? 0 : ((lensXr - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width);
        /** @type {?} */
        var posY = thumbnailRect.height - lensH === 0 ? 0 : Math.max(0, Math.min(previewImageRect.height - previewContainerRect.height, ((lensY - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height)));
        /** @type {?} */
        var posY2 = thumbnailRect.height - lensH === 0 ? 0 : ((lensYr - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height);
        this.template.style.setProperty('--red-zoom-preview-image-x', -posX + "px");
        this.template.style.setProperty('--red-zoom-preview-image-y', -posY + "px");
        this.template.style.setProperty('--red-zoom-preview-image-offset-x', (posX === posX2 ? 0 : posX - posX2) + "px");
        this.template.style.setProperty('--red-zoom-preview-image-offset-y', (posY === posY2 ? 0 : posY - posY2) + "px");
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // TODO: stop session
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.destroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxRedZoomDirective.prototype.updateState = /**
     * @return {?}
     */
    function () {
        console.log(54);
        if (!this.session) {
            return;
        }
        if (this.windowImageLoaded && this.lensImageLoaded && this.thumbnailImageLoaded) {
            this.template.classList.remove('red-zoom--loading');
            this.template.classList.add('red-zoom--loaded');
        }
    };
    NgxRedZoomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[libNgxRedZoom]',
                    exportAs: 'ngxRedZoom',
                },] }
    ];
    /** @nocollapse */
    NgxRedZoomDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    NgxRedZoomDirective.propDecorators = {
        libNgxRedZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['libNgxRedZoom',] }],
        lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomLazy',] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomClass',] }],
        trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['redZoomTrigger',] }],
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.src',] }],
        load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['load',] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['error',] }]
    };
    return NgxRedZoomDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRedZoomModule = /** @class */ (function () {
    function NgxRedZoomModule() {
    }
    NgxRedZoomModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgxRedZoomComponent, NgxRedZoomDirective],
                    imports: [],
                    exports: [NgxRedZoomComponent, NgxRedZoomDirective]
                },] }
    ];
    return NgxRedZoomModule;
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

module.exports = "<div class=\"angular-logo\">\n    <svg class=\"angular-logo__image\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100px\" height=\"90px\">\n        <path class=\"angular-logo__part-one\" d=\"M8,67L50,90L50,-0L-0,-0L8,67Z\"/>\n        <path class=\"angular-logo__part-two\" d=\"M92,67L50,90L50,-0L100,-0L92,67Z\"/>\n        <path class=\"angular-logo__letter\" d=\"M80,61.750 L52.660,-0 L47.340,-0 L20,61.750 C19.530,62.810 20.300,64 21.460,64 L29.610,64 C30.450,64 31.190,63.480 31.490,62.700 L36.760,48.650 C36.900,48.260 37.280,48 37.690,48 L62.410,48 C62.830,48 63.210,48.260 63.350,48.650 L68.520,62.690 C68.810,63.480 69.560,64 70.390,64 L78.540,64 C79.700,64 80.470,62.810 80,61.750 ZM57.060,39 L42.940,39 C42.010,39 41.380,38.060 41.730,37.210 L48.980,19.490 C49.350,18.580 50.650,18.580 51.020,19.490 L58.270,37.210 C58.620,38.060 57.990,39 57.060,39 Z\"/>\n    </svg>\n</div>\n\n\n<div class=\"intro\">\n    <svg class=\"intro__logo logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"248px\" height=\"39px\">\n        <path class=\"logo__part-one\" d=\"M76,38.740 L76,39 L65.500,39 C64.125,39 63,37.875 63,36.500 L63,2.500 C63,1.125 64.125,-0 65.500,-0 L73,-0 C74.020,-0 75.030,0.090 76,0.260 C84.510,1.680 91,9.080 91,18 L91,21 C91,29.920 84.510,37.320 76,38.740 ZM84,18 C84,11.925 79.075,7 73,7 L71.500,7 C70.672,7 70,7.671 70,8.500 L70,30.500 C70,31.328 70.672,32 71.500,32 L73,32 C79.075,32 84,27.075 84,21 L84,18 ZM57,39 L37,39 L34,39 C32.895,39 32,38.104 32,37 L32,2 C32,0.895 32.895,-0 34,-0 L37,-0 L57,-0 C58.104,-0 59,0.895 59,2 L59,5 C59,6.105 58.104,7 57,7 L39,7 L39,15 L54,15 C55.104,15 56,15.895 56,17 L56,20 C56,21.104 55.104,22 54,22 L39,22 L39,32 L57,32 C58.104,32 59,32.895 59,34 L59,37 C59,38.104 58.104,39 57,39 ZM27.344,34.556 C27.774,35.299 28,36.142 28,37 C28,38.104 27.105,39 26,39 L22.984,39 C22.270,39 21.610,38.619 21.253,38 L16.630,30 L14.900,26.990 C14.770,27 14.630,27 14.500,27 L8,27 C7.448,27 7,27.448 7,28 L7,37 C7,38.100 6.100,39 5,39 L2,39 C0.900,39 -0,38.100 -0,37 L-0,2 C-0,0.900 0.900,-0 2,-0 L14.500,-0 C18.740,-0 22.520,1.950 25,5.010 C26.880,7.330 28,10.280 28,13.500 C28,16.720 26.880,19.670 25,21.990 C24.080,23.120 22.990,24.100 21.760,24.890 L24.710,30 L27.344,34.556 ZM18,8.020 C16.990,7.380 15.790,7 14.500,7 L8.500,7 C7.671,7 7,7.671 7,8.500 L7,18.500 C7,19.328 7.671,20 8.500,20 L14.500,20 C15.790,20 16.990,19.620 18,18.980 C19.800,17.820 21,15.800 21,13.500 C21,11.200 19.800,9.180 18,8.020 Z\"/>\n        <path class=\"logo__part-two\" d=\"M246,39 L243,39 C241.895,39 241,38.105 241,37 L241,14.921 C241,14.144 240.002,13.823 239.550,14.456 L232.898,23.746 C232.334,24.533 231.426,25 230.458,25 L228.542,25 C227.574,25 226.666,24.533 226.103,23.746 L219.451,14.456 C218.998,13.823 218,14.144 218,14.921 L218,37 C218,38.105 217.105,39 216,39 L213,39 C211.895,39 211,38.105 211,37 L211,2.200 C211,0.985 211.985,-0 213.200,-0 L215.458,-0 C216.426,-0 217.334,0.467 217.898,1.254 L228.687,16.333 C229.086,16.891 229.914,16.891 230.313,16.333 L241.103,1.254 C241.666,0.467 242.574,-0 243.542,-0 L245.800,-0 C247.015,-0 248,0.985 248,2.200 L248,37 C248,38.105 247.105,39 246,39 ZM187.500,39 C176.730,39 168,30.270 168,19.500 C168,8.730 176.730,-0 187.500,-0 C198.270,-0 207,8.730 207,19.500 C207,30.270 198.270,39 187.500,39 ZM187.500,7 C180.596,7 175,12.596 175,19.500 C175,26.404 180.596,32 187.500,32 C194.404,32 200,26.404 200,19.500 C200,12.596 194.404,7 187.500,7 ZM144.500,39 C133.730,39 125,30.270 125,19.500 C125,8.730 133.730,-0 144.500,-0 C155.270,-0 164,8.730 164,19.500 C164,30.270 155.270,39 144.500,39 ZM144.500,7 C137.596,7 132,12.596 132,19.500 C132,26.404 137.596,32 144.500,32 C151.404,32 157,26.404 157,19.500 C157,12.596 151.404,7 144.500,7 ZM122,39 L97,39 C95.900,39 95,38.100 95,37 L95,33.404 C95,32.495 95.310,31.613 95.878,30.904 L114.369,7.812 C114.632,7.485 114.398,7 113.979,7 L97,7 C95.900,7 95,6.100 95,5 L95,2 C95,0.900 95.900,-0 97,-0 L122,-0 C123.100,-0 124,0.900 124,2 L124,5.595 C124,6.504 123.690,7.387 123.122,8.096 L104.621,31.187 C104.359,31.515 104.592,32 105.011,32 L122,32 C123.100,32 124,32.900 124,34 L124,37 C124,38.100 123.100,39 122,39 Z\"/>\n    </svg>\n    <div class=\"intro__version\">\n        <a href=\"https://github.com/scompiler/red-zoom/releases\">Version {{ version }}</a>\n    </div>\n    <div class=\"intro__text\">\n        RedZoom is a modern very easy-to-use image zoom library which made as\n        Angular directive and fully stylable via CSS/SCSS.\n    </div>\n\n    <div class=\"intro__code\">\n        <code>npm install ngx-red-zoom</code>\n    </div>\n\n    <div class=\"intro__code-caption\">\n        Click to copy\n    </div>\n</div>\n\n\n<app-example-n01></app-example-n01>\n<app-example-n02></app-example-n02>\n<app-example-n03></app-example-n03>\n\n\n<div class=\"changelog\">\n    <h2>Features</h2>\n    <ul>\n        <li>Responsive;</li>\n        <li>Support server side rendering (SSR);</li>\n        <li>Chrome (and others based on chrome), Safari, Firefox, Edge;</li>\n        <li>Customizing via CSS/SCSS;</li>\n    </ul>\n</div>\n\n\n<div class=\"changelog\">\n    <h2>Anatomy And Terms</h2>\n    ...\n</div>\n\n<div class=\"api\">\n    <div class=\"typography\">\n\n        <h2>API</h2>\n\n        <h3>Attributes</h3>\n\n        <ul>\n            <li>RedZoom</li>\n            <li>RedZoomLazy - boolean, if true image will loaded only after activation of zoom (for example, on mouseover event)</li>\n            <li>RedZoomMouseWheelZoom - boolean (default: false) TODO: not implemented</li>\n            <li>RedZoomPinchToZoom - boolean (default: false) TODO: not implemented</li>\n            <li>RedZoomTrigger - hover, click TODO: not implemented</li>\n            <li>RedZoomClass - </li>\n        </ul>\n\n        <h3>Methods</h3>\n\n        <i>Describe \"export as\"</i>\n    </div>\n</div>\n\n\n\n<app-section-css-variables></app-section-css-variables>\n\n\n<div class=\"variables\">\n    <div class=\"typography\">\n        <h2>FAQ</h2>\n        <ul>\n            <li>How to limit zoom ratio? TODO: describe</li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"roadmap\">\n    <h2>Roadmap</h2>\n    <ul>\n        <li>Changing zoom ratio with mouse wheel</li>\n        <li>Changing zoom ratio with touch gestures (pinch to zoom)</li>\n        <li>Support touch events</li>\n        <li>Support click trigger</li>\n        <li>Image load error handling</li>\n        <li>Support lazy loading</li>\n        <li>Support &lt;source&gt; tag and srcset attribute</li>\n        <li>Support hot swap image</li>\n        <li>Support keyboard</li>\n\n        <li>------</li>\n\n        <li>Describe how to set zoom ratio via CSS/SCSS</li>\n    </ul>\n</div>\n\n\n<div class=\"changelog\">\n    <h2>Changelog</h2>\n    <ul>\n        <li>\n            October 19, 2019 — Version 0.1.0\n\n            <ul>\n                <li>Initial release</li>\n            </ul>\n        </li>\n    </ul>\n</div>\n\n\n\n<div style=\"margin-top: 48px;\">\n    <button (click)=\"image = '../assets/image-2.jpg'; imageFull = '../assets/image-2-full.jpg'\"></button>\n\n\n    <strong>TODO:</strong>\n\n\n    Forget about JS when styling\n\n\n    Image lazy loading (not initialization)\n\n\n    <br>\n    Browsers support\n</div>\n\n<div class=\"copyright\">\n    Released under the MIT License<!-- Code licensed under an MIT License --><br>\n    Copyright © {{ year }} Konstantin Veselovsky\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n01/example-n01.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n01/example-n01.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img src=\"../assets/image-1.jpg\" alt=\"\" width=\"320\" libNgxRedZoom=\"../assets/image-1-full.jpg\" redZoomTrigger=\"click\" redZoomClass=\"red-zoom--style--01\" [redZoomLazy]=\"true\" class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Getting Started</h2>\n\n            <ol>\n                <li>\n                    To install RedZoom, run the command below:<br>\n                    <code>npm install ngx-red-zoom</code>\n                </li>\n                <li>import library:\n                    <pre><code>import {{ '{' }} RedZoomModule } from 'ngx-red-zoom';\n\n@NgModule({{ '{' }}\n    imports: [\n        RedZoomModule\n    ]\n})\nexport class AppModule {{ '{' }} }</code></pre>\n                </li>\n                <li>\n                    Import styles\n                    <pre><code>@import '~/red-zoom/styles/base.scss';</code></pre>\n                </li>\n                <li>\n                    Add directive to your image tag:\n                    <pre><code>&lt;img src=\"example.jpg\" <strong>redZoom=\"example.full.jpg\"</strong>&gt;</code></pre>\n                </li>\n            </ol>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n02/example-n02.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n02/example-n02.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img src=\"../assets/image-1.jpg\" alt=\"\" width=\"320\" libNgxRedZoom=\"../assets/image-1-full.jpg\" redZoomClass=\"red-zoom--style--01\" [redZoomLazy]=\"false\" class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Size And Position Of The Preview</h2>\n\n            You can set any size of preview image via CSS/SCSS, red-zoom automatically detect it, and you do not need to edit ts/html files for this purpose.\n            This also means that you can set different sizes of preview depend on screen size using CSS media queries.\n\n            <p>Use the following CSS variables to position the preview relative to the thumbnail:</p>\n\n            <ul>\n                <li>--red-zoom-thumbnail-[x/y] – Thumbnail position relative to the page.</li>\n                <li>--red-zoom-thumbnail-[w/h] – Thumbnail size in pixels.</li>\n                <li>--red-zoom-thumbnail-size-[max/min] – Thumbnail size in pixels. TODO: not implemented</li>\n            </ul>\n\n            <button>Square</button>\n            <button>Landscape</button>\n            <button>Portrait</button>\n            <button>Fixed (200x200)</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example-n03/example-n03.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example-n03/example-n03.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example__body\">\n    <div class=\"example__image\">\n        <img\n            src=\"../assets/image-1.jpg\"\n            alt=\"\"\n            width=\"320\"\n            libNgxRedZoom=\"../assets/image-1-full.jpg\"\n            [redZoomLazy]=\"false\"\n            [redZoomClass]=\"'red-zoom--style--'+style\"\n            class=\"zoom\">\n    </div>\n    <div class=\"example__content\">\n        <div class=\"typography\">\n            <h2>Customization And Styles</h2>\n\n            {{ 'red-zoom--style--'+style }}\n\n            <p>\n                RedZoom comes with several pre-made styles:\n            </p>\n\n            <p>\n                You can also create your own amazing style. RedZoom provides extensive style customization options.\n            </p>\n\n            <div>\n                <button type=\"button\" (click)=\"style = '01';\">01</button>\n                <button type=\"button\" (click)=\"style = '02';\">02</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/section-css-variables/section-css-variables.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/section-css-variables/section-css-variables.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"typography\">\r\n    <h2>CSS variables</h2>\r\n\r\n    <table>\r\n        <tbody>\r\n        <tr>\r\n            <th>--red-zoom-thumbnail-[x/y]</th>\r\n            <td>Thumbnail position relative to the page in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-thumbnail-[w/h]</th>\r\n            <td>Thumbnail size in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-thumbnail-size-[max/min]</th>\r\n            <td>Max/min size of thumbnail in pixels.</td>\r\n        </tr>\r\n        <tr>\r\n            <th>--red-zoom-preview-[w/h]</th>\r\n            <td>Original size of preview image in pixels.</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n    <ul>\r\n        <li>--red-zoom-mouse-snap-[x/y] – Snapped mouse position. TODO: Not implemented.</li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ngx-red-zoom/package.json":
/*!********************************************!*\
  !*** ./projects/ngx-red-zoom/package.json ***!
  \********************************************/
/*! exports provided: name, version, peerDependencies, default */
/***/ (function(module) {

module.exports = {"name":"ngx-red-zoom","version":"0.0.1","peerDependencies":{"@angular/common":"^8.1.3","@angular/core":"^8.1.3"}};

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
/* harmony import */ var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-red-zoom/package.json */ "./projects/ngx-red-zoom/package.json");
var _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../projects/ngx-red-zoom/package.json */ "./projects/ngx-red-zoom/package.json", 1);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.version = _projects_ngx_red_zoom_package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
        this.year = new Date().getFullYear();
        this.image = '../assets/image-1.jpg';
        this.imageFull = '../assets/image-1-full.jpg';
    }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-n01/example-n01.component */ "./src/app/example-n01/example-n01.component.ts");
/* harmony import */ var _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-n02/example-n02.component */ "./src/app/example-n02/example-n02.component.ts");
/* harmony import */ var _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example-n03/example-n03.component */ "./src/app/example-n03/example-n03.component.ts");
/* harmony import */ var _section_css_variables_section_css_variables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-css-variables/section-css-variables.component */ "./src/app/section-css-variables/section-css-variables.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _example_n01_example_n01_component__WEBPACK_IMPORTED_MODULE_6__["ExampleN01Component"],
                _example_n02_example_n02_component__WEBPACK_IMPORTED_MODULE_7__["ExampleN02Component"],
                _example_n03_example_n03_component__WEBPACK_IMPORTED_MODULE_8__["ExampleN03Component"],
                _section_css_variables_section_css_variables_component__WEBPACK_IMPORTED_MODULE_9__["SectionCssVariablesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_red_zoom__WEBPACK_IMPORTED_MODULE_3__["NgxRedZoomModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtbjAyL2V4YW1wbGUtbjAyLmNvbXBvbmVudC5zY3NzIn0= */"

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


var ExampleN02Component = /** @class */ (function () {
    function ExampleN02Component() {
    }
    ExampleN02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-n02',
            template: __webpack_require__(/*! raw-loader!./example-n02.component.html */ "./node_modules/raw-loader/index.js!./src/app/example-n02/example-n02.component.html"),
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


var ExampleN03Component = /** @class */ (function () {
    function ExampleN03Component() {
        this.style = '02';
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