// ==UserScript==
// @name Pendorian Elite UI
// @namespace http://pendoria.net/
// @version 2.2-beta.2
// @author Puls3
// @include http*://*pendoria.net* 
// @downloadURL https://github.com/Xer0-Puls3/Pendorian-Elite-UI/raw/master/script.user.js
// @grant none
// @description Changes a large portion of the text and UI to 'Elite' blue and makes small changes to the UI.
// ==/UserScript==

// Made by Puls3 from Pendoria!
// It's very easy to edit!
// If cloned please give credit!

// Also follow the Clone Policy!
// Clone Policy; https://goo.gl/AyAdqy

// [Development Changes]
// Moved tiny edits from the recolor to a new Edits Module.
// Added a Rounded Borders Module.
// Rewrote the core functions to make development easier.
// Updated Karubo's ROI link to use his new link.
// Updated old code to use better coding practices, no effect.

// [Declarations]
// Leave these few lines alone!
Modules = Register();
let Style = "";

// [Options]

// Recolor Module
	// Changes the color of almost everything.

	// Recolor Module, Enable / Disable
	Modules.Recolor.Status = true;

	// Recolor Module, Colors
	Modules.Recolor.Color = "rgb(0, 153, 255)";
	Modules.Recolor.DarkColor = "rgb(0, 123, 235)";
	Modules.Recolor.ButtonColor = "rgba(0, 153, 255, 0.5)";
	Modules.Recolor.ButtonHoverColor = "rgba(0, 153, 255, 0.8)";
	Modules.Recolor.ProgressBackgroundColor = "rgb(51, 71, 113)";
	Modules.Recolor.ProfileLinkColor = "rgb(0, 123, 235)";
	Modules.Recolor.MentionColor = "rgb(0, 219, 255)";
	Modules.Recolor.MentionTabColor = "rgb(0, 153, 255)";

// Edits Module
	// Tiny edits that used to be included with the recolor.
	// Currently includes only removing the annoying text from the dungeons page. (Sorry Xortrox!)

	// Edits Module, Enable / Disable
	Modules.Edits.Status = true;

// Frameless Mode Module
	// Removes all of the frames.
	// Adjusts sizes to look good without frames.

	// Frameless Module, Enable / Disable
	// Removes the 'frames' on the entire game.
	Modules.Frameless.Status = true;

// Dual View Module
	// Forces the actions page to always show and shortens it.
	// Forces the content to always show below the actions page.
	// Requires Dungeon Sidebar to work correctly!

	// Dual View Module, Enable / Disable
	Modules.DualView.Status = false;

	// Dual View Module, Line
	// The how far down the frame the line between content and actions is.
	Modules.DualView.Line = 220;

// Rounded Borders Module
	// Makes most of the game's main area corners round.
	// Requires the Frameless Mode Module.

	// Rounded Borders Module, Enable / Disable
	Modules.RoundedBorders.Status = false;

	// Rounded Borders Module, Rounded Amount
	// Changes how round the corners are.
	// Uses CSS values!
	Modules.RoundedBorders.Amount = "16px";

// Background Module
	// Changes the background.

	// Background Module, Enable / Disable
	Modules.Background.Status = true;

	// Background Module, Background Link
	Modules.Background.Link = "https://zerthox.github.io/ClearVision/images/sapphire.jpg";

	// 'Stellar Collision' by KuldarLeement
	// Original Link: https://www.deviantart.com/kuldarleement/art/Stellar-collision-397866757

// Favicon Module, Declaration
	// Changes the favicon.

	// Favicon Module, Enable / Disable
	Modules.Favicon.Status = true;

	// Favicon Module, Favicon Link
	Modules.Favicon.Link = "https://raw.githubusercontent.com/Xer0-Puls3/Pendorian-Elite-UI/master/favicon.ico";

// Legacy Sidebar Module
	// Makes the sidebar look almost like the original sidebar designed by Zampa.

	// Legacy Sidebar Module, Enable / Disable
	Modules.LegacySidebar.Status = true;

// Remove Logo Module
	// Removes the 'Pendoria Logo' and moves the left side upwards to reduce clutter.

	// Legacy Sidebar Module, Enable / Disable
	Modules.RemoveLogo.Status = true;

// Dungeon Sidebar Module
	// Removes the Dungeon tab and adds a link on the sidebar.

	// Dungeon Sidebar Module, Enable / Disable
	Modules.DungeonSidebar.Status = true;
	
// Remove Battle Stats Module
	// Removes the battle stats in the header.
	
	// Remove Battle Stats, Enable / Disable
	Modules.RemoveBattleStats.Status = false;

// Remove Tabs Module
	// Removes the tabs on the actions page.
	// Requires Dungeon Sidebar to be active!
	
	// Made for the specialized, by the specialized!

	// Remove Tabs Module, Enable / Disable
	Modules.RemoveTabs.Status = false;
	
// Remove Tradeskill Selection Module
	// Removes the Tradeskill Selection dropdown next to the work button.
	// Removes the work button.
	// Ensure that you are already doing the TS that you want to continue doing!
	
	// Made for the specialized, by the specialized!

	// Remove Tabs Module, Enable / Disable
	Modules.RemoveTradeskillSelection.Status = false;
	
	// Adds a small amount of space above the action text.
	// Without this it will look awkward.
	Modules.RemoveTradeskillSelection.AddSpace = false;

// Extra Bottom Links Module
	// Adds more links to the bottom of the screen
	
	// Extra Bottom Links Module, Enable / Disable
	Modules.ExtraBottomLinks.Status = true;

	// Defining Links Object, Ignore This
	Modules.ExtraBottomLinks.Links = {};

	// Add links option below.
	
		// Make sure you use a different declaration for each!
		// For example, if you have the following, you cannot have another that also says 'Example'!
		// You would have to change it to 'Example2', or something else that is alphanumeric!
		// 'Modules.ExtraBottomLinks.Links.Example'
		
		// Karubo's ROI Calculator Link
		Modules.ExtraBottomLinks.Links.ROI = {
			Name: "Karubo's ROI",
			// New Karubo Website
			Link: "http://pendcalc.karubo.de/"
			// Old Google Sheets URL
			// Link: "http://tiny.cc/KaruboROI"
		};
		
		Modules.ExtraBottomLinks.Links.Calcs = {
			Name: "Puls3's Calcs",
			Link: "https://xer0-puls3.github.io/calculators/"
		};
		
		// Example Links Section Below!
		/*
			Modules.ExtraBottomLinks.Links.Example1 = {
				Name: "Example 1",
				Link: "www.example.com"
			}
			Modules.ExtraBottomLinks.Links.Example2 = {
				Name: "Example 2",
				Link: "www.example2.com"
			}
			Modules.ExtraBottomLinks.Links.Example3 = {
				Name: "Example 3",
				Link: "www.example3.com"
			}
		*/

// [Functions]

// Define Module Functions
Define();

// Call Module Functions
Origin();

// Lists All Modules
function Register() {
	return {
		Recolor: {},
		Edits: {},
		Frameless: {},
		DualView: {},
		RoundedBorders: {},
		Background: {},
		Favicon: {},
		LegacySidebar: {},
		RemoveLogo: {},
		DungeonSidebar: {},
		RemoveBattleStats: {},
		RemoveTabs: {},
		RemoveTradeskillSelection: {},
		ExtraBottomLinks: {}
	}
}

function Origin() {
	const k = Object.keys(Modules);
	let promiseList = [];
	for (let i = 0; i < k.length; i++) {
		if (Modules[k[i]].Status) {
			promiseList.push( new Promise( function (resolve) {
				Modules[k[i]].Code(resolve);
			}));
		}
	}
	Promise.all(promiseList).then(function () {
		ApplyStyles();
	});
}

function ApplyStyles() {
	$("head").append(Style);
}

function Define() {

	Modules.Recolor.Code = function (resolve) {
		const t = `
		/* COLOR CSS BELOW */
		
		html {
			--Elite-Color: ` + Modules.Recolor.Color + `;
			--Elite-Dark-Color: ` + Modules.Recolor.DarkColor + `;
			--Elite-Mention-Color: ` + Modules.Recolor.MentionColor + `;
			--Elite-Mention-Tab-Color: ` + Modules.Recolor.MentionTabColor + `;
			--Elite-Button-Color: ` + Modules.Recolor.ButtonColor + `;
			--Elite-Button-Hover-Color: ` + Modules.Recolor.ButtonHoverColor + `;
			--Elite-Profile-Link-Color: ` + Modules.Recolor.ProfileLinkColor + `;
			--Elite-Progress-Background-Color: ` + Modules.Recolor.ProgressBackgroundColor + `;
		}
		
		/* CHAT CSS BELOW */
		
		.chat-username, .chat-local-error, #chat-messages ul li span[style*="color: #ea907b;"] {
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
		
		/* DUNGEON & ENCAMPMENT CSS BELOW */
		
		#dungeon-progressbar-wrapper {
			background-color: var(--Elite-Progress-Background-Color);
		}
		#dungeon-progressbar-wrapper .progressbar, #encampment-building-progress  {
			background-color: var(--Elite-Color) !important;
		}
		
		/* VIP Section */
		
		[data-player-id*="334"] .chat-username {
			color: rgb(0, 153, 255) !important;
		}
		
		/* TS CSS BELOW */
		
		#quint span, .actionexperience, .actionexperience span, #double_tradeskill span, #guild_amount, #guild_currency, #gainedtype, #gainedres {
			color: var(--Elite-Color) !important;
		}
		
		/* COMBAT CSS BELOW */
		
		.timeshit, .timescrit, .timesdodged, .hitstaken, #gainedgold, .actiongold, #guild_gold, #double_battle span {
			color: var(--Elite-Color) !important;
		}`;
		Style = Style + "<style id='Elite-Style-Recolor'>" + t + "</style>";
		resolve();
	};

	Modules.Edits.Code = function (resolve) {
		const t = `
		#dungeon-dialogue {
			display: none;
		}
		`;
		Style = Style + "<style id='Elite-Style-Recolor'>" + t + "</style>";
		resolve();
	};

	Modules.Frameless.Code = function (resolve) {
		t = `
		.frame {
			background: none;
			left: 8px;
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
		}
		#gameframe-battle, #gameframe-content {
			left: 0px;
			right: 0px;
		}
		#chat {
			padding: 0;
		}`;
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.DualView.Code = function (resolve) {
		const t = `
		html {
			--DualViewLine: ` + Modules.DualView.Line + `px;
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
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.RoundedBorders.Code = function (resolve) {
		const l = Modules.RoundedBorders.Amount;
		const t = `
		#profile, #menu, #stats-hourly, #ether-resources-sidebar,`
		+ `#gameframe-battle, #gameframe-content, #drop-statistics,`
		+ `#gameframe-status-wrapper, #chat, #chat-form {
			border-radius: ` + l + ` !important;
		}
		.nav-tabs > li > a {
			border-radius: ` + l + ` ` + l + `0px 0px !important;
		}`;
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.Background.Code = function (resolve) {
		const t = `
		body {
			background-image: url( ` + Modules.Background.Link + ` ) !important;
		}`;
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.Favicon.Code = function (resolve) {
		const t = `<link rel="icon" href="` + Modules.Favicon.Link + `"/>`;
		Style = Style + t;
		resolve();
	};

	Modules.LegacySidebar.Code = function (resolve) {
		t = `
		#menu .frame {
			display: none;
			width: 0px;
			hieght: 0px;
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
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.RemoveLogo.Code = function (resolve) {
		const t = `
		#profile, #menu, #stats-hourly {
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
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.DungeonSidebar.Code = function (resolve) {
		const t = `
		#gameframe-battle > ul > li:nth-child(3) {
			display: none;
		}
		#dungeon-content, #dungeon-tools-content {
			color: white;
		}`;
		Style = Style + "<style>" + t + "</style>";
		$("#scraptown-button").parent().after('<li><a href="" id="elite-dungeon-button"><i class="fas fa-dungeon"></i>Dungeons</a></li>');

		// Function Below Grabbed From Pendoria And Modified
		$("#elite-dungeon-button").click(function (event) {
			event.preventDefault();
			ajaxPost("/action/dungeons", function (data) {
				$('#gameframe-content').html(data).show();
				$('#gameframe-battle').hide();
				$('#dungeon-tools-content [tooltip-title]').each(function () {
					$(this).qtip({
						content: {
							title: $(this).attr('tooltip-title'),
							text: $(this).attr('tooltip-text'),
						},
						style: {classes: 'qtip-dark'},
						position: {
							target: 'mouse'
						}
					})
				});
				ajaxPost('/dungeons/in-progress', function (inProgress) {
					$progressbarWrapper = $('#dungeon-progressbar-wrapper');
					$startButton = $('.dungeon-button-start');
					if (inProgress) {
						$progressbarWrapper.attr('hidden', false);
						$startButton.attr('hidden', true);
						setDungeonDialogueText(dungeonTextInProgress);
					} else {
						$progressbarWrapper.attr('hidden', true);
						$startButton.attr('hidden', false);
						setDungeonDialogueText(dungeonTextDone);
					}
					$dungeonDialogue = $('#dungeon-dialogue');
					$dungeonDialogue.attr('hidden', false);
					$dungeonControls = $('.dungeon-controls');
					$dungeonControls.attr('hidden', false);
					updateDungeonActivatorCount();
					updateProfileDungeonActivatorCount();
				});
				ajaxPost('/dungeons/boosts', function (dungeonBoosts) {
					dungeonTools.updateBoostPrices(dungeonBoosts);
				});
			});
		});

		resolve();
	};

	Modules.RemoveBattleStats.Code = function (resolve) {
		const t = `
	.header-stats-user {
		display: none;
	}`;
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.RemoveTabs.Code = function (resolve) {
		const t = `
	#gameframe-battle > ul {
		display: none;
	}`;
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.RemoveTradeskillSelection.Code = function (resolve) {
		let t = `
	#actioncontent > div:nth-child(2) {
		display: none !important;
	}`;
		if (Modules.RemoveTradeskillSelection.AddSpace === 1) {
			t = t + `
		#actioncontent {
			margin-top: 15px;
		}
		`;
		}
		Style = Style + "<style>" + t + "</style>";
		resolve();
	};

	Modules.ExtraBottomLinks.Code = function (resolve) {
		const k = Object.keys(Modules.ExtraBottomLinks.Links);
		let e = $("#gameframe-menu #togglechat").parent();
		for (i = 0; i < k.length; i++) {
			e.after('<li style="vertical-align: top;"><a href="' + Modules.ExtraBottomLinks.Links[k[i]].Link + '" target="_blank">' + Modules.ExtraBottomLinks.Links[k[i]].Name + '</a></li>');
		}
		resolve();
	};

}