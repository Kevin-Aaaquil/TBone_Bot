const discord = require("discord.js");

const client = new discord.Client();

const prefix = "+";                                                          /*   //comment start 

const fs = require("fs");                                         

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require("./commands/${file}");

    client.commands.set(command.name, command);
}                                                                        //comment end            */

client.once("ready", (err) => {
    console.log("Hello Human!!");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {                             //Help
        //client.commands.get("help").execute(message, args);
        message.channel.send("These are the following commands I know");
        message.channel.send("+help");
        message.channel.send("+anu");
        message.channel.send("+esha");
        message.channel.send("+github");
        message.channel.send("+kriti");
        message.channel.send("+ping");
        message.channel.send("+riti");
        message.channel.send("+shashi");
        message.channel.send("+surya");
        message.channel.send("+aryan");
    }

    else if (command === "ping") {                        //Ping Pong
        message.channel.send("pong!");
    }

    else if (command === "github") {                                     //Github
        message.channel.send("https://www.github.com/Kevin-Aaaquil");
    }

    else if (command === "riti") {                                        //Riti
        message.channel.send("Hey Riti!!!");
    }

    else if (command === "kriti") {                  // Kriti
        message.channel.send("Hey Kriti");
    }

    else if (command === "shashi") {                        // Shashank
        message.channel.send("Hey Shashi");
    }

    else if (command === "esha") {                                 //Lord
        message.channel.send("Hello Lord");
    }

    else if (command === "anu") {                            //Anu
        message.channel.send("Hello Anu");
    }

    else if (command === "surya") {
        message.channel.send("Tu jaa Anime Dekh Bhadwe");
    }

    else if (command === "aryan") {
        message.channel.send("Tu Gym jaa Ganndu");
    }



});





client.login("token");
