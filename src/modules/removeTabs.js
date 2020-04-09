let local = {};

local.id = "removeTabs";
local.description = [
    "Removes the tabs on the actions page",
    "Requires Dungeon Sidebar to work correctly",
    "Requires Areas Included to work correctly"
];

local.register = {
    name: "Remove Tabs"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false
    }

};

local.code = function (resolve) {
    const t = `
		#gameframe-battle > ul {
			display: none;
		}`;
    resolve(t);
};

module.exports = local;