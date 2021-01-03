let local = {};

local.id = "scrollbars";
local.description = "Makes scrollbars great again";

local.register = {
    name: "Scrollbars"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    }

};

local.code = function (resolve) {

    const t = `
		
		/* Firefox */
		
		* {
		    scrollbar-width: thin;
		    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
		}
		
		/* Webkit (Includes Chromium) */
		
		::-webkit-scrollbar {
            width: 6px;
            background-color: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2);
        }
		
		`;

    resolve(t);

};

module.exports = local;
