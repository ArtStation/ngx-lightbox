"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LightboxConfig = /** @class */ (function () {
    function LightboxConfig() {
        this.fadeDuration = 0.7;
        this.resizeDuration = 0.5;
        this.fitImageInViewPort = true;
        this.positionFromTop = 20;
        this.showImageNumberLabel = false;
        this.alwaysShowNavOnTouchDevices = false;
        this.wrapAround = false;
        this.disableKeyboardNav = false;
        this.disableScrolling = false;
        this.centerVertically = false;
        this.enableTransition = true;
        this.albumLabel = 'Image %1 of %2';
    }
    LightboxConfig.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LightboxConfig.ctorParameters = function () { return []; };
    return LightboxConfig;
}());
exports.LightboxConfig = LightboxConfig;
//# sourceMappingURL=lightbox-config.service.js.map