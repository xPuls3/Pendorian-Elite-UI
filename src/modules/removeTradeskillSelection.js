let local = {};

local.id = "removeTradeskillSelection";
local.description = [
    "Removes the Tradeskill Selection dropdown and the work button",
    "Ensure that you are already doing the TS that you want to continue doing",
    "Click the action bar to refresh after turning this on"
];

local.register = {
    name: "Remove Tradeskill Selection",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false,
    },

    addSpace: {
        description: [
            "Adds a small amount of space above the action text",
            "Without this it will look awkward"
        ],
        value: true
    },

};

local.code = function (resolve) {
    let t = `
		#actioncontent > div:nth-child(2) {
            display: none !important;
        }`;
    if (modules.removeTradeskillSelection.options.addSpace === true) {
        t = t + `
            #actioncontent {
                margin-top: 15px;
            }`;
    }
    resolve(t);
};

module.exports = local;