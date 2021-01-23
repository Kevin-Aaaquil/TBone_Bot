
module.exports = {
    name: "help",
    description: "this is a help command: Shows all the commands available",
    execute(message, args) {
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

    }
}

