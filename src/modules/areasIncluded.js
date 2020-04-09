let local = {};

local.id = "areasIncluded";
local.description = "Removes the Areas tab and adds the content to the battle tab";

local.register = {
    name: "Areas Included",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

};

local.code = function (resolve) {
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
                            $("#AreasIncluded").html(data.replace(`<div style="text-align: center; margin-top: 10px; margin-bottom: 15px;">Exploring the lands? Watch out for strangers.</div>`, ""));
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
                $("#AreasIncluded").html(data.replace(`<div style="text-align: center; margin-top: 10px; margin-bottom: 15px;">Exploring the lands? Watch out for strangers.</div>`, ""));
            },
        });
    }, 10000);
    resolve(t);
};

module.exports = local;