//Define packages
const axios = require('axios');
const { Octokit, App } = require('octokit');

module.exports = {
    name: "suggest",
    description: "This adds suggestions to the issue page on github",
    execute(message, args) {

        const octokit = new Octokit({ auth: `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` });

        octokit.rest.users.getAuthenticated();

        console.log("Github is authorized!");

        suggestionBody = args.toString();

        suggestionBody = suggestionBody.split(',').join(' ');

        suggestor = message.author.username;

        console.log(`${suggestionBody} was suggested by ${suggestor}`);

        suggestionMaker = `Suggestion from ${suggestor}`;

        octokit.request("POST /repos/AFP-Discord/AFP95-Bot/issues", {
            owner: "aDiscordBot",
            repo: "AFP95-Bot",
            title: suggestionMaker, 
            body: suggestionBody,
            label: 'suggestion',
        });
        

        console.log("Suggestion sent successfully!");


    }
};
