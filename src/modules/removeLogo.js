let local = {};

local.id = "removeLogo";
local.description = "Removes the 'Pendoria Logo' and moves the left side upwards to reduce clutter";

local.register = {
    name: "Remove Logo",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

};

local.code = function (resolve) {
    const t = `
		#content > div.wrapper > aside > * {
			top: -50px;
		}
		#logo {
			display: none;
		}
		#content > .wrapper:first-child > header:first-child {
			pointer-events: none;
		}
		#header-stats {
			pointer-events: auto;
		}`;
    resolve(t);
};

module.exports = local;