const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pisk')
		.setDescription('Get Ela to stare into Your soul.'),
	async execute(interaction) {
		await interaction.reply(`Noticed ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};