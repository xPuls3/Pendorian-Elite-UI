let local = {};

local.id = "extraFooterLinks";
local.description = "Adds more links to the bottom of the screen";

local.register = {
    name: "Extra Footer Links"
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    },

    links: {
        description: [
            "Add more links below",
            "Use the existing ones as examples"
        ],
        value: [

            // Karubo shut down his site, it's now maintained at:
            // - https://github.com/Pendoria/karubo-roi
            // ["Karubo's ROI", "http://pendcalc.karubo.de/"],

            ["Karubo's ROI", "https://pendoria.github.io/karubo-roi/"],
            ["Puls3's Calcs", "https://xpuls3.github.io/calculators/"],

            // I decided to remove this link, I'm not really maintaining it anymore.
            // ["Impulsive Updates", "https://xpuls3.github.io/blog/"]

        ]
    }

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