const fs = require("fs");
let scriptVersion = "3.0-beta";

let modules = [];
let includes = {};
let listing = {};

let registry = {};
let code = {};
let codeText = "";
let options = {};
let optionsText = "";

loadIncludes();
loadModules();
processModules();
processCode();
processOptions();
finalize();
save();

function processModules () {
    modules.forEach(function (item) {
        listing[item.id] = item;
        registry[item.id] = item.register;
        code[item.id] = item.code;
        options[item.id] = item.options;
    });
}

function processCode () {
    Object.keys(code).forEach(function (property) {
        codeText = `${codeText}\n` + `modules.${property}.code = ${code[property]};\n`;
    });
}

function processOptions () {
    Object.keys(options).forEach(function (property1) {
        let tempText1 = `// ${registry[property1].name} Module`;

        if (listing[property1].description) {

            if (Array.isArray(listing[property1].description)) {
                listing[property1].description.forEach(function (item) {
                    tempText1 = `${tempText1}\n// ${item}`;
                });
            } else {
                tempText1 = `${tempText1}\n// ${listing[property1].description}`;
            }

        }

        tempText1 = `${tempText1}\n` + `modules.${property1}.options = {`;
        let tempText2 = "";

        Object.keys(options[property1]).forEach(function (property2, index) {

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

            if (index+1 < Object.keys(options[property1]).length) {
                tempText2 = `${tempText2},`;
            } else {
                tempText2 = `${tempText2}\n`;
            }

        });

        tempText2 = tempText2.replace(/\n/g, "\n    ");
        tempText2 = `${tempText1}${tempText2}\n};`;
        optionsText = `${optionsText}\n${tempText2}\n`;

    });

}

function loadIncludes () {
    includes.meta = fs.readFileSync(__dirname + "/src/userscript/meta.txt", "utf8").trim();
    includes.header = fs.readFileSync(__dirname + "/src/userscript/header.js", "utf8").trim();
    includes.origin = fs.readFileSync(__dirname + "/src/includes/origin.js", "utf8").trim();
    includes.logger = fs.readFileSync(__dirname + "/src/includes/logger.js", "utf8").trim();
}

function loadModules () {
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
}

function finalize () {
    registry = JSON.stringify(registry, null, 4).replace(/\n/g, "\n    ");
    codeText = String(codeText).replace(/\n/g, "\n    ");
    optionsText = String(optionsText).replace(/\n/g, "\n    ");
}

function applyTemplate (data) {

    data = String(data);
    data = data.replace(/\/\*\sElite\sInclude\sMeta\s\*\//gm, `${includes.meta}`);
    data = data.replace(/\/\*\sElite\sInclude\sHeader\s\*\//gm, `${includes.header}`);
    data = data.replace(/\/\*\sElite\sInclude\sOrigin\s\*\//gm, `${includes.origin}`);
    data = data.replace(/\/\*\sElite\sInclude\sLogger\s\*\//gm, `${includes.logger}`);

    data = data.replace(/\/\*\sElite\sInclude\sOptions\s\*\//gm, `${optionsText}`);
    data = data.replace(/\/\*\sElite\sInclude\sRegistry\s\*\//gm, `return ${registry};`);
    data = data.replace(/\/\*\sElite\sInclude\sCode\s\*\//gm, `${codeText}`);

    data = data.replace(/\/\*\sElite\sWrite\sVersion\s\*\//gm, `${scriptVersion}`);

    data = data.replace(/[^\S\n]+\n/gm, "\n");
    data = data.replace(/^[\n]+\n/gm, "\n");
    data = data.replace(/[\r\n]/g, "\r\n");

    return data;
}

function save () {
    fs.readFile(__dirname + "/src/userscript/script.js", "utf8", function (err, data) {
        data = applyTemplate(data);
        fs.writeFile(__dirname + "/script.user.js", data, function () {
            process.exit();
        });
    });
}