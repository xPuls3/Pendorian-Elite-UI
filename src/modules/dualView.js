let local = {};

local.id = "dualView";
local.description = [
    "Forces both the action and content pages to always show next to each other vertically",
    "Requires Dungeon Sidebar to work correctly"
];

local.register = {
    name: "Dual View",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false,
    },

    line: {
        description: "How far down the frame (in pixels) the line between content and actions is",
        value: 220
    },

};

local.code = function (resolve) {
    const t = `
		html {
			--DualViewLine: ${modules.dualView.options.line}px;
		}
		#gameframe-battle {
		  display: block !important;
		  height: var(--DualViewLine);
		}
		#gameframe-content {
		  display: block !important;
		  height: calc(100% - var(--DualViewLine) - 80px);
		  top: calc(70px + var(--DualViewLine));
		}
		#menu ul li:first-child {
		  display: none !important;
		}`;
    resolve(t);
};

module.exports = local;