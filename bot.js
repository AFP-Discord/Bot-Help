//Define required packages
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "-";

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'vatroles'){
    client.commands.get('vatroles').execute(message, args);
  } else if (command === 'suggest'){
    client.commands.get('suggest').execute(message, args);
  } else if (command === 'vatwx') {
    client.commands.get('vatwx').execute(message, args);
  } else if (command == 'help') {
    client.commands.get('help').execute(message, args);
  } else {
    message.channel.send('That command is invalid! Please try again!');
  }

});
client.login('DISCORD_BOT_TOKEN_HERE');