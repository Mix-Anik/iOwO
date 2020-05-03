# iOwO
iOwO Discord bot

# Configuration Setup

### General

* token - _Discord bot token, used to login_
* prefix - _Bot's prefix used in commands_

### Database settings (Postgres)
`Database, where iOwO saves/retrieves everything`
* db_name - _Name of database to connect to_
* db_host - _Database hosting address_
* db_port - _host port_
* db_user - _database user name_
* db_pass - _database user password_

### Modules
`Manages modules to be enabled or not`
* Info - _Turns on/off functionalities inside **info** module_
* Misc - _Turns on/off functionalities inside **misc** module_
* Roles - _Turns on/off functionalities inside **roles** module_
* Monitoring
  * c2d - _Turns on/off **Chat To Discord** feature_
  * other - _Turns on/off all other functionalities in **monitoring** module_

### Embed messages
`Feature, which allows to make embed messages with user's content`
* messageColor - _Discord embed message border color (HEX)_
* footerText - _Text written at the bottom of message, near timestamp_
* footerImage - _Link to the image displayed near footer text_

### VK SETTINGS
<pre>
Retrieves posts from VK group
Needs VK application to be made, see <a href="#">this</a> for instructions on how to do that
</pre>

* updateTime - _Time after which VK group wall should be checked again (in ms.)_
* groupId - _Your VK group's id (ex. club12345678 = 12345678)_
* accessToken - _Your VK application's token_
* postsToCheck - _Amount of last posts to be checked_
* ownerOnly - _Whether check only group owner posts or not_
* channelId - _ID of discord channel chat where to make posts_
* messageColor - _Discord embed message border color (HEX)_

### Chat-to-Discord config
```
Allows to connect chats in multiplayer game servers
Bot includes plugin for *counter-strike:source/global offensive* servers (SM1.10)
For all other games similar plugins needs to be made, which allows to recieve socket connections
```
* channelId - _id of discord channel to post messages to_
* socketPort - _game server's bound socket port_
* serverIp - _game server's or other platform ip you want to track messages through sockets from_
* secret - _secret used to verify messages (generate/make up your own)_
* color - _discord embed message color_

### Server SETTINGS

* updateTime - _Time after which status should be updated (in ms.)_
* serverIp - _Your server's ip address_
* serverPort - _Your server's port_
* messageColor - _Discord embed message border color (HEX)_
* projectWebsite - _Message title & author redirect links_
* messageAuthor - _Displayed message author name_
* authorImage - _Link to the image to be displayed near author name_
* thumbImage - _Message thumbnail image_
* footerText - _Text written at the bottom of message, near timestamp_
* footerImage - _Link to the image displayed near footer text_
