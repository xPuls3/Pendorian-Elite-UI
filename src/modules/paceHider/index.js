let local = {};

local.id = "paceHider";
local.description = "Removes the loading bar at the top of the screen";

local.register = {
    name: "Pace Hider",
    runLogin: true
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false
    },

};

local.code = function (resolve) {
    const t = `.pace{ display: none !important }`;
    resolve(t);
};

module.exports = local;