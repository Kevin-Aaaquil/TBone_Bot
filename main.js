const discord = require("discord.js");

const client = new discord.Client();

const prefix = "+";

/*const fs = require("fs");

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require("./commands/${file}");

    client.commands.set(command.name, command);
}
*/

client.once("ready", (err) => {
    console.log("Hello Human!!");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {                             //Help
        //client.commands.get("help").execute(message, args);
        message.channel.send("Help me");
    }

    else if (command === "ping") {                        //Ping Pong
        message.channel.send("pong!");
    }

    else if (command === "github") {                                     //Github
        message.channel.send("https://www.github.com/Kevin-Aaaquil");
    }

    else if (command === "riti") {                                        //Riti
        message.channel.send("Hey Smartass!!!");
    }

    else if (command === "kriti") {                  // Kriti
        message.channel.send("Hello BKJ");
    }

    else if (command === "shashi") {                        // Shashank
        message.channel.send("Kaisa hai BubbleButt");
    }

    else if (command === "esha") {                                 //Lord
        message.channel.send("Hello myself, ek weird Banda");
    }

    else if (command === "anu") {                            //Anu
        message.channel.send("Ro mat Anuuuu");
    }



});





client.login("token");
