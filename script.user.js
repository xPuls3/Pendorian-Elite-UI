// ==UserScript==
// @name Pendorian Elite UI
// @namespace http://pendoria.net/
// @version 1.7
// @author Puls3
// @include http*://*pendoria.net* 
// @downloadURL https://github.com/Xer0-Puls3/Pendorian-Elite-UI/raw/master/script.user.js
// @grant none
// @description Changes a large portion of the text and UI to 'Elite' blue and makes small changes to the UI.
// ==/UserScript==

//Made by Puls3 from Pendoria!
//It's very easy to edit!
//If cloned please give credit!

//Also follow the Clone Policy!
//Clone Policy; https://goo.gl/AyAdqy

//Options
// 1 = True & 0 = False

//Legacy Sidebar (Zampa Style)
var legacySide = 1

//Side-By-Side Extended Header
//Make the currency and battle stats bar extend above chat
//Only for built-in Pendoria Side-By-Side!
var ExtendedHeader = 0

//DualView
//Show Gameframe content AND action content
//Only looks good if your content box is tall enough
var DualView = 0
var DualViewLine = 220

//Frameless
//Remove the frames
//Looks great!
var Frameless = 1

//Links
var TSMRLink = 1
var ReleaseLink = 1

//Toggle logo removal
//You 'should' leave this on
var RemoveLogo = 1

//Remove Header Battle Stats <0 - 1>
var RemoveBattleStats = 0

//Remove quest options from select quest <0 - 1>
//You're going to want to leave whatever actions you do set to 0
var RemoveBattleQuest = 0
var RemoveFoodQuest = 0
var RemoveCopperQuest = 0
var RemoveGemsQuest = 0
var RemoveWoodQuest = 0

//Remove the battle tab in the actions section
var RemoveBattleTab = 0

//Remove the TS tab in the actions section
//for Battlers
var RemoveTSTab = 0

//Remove Battle Rhodium Boosts (Gold & Stat)
var RemoveBattleGoldStat = 0

//Remove tradeskill options from select tradeskill <0 - 1>
//You're going to want to leave whatever actions you do set to 0
var RemoveFoodSelect = 0
var RemoveCopperSelect = 0
var RemoveGemsSelect = 0
var RemoveWoodSelect = 0
//If you use this then you might as well enable the next option

//Remove Tradeskill Select and NOT Work button
//If you use this then you might wanna see if you like the next option more
var RemoveTSSelectLeaveWork = 0

//Remove Tradeskill Select and Work button
//Note: Use the bar to refresh
//If you use this you will want to enable the next option as well
var RemoveTSSelect = 0

//Add a top padding to actions 
var AddActionheight = 0

//Toggle Background
//0 = Default Pendoria
//1 = Decided by Recolor
//2 = Custom
var bgimage = 1

//Custom Background Link
var bglink = "https://zerthox.github.io/ClearVision/images/sapphire.jpg"

//Edit Favicon
var faviconlink = "https://raw.githubusercontent.com/Xer0-Puls3/Pendorian-Elite-UI/master/favicon.ico"

//Toggle the recolor
var EliteRecolor = 1

if (EliteRecolor == 1) {

//Select the recolor preset
//Edit these values to change colors as a whole

// 1 = Elite Blue
// 2 = Toxic Green
var RecolorVersion = 1

if (RecolorVersion == 1) {
//Elite Blue Recolor
var elite = "rgb(0, 153, 255)";
var darkelite = "rgb(0, 123, 235)";
var leetbutton = "rgba(0, 153, 255, 0.5)";
var leetbuttonhover = "rgba(0, 153, 255, 0.8)";
var leetdungeonback = "rgb(51, 71, 113)";
var profileguildname = "rgb(0, 123, 235)";
var chatmentiontabcolor = "rgb(0, 153, 255)";
var chatmentioncolor = "rgb(0, 219, 255)";

if (bgimage == 1) {
  var bglink = "https://zerthox.github.io/ClearVision/images/sapphire.jpg"
}

}
  
if (RecolorVersion == 2) {
//Toxic Green Recolor
var elite = "rgb(0, 255, 30)";
var darkelite = "rgb(0, 235, 30)";
var leetbutton = "rgba(0, 153, 30, 0.5)";
var leetbuttonhover = "rgba(0, 153, 30, 0.8)";
var leetdungeonback = "rgb(51, 71, 30)";
var profileguildname = "rgb(0, 123, 30)";
var chatmentiontabcolor = "rgb(0, 153, 30)";
var chatmentioncolor = "rgb(0, 219, 30)";
  
if (bgimage == 1) {
  var bglink = "http://www.urwallpapers.com/download/1927/abstract_green_hd_wallpaper.jpg"
}
  
}
  
}

//Options End

//Add recolor
if (EliteRecolor == 1) {
var head = document.getElementsByTagName('head')[0];
head.insertAdjacentHTML("beforeend", `
<link rel="icon" href="` + faviconlink + `"/>
<style>

/* CHAT CSS BELOW */

.chat-username {
  color: ` + elite + `;
}
.chat-local-error {
  color: ` + elite + ` !important;
}
#chat-messages ul li [style*="color: #ea907b;"] {
  color: ` + elite + ` !important;
}
.chat-hilighted {
  color: ` + chatmentiontabcolor + ` !important;
}
.username-hilighted {
  color: ` + chatmentioncolor + ` !important;
}

/* UI CSS Below */

.green {
  background-color: ` + elite + ` !important;
}
#header-stats {
  color: ` + elite + `;
}
#expwidth {
  background-color: ` + elite + ` !important;
}
#quest_done {
  color: ` + elite + `;
}
#quest_prog {
  color: ` + elite + `;
}
#event {
  color: ` + elite + ` !important;
}
quest_abandon {
  background-color: ` + elite + ` !important;
}
#chat-composer input[type="submit"] {
  background: ` + leetbutton + ` !important;
}
button {
  background: ` + leetbutton + ` !important;
}
button:hover {
  background: ` + leetbuttonhover + ` !important;
}
#invinfo {
  color: ` + elite + ` !important;
}
#building-progress {
  background-color: ` + elite + ` !important;
}
#scraptowninfo {
  color: ` + elite + ` !important;
}
.activity-log-username {
  color: ` + elite + ` !important;
}
.guild-section [style*="color: rgb(29, 166, 87);"] {
    color: ` + elite + ` !important;
}
.guild-section [style*="color: #1da657;"] {
   color: ` + elite + ` !important;
}
.item-rarity-runic {
  color: ` + elite + ` !important;
  text-shadow: 0 0 1px blue !important;
}
.display-item [style*="color: rgb(29, 166, 87);"] {
  color: ` + elite + ` !important;
}
.display-item [style*="color: green;"] {
  color: ` + elite + ` !important;
}
.display-item [style*="color: #98bda1; padding-top: 5px;"] {
  color: ` + darkelite + ` !important;
}
::selection {
  color: white;
  background: ` + elite + `;
}
.guild-name {
  font-weight: bold;
  color: ` + profileguildname + `;
}
.chat-command {
  color: ` + elite + `;
}
progress {
  color: ` + elite + `;
}
progress::-webkit-progress-value {
  background: ` + elite + `;
}
progress::-moz-progress-bar {
  background: ` + elite + `;
}
progress::-webkit-progress-bar {
  background: ` + elite + `;
}
#progressbar-wrapper {
  background: ` + leetdungeonback + `;
}
#exp {
  background: ` + leetdungeonback + ` !important;
}
.tab-game-content [style*="width: 100%; border-radius: 10px; overflow: hidden; background-color: #31453a;"] {
  background: ` + leetdungeonback + ` !important;
}

/* DUNGEON CSS BELOW */

#dungeon-progressbar-wrapper {
  background-color: ` + leetdungeonback + `;
}
#dungeon-progressbar-wrapper .progressbar {
  background-color: ` + elite + ` !important;
}
#dungeon-dialogue {
  display: none;
}

/* VIP Section */
[data-player-id*="334"] .chat-username {
  color: rgb(0, 153, 255) !important;
}

/* TS CSS BELOW */

#gainedres {
  color: ` + elite + ` !important;
}
#gainedtype {
  color: ` + elite + ` !important;
}
#guild_currency {
  color: ` + elite + ` !important;
}
#guild_amount {
  color: ` + elite + ` !important;
}
#quint span {
  color: ` + elite + ` !important;
}
.actionexperience, .actionexperience span {
  color: ` + elite + ` !important;
}
#double_tradeskill span {
  color: ` + elite + ` !important;
}
.terms-section-header, .question {
  color: ` + elite + ` !important;
}

/* COMBAT CSS BELOW */

.timeshit, .timescrit, .timesdodged, .hitstaken, #gainedgold, .actiongold, #guild_gold {
  color: ` + elite + ` !important;
}
#double_battle span {
  color: ` + elite + ` !important;
}

</style>
`);}

//Remove Logo
if (RemoveLogo == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#profile, #menu, #stats-hourly {
  top: -50px;
  background-color: rgba(0,0,0,0) !important;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) , rgba(0,0,0,0.3)) !important;
}
#logo {
  display: none;
}
</style>
`);
}

//legacy Sidebar
if (legacySide == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
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
}
</style>
`);
}

//DualView
if (DualView == 1) {
var head = document.getElementsByTagName('head')[0];
head.insertAdjacentHTML("beforeend", `
<style>
#gameframe-battle {
  display: block !important;
  height: ` + DualViewLine + `px;
}
#gameframe-content {
  display: block !important;
  height: calc(100% - ` + DualViewLine + `px - 80px);
  top: calc(70px + ` + DualViewLine + `px);
}
#menu ul li:first-child {
  display: none !important;
}
</style>
`);
}

//Background Image
if (bgimage > 0) {
var head = document.getElementsByTagName('head')[0];
head.insertAdjacentHTML("beforeend", `
<style>
body {
     background-image: url( ` + bglink + ` ) !important;
}
</style>
`);
}

//Frameless
if (Frameless == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
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
#gameframe-battle {
  left: 0px;
  right: 0px;
}
#chat {
  padding: 0 ;
}
</style>
`);
}

//Side-By-Side Extended Header
if (ExtendedHeader == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#header-content {
  width: calc(100% - 255px) !important;
  padding-right: 10px;
  padding-left: 5px;
}
.header-stats-skills div, header-stats-resources div {
  padding-right: 100px;
}
</style>
`);
}

//Add TSMR Element
if (TSMRLink == 1) {
  var TSMRelem = document.getElementById('gameframe-menu').childNodes[0].childNodes[0].childNodes[0];
  TSMRelem.insertAdjacentHTML("beforebegin", `
  <li style="vertical-align: top;"><a href="http://xer0-puls3.github.io/" target="_blank">TSMR</a></li>`);
}

//Add Release Element
if (ReleaseLink == 1) {
  if (TSMRLink == 1) {
    var Relem = document.getElementById('gameframe-menu').childNodes[0].childNodes[0].childNodes[1];
  }
  else {
    var Relem = document.getElementById('gameframe-menu').childNodes[0].childNodes[0].childNodes[0];
  }
  Relem.insertAdjacentHTML("beforebegin", `
  <li style="vertical-align: top;"><a href="https://github.com/Xer0-Puls3/Pendorian-Elite-UI/releases" target="_blank">Releases</a></li>`);
}

//Remove Battle Stats
if (RemoveBattleStats == 1) {
  leetbattleelem = document.getElementsByClassName('header-stats-user')[0]
  leetbattleelem.parentNode.removeChild(leetbattleelem);
}

//Remove Battle Quest
if (RemoveBattleQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="1"] {
  display: none !important;
}
</style>
`);
}

//Remove Food Quest
if (RemoveFoodQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="4"] {
  display: none !important;
}
</style>
`);
}

//Remove Copper Quest
if (RemoveCopperQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="3"] {
  display: none !important;
}
</style>
`);
}

//Remove Gems Quest
if (RemoveGemsQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="5"] {
  display: none !important;
}
</style>
`);
}

//Remove Wood Quest
if (RemoveWoodQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="2"] {
  display: none !important;
}
</style>
`);
}

//Remove Battle Tab
if (RemoveBattleTab == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#gameframe-battle ul li:first-child {
  display: none !important;
}
</style>
`);
}

//Remove TS Tab
if (RemoveTSTab == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#gameframe-battle ul li:nth-child(2) {
  display: none !important;
}
</style>
`);
}

//Remove Food Select
if (RemoveFoodSelect == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#tradeskill [value*="3"] {
  display: none !important;
}
</style>
`);
}

//Remove Copper Select
if (RemoveCopperSelect == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#tradeskill [value*="2"] {
  display: none !important;
}
</style>
`);
}

//Remove Gems Select
if (RemoveGemsSelect == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#tradeskill [value*="4"] {
  display: none !important;
}
</style>
`);
}

//Remove Wood Select
if (RemoveGemsSelect == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#tradeskill [value*="1"] {
  display: none !important;
}
</style>
`);
}

//Remove TS Select and leave work button
if (RemoveTSSelectLeaveWork == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#tradeskill {
  display: none !important;
}
</style>
`);
}

//Remove TS Select
if (RemoveTSSelect == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#actioncontent [style*="text-align: center; margin-bottom: 10px; margin-top: 5px;"] {
  display: none !important;
}
</style>
`);
}



//Add height above TS Actions
if (AddActionheight == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#actioncontent {
  padding-top: 10px;
}
</style>
`);
}

//Remove GoldBoost & Stat Drop Boost
if (RemoveBattleGoldStat == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: left; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(1) {
  display: none;
}
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: left; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(2) {
  display: none;
}
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: left; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(3) {
  display: none;
}
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: right; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(1) {
  display: none;
}
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: right; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(2) {
  display: none;
}
#gameframe-content .tab-game-content [style*="color: white; text-align: center; float: right; width: 50%;"] [style*="width: auto; margin: auto; text-align: left; display: inline-block;"] tr:nth-child(3) {
  display: none;
}
</style>
`);
}
