const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('steniatka')
		.setDescription('Elkine steniatka.'),
	async execute(interaction) {
		await interaction.reply('https://i.imgur.com/twvXxE9.png');
	},
};