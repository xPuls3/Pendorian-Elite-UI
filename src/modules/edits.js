let local = {};

local.id = "edits";
local.description = "Changes that used to be included with the recolor";

local.register = {
    name: "Edits",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

};

local.code = function (resolve) {
    const t = `
		#dungeon-dialogue {
			display: none;
		}`;
    resolve(t);
};

module.exports = local;