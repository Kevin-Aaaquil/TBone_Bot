const discord = require("discord.js");

const client = new discord.Client();

const prefix = "+";                                                           //comment start 

const fs = require("fs");

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}                                                                        //comment end            

client.once("ready", (err) => {
    console.log("Hello Human!!");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {                             //Help
        client.commands.get("help").execute(message, args);
    }

    else if (command === "ding") {                        //Ping Pong
        client.commands.get("ding").execute(message, args);
    }

    else if (command === "github") {                                     //Github
        client.commands.get("github").execute(message, args);
    }

    else if (command === "riti") {                                        //Riti
        client.commands.get("riti").execute(message, args);
    }

    else if (command === "kriti") {                  // Kriti
        client.commands.get("kriti").execute(message, args);
    }

    else if (command === "shashi") {                        // Shashank
        client.commands.get("shashi").execute(message, args);
    }

    else if (command === "esha") {                                 //Lord
        client.commands.get("esha").execute(message, args);
    }

    else if (command === "anu") {                            //Anu
        client.commands.get("anu").execute(message, args);
    }

    else if (command === "surya") {                                     //surya
        client.commands.get("surya").execute(message, args);
    }

    else if (command === "aryan") {                                      //aryan
        client.commands.get("aryan").execute(message, args);
    }

    else if (command === "office") {
        client.commands.get("office").execute(message, args);
    }

    else if (command === "dance") {
        client.commands.get("dance").execute(message, args);
    }

    else if (command === "batra") {
        client.commands.get("batra").execute(message, args);
    }

    else                                                                //pata nahi kyu
        message.channel.send("Command Barbad Behenchod");

});





client.login("");