let local = {};

local.id = "removeGoldStat";
local.description = "Removes Gold Boost & Stat Drop Boost from Rhodium Boosts";

local.register = {
    name: "Remove Gold & Stat"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false
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