let local = {};

local.id = "extendedHeader";
local.description = "Extends the header above chat in side-by-side mode";

local.register = {
    name: "Extended Header"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    }

};

local.code = function (resolve) {
    let t = `
        #header-content {
            width: calc(100% - 260px) !important
        }`;
    resolve(t);
};

module.exports = local;