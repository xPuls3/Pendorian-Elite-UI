let local = {};

local.id = "dungeonSidebar";
local.description = "Removes the Dungeon tab and adds a link on the sidebar";

local.register = {
    name: "Dungeon Sidebar",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true,
    },

};

local.code = function (resolve) {
    const t = `
		#gameframe-battle > ul > li:nth-child(4) {
			display: none;
		}
		#dungeon-content, #dungeon-tools-content {
			color: white;
		}`;
    $("#scraptown-button").parent().after(`<li><a href="" id="elite-dungeon-button" class="Pendorian-Elite-UI"><i class="fas fa-dungeon"></i>Dungeons</a></li>`);

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

module.exports = local;