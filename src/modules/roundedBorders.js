let local = {};

local.id = "roundedBorders";
local.description = [
    "Makes most of the game's main area corners round.",
    "Requires Frameless Mode to work correctly"
];

local.register = {
    name: "Rounded Borders",
    runLogin: true,
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false,
    },

    amount: {
        description: "Changes how round the corners are with CSS values",
        value: "16px"
    }

};

local.code = function (resolve) {
    const l = modules.roundedBorders.options.amount;
    const t = `
		#profile, #menu, #stats-hourly, #ether-resources-sidebar,
            #gameframe-battle, #gameframe-content, #drop-statistics,
            #gameframe-status-wrapper, #chat, #chat-form {
			border-radius: ${l} !important;
		}
		.nav-tabs > li > a {
			border-radius: ${l} ${l} 0px 0px !important;
		}`;
    resolve(t);
};

module.exports = local;