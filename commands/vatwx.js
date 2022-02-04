//Define Packages
const urllib = require('urllib');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'vatwx',
    description: 'Returns the METAR for the specified airport',
    execute(message, args) {
        var vatICAO = args[0];
        //verify that vatICAO is a 4-letter string
        if (vatICAO.length != 4) {
            console.log("Wrong Length of ICAO Code!")
        } else {
        var vatURL = `https://metar.vatsim.net/${vatICAO}`;
        const wxEmbed = new MessageEmbed()
            .setColor('#3498DB')
            .setTitle('VATSIM Weather')
            .setDescription(`Here is the weather for ${vatICAO}`);
            //conn = urllib.request.urlopen(vatURL)

            urllib.request(vatURL, function (err, data, res) {
            if (err) {
                vatResponse = "Sorry, the provided ICAO code is either invalid, or the service is currently down."
            } else {
            vatResponse = data.toString();
            //Comment out below to send URL responses to the console
            //console.log(vatResponse);
            wxEmbed.addField(vatICAO, vatResponse, false);
            
            message.channel.send({embeds: [wxEmbed] });}
        })}
    }
}