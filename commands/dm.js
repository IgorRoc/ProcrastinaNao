const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando DM`)

    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.reply('Você não é digno de realizar esse comando!')
        console.log(`↳ Acesso negado para '${message.author.username}'`)
    }
    
    let user = message.mentions.users.first()
    if(!user){
        message.channel.send(`Ocorreu um erro ao encontrar o usuário mencionado.`)
        console.log(`↳ Usuário "${args[0]}" não encontrado, operação cancelada.`)
        return
    }

    let msg = args.slice(1).join(" ")
    if(!msg){
        return message.channel.send("Envie uma mensagem")
    }
    user.send(msg)

    
    message.delete();
}


module.exports.config = {
    name: "dm",
    description: "Envia a mensagem desejada para a pessoa especificada!",
    usage: ".dm [@pessoa] [mensagem]",
    accessableby: "Moderadores",
    aliases: ["direct"]
}