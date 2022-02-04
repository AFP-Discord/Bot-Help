const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows all valid commands',
    execute(message, args) {
        const helpEmbed = new MessageEmbed()
            .setColor('#3498DB')
            .setTitle('Help')
            .setDescription('Here are all the valid commands');
        helpEmbed.addField('-vatroles', 'Gives roles based on hours on VATSIM as Pilot, ATC, Instructor, and SUP', false);
        helpEmbed.addField('-vatwx', 'Provides the VATSIM METAR for specified ICAO code.', false);
        helpEmbed.addField('-suggest', 'Suggest features for the Discord Bot', false);

        message.channel.send({embeds: [helpEmbed] });
    }
}