// ==UserScript==
// @name Pendorian Elite UI
// @namespace http://pendoria.net/
// @version 2.6
// @author Puls3
// @include /^https?:\/\/(?:.+\.)?pendoria\.net\/?(?:.+)?$/
// @homepage https://xpuls3.github.io/Pendorian-Elite-UI
// @supportURL https://github.com/xPuls3/Pendorian-Elite-UI/issues
// @downloadURL https://github.com/xPuls3/Pendorian-Elite-UI/raw/master/script.user.js
// @updateURL https://github.com/xPuls3/Pendorian-Elite-UI/raw/master/script.user.js
// @icon https://raw.githubusercontent.com/xPuls3/Pendorian-Elite-UI/master/favicon.ico
// @grant none
// @run-at document-end
// @description Changes a large portion of the text and UI to 'Elite' blue and makes small changes to the UI.
// ==/UserScript==

// Pendorian Elite UI is only officially distributed on GitHub!
// - https://github.com/xPuls3/Pendorian-Elite-UI/

// Pendorian Elite UI also has an official website!
// - https://xpuls3.github.io/Pendorian-Elite-UI/

// This script was created by Puls3!
// - Puls3 on Pendoria

const version = GM_info.script.version;
let Modules = Register();
Define();

// [Options]

// Toggle Script Debugging
const isDebug = false;

(function () {

    // Version Check Module
    Modules.VersionCheck.Options = {

        // Version Check Module, Enable / Disable
        Status: true,

        // Version Check Module, Only check once every 24 hours
        DailyLimit: true,

    };

    // Recolor Module
    // Changes the color of almost everything.
    Modules.Recolor.Options = {

        // Recolor Module, Enable / Disable
        Status: true,

        // Recolor Module, Swap Old Username Color Titles
        // Changes cyan titles to match the new chat username color
        TitleSwap: true,

        // Recolor Module, Colors
        Color: "rgb(0, 153, 255)",
        DarkColor: "rgb(0, 123, 235)",
        ButtonColor: "rgba(0, 153, 255, 0.5)",
        ButtonHoverColor: "rgba(0, 153, 255, 0.8)",
        ProgressBackgroundColor: "rgb(51, 71, 113)",
        ProfileLinkColor: "rgb(0, 123, 235)",
        MentionColor: "rgb(0, 219, 255)",
        MentionTabColor: "rgb(0, 153, 255)",
        ChatUsernameColor: "rgb(0, 153, 255)",

    };

    // Edits Module
    // Tiny edits that used to be included with the recolor.
    // Currently includes only removing the annoying text from the dungeons page. (Sorry Xortrox!)
    Modules.Edits.Options = {

        // Edits Module, Enable / Disable
        Status: true,

    };

    // Frameless Mode Module
    // Removes all of the frames.
    // Also adjusts sizes to look good without frames.
    Modules.Frameless.Options = {

        // Frameless Module, Enable / Disable
        Status: true,

    };

    // Dual View Module
    // Forces the actions page to always show and shortens it.
    // Forces the content to always show below the actions page.
    // Requires Dungeon Sidebar to work correctly!
    Modules.DualView.Options = {

        // Dual View Module, Enable / Disable
        Status: false,

        // Dual View Module, Line
        // How far down the frame (in pixels) the line between content and actions is.
        Line: 220,

    };

    // Rounded Borders Module
    // Makes most of the game's main area corners round.
    // Requires the Frameless Mode Module.
    Modules.RoundedBorders.Options = {

        // Rounded Borders Module, Enable / Disable
        Status: false,

        // Rounded Borders Module, Rounded Amount
        // Changes how round the corners are.
        // Uses CSS values!
        Amount: "16px",

    };

    // Background Module
    // Changes the background.
    Modules.Background.Options = {

        // Background Module, Enable / Disable
        Status: true,

        // Standard Image: 'Stellar Collision' by KuldarLeement
        // Original Link: https://www.deviantart.com/kuldarleement/art/Stellar-collision-397866757
        // Hosted Link: https://zerthox.github.io/ClearVision/images/sapphire.jpg

        // Background Module, Background Link
        Link: "https://zerthox.github.io/ClearVision/images/sapphire.jpg",

    };

    // Favicon Module
    // Changes the favicon.
    Modules.Favicon.Options = {

        // Favicon Module, Enable / Disable
        Status: true,

        // Favicon Module, Favicon Link
        Link: "https://raw.githubusercontent.com/xpuls3/Pendorian-Elite-UI/master/favicon.ico",

    };

    // Legacy Sidebar Module
    // Makes the sidebar look almost like the original sidebar designed by Zampa.
    Modules.LegacySidebar.Options = {

        // Legacy Sidebar Module, Enable / Disable
        Status: true,

    };

    // Remove Logo Module
    // Removes the 'Pendoria Logo' and moves the left side upwards to reduce clutter.
    Modules.RemoveLogo.Options = {

        // Remove Logo Module, Enable / Disable
        Status: true,

    };

    // Dungeon Sidebar Module
    // Removes the Dungeon tab and adds a link on the sidebar.
    Modules.DungeonSidebar.Options = {

        // Dungeon Sidebar Module, Enable / Disable
        Status: true,

    };

    // Remove Battle Stats Module
    // Removes the battle stats in the header.
    Modules.RemoveBattleStats.Options = {

        // Remove Battle Stats, Enable / Disable
        Status: false,

    };

    // Areas Included Module
    // Removes the Areas tab and adds the content to the battle tab.
    Modules.AreasIncluded.Options = {

        // Areas Included Module, Enable / Disable
        Status: true,

    };

    // Remove Tabs Module
    // Removes the tabs on the actions page.
    // Requires Dungeon Sidebar to be active!
    // Requires Areas Included to be active!
    Modules.RemoveTabs.Options = {

        // Remove Tabs Module, Enable / Disable
        Status: false,

    };

    // Remove Tradeskill Selection Module
    // Removes the Tradeskill Selection dropdown next to the work button.
    // Removes the work button.
    // Ensure that you are already doing the TS that you want to continue doing!
    Modules.RemoveTradeskillSelection.Options = {

        // Remove Tradeskill Selection Module, Enable / Disable
        Status: false,

        // Adds a small amount of space above the action text.
        // Without this it will look awkward.
        AddSpace: true,

    };

    // Extra Bottom Links Module
    // Adds more links to the bottom of the screen
    Modules.ExtraBottomLinks.Options = {

        // Extra Bottom Links Module, Enable / Disable
        Status: true,

        // Add links option below.
        // Make sure you use a different declaration for each!
        // For example, if you have 'Example' the following, you cannot have another that also says 'Example'!
        // You would have to change it to 'AnotherExample', or something else that is alphanumeric!
        Links: {

            // Any suggestions of default links to add would be appreciated!

            // Example Link Below
            /*
            Example: {
                Name: "Example Link",
                Link: "https://example.com"
            },
            */

            // Karubo's ROI Calculator Link
            ROI: {
                Name: "Karubo's ROI",

                // New Karubo Website
                // - http://pendcalc.karubo.de/

                // Old Google Sheets URL
                // - "http://tiny.cc/KaruboROI"

                Link: "http://pendcalc.karubo.de/",

            },

            // Puls3's Calculator Link
            Calcs: {
                Name: "Puls3's Calcs",
                Link: "https://xpuls3.github.io/calculators/",
            },

            // Impulsive Puls3's Updates Link
            ImpulsiveUpdate: {
                Name: "Impulsive Updates",
                Link: "https://xpuls3.github.io/blog/",
            },

        },

    };

    // Extended Header Module
    // Extends the header above chat in side-by-side mode.
    Modules.ExtendedHeader.Options = {

        // Extended Header Module, Enable / Disable
        Status: true,

    };

    // Remove Gold Stat Module
    // Removes Gold Boost & Stat Drop Boost from Rhodium Boosts
    Modules.RemoveGoldStat.Options = {

        // Remove Gold Stat Module, Enable / Disable
        Status: false,

    };

})();

// [Functions]

(function () {

    Origin();

    function Origin() {
        logDo("Initiating Pendorian Elite UI v" + version, 0);
        const k = Object.keys(Modules);
        let promiseList = [];
        let isGame = checkIsPath("/game");
        let isLogin = checkIsPath("/");
        for (let i = 0; i < k.length; i++) {
            Modules[k[i]].id = String(k[i]);
            if (typeof (Modules[k[i]].Name) === "undefined") Modules[k[i]].Name = Modules[k[i]].id;
            if (isGame || (isLogin && Modules[k[i]].RunLogin)) {
                if (typeof (Modules[k[i]].Options) !== "undefined") {
                    if (Modules[k[i]].Options.Status) {
                        if (typeof (Modules[k[i]].Code) !== "undefined") {
                            promiseList.push(new Promise(function (resolve) {
                                Modules[k[i]].Code(resolve);
                            }).then(function (result) {
                                if (result) {
                                    Modules[k[i]].Style = result;
                                    applyStyle(Modules[k[i]]);
                                }
                                if (isDebug) {
                                    logDo(Modules[k[i]].Name + " Module Enabled", 0);
                                }
                            }));
                        } else {
                            logDo(Modules[k[i]].Name + " Module does not contain code", 1);
                        }
                    }
                } else {
                    logDo(Modules[k[i]].Name + " Module does not contain options", 1);
                }
            }
        }
        Promise.all(promiseList).then(function () {
            if (isDebug) logDo("Script Completely Loaded", 0);
        });
    }

    function applyStyle(module) {
        let matches = $(".Elite-UI-Style[Elite-UI-Module=" + module.id + "]");
        if (matches.length !== 0) matches.remove();
        $("head").append("<style class=\"Pendorian-Elite-UI Elite-UI-Style\" Elite-UI-Module=\"" + module.id + "\">" + module.Style + "</style>")
    }

    function checkIsPath(x) {
        return (window.location.pathname === x);
    }

})();

function Register() {
    return {
        Recolor: {
            Name: "Recolor",
            RunLogin: true,
        },
        Edits: {
            Name: "Edits",
            RunLogin: false,
        },
        Frameless: {
            Name: "Frameless Mode",
            RunLogin: true,
        },
        DualView: {
            Name: "DualView",
            RunLogin: false,
        },
        RoundedBorders: {
            Name: "Rounded Borders",
            RunLogin: true,
        },
        Background: {
            Name: "Background",
            RunLogin: true,
        },
        Favicon: {
            Name: "Favicon",
            RunLogin: true,
        },
        LegacySidebar: {
            Name: "Legacy Sidebar",
            RunLogin: false,
        },
        RemoveLogo: {
            Name: "Remove Logo",
            RunLogin: false,
        },
        DungeonSidebar: {
            Name: "Dungeon Sidebar",
            RunLogin: false,
        },
        AreasIncluded: {
            Name: "Areas Included",
            RunLogin: false,
        },
        RemoveBattleStats: {
            Name: "Remove Battle Stats",
            RunLogin: false,
        },
        RemoveTabs: {
            Name: "Remove Tabs",
            RunLogin: false,
        },
        RemoveTradeskillSelection: {
            Name: "Remove Tradeskill Selection",
            RunLogin: false,
        },
        ExtraBottomLinks: {
            Name: "Extra Bottom Links",
            RunLogin: false,
        },
        ExtendedHeader: {
            Name: "Extended Header",
            RunLogin: false,
        },
        RemoveGoldStat: {
            Name: "Remove Gold Stat",
            RunLogin: false,
        },
        VersionCheck: {
            Name: "Version Check",
            RunLogin: false,
        },
    };
}

function Define() {

    Modules.Recolor.Code = function (resolve) {
        const t = `
        html {
            --Elite-Color: ` + Modules.Recolor.Options.Color + `;
            --Elite-Dark-Color: ` + Modules.Recolor.Options.DarkColor + `;
            --Elite-Mention-Color: ` + Modules.Recolor.Options.MentionColor + `;
            --Elite-Mention-Tab-Color: ` + Modules.Recolor.Options.MentionTabColor + `;
            --Elite-Button-Color: ` + Modules.Recolor.Options.ButtonColor + `;
            --Elite-Button-Hover-Color: ` + Modules.Recolor.Options.ButtonHoverColor + `;
            --Elite-Profile-Link-Color: ` + Modules.Recolor.Options.ProfileLinkColor + `;
            --Elite-Progress-Background-Color: ` + Modules.Recolor.Options.ProgressBackgroundColor + `;
            --Elite-Chat-Color: ` + Modules.Recolor.Options.ChatUsernameColor + `;
        }
		
		/* Chat Color CSS */
		
            .chat-username {
                color: var(--Elite-Chat-Color) !important;
            }
            
		    #chat-messages > ul > li > font[color="#00ffff"] {
		        color: var(--Elite-Chat-Color) !important;
		    }
            
            .chat-local-error, #chat-messages ul li span[style*="color: #ea907b;"] {
                color: var(--Elite-Color) !important;
            }
            
            .username-hilighted {
                color: var(--Elite-Mention-Color) !important;
            }
            
            .chat-hilighted {
                color: var(--Elite-Mention-Tab-Color) !important;
            }
		
		/* UI CSS Below */
		
            #invinfo, #scraptowninfo, #invasioninfo, .activity-log-username, .guild-section [style*="color: rgb(29, 166, 87);"], .guild-section [style*="color: #1da657;"], #event[style="color:red;"], #mailcount, #action-info, a[style="color: rgb(255, 0, 0);"] {
                color: var(--Elite-Color) !important;
            }
            #header-stats, #quest_done, #quest_prog {
                color: var(--Elite-Color);
            }
            .green, #expwidth, #building-progress, #profile-scraptown-building-progress, #profile-encampment-building-progress, #chat-composer input[type="submit"], .toast-success {
                background-color: var(--Elite-Color) !important;
            }
            button {
                background: var(--Elite-Button-Color) !important;
            }
            button:hover {
                background: var(--Elite-Button-Hover-Color) !important;
            }
            .item-rarity-runic {
                color: var(--Elite-Color) !important;
                text-shadow: 0 0 1px blue !important;
            }
            .display-item [style*="color: rgb(29, 166, 87);"], .display-item [style*="color: green;"], #rerollCost, #rerollCost + span[style="color: #1da657;"] {
                color: var(--Elite-Color) !important;
            }
            .display-item [style*="color: #98bda1; padding-top: 5px;"], #lockedStatsForm span[style="color: green;"], #lockedStatsForm div[style="color: #98bda1; padding-top: 5px;"]{
                color: var(--Elite-Dark-Color) !important;
            }
            ::selection {
                color: white;
                background: var(--Elite-Color);
            }
            .guild-name {
                font-weight: bold;
                color: var(--Elite-Profile-Link-Color);
            }
            .chat-command {
                color: var(--Elite-Color);
            }
            progress {
                color: var(--Elite-Color);
            }
            progress::-webkit-progress-value {
                background: var(--Elite-Color);
            }
            progress::-moz-progress-bar {
                background: var(--Elite-Color);
            }
            progress::-webkit-progress-bar {
                background: var(--Elite-Color);
            }
            #progressbar-wrapper {
                background: var(--Elite-Progress-Background-Color);
            }
            #exp {
                background: var(--Elite-Progress-Background-Color) !important;
            }
            .tab-game-content [style*="width: 100%; border-radius: 10px; overflow: hidden; background-color: #31453a;"] {
                background: var(--Elite-Progress-Background-Color) !important;
            }
            .terms-section-header, .question {
                color: var(--Elite-Color) !important;
            }
            
            #dungeon-progressbar-wrapper {
                background-color: var(--Elite-Progress-Background-Color);
            }
            #dungeon-progressbar-wrapper .progressbar, #encampment-building-progress  {
                background-color: var(--Elite-Color) !important;
            }
            
            [data-player-id*="334"] .chat-username {
                color: rgb(0, 153, 255) !important;
            }
            
            #quint span, .actionexperience, .actionexperience span, #double_tradeskill span, #guild_amount, #guild_currency, #gainedtype, #gainedres, #actionencampmentax {
                color: var(--Elite-Color) !important;
            }
            
            .timeshit, .timescrit, .timesdodged, .hitstaken, #gainedgold, .actiongold, #guild_gold, #double_battle span {
                color: var(--Elite-Color) !important;
            }`;
        resolve(t);
    };

    Modules.Edits.Code = function (resolve) {
        const t = `
		#dungeon-dialogue {
			display: none;
		}`;
        resolve(t);
    };

    Modules.Frameless.Code = function (resolve) {
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

    Modules.DualView.Code = function (resolve) {
        const t = `
		html {
			--DualViewLine: ` + Modules.DualView.Options.Line + `px;
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

    Modules.RoundedBorders.Code = function (resolve) {
        const l = Modules.RoundedBorders.Options.Amount;
        const t = `
		#profile, #menu, #stats-hourly, #ether-resources-sidebar,`
            + `#gameframe-battle, #gameframe-content, #drop-statistics,`
            + `#gameframe-status-wrapper, #chat, #chat-form {
			border-radius: ` + l + ` !important;
		}
		.nav-tabs > li > a {
			border-radius: ` + l + ` ` + l + `0px 0px !important;
		}`;
        resolve(t);
    };

    Modules.Background.Code = function (resolve) {
        const t = `
		body {
			background: #171d1d url(` + Modules.Background.Options.Link + `) no-repeat scroll center center;
            background-attachment: fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
		}`;
        resolve(t);
    };

    Modules.Favicon.Code = function (resolve) {
        const t = `<link rel="icon" href="` + Modules.Favicon.Options.Link + `"/>`;
        $("head").append(t);
        resolve();
    };

    Modules.LegacySidebar.Code = function (resolve) {
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

    Modules.RemoveLogo.Code = function (resolve) {
        const t = `
		#content > div.wrapper > aside > * {
			top: -50px;
		}
		#logo {
			display: none;
		}
		#content > .wrapper:first-child > header:first-child {
			pointer-events: none;
		}
		#header-stats {
			pointer-events: auto;
		}`;
        resolve(t);
    };

    Modules.DungeonSidebar.Code = function (resolve) {
        const t = `
		#gameframe-battle > ul > li:nth-child(4) {
			display: none;
		}
		#dungeon-content, #dungeon-tools-content {
			color: white;
		}`;
        $("#scraptown-button").parent().after("<li><a href=\"\" id=\"elite-dungeon-button\" class=\"Pendorian-Elite-UI\"><i class=\"fas fa-dungeon\"></i>Dungeons</a></li>");

        // Function Below Grabbed From Pendoria And Modified
        // Heavily modified, as this code is less than awesome.
        $("#elite-dungeon-button").click(function (event) {
            event.preventDefault();
            ajaxPost("/action/dungeons", function (data) {
                $("#gameframe-content").html(data).show();
                $("#gameframe-battle").hide();
                $("#dungeon-tools-content [tooltip-title]").each(function () {
                    $(this).qtip({
                        content: {
                            title: $(this).attr("tooltip-title"),
                            text: $(this).attr("tooltip-text"),
                        },
                        style: {classes: "qtip-dark"},
                        position: {
                            target: "mouse",
                        },
                    });
                });
                ajaxPost("/dungeons/in-progress", function (inProgress) {
                    $progressbarWrapper = $("#dungeon-progressbar-wrapper");
                    $startButton = $(".dungeon-button-start");
                    if (inProgress) {
                        $progressbarWrapper.attr("hidden", false);
                        $startButton.attr("hidden", true);
                        setDungeonDialogueText(dungeonTextInProgress);
                    } else {
                        $progressbarWrapper.attr("hidden", true);
                        $startButton.attr("hidden", false);
                        setDungeonDialogueText(dungeonTextDone);
                    }
                    $dungeonDialogue = $("#dungeon-dialogue");
                    $dungeonDialogue.attr("hidden", false);
                    $dungeonControls = $(".dungeon-controls");
                    $dungeonControls.attr("hidden", false);
                    updateDungeonActivatorCount();
                    updateProfileDungeonActivatorCount();
                });
                ajaxPost("/dungeons/boosts", function (dungeonBoosts) {
                    dungeonTools.updateBoostPrices(dungeonBoosts);
                });
            });
        });
        resolve(t);
    };

    Modules.AreasIncluded.Code = function (resolve) {
        const t = `
        #gameframe-battle > ul > li:nth-child(3) {
			display: none;
		}`;
        setTimeout(function () {
            let $battleNav = $("#gameframe-battle .nav-tabs li");
            $battleNav.off("click");

            // Function Below Grabbed From Pendoria And Modified
            $battleNav.on("click", "a", function (e) {
                let url;
                if (e.currentTarget.textContent === "Battle") {
                    url = "battle";
                } else if (e.currentTarget.textContent === "Tradeskill") {
                    url = "tradeskill";
                } else if (e.currentTarget.textContent === "Dungeons") {
                    // Open dungeons instead
                    url = "dungeons";
                } else if (e.currentTarget.textContent === "Area") {
                    // Open dungeons instead
                    url = "area";
                }
                ajaxPost("/action/" + url, function (data) {
                    $("#actioncontent").html(data);
                    if (url === "dungeons") {
                        ajaxPost("/action/dungeons", function (data) {
                            $("#gameframe-battle").html(data).show();
                            $("#dungeon-tools-content [tooltip-title]").each(function () {
                                $(this).qtip({
                                    content: {
                                        title: $(this).attr("tooltip-title"),
                                        text: $(this).attr("tooltip-text"),
                                    },
                                    style: {classes: "qtip-dark"},
                                    position: {
                                        target: "mouse",
                                    },
                                });
                            });
                            ajaxPost("/dungeons/in-progress",
                                function (inProgress) {
                                    $progressbarWrapper = $("#dungeon-progressbar-wrapper");
                                    $startButton = $(".dungeon-button-start");
                                    if (inProgress) {
                                        $progressbarWrapper.attr("hidden", false);
                                        $startButton.attr("hidden", true);
                                        setDungeonDialogueText(dungeonTextInProgress);
                                    } else {
                                        $progressbarWrapper.attr("hidden", true);
                                        $startButton.attr("hidden", false);
                                        setDungeonDialogueText(dungeonTextDone);
                                    }
                                    $dungeonDialogue = $("#dungeon-dialogue");
                                    $dungeonDialogue.attr("hidden", false);
                                    $dungeonControls = $(".dungeon-controls");
                                    $dungeonControls.attr("hidden", false);
                                    updateDungeonActivatorCount();
                                    updateProfileDungeonActivatorCount();
                                });
                            ajaxPost("/dungeons/boosts",
                                function (dungeonBoosts) {
                                    dungeonTools.updateBoostPrices(dungeonBoosts);
                                });
                        });
                    }
                    if (url === "tradeskill") {
                        $("#stats-hourly-tab-battle").attr("hidden", true);
                        $("#stats-hourly-tab-tradeskill").attr("hidden", false);
                    }
                    if (url === "battle") {
                        $("#stats-hourly-tab-battle").attr("hidden", false);
                        $("#stats-hourly-tab-tradeskill").attr("hidden", true);
                        if (!$("#AreasIncluded").first.length) {
                            $("#nofight").after("<div id='AreasIncluded' class=\"Pendorian-Elite-UI\"></div>");
                            $("#gameframe-battle > ul > li:contains('Area')").hide();
                        }
                        $.ajax({
                            type: "POST",
                            url: "/action/area",
                            success: function (data) {
                                $("#AreasIncluded").html(data.replace("<div style=\"text-align: center; margin-top: 10px; margin-bottom: 15px;\">Exploring the lands? Watch out for strangers.</div>", ""));
                            },
                        });
                    }
                });
            });
            if (!$("#AreasIncluded").first.length) {
                $("#nofight").after("<div id='AreasIncluded'></div>");
            }
            $.ajax({
                type: "POST",
                url: "/action/area",
                success: function (data) {
                    $("#AreasIncluded").html(data.replace("<div style=\"text-align: center; margin-top: 10px; margin-bottom: 15px;\">Exploring the lands? Watch out for strangers.</div>", ""));
                },
            });
        }, 10000);
        resolve(t);
    };

    Modules.RemoveBattleStats.Code = function (resolve) {
        const t = `
		.header-stats-user {
			display: none;
		}`;
        resolve(t);
    };

    Modules.RemoveTabs.Code = function (resolve) {
        const t = `
		#gameframe-battle > ul {
			display: none;
		}`;
        resolve(t);
    };

    Modules.RemoveTradeskillSelection.Code = function (resolve) {
        let t = `
		#actioncontent > div:nth-child(2) {
            display: none !important;
        }`;
        if (Modules.RemoveTradeskillSelection.Options.AddSpace === true) {
            t = t + `
            #actioncontent {
                margin-top: 15px;
            }`;
        }
        resolve(t);
    };

    Modules.ExtraBottomLinks.Code = function (resolve) {
        const k = Object.keys(Modules.ExtraBottomLinks.Options.Links);
        let e = $("#gameframe-menu #togglechat").parent();
        for (let i = 0; i < k.length; i++) {
            e.after("<li class=\"Pendorian-Elite-UI Elite-UI-Extra-Bottom-Link\" style=\"vertical-align: top;\"><a href=\"" +
                Modules.ExtraBottomLinks.Options.Links[k[i]].Link + "\" target=\"_blank\">" +
                Modules.ExtraBottomLinks.Options.Links[k[i]].Name + "</a></li>");
        }
        resolve();
    };

    Modules.ExtendedHeader.Code = function (resolve) {
        let t = `
        #header-content {
            width: calc(100% - 260px) !important
        }`;
        resolve(t);
    };

    Modules.RemoveGoldStat.Code = function (resolve) {
        const t = `
        #rhodium-boosts-actions + div + div > table > tbody > tr:nth-of-type(3),
        #rhodium-boosts-actions + div + div > table > tbody > tr:nth-of-type(2),
		#rhodium-boosts-actions + div + div > table > tbody > tr:nth-of-type(1),
        #rhodium-boosts-actions + div + div + div > table > tbody > tr:nth-of-type(3),
        #rhodium-boosts-actions + div + div + div > table > tbody > tr:nth-of-type(2),
		#rhodium-boosts-actions + div + div + div > table > tbody > tr:nth-of-type(1) {
			display: none;
		}`;
        resolve(t);
    };

    Modules.VersionCheck.Code = function (resolve) {
        let t = `
        .elite-version-window {
            z-index: 999999999;
            width: 100vw;
            height: 100vh;
            max-width: max-content;
            background: rgba(0, 0, 0, 0.70);
        }
        
        .elite-version-window h1 {
            text-align: center;
            padding-top: 10px;
        }
        
        .elite-version-window button {
            text-align: center;
            margin-right: 10px;
        }
        
        .elite-version-content {
            width: 30%;
            min-width: max-content;
            height: 135px;
            background: black;
            color: white;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            position: absolute;
            padding: 0px 50px 0px;
        }
        
        .elite-version-border {
            border: 10px solid transparent !important;
            border-image-source: url(/images/frame.png) !important;
            border-image-slice: 10 8 !important;
            border-image-repeat: round !important;
        }`;
        let hasls = (function () {
            let test = "test";
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        });
        if (hasls || !Modules.VersionCheck.Options.DailyLimit) {
            let lastCheck = new Date(localStorage.getItem("Last Elite UI Version Check"));
            if ((new Date().getTime() - lastCheck.getTime()) > (60 * 60 * 24 * 1000) || !Modules.VersionCheck.Options.DailyLimit) {
                new Promise(function (resolve) {
                    $.get("https://api.github.com/repos/xpuls3/Pendorian-Elite-UI/releases/latest", function (data) {
                        if (version.includes("-") && version.split("-")[0] === data.tag_name) {
                            resolve(data.tag_name);
                        } else if (version.split("-")[0] !== data.tag_name) {
                            resolve(data.tag_name);
                        } else {
                            resolve(false);
                        }
                    });
                }).then(function (newVer) {
                    if (newVer !== false) {
                        logDo("Pendorian Elite UI v" + newVer + " has been released, you are currently running outdated version " + version + "!", 1);

                        const eliteVersionWindowBackground = document.createElement("div");
                        eliteVersionWindowBackground.setAttribute("class", "elite-version-window");
                        eliteVersionWindowBackground.setAttribute("id", "elite-version-window");

                        const eliteVersionWindowContent = document.createElement("div");
                        eliteVersionWindowContent.setAttribute("class", "elite-version-content elite-version-border");
                        eliteVersionWindowContent.innerHTML = "<h1>Outdated Elite UI Version!</h1><p>Pendorian Elite UI v" + newVer + " has been released, you are currently running outdated version " + version + "!</p>";

                        const eliteVersionDownloadButton = document.createElement("button");
                        eliteVersionDownloadButton.innerText = "Download";
                        eliteVersionDownloadButton.setAttribute("onclick", "window.open('https://github.com/xPuls3/Pendorian-Elite-UI/raw/master/script.user.js', '_blank');");

                        const eliteVersionNotesButton = document.createElement("button");
                        eliteVersionNotesButton.innerText = "Release Notes";
                        eliteVersionNotesButton.setAttribute("onclick", "window.open('https://github.com/xPuls3/Pendorian-Elite-UI/releases/latest', '_blank');");

                        const eliteVersionCloseButton = document.createElement("button");
                        eliteVersionCloseButton.innerText = "Close";
                        eliteVersionCloseButton.setAttribute("onclick", "$(\"#elite-version-window\").remove();");

                        eliteVersionWindowContent.appendChild(eliteVersionDownloadButton);
                        eliteVersionWindowContent.appendChild(eliteVersionNotesButton);
                        eliteVersionWindowContent.appendChild(eliteVersionCloseButton);
                        eliteVersionWindowBackground.appendChild(eliteVersionWindowContent);
                        document.body.appendChild(eliteVersionWindowBackground);
                    }
                });
                localStorage.setItem("Last Elite UI Version Check", String(new Date()));
            }
        }
        resolve(t);
    };

}

function logDo(i, t) {
    const logType = {
        0: ["OKAY", "color: rgb(0,148,255);"],
        1: ["ERROR", "color:red;"],
    };
    let logArray = [
        "%c[%cElite UI%c] [%c" + logType[t][0] + "%c] " + i,
        "color: none;", "color: rgb(0,148,255);",
        "color: none;", logType[t][1],
        "color: none;",
    ];
    console.log.apply(null, logArray);
}
