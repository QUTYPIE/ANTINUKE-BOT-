const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 run: async (client, message, args, guildData, player, prefix) => {

 const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
    const embed = new MessageEmbed()
      .setTitle(`${client.user.username} Help`)
   .setDescription(
        `**A Discord Music Bot With Many Awesome Features, Playlist support,Dj System, Music System, 24/7 for free ,Support Many Sources, Customizable Settings.**`,
      )

      .addField("<:category:981197428722106429> Categories:",`
<a:info:981173170872655893> : **Information**
<a:spotamusic:947726981703827456> : **Music**
<a:emote:981194493879550062> : **Settings**
<a:dj:979612534925586442> : **Dj Commands**
<:m_filters:981413111183601714> : **Filters**
<:emote:981179748711542844> : **Playlist**

<a:arrow_red:981185937813962752>**\`Choose A Page From Menu Below\`**<a:down:981185805475270726>

[Invite](https://discord.com/api/oauth2/authorize?client_id=979228261924081709&permissions=36768832&scope=applications.commands%20bot) ● [Support Server](https://discord.gg/4QRwH3s7ne) ● [Website](https://spibeatz.ml/) `)
    
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.embedColor)

      .setFooter("Thank you for choosing Spi Beatz!!");
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('helpop')
          .setMinValues(1)
          .setMaxValues(1)
          .setPlaceholder('Click me!')
          .addOptions([
                      {
              label: ' Info',
              value: 'info',
              emoji: '981173170872655893',
            },
               {
              label: 'Music',
              value: 'music',
              emoji: '947726981703827456',
            },
              {
              label: 'Dj Commands',
              value: 'Dj',
              emoji: '979612534925586442',
            },
            {
              label: 'Settings',
              value: 'settings',
              emoji: '981194493879550062',
            },
              {
              label: ' Filter',
              value: 'filter',
              emoji: '981413111183601714',
            },
            {
              label: 'Playlist',
              value: 'playlist',
              emoji: '981179748711542844',
            },
      
          ])
      )

    const m = await message.channel.send({ embeds: [embed], components: [row] })

    const row2 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('disable_h')
          .setDisabled(true)
          .setPlaceholder(`Timeout do ${prefix}help`)
          .addOptions([
            {
              label: 'Music',
              value: 'music',
              emoji: '🎼',
            },
            {
              label: ' Filter',
              value: 'filter',
              emoji: '🎙️',
            },
            {
              label: ' Info',
              value: 'info',
              emoji: 'ℹ️',
            },
            {
              label: 'Settings',
              value: 'settings',
              emoji: '⚙️',
            },
            {
              label: 'Playlist',
              value: 'playlist',
              emoji: '🗒️',
            },
            {
              label: 'Home',
              value: 'home',
              emoji: '🏠',
            }
          ])
      )


    const collector = m.createMessageComponentCollector({
      filter: (b) => {
        if (b.user.id === message.author.id) return true;
        else {
          b.reply({
            ephemeral: true,
            content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`,
          });
          return false;
        }
      },
      componentType: "SELECT_MENU",
      time: 600000000,
    });
    collector.on('end', async () => {
      if (!m) return;
      return m.edit({ components: [row2] }).catch(() => { });
    });

    collector.on("collect", (interaction) => {
      if (!interaction.deferred) interaction.deferUpdate();
      const options = interaction.values[0];
      let _commands;

      if (options === 'music') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Music')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Music Commands')
          .setFooter({ text: `Total ${_commands.length} Music commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }
      if (options === 'filter') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Filter')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Filter Commands')
          .setFooter({ text: `Total ${_commands.length} Filter commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }
      if (options === 'playlist') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Playlist')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Playlist Commands')
          .setFooter({ text: `Total ${_commands.length} Playlist commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }
      if (options === 'settings') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Settings')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Settings Commands')
          .setFooter({ text: `Total ${_commands.length} Settings commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }
      if (options === 'info') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Information')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Information Commands')
          .setFooter({ text: `Total ${_commands.length} Information commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }
        if (options === 'Dj') {
        _commands = client.commands
          .filter((x) => x.category && x.category === 'Dj')
          .map((x) => `\`${x.name}\``);
        editEmbed = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(_commands.join(', '))
          .setTitle('Dj Commands')
          .setFooter({ text: `Total ${_commands.length} Dj commands.` });
        if (!m) return;
        return m.edit({
          embeds: [editEmbed],
          components: [row],
        });
      }

      if (options === 'home') {
        if (!m) return;
        return m.edit({
          embeds: [embed],
          components: [row],
        });
      }
    }
    )

  },
};