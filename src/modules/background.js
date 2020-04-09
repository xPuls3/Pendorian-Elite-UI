let local = {};

local.id = "background";
local.description = "Changes the background to the link below";

local.register = {
    name: "Background",
    runLogin: true
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    },

    link: {
        description: [
            "Standard Image: 'Stellar Collision' by KuldarLeement",
            "Original Link: https://www.deviantart.com/kuldarleement/art/Stellar-collision-397866757",
            "Hosted Link: https://zerthox.github.io/ClearVision/images/sapphire.jpg\n",
            "Background link"
        ],
        value: "https://zerthox.github.io/ClearVision/images/sapphire.jpg"
    }

};

local.code = function (resolve) {
    const t = `
		body {
			background: #171d1d url(${modules.background.options.link}) no-repeat scroll center center;
            background-attachment: fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
		}`;
    resolve(t);
};

module.exports = local;