module.exports = {
    name: "ding",
    description: "this is a help command: Shows all the commands available",
    execute(message, args) {
        message.channel.send("dong!");
    }
}