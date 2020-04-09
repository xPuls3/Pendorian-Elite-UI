let local = {};

local.id = "versionCheck";
local.description = "Checks for updates";

local.register = {
    name: "Version Check",
    runLogin: true
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    },

    dailyLimit: {
        description: "Only check once every 24 hours",
        value: true
    }

};

local.code = function (resolve) {
    let t = `
        .elite-version-window {
            z-index: 999999999;
            width: 100vw;
            height: 100vh;
            max-width: max-content;
            background: rgba(0, 0, 0, 0.70);
        }
        
        .elite-version-window h1 {
            text-align: center;
            padding-top: 10px;
        }
        
        .elite-version-window button {
            text-align: center;
            margin-right: 10px;
        }
        
        .elite-version-content {
            width: 30%;
            min-width: max-content;
            height: 135px;
            background: black;
            color: white;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            position: absolute;
            padding: 0px 50px 0px;
        }
        
        .elite-version-border {
            border: 10px solid transparent !important;
            border-image-source: url(/images/frame.png) !important;
            border-image-slice: 10 8 !important;
            border-image-repeat: round !important;
        }`;
    let hasls = (function () {
        let test = "test";
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    });
    if (hasls || !modules.versionCheck.options.dailyLimit) {
        let lastCheck = new Date(localStorage.getItem("Last Elite UI Version Check"));
        if ((new Date().getTime() - lastCheck.getTime()) > (60 * 60 * 24 * 1000) || !modules.versionCheck.options.dailyLimit) {
            localStorage.setItem("Last Elite UI Version Check", String(new Date()));
            new Promise(function (resolve) {
                $.get("https://api.github.com/repos/xpuls3/Pendorian-Elite-UI/releases/latest", function (data) {
                    if (version.includes("-") && version.split("-")[0] === data.tag_name) {
                        resolve(data.tag_name);
                    } else if (version.split("-")[0] !== data.tag_name) {
                        resolve(data.tag_name);
                    } else {
                        resolve(false);
                    }
                });
            }).then(function (newVer) {
                if (newVer !== false) {
                    logDo(`Pendorian Elite UI v${newVer} has been released, you are currently running outdated version ${version}`, 1);

                    const eliteVersionWindowBackground = document.createElement("div");
                    eliteVersionWindowBackground.setAttribute("class", "elite-version-window");
                    eliteVersionWindowBackground.setAttribute("id", "elite-version-window");

                    const eliteVersionWindowContent = document.createElement("div");
                    eliteVersionWindowContent.setAttribute("class", "elite-version-content elite-version-border");
                    eliteVersionWindowContent.innerHTML = `<h1>Outdated Elite UI Version!</h1><p>Pendorian Elite UI v${newVer} has been released, you are currently running outdated version ${version}!</p>`;

                    const eliteVersionDownloadButton = document.createElement("button");
                    eliteVersionDownloadButton.innerText = "Download";
                    eliteVersionDownloadButton.setAttribute("onclick", "window.open('https://github.com/xPuls3/Pendorian-Elite-UI/raw/master/script.user.js', '_blank');");

                    const eliteVersionNotesButton = document.createElement("button");
                    eliteVersionNotesButton.innerText = "Release Notes";
                    eliteVersionNotesButton.setAttribute("onclick", "window.open('https://github.com/xPuls3/Pendorian-Elite-UI/releases/latest', '_blank');");

                    const eliteVersionCloseButton = document.createElement("button");
                    eliteVersionCloseButton.innerText = "Close";
                    eliteVersionCloseButton.setAttribute("onclick", `$("#elite-version-window").remove();`);

                    eliteVersionWindowContent.appendChild(eliteVersionDownloadButton);
                    eliteVersionWindowContent.appendChild(eliteVersionNotesButton);
                    eliteVersionWindowContent.appendChild(eliteVersionCloseButton);
                    eliteVersionWindowBackground.appendChild(eliteVersionWindowContent);
                    document.body.appendChild(eliteVersionWindowBackground);
                }
            });
        }
    }
    resolve(t);
};

module.exports = local;