"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var lightbox_event_service_1 = require("./lightbox-event.service");
var LightboxOverlayComponent = /** @class */ (function () {
    function LightboxOverlayComponent(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
        var _this = this;
        this._elemRef = _elemRef;
        this._rendererRef = _rendererRef;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
        this.classList = 'lightboxOverlay animation fadeInOverlay';
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
    }
    LightboxOverlayComponent.prototype.close = function () {
        // broadcast to itself and all others subscriber including the components
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
    };
    LightboxOverlayComponent.prototype.ngAfterViewInit = function () {
        var fadeDuration = this.options.fadeDuration;
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'animation-duration', fadeDuration + "s");
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.onResize = function () {
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    LightboxOverlayComponent.prototype._sizeOverlay = function () {
        var width = this._getOverlayWidth();
        var height = this._getOverlayHeight();
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'width', width + "px");
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'height', height + "px");
    };
    LightboxOverlayComponent.prototype._onReceivedEvent = function (event) {
        switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
                this._end();
                break;
            default:
                break;
        }
    };
    LightboxOverlayComponent.prototype._end = function () {
        var _this = this;
        this.classList = 'lightboxOverlay animation fadeOutOverlay';
        // queue self destruction after the animation has finished
        // FIXME: not sure if there is any way better than this
        setTimeout(function () {
            _this.cmpRef.destroy();
        }, this.options.fadeDuration * 1000);
    };
    LightboxOverlayComponent.prototype._getOverlayWidth = function () {
        return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
    };
    LightboxOverlayComponent.prototype._getOverlayHeight = function () {
        return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
    };
    LightboxOverlayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[lb-overlay]',
                    template: '',
                    host: {
                        '[class]': 'classList'
                    }
                },] },
    ];
    /** @nocollapse */
    LightboxOverlayComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer },
        { type: lightbox_event_service_1.LightboxEvent },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [platform_browser_1.DOCUMENT,] }] }
    ]; };
    LightboxOverlayComponent.propDecorators = {
        options: [{ type: core_1.Input }],
        cmpRef: [{ type: core_1.Input }],
        close: [{ type: core_1.HostListener, args: ['click',] }],
        onResize: [{ type: core_1.HostListener, args: ['window:resize',] }]
    };
    return LightboxOverlayComponent;
}());
exports.LightboxOverlayComponent = LightboxOverlayComponent;
//# sourceMappingURL=lightbox-overlay.component.js.map