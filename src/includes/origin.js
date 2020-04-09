(function () {

    origin();

    function origin () {
        logDo(`Initiating Pendorian Elite UI v${version}`, 0);
        const k = Object.keys(modules);
        let promiseList = [];
        let isGame = checkIsPath("/game");
        let isLogin = checkIsPath("/");
        for (let i = 0; i < k.length; i++) {
            modules[k[i]].id = String(k[i]);
            if (typeof (modules[k[i]].name) === "undefined") modules[k[i]].name = modules[k[i]].id;
            if (isGame || (isLogin && modules[k[i]].runLogin)) {
                if (typeof (modules[k[i]].options) !== "undefined") {
                    if (modules[k[i]].options.status) {
                        if (typeof (modules[k[i]].code) !== "undefined") {
                            promiseList.push(new Promise(function (resolve) {
                                modules[k[i]].code(resolve);
                            }).then(function (result) {
                                if (result) {
                                    modules[k[i]].Style = result;
                                    applyStyle(modules[k[i]]);
                                }
                                if (isDebug) {
                                    logDo(`${modules[k[i]].name} Module enabled`, 0);
                                }
                            }));
                        } else {
                            logDo(`${modules[k[i]].name} Module does not contain code`, 1);
                        }
                    }
                } else {
                    logDo(`${modules[k[i]].name} Module does not contain options`, 1);
                }
            }
        }
        Promise.all(promiseList).then(function () {
            if (isDebug) logDo("Script completely loaded", 0);
        });
    }

    function applyStyle (module) {
        let matches = $(`.Elite-UI-Style[Elite-UI-Module="${module.id}"]`);
        if (matches.length !== 0) matches.remove();
        $("head").append(`<style class="Pendorian-Elite-UI Elite-UI-Style" Elite-UI-Module="${module.id}">${module.Style}</style>`);
    }

    function checkIsPath (x) {
        return (window.location.pathname === x);
    }

})();