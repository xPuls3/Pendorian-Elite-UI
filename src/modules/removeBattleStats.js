let local = {};

local.id = "removeBattleStats";
local.description = "Removes the battle stats in the header";

local.register = {
    name: "Remove Battle Stats",
};

local.options = {

    status: {
        description: "Enable / Disable",
        value: false,
    },

};

local.code = function (resolve) {
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

module.exports = local;