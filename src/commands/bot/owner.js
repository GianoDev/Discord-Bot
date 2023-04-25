const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Reis`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `reis#1337`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `malWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://reisdev.nl](https://reisdev.nl)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
