# iOwO
iOwO Discord bot

# Configuration Setup

## General

* token - _Discord bot token, used to login_

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
* Monitoring
  * c2d - _Turns on/off **Chat To Discord** feature_
  * other - _Turns on/off all other functionalities in **monitoring** module_

### Embed messages
`Feature, which allows to make embed messages with user's content`
* eMessageColor - _Discord embed message border color (HEX)_
* eFooterText - _Text written at the bottom of message, near timestamp_
* eFooterImage - _Link to the image displayed near footer text_

### VK SETTINGS
<pre>
Retrieves posts from VK group
Needs VK application to be made, see <a href="#">this</a> for instructions on how to do that
</pre>

<pre>
import { assign, map } from <a href="https://www.npmjs.com/package/lodash" title="Lodash on npm">lodash</a>;

<a href="https://lodash.com/docs#assign" title="assign documentation">assign</a>({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 } 
<a href="https://lodash.com/docs#map" title="map documentation">map</a>([1, 2, 3], function(n) { return n * 3; });
// → [3, 6, 9] 
</pre>

* v_update_time - _Time after which VK group wall should be checked again (in ms.)_
* group_id - _Your VK group's id (ex. club12345678 = 12345678)_
* app_access_token - _Your VK application's token_
* postsToCheck - _Amount of last posts to be checked_
* ownerOnly - _Whether check only group owner posts or not_
* discordChannelID - _ID of discord channel chat where to make posts_
* vMessageColor - _Discord embed message border color (HEX)_

### Chat-to-Discord config
```
Allows to connect chats in multiplayer game servers
Bot includes plugin for *counter-strike:source/global offensive* servers (SM1.10)
For all other games similar plugins needs to be made, which allows to recieve socket connections
```
* c2d_channel_id - _id of discord channel to post messages to_
* c2d_socketPort - _game server's bound socket port_
* c2d_server_ip - _game server's or other platform ip you want to track messages through sockets from_
* c2d_secret - _secret used to verify messages (generate/make up your own)_
* c2d_color - _discord embed message color_

### Server SETTINGS

* s_update_time - _Time after which status should be updated (in ms.)_
* server_ip - _Your server's ip address_
* server_port - _Your server's port_
* sMessageColor - _Discord embed message border color (HEX)_
* projectWebSite - _Message title & author redirect links_
* sMessageAuthor - _Displayed message author name_
* sAuthorImage - _Link to the image to be displayed near author name_
* sThumbnailImage - _Message thumbnail image_
* sFooterText - _Text written at the bottom of message, near timestamp_
* sFooterImage - _Link to the image displayed near footer text_
