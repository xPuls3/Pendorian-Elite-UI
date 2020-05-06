(function () {

    window.addEventListener("load", origin);

    function origin () {

        logDo(`Initiating Pendorian Elite UI v${version}`, 0);

        const k = Object.keys(modules);

        let promiseList = [];
        let isGame = checkIsPath("/game");
        let isLogin = checkIsPath("/");

        for (let i = 0; i < k.length; i++) {

            modules[k[i]].id = String(k[i]);

            if (typeof (modules[k[i]].name) === "undefined") modules[k[i]].name = modules[k[i]].id;

            if (isGame || (isLogin && modules[k[i]].runLogin)) activateModule(modules[k[i]]);

        }

        Promise.all(promiseList).then(function () {

            if (isDebug) logDo("Script completely loaded", 0);

        });

        function activateModule(module) {
            if (typeof (module.options) !== "undefined") {
                if (module.options.status) {
                    if (typeof (module.code) !== "undefined") {
                        promiseList.push(new Promise(function (resolve) {
                            module.code(resolve);
                        }).then(function (result) {
                            moduleEnabled(module, result)
                        }));
                    } else {
                        logDo(`${module.name} Module does not contain code`, 1);
                    }
                }
            } else {
                logDo(`${module.name} Module does not contain options`, 1);
            }
        }

    }

    function moduleEnabled (module, result) {

        if (result) {
            module.style = result;
            applyStyle(module);
        }

        if (isDebug) {
            logDo(`${module.name} Module enabled`, 0);
        }

    }

    function applyStyle (module) {
        let matches = $(`.Elite-UI-Style[Elite-UI-Module="${module.id}"]`);
        if (matches.length !== 0) matches.remove();
        $("head").append(`<style class="Pendorian-Elite-UI Elite-UI-Style" Elite-UI-Module="${module.id}">${module.style}</style>`);
    }

    function checkIsPath (x) {
        return (window.location.pathname === x);
    }

})();
