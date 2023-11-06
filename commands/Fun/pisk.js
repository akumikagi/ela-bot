const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ela')
		.setDescription('Ideme Von?'),
	async execute(interaction) {
		var digit = Math.floor(Math.random() * 10) + 1;
		if (digit == 1) {
			await interaction.reply('https://i.imgur.com/mR6PBJL.jpeg');
			}
		if (digit == 2) {
			await interaction.reply('https://i.imgur.com/3sNggqE.png');
		}
		if (digit == 3) {
			await interaction.reply('https://i.imgur.com/EmFuGB4.png');
		}
		if (digit == 4) {
			await interaction.reply('https://i.imgur.com/Yr2gdkm.png');
		}
		if (digit == 5) {
			await interaction.reply('https://i.imgur.com/cmXYD3P.png');
			await interaction.followUp('Oh shit, super rare pac!');
		}
		if (digit == 6) {
			await interaction.reply('https://i.imgur.com/g78HGie.png');
		}
		if (digit == 7) {
			await interaction.reply('https://i.imgur.com/PPx4HeB.png');
		}
		if (digit == 8) {
			await interaction.reply('https://i.imgur.com/uLlqGhE.png');
			await interaction.followUp('Fake Film');
		}
		if (digit == 9) {
			await interaction.reply('https://i.imgur.com/2hruzun.png');
		}
		if (digit ==10) {
			await interaction.reply('https://i.imgur.com/KsmT5Q5.png');
		}
	}
};