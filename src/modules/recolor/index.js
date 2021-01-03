let local = {};

local.id = "recolor";
local.description = "Changes the color of almost everything";

local.register = {
    name: "Recolor",
    runLogin: true
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: true
    },

    titleSwap: {
        description: "Changes cyan titles to match the new chat username color",
        value: true
    },

    color: {
        description: [
            "Colors",
            "If a color isn't wrapped with a type, it is RGB and must stay RGB!"
        ],
        value: "0, 153, 255"
    },

    darkColor: "rgb(0, 123, 235)",
    buttonColor: "rgba(0, 153, 255, 0.5)",
    buttonHoverColor: "rgba(0, 153, 255, 0.8)",
    progressBackgroundColor: "rgb(51, 71, 113)",
    profileLinkColor: "rgb(0, 123, 235)",
    mentionColor: "rgb(0, 219, 255)",
    mentionTabColor: "rgb(0, 153, 255)",
    chatUsernameColor: "rgb(0, 153, 255)"

};

local.code = function (resolve) {
    const t = `
        html {
            --Elite-Color: rgb(${modules.recolor.options.color});
            --Elite-Color-Base: ${modules.recolor.options.color};
            --Elite-Dark-Color: ${modules.recolor.options.darkColor};
            --Elite-Mention-Color: ${modules.recolor.options.mentionColor};
            --Elite-Mention-Tab-Color: ${modules.recolor.options.mentionTabColor};
            --Elite-Button-Color: ${modules.recolor.options.buttonColor};
            --Elite-Button-Hover-Color: ${modules.recolor.options.buttonHoverColor};
            --Elite-Profile-Link-Color: ${modules.recolor.options.profileLinkColor};
            --Elite-Progress-Background-Color: ${modules.recolor.options.progressBackgroundColor};
            --Elite-Chat-Color: ${modules.recolor.options.chatUsernameColor};
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
            }
            
            .pace .pace-progress {
                background: var(--Elite-Color) !important;
            }
            
            .scraptown .buildings .building.active {
                box-shadow: 0 0 5px 2px rgba(var(--Elite-Color-Base), 0.14);
                border-radius: 5px;
                background-color: rgba(var(--Elite-Color-Base), 0.14);
            }
            
            .scraptown .icon img {
                filter: hue-rotate(175deg) brightness(70%);
            }
            
            .scraptown .buildings .building .icon img:hover {
                filter: hue-rotate(175deg) brightness(70%) drop-shadow(0px 0px 7px rgba(var(--Elite-Color-Base), 0.5));
                cursor: pointer;
            }
            
            .display-item span[style='color: #1da657;'] {
                color: var(--Elite-Color) !important;
            }
            
            `;

    resolve(t);

};

module.exports = local;
