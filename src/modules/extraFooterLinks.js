let local = {};

local.id = "extraFooterLinks";
local.description = "Adds more links to the bottom of the screen";

local.register = {
    name: "Extra Footer Links",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

    links: {
        description: [
            "Add more links below",
            "Use the existing ones as examples"
        ],
        value: [
            ["Karubo's ROI", "http://pendcalc.karubo.de/"],
            ["Puls3's Calcs", "https://xpuls3.github.io/calculators/"],
            ["Impulsive Updates", "https://xpuls3.github.io/blog/"],
        ],
    },

};

local.code = function (resolve) {
    const links = modules.extraFooterLinks.options.links;
    let e = $("#gameframe-menu #togglechat").parent();
    for (let i = 0; i < links.length; i++) {
        e.after(`<li class="Pendorian-Elite-UI Elite-UI-Extra-Footer-Link" style="vertical-align: top;"><a href="${links[i][1]}" target="_blank">${links[i][0]}</a></li>`);
    }
    resolve();
};

module.exports = local;