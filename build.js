const fs = require("fs");
let version = "3.0-beta";

let modules = [];
let listing = {};

let meta = fs.readFileSync(__dirname + "/src/userscript/meta.txt", "utf8").trim();
let header = fs.readFileSync(__dirname + "/src/userscript/header.js", "utf8").trim();
let origin = fs.readFileSync(__dirname + "/src/includes/origin.js", "utf8").trim();
let logger = fs.readFileSync(__dirname + "/src/includes/logger.js", "utf8").trim();

modules.push(require("./src/modules/recolor"));
modules.push(require("./src/modules/background"));
modules.push(require("./src/modules/favicon"));
modules.push(require("./src/modules/edits"));
modules.push(require("./src/modules/frameless"));
modules.push(require("./src/modules/dungeonSidebar"));
modules.push(require("./src/modules/dualView"));
modules.push(require("./src/modules/legacySidebar"));
modules.push(require("./src/modules/roundedBorders"));
modules.push(require("./src/modules/extendedHeader"));
modules.push(require("./src/modules/areasIncluded"));
modules.push(require("./src/modules/extraFooterLinks"));
modules.push(require("./src/modules/removeBattleStats"));
modules.push(require("./src/modules/removeGoldStat"));
modules.push(require("./src/modules/removeLogo"));
modules.push(require("./src/modules/removeTabs"));
modules.push(require("./src/modules/removeTradeskillSelection"));
modules.push(require("./src/modules/versionCheck"));

let registry = {};
let code = {};
let codeText = "";
let options = {};
let optionsText = "";

modules.forEach(function (item) {
    listing[item.id] = item;
    registry[item.id] = item.register;
    code[item.id] = item.code;
    options[item.id] = item.options;
});

for (let property in code) {
    codeText = `${codeText}\nmodules.${property}.code = ${code[property]};\n`;
}

for (let property1 in options) {
    let tempText1 = `// ${registry[property1].name} Module`;

    if (listing[property1].description) {

        if (Array.isArray(listing[property1].description)) {
            listing[property1].description.forEach(function (item) {
                tempText1 = `${tempText1}\n// ${item}`;
            })
        } else {
            tempText1 = `${tempText1}\n// ${listing[property1].description}`;
        }

    }

    tempText1 = `${tempText1}\nmodules.${property1}.options = {`;
    let tempText2 = "";

    let amount = 0;
    for (let property2 in options[property1]) {

        amount++;

        if (options[property1][property2].description) {
            if (Array.isArray(options[property1][property2].description)) {
                tempText2 = `${tempText2}\n`;
                options[property1][property2].description.forEach(function (item) {
                    tempText2 = `${tempText2}\n// ${item}`;
                });
            } else {
                tempText2 = `${tempText2}\n\n// ${options[property1][property2].description}`;
            }
        }

        let tempOption;

        if (typeof options[property1][property2].value !== "undefined") {
            tempOption = options[property1][property2].value;
        } else {
            tempOption = options[property1][property2];
        }

        if (typeof tempOption === "string") {
            tempOption = `"${tempOption}"`;
        } else if (Array.isArray(tempOption)) {
            tempOption = JSON.stringify(tempOption, null, 4);
        }

        tempText2 = `${tempText2}\n${property2}: ${tempOption}`;

        if (amount < Object.keys(options[property1]).length) {
            tempText2 = `${tempText2},`;
        } else {
            tempText2 = `${tempText2}\n`;
        }

    }

    tempText2 = tempText2.replace(/\n/g, "\n    ");
    tempText2 = `${tempText1}${tempText2}\n};`;
    optionsText = `${optionsText}\n${tempText2}\n`;

}

registry = JSON.stringify(registry, null, 4).replace(/\n/g, "\n    ");
codeText = String(codeText).replace(/\n/g, "\n    ");
// optionsText = `\n// Sorted in alphabetical order\n${optionsText}`;
optionsText = String(optionsText).replace(/\n/g, "\n    ");

fs.readFile(__dirname + "/src/userscript/script.js", "utf8", function (err, data) {
    data = String(data).replace("/* Elite Include Meta */", `${meta}`);
    data = String(data).replace("/* Elite Include Header */", `${header}`);
    data = String(data).replace("/* Elite Include Origin */", `${origin}`);
    data = String(data).replace("/* Elite Write Version */", `${version}`);
    data = String(data).replace("/* Elite Include Options */", `${optionsText}`);
    data = String(data).replace("/* Elite Include Registry */", `return ${registry};`);
    data = String(data).replace("/* Elite Include Code */", codeText);
    data = String(data).replace("/* Elite Include Logger */", `${logger}`);
    fs.writeFile(__dirname + "/script.user.js", data, function () {
        process.exit();
    });
});