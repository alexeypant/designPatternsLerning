(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeTheaterFacade = (function () {
        function HomeTheaterFacade(amplifier, tuner, dvdPlayer, cdPlayer, projector, lights, screen, popper) {
            this.amplifier = amplifier;
            this.tuner = tuner;
            this.dvdPlayer = dvdPlayer;
            this.cdPlayer = cdPlayer;
            this.projector = projector;
            this.lights = lights;
            this.screen = screen;
            this.popper = popper;
        }
        HomeTheaterFacade.prototype.watchMovie = function () {
            console.log('Get ready to watch movie');
            this.popper.on();
            this.popper.pop();
            this.lights.dim();
            this.screen.down();
            this.projector.on();
            this.projector.wideScreenMode();
            this.amplifier.on();
            this.amplifier.setDvd(this.dvdPlayer);
            this.amplifier.setSurroundSound();
            this.amplifier.setVolume();
            this.dvdPlayer.on();
            this.dvdPlayer.play();
        };
        HomeTheaterFacade.prototype.endMovie = function () {
            console.log('Shutting movie theater down');
            this.popper.off();
            this.lights.on();
            this.screen.up();
            this.projector.off();
            this.amplifier.off();
            this.dvdPlayer.stop();
            this.dvdPlayer.eject();
            this.dvdPlayer.off();
        };
        HomeTheaterFacade.prototype.listenToCd = function () {
        };
        HomeTheaterFacade.prototype.endCd = function () {
        };
        HomeTheaterFacade.prototype.listenToDvd = function () {
        };
        HomeTheaterFacade.prototype.endDvd = function () {
        };
        HomeTheaterFacade.prototype.listenToRadio = function () {
        };
        HomeTheaterFacade.prototype.endRadio = function () {
        };
        return HomeTheaterFacade;
    }());
    exports.HomeTheaterFacade = HomeTheaterFacade;
});
//# sourceMappingURL=HomeTheaterFacade.js.map