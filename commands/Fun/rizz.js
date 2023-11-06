const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('elatymojezlatickovonavucke')
		.setDescription('Ultimate Ela rizz.'),
	async execute(interaction) {
		await interaction.reply('https://i.imgur.com/rtCooZz.png');
        await interaction.editReply('https://i.imgur.com/b97v7wk.png');
	},
};