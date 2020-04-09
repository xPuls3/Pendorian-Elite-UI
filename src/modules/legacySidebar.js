let local = {};

local.id = "legacySidebar";
local.description = "Makes the sidebar look almost like the original sidebar designed by Zampa";

local.register = {
    name: "Legacy Sidebar"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    }

};

local.code = function (resolve) {
    const t = `
		#menu .frame {
			display: none;
			width: 0px;
		}
		#menu {
			padding: 0px;
			background: none !important;
			height: auto !important;
			overflow: hidden;
		}
		#menu li a {
			font-family: "Open Sans", helvetica, arial;
			color: #969696;
			padding: 5px 0;
			text-decoration: none;
			font-size: 15px;
			padding-left: 15px;
		}
		#menu li.active a, #menu li:hover a{
			color: #FFFFFF;
			text-decoration: none !important;
		}`;
    resolve(t);
};

module.exports = local;