// ==UserScript==
// @name Pendorian Elite UI
// @namespace http://pendoria.net/
// @version 2.0.1
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

// [Declarations]
// Do not touch these!
var Modules = {
	Recolor: {},
	Frameless: {},
	DualView: {},
	Favicon: {},
	Background: {},
	LegacySidebar: {},
	RemoveLogo: {},
	DungeonSidebar: {},
	RemoveTabs: {},
	RemoveTradeskillSelection: {},
	RemoveBattleStats: {}
};

var Style = "";
var Finished = 0;

// [Options]
// 1 = True
// 0 = False

// Recolor Module

	// Changes the color of almost everything.

	// Recolor Module, Enable / Disable
	Modules.Recolor.Status = 1;

	// Recolor Module, Colors
	Modules.Recolor.Color = "rgb(0, 153, 255)";
	Modules.Recolor.DarkColor = "rgb(0, 123, 235)";
	Modules.Recolor.ButtonColor = "rgba(0, 153, 255, 0.5)";
	Modules.Recolor.ButtonHoverColor = "rgba(0, 153, 255, 0.8)";
	Modules.Recolor.ProgressBackgroundColor = "rgb(51, 71, 113)";
	Modules.Recolor.ProfileLinkColor = "rgb(0, 123, 235)";
	Modules.Recolor.MentionColor = "rgb(0, 219, 255)";
	Modules.Recolor.MentionTabColor = "rgb(0, 153, 255)";

// Frameless Module
	// Removes all of the frames.
	// Adjusts sizes to look good without frames.

	// Frameless Module, Enable / Disable
	// Removes the 'frames' on the entire game.
	Modules.Frameless.Status = 1;

// Dual View Module
	// Forces the actions page to always show and shortens it.
	// Forcs the content to always show below the actions page.
	// Requires Dungeon Sidebar to be active!

	// Dual View Module, Enable / Disable
	Modules.DualView.Status = 0;

	// Dual View Module, Line
	// The how far down the frame the line between content and actions is.
	Modules.DualView.Line = 220;

// Background Module, Declaration
	// Changes the background.

	// Background Module, Enable / Disable
	Modules.Background.Status = 1;

	// Background Module, Background Link
	Modules.Background.Link = "https://zerthox.github.io/ClearVision/images/sapphire.jpg";

// Favicon Module, Declaration
	// Changes the favicon.

	// Favicon Module, Enable / Disable
	Modules.Favicon.Status = 1;

	// Favicon Module, Favicon Link
	Modules.Favicon.Link = "https://raw.githubusercontent.com/Xer0-Puls3/Pendorian-Elite-UI/master/favicon.ico";

// Legacy Sidebar Module
	// Makes the sidebar look almost like the original sidebar designed by Zampa.

	// Legacy Sidebar Module, Enable / Disable
	Modules.LegacySidebar.Status = 1;

// Remove Logo Module
	// Removes the 'Pendoria Logo' and moves the left side upwards to reduce clutter.

	// Legacy Sidebar Module, Enable / Disable
	Modules.RemoveLogo.Status = 1;

// Dungeon Sidebar Module
	// Removes the Dungeon tab and adds a link on the sidebar.

	// Dungeon Sidebar Module, Enable / Disable
	Modules.DungeonSidebar.Status = 1;
	
// Remove Battle Stats
	// Removes the battle stats in the header.
	
	// Remove Battle Stats, Enable / Disable
	Modules.RemoveBattleStats.Status = 0;

// Remove Tabs Module
	// Removes the tabs on the actions page.
	// Requires Dungeon Sidebar to be active!
	
	// Made for the specialized, by the specialized!

	// Remove Tabs Module, Enable / Disable
	Modules.RemoveTabs.Status = 0;
	
// Remove Tradeskill Selection
	// Removes the Tradeskill Selection dropdown next to the work button.
	// Removes the work button.
	// Ensure that you are already doing the TS that you want to continue doing!
	
	// Made for the specialized, by the specialized!

	// Remove Tabs Module, Enable / Disable
	Modules.RemoveTradeskillSelection.Status = 0;
	
	// Adds a small amount of space above the action text.
	// Without this it will look awkward.
	Modules.RemoveTradeskillSelection.AddSpace = 0;

// The Menu Is Currently In Development!
// Please Ignore!
/*
// Menu Module

	// Ignore Declarations
	Modules.Menu = {};
	Modules.Menu.Finished = 1;

	Menu Module, Enable / Disable
	Modules.Menu.Status = 1;
*/

// [Functions]

Origin();

function Origin() {
	if (Modules.Recolor.Status == 1) { Recolor() }
	if (Modules.Frameless.Status == 1) { Frameless() }
	if (Modules.DualView.Status == 1) { DualView() }
	if (Modules.Background.Status == 1) { Background() }
	if (Modules.Favicon.Status == 1) { Favicon() }
	if (Modules.LegacySidebar.Status == 1) { LegacySidebar() }
	if (Modules.RemoveLogo.Status == 1) { RemoveLogo() }
	if (Modules.DungeonSidebar.Status == 1) { DungeonSidebar() }
	if (Modules.RemoveTabs.Status == 1) { RemoveTabs() }
	if (Modules.RemoveTradeskillSelection.Status == 1) { RemoveTradeskillSelection() }
	if (Modules.RemoveBattleStats.Status == 1) { RemoveBattleStats() }
}

function Finish() {
	Finished = 1;
	ApplyStyles();
	
	// Menu Framework
	
	// The Menu Is Currently Disabled!
	// Please Ignore!
	
	// if (Modules.Menu.Status == 1) { Menu() }
}

function Recolor() {
	var t = `
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
	
	#invinfo, #scraptowninfo, #invasioninfo, .activity-log-username, .guild-section [style*="color: rgb(29, 166, 87);"], .guild-section [style*="color: #1da657;"], #event, #mailcount, #action-info, a[style="color: rgb(255, 0, 0);"] {
		color: var(--Elite-Color) !important;
	}
	#header-stats, #quest_done, #quest_prog {
		color: var(--Elite-Color);
	}
	.green, #expwidth, #building-progress, #chat-composer input[type="submit"], .toast-success {
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
	#dungeon-dialogue {
		display: none;
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
	}`
	Style = Style + "<style id='Elite-Style-Recolor'>" + t + "</style>";
	Modules.Recolor.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function Frameless() {
	t = `
	.frame {
		background: none;
		left: 8px;
	}
	#gameframe-status-wrapper:after, #progressbar-wrapper::after {
		background: none;
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
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.Frameless.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function DualView() {
	var t = `
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
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.DualView.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function Background() {
	var t = `
	body {
		background-image: url( ` + Modules.Background.Link + ` ) !important;
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.Background.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function Favicon() {
	var t = `<link rel="icon" href="` + Modules.Favicon.Link + `"/>`
	Style = Style + t;
	Modules.Favicon.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function LegacySidebar() {
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
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.LegacySidebar.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function RemoveLogo() {
	var t = `
	#profile, #menu, #stats-hourly {
		top: -50px;
	}
	#logo {
		display: none;
	}
	#content > .wrapper:first-child > header:first-child {
		pointer-events: none;
	}
	#profile-dungeon-queue-refresh {
		pointer-events: auto;
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.RemoveLogo.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function DungeonSidebar() {
	var t = `
	#gameframe-battle > ul > li:nth-child(3) {
		display: none;
	}
	#dungeon-content, #dungeon-tools-content {
		color: white;
	}`
	Style = Style + "<style>" + t + "</style>";
	$("#scraptown-button").parent().after('<li><a href="" id="elite-dungeon-button"><i class="fas fa-dungeon"></i>Dungeons</a></li>');
	$("#elite-dungeon-button").click(function(event){
		event.preventDefault()
		ajaxPost("/action/dungeons", function(data) {
			$('#gameframe-content').html(data).show()
			$('#gameframe-battle').hide();
			$('#dungeon-tools-content [tooltip-title]').each(function() {
				$(this).qtip({
					content: {
						title: $(this).attr('tooltip-title'),
						text: $(this).attr('tooltip-text'),
					},
					style: { classes: 'qtip-dark'},
					position: {
						target: 'mouse'
					}
				})
			})
			ajaxPost('/dungeons/in-progress', function(inProgress) {
				$progressbarWrapper = $('#dungeon-progressbar-wrapper');
				$startButton = $('.dungeon-button-start');
				if (inProgress){
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
			ajaxPost('/dungeons/boosts', function(dungeonBoosts) {
				dungeonTools.updateBoostPrices(dungeonBoosts);
			});
		});
	});
	Modules.DungeonSidebar.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function RemoveBattleStats() {
	var t = `
	.header-stats-user {
		display: none;
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.RemoveBattleStats.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function RemoveTabs() {
	var t = `
	#gameframe-battle > ul {
		display: none;
	}`
	Style = Style + "<style>" + t + "</style>";
	Modules.RemoveTabs.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function RemoveTradeskillSelection() {
	var t = `
	#actioncontent > div:nth-child(2) {
		display: none !important;
	`;
	if (Modules.RemoveTradeskillSelection.AddSpace == 1) { 
		t = t + `
		#actioncontent {
			margin-top: 15px;
		}
		`;
	}
	Style = Style + "<style>" + t + "</style>";
	Modules.RemoveTradeskillSelection.Finished = 1;
	if ( CheckFinished() ) { Finish() }
}

function Menu() {
	$("#messages-button").parent().after('<li><a href="" id="elite-button"><i class="fa fa-coffee"></i>Elite UI</a></li>');
	var t = `
	<style>
	.elite.elite-header {
		width: 100%;
		padding: 20px;
		color: white;
		text-align: center;
		border-bottom: solid 1px white;
	}
	#elite-apply-button {
		margin-left: 5px;
		margin-top: 15px;
	}
	.elite-section {
		position: relative;
		height: 35px;
		overflow: hidden;
		margin-left: 5px;
		margin-top: 5px;
	}
	/* The switch - the box around the slider */
	.elite.switch {
		position: relative;
		display: inline-block;
		float: left;
		width: 60px;
		height: 34px;
	}
	.elite.switch + p {
		display: inline-block;
		float: left;
		margin-left: 15px;
		font-size: 1.7em;
		color: white;
	}
	/* Hide default HTML checkbox */
	.elite.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	/* The slider */
	.elite.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
	}
	.elite.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}
	input:checked + .elite.slider {
		background-color: #2196F3;
	}
	input:focus + .elite.slider {
		box-shadow: 0 0 1px #2196F3;
	}
	input:checked + .elite.slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
	/* Rounded sliders */
	.elite.slider.round {
		border-radius: 34px;
	}
	.elite.slider.round:before {
		border-radius: 50%;
	} 
	</style>
	<h1 class="elite elite-header">Pendorian Elite UI</h1>
	<div class="elite elite-section">
		<label class="elite switch">
			<input class="Elite-Switch" id="Elite-Toggle-Recolor" type="checkbox">
			<span class="elite slider round"></span>
		</label>
		<p>Recolor Module</p>
	</div>
	<div class="elite elite-section">
		<label class="elite switch">
			<input type="checkbox">
			<span class="elite slider round"></span>
		</label>
		<p>Frameless Module</p>
	</div>
	<button id="Elite-Apply-Button">Apply</button>
	`
	$('#elite-button').click(function(event){
		event.preventDefault()
		$('#gameframe-content').html(t).show()
		$('#gameframe-battle').hide();
	});
	$('#Elite-Apply-Button').click( MenuApply );
}

function MenuApply() {
	console.log("t");
	if ( $('.Elite-Switch#Elite-Toggle-Recolor').is(":checked") ) {
		if ( $("#Elite-Style-Recolor").first.length() == 0 ) {
			Recolor();
		}
	} else {
		$("#Elite-Style-Recolor").remove();
	}
}

function CheckFinished() {
	if ( Finished == 1 ) { return 0 }
	var k = Object.keys(Modules);
	var t = 1;
	for (i = 0; i < k.length; i++) {
		if (Modules[k[i]].Status == 1 && typeof Modules[k[i]].Finished === 'undefined' ) {
			t = 0;
		}
	}
	return t
}

function ApplyStyles() {
	$("head").append(Style);
}
