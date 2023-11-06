const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('O Elke.'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/983090748578730027/1122538726640328714/IMG_3764.jpg');
        await interaction.followUp('Ela - TikTokový Maltezák\n\nEla je maltezák, ktorá sa stala slávnou na sociálnej platforme TikTok. Toto rozkošné plemeno je obľúbené medzi používateľmi TikToku pre svoju roztomilosť a jedinečný štýl.\n\nJej majiteľ ju začal zdieľať na TikToku. Ela sa rýchlo stal hitom medzi používateľmi platformy vďaka svojmu vtipnému a šarmantnému správaniu.\n\nEla je známa svojou schopnosťou naštartovať náladu divákov. Jej videá zahŕňajú rôzne zábavné a chytľavé tanečné výzvy, ktoré povzbudzujú používateľov TikToku, aby sa k nemu pripojili. Jeho rozkošné vystupovanie a energické pohyby privádzajú ľudí do dobrej nálady a prinášajú úsmev na tvári.\n\nEla tiež získala popularitu vďaka svojej nádhernej bielej srsti a vyjadrovaním emócií. Používatelia TikToku sú fascinovaní jej expresívnymi očami a sladkými pohybmi, ktoré im prinášajú radosť a oddych počas ich online skúmania.\n\nOkrem tanečných videí Ela tiež zdieľa rôzne komické situácie a interakcie so svojím majiteľom a inými postavami. Jej obsah je jednoduchý a prístupný pre rôzne vekové skupiny, čo prispieva k jej všeobecnej popularite.\n\nHoci Ela je tiktokový maltezák, jej prítomnosť na platforme TikTok sa stala inšpiráciou pre mnoho majiteľov maltezákov, ktorí teraz zdieľajú videá so svojimi domácimi maznáčikmi.\n\nEla  je príkladom toho, ako sa na sociálnych médiách objavujú rozličné rozkošné a zábavné postavy, ktoré prispievajú k radosti a zábave online komunity.');
	},
};