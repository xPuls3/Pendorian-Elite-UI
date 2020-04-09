let local = {};

local.id = "frameless";
local.description = "Removes all of the frames";

local.register = {
    name: "Frameless Mode",
    runLogin: true
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    }

};

local.code = function (resolve) {
    const t = `
        #menu, #profile, #chat, #charity, #stats-hourly, #gameframe, #drop-statistics {
          border: none !important;
        }
		#gameframe-status-wrapper:after, #progressbar-wrapper::after {
			background: none;
		}
		#progressbar-wrapper {
			bottom: 0px;
		}
		#progressbar-wrapper .progressbar {
			top: 0px;
		}
		#gameframe-status-wrapper {
			line-height: 15px;
			top: 0px;
			left: 0px;
			right: 0px;
		}`;
    resolve(t);
};

module.exports = local;