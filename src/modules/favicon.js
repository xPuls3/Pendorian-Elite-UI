let local = {};

local.id = "favicon";
local.description = "Changes the favicon to the link below";

local.register = {
    name: "Favicon",
    runLogin: true,
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

    link: {
        description: "Favicon link",
        value: "https://raw.githubusercontent.com/xpuls3/Pendorian-Elite-UI/master/favicon.ico"
    }

};

local.code = function (resolve) {
    const t = `<link rel="icon" href="${modules.favicon.options.link}"/>`;
    $("head").append(t);
    resolve();
};

module.exports = local;