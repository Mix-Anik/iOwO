const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', message => {

  if (message.content === '!hi') {
  	// send back "Pong." to the channel the message was sent in
  	message.channel.send('Hello!!!');
  }

});

client.login('Bot-token-goes-here');
