const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const rpcGenerator = require('discordrpcgenerator');
const prefix = config['prefix'];
const token = config['token'];
const clc = require('cli-color');
const consoleTitle = require('node-bash-title');
const bdd = require('./bdd.json');
const multistream = config['multistream'];
consoleTitle('SelfR Project');
bot['on']('ready', () => {
    console['clear']();
    console['log'](clc['red']('_______  _______  ___      _______  ______   ' + `${'\n'}` + '|       ||       ||   |    |       ||    _ |  ' + `${'\n'}` + '|  _____||    ___||   |    |    ___||   | ||  ' + `${'\n'}` + '| |_____ |   |___ |   |    |   |___ |   |_||_ ' + `${'\n'}` + '|_____  ||    ___||   |___ |    ___||    __  |' + `${'\n'}` + '_____| ||   |___ |       ||   |    |   |  | |' + `${'\n'}` + '|_______||_______||_______||___|    |___|  |_|'));
    console['log'](clc['green']('\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 Connected to :' + bot['user']['tag'] + '                                              \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 Prefix :' + prefix + '                                                                 \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 couleur embed :' + config['color'] + '                                                    \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 image d\'embed :' + config['image'] + ' \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 rpc title :' + config['rpctitle'] + '                                                     \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 twitch :' + config['twitch'] + '                                          \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016' + `${'\n'}` + '\u2016 ton id :' + bot['user']['id'] + '                                                \u2016' + `${'\n'}` + '\u2016\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2261\u2016'))
});
bot['on']('ready', function() {
    rpcGenerator['getRpcImage']('790957605648203827', 'zenitsu')['then']((_0x189fxc) => {
        rpcGenerator['getRpcImage']('790957605648203827', 'selfr')['then']((_0x189fxd) => {
            let _0x189fxe = new rpcGenerator.Rpc()['setName']('SelfR Project')['setUrl']('https://discord.gg/paradoxfr')['setType']('PLAYING')['setApplicationId']('790957605648203827')['setDetails']('SelfR-selfbot')['setAssetsLargeImage'](_0x189fxd['id'])['setAssetsSmallImage'](_0x189fxc['id'])['setAssetsLargeText']('SelfR-Selfbot')['setAssetsSmallText']('By ReZzox.')['setState']('By ReZzox.')['setStartTimestamp'](Date['now']())['setParty']({
                id: ([10000000] + -1000 + -4000 + -8000 + -100000000000)['replace'](/[018]/g, (_0x189fxf) => {
                    return (_0x189fxf ^ Math['random']() * 16 >> _0x189fxf / 4).toString(16)
                })
            });
           bot.user.setPresence(_0x189fxe['toDiscord']())['catch'](console.error)
        })
    })
});
bot['on']('message', (msg) => {
    let _0x189fx11 = msg;
    if (_0x189fx11['author']['id'] !== bot['user']['id']) {
        return
    };
    if (msg.content.startWith(prefix + 'help')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CHELP\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'status', '`Affiche les commandes status`')['addField'](prefix + '2status', '`Affiches les commandes status`')['addField'](prefix + 'fun', '`Affiche les commandes fun`')['addField'](prefix + '2fun', '`Affiche les commandes fun`')['addField'](prefix + '3fun', '`Affiche les commandes fun`')['addField'](prefix + 'tools', '`Affiche les commandes tools`')['addField'](prefix + 'hack', '`Affiche les commandes de hack | FUTUR MAJ`')['addField'](prefix + 'raid', '`Affiche les commandes de raid`')['addField'](prefix + 'mod', '`Affiche les commandes de mod\xE9rations`')['addField'](prefix + 'texte', '`Affiche les commandes texte`')['addField'](prefix + 'divers', '`Affiche les commandes divers`')['addField'](prefix + 'selfr', '`Affiche les commandes selfr`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'status')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['setTitle']('\u300CSTATUS\u300D')['addField'](prefix + 'rpc', '`Change votre activit\xE9 par votre rpc custom`')['addField'](prefix + 'stream', '`Change votre activit\xE9 en stream`')['addField'](prefix + 'multistream', '`Change votre activit\xE9 en multistream`')['addField'](prefix + 'play', '`Change votre activit\xE9 en joue \xE0`')['addField'](prefix + 'watch', '`Change votre activit\xE9 en regarde`')['addField'](prefix + 'list', '`Change votre activit\xE9 \xE9coute`')['addField'](prefix + 'online', '`Change votre status en en ligne`')['addField'](prefix + 'idle', '`Change votre status en inactif`')['addField'](prefix + 'dnd', '`Change votre status en ne pas d\xE9ranger`')['addField'](prefix + 'invisible', '`Change votre status en invisible`')['addField'](prefix + 'spotify', '`Change votre activit\xE9 en spotify`')['addField'](prefix + 'youtube', '`Change votre activit\xE9 en youtube`')['addField'](prefix + 'deezer', '`Change votre activit\xE9 en deezer`')['addField'](prefix + 'twitter', '`Change votre activit\xE9 en twitter`')['addField'](prefix + 'github', '`Change votre activit\xE9 en github`')['addField'](prefix + 'pornhub', '`Change votre activit\xE9 en pornhub`')['addField'](prefix + 'restore', '``Restore votre activit\xE9`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'pornhub')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde pornhub')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'pornhub')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'pornhub')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('PornHub')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/paradoxfr')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('PornHub')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'github')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0 github')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'github')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'github')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('GitHub')['setType']('PLAYING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/paradoxfr')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('GitHub')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'deezer')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute deezer')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'deezer')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'deezer')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Deezer')['setType']('LISTENING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/paradoxfr')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Deezer')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'twitter')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0 twitter')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'twitter')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'twitter')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Twitter')['setType']('PLAYING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/paradoxfr')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Twitter')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'youtube')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde youtube')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'youtube')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'youtube')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('YouTube')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('YouTube')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'spotify')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute spotify')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'spotify')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'spotify')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Spotify')['setType']('LISTENING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Spotify')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'multistream')) {
       msg.delete();
        let _0x189fx14 = multistream;
        setInterval(function() {
            let _0x189fx15 = _0x189fx14[Math['floor'](Math['random']() * _0x189fx14['length'])];
            bot.user.setActivity(_0x189fx15, {
                type: 'STREAMING'
            }, {
                url: config['twitch']
            })
        }, 2500);
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre status \xE0 \xE9t\xE9 chang\xE9 en multistream')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'stream')) {
       msg.delete();
        bot.user.setActivity(config.stream, {
            type: 'STREAMING'
        }, {
            url: config['twitch']
        });
        msg.channel.send('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en stream***' + ' **' + config.stream + '**')
    };
    if (msg.content.startWith(prefix + 'play')) {
       msg.delete();
        bot.user.setActivity(config['play'], {
            type: 'PLAYING'
        });
        msg.channel.send('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0***' + ' **' + config['play'] + '**')
    };
    if (msg.content.startWith(prefix + 'watch')) {
       msg.delete();
        bot.user.setActivity(config['watch'], {
            type: 'WATCHING'
        });
        msg.channel.send('***Votre acitvit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde ***' + '**' + config['watch'] + '**')
    };
    if (msg.content.startWith(prefix + 'list')) {
       msg.delete();
        bot.user.setActivity(config['listen'], {
            type: 'LISTENING'
        });
        msg.channel.send('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute***' + ' **' + config['listen'] + '**')
    };
    if (msg.content.startWith(prefix + 'online')) {
       msg.delete();
        bot['user']['setStatus']('online');
        msg.channel.send('***Votre status \xE0 \xE9t\xE9 chang\xE9 en en ligne***')
    };
    if (msg.content.startWith(prefix + 'idle')) {
       msg.delete();
        bot['user']['setStatus']('idle');
        msg.channel.send('***Votre status \xE0 \xE9t\xE9 chang\xE9 en inactif***')
    };
    if (msg.content.startWith(prefix + 'dnd')) {
       msg.delete();
        bot['user']['setStatus']('dnd');
        msg.channel.send('***Votre status \xE0 \xE9t\xE9 chang\xE9 en ne pas d\xE9ranger***')
    };
    if (msg.content.startWith(prefix + 'invisible')) {
       msg.delete();
        bot['user']['setStatus']('invisible');
        msg.channel.send('***Votre status \xE0 \xE9t\xE9 chang\xE9 en invisible***')
    };
    if (msg.content.startWith(prefix + '2status')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setTitle']('\u300CSTATUS\u300D')['addField'](prefix + 'dbz', '`Change votre activit\xE9 en dbz`')['addField'](prefix + 'naruto', '`Change votre activit\xE9 en naruto`')['addField'](prefix + 'dbs', '`Change votre activit\xE9 en dbs`')['addField'](prefix + 'onepiece', '`Change votre activit\xE9 en onepiece`')['addField'](prefix + 'blackclover', '`Change votre activit\xE9 en black clover`')['addField'](prefix + 'fireforce', '`Change votre activit\xE9 en fire force`')['addField'](prefix + 'hunterhunter', '`Change votre activit\xE9 en hunter x hunter`')['addField'](prefix + 'goh', '`Change votre activit\xE9 en god of highschool`')['addField'](prefix + 'snk', '`Change votre activit\xE9 en attaque des titans`')['addField'](prefix + 'sao', '`Change votre activit\xE9 en sword art online`')['addField'](prefix + 'baki', '`Change votre activit\xE9 en baki`')['addField'](prefix + 'hajime', '`Change votre activit\xE9 en hajime no ippo`')['addField'](prefix + 'demonslayer', '`Change votre activit\xE9 en demon slayer`')['addField'](prefix + 'deathnote', '`Change votre activit\xE9 en death note`')['addField'](prefix + 'southpark', '`Change votre activit\xE9 en southpark`')['addField'](prefix + 'retro', '`Change votre activit\xE9 en retro`')['addField'](prefix + 'default', '`Clear votre activit\xE9`')['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'onepiece')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde one piece')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'onepiece')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'onepiece')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('One Piece')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('One Piece')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'retro')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue a retro')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'retro')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'retro')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Retro')['setType']('PLAYING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('By ReZzox.')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'deathnote')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde death note')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'deathnote')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'deathnote')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Death Note')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Death Note')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'southpark')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde south park')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'southpark')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'southpark')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('South Park')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('South Park')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'demonslayer')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde demon slayer')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'demonslayer')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'demonslayer')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Demon Slayer')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Demon Slayer')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'hajime')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde hajime no ippo')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'hajime')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'hajime')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Hajime No Ippo')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Hajime No Ippo')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'baki')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde baki')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'baki')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'baki')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Baki')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Baki')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'sao')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde sword art online')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'sao')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'sao')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Sword Art Online')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('SAO')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'snk')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde attaque des titans')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'snk')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'snk')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Attaque Des Titans')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('AOT')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'goh')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde god of highschool')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'goh')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'goh')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('God Of HighSchool')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('GOH')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'hunterhunter')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde hunter x hunter')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'hunterhunter')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'hunterhunter')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Hunter X Hunter')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('HXH')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'fireforce')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde fire force')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'fireforce')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'fireforce')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Fire Force')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Fire Force')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'blackclover')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde black clover')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'blackclover')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'blackclover')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Black Clover')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Black Clover')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'dbs')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde dragon ball super')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'dbs')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'dbs')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Dragon Ball Super')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('DBS')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'naruto')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde naruto')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'naruto')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'naruto')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Naruto')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('Naruto')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'dbz')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde dragon ball z')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('797421715423494164', 'dbz')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('797421715423494164', 'dbz')['then']((_0x189fxd) => {
                let _0x189fx13 = new rpcGenerator.Rpc()['setName']('Dragon Ball Z')['setType']('WATCHING')['setUrl']('https://discord.gg/paradoxfr')['setApplicationId']('797421715423494164')['setDetails']('SelfR Project')['setState']('.gg/blitz')['setStartTimestamp'](Date['now']())['setAssetsLargeImage'](_0x189fxc['id'])['setAssetsSmallImage'](_0x189fxd['id'])['setAssetsLargeText']('DBZ')['setAssetsSmallText']('By ReZzox.');
               bot.user.setPresence(_0x189fx13['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'default')) {
       msg.delete();
        bot.user.setActivity('', {
            type: ''
        });
        var _0x189fx12 = new Discord.RichEmbed()['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 clear');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'restore')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Votre activit\xE9 \xE0 \xE9t\xE9 restorer')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12);
        rpcGenerator['getRpcImage']('790957605648203827', 'zenitsu')['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage']('790957605648203827', 'selfr')['then']((_0x189fxd) => {
                let _0x189fxe = new rpcGenerator.Rpc()['setName']('SelfR Project')['setUrl']('https://www.twitch.tv/kaydop')['setType']('PLAYING')['setApplicationId']('790957605648203827')['setDetails']('SelfR-selfbot')['setAssetsLargeImage'](_0x189fxd['id'])['setAssetsSmallImage'](_0x189fxc['id'])['setAssetsLargeText']('SelfR-Selfbot')['setAssetsSmallText']('By ReZzox.')['setState']('v1.7.2 | B\xEAta')['setStartTimestamp'](Date['now']())['setParty']({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000)['replace'](/[018]/g, (_0x189fxf) => {
                        return (_0x189fxf ^ Math['random']() * 16 >> _0x189fxf / 4).toString(16)
                    })
                });
               bot.user.setPresence(_0x189fxe['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'rpc')) {
       msg.delete();
        rpcGenerator['getRpcImage'](config['rpcid'], config['rpcimagel'])['then']((_0x189fxc) => {
            rpcGenerator['getRpcImage'](config['rpcid'], config['rpcimages'])['then']((_0x189fxd) => {
                let _0x189fxe = new rpcGenerator.Rpc()['setName'](config['rpctitle'])['setUrl'](config['twitch'])['setType'](config['rpcstatus'])['setApplicationId'](config['rpcid'])['setDetails'](config['rpcdetail'])['setAssetsLargeImage'](_0x189fxd['id'])['setAssetsSmallImage'](_0x189fxc['id'])['setAssetsLargeText'](config['rpctext'])['setAssetsSmallText']('w/SelfR Project')['setState'](config['rpcstate'])['setStartTimestamp'](Date['now']())['setParty']({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000)['replace'](/[018]/g, (_0x189fxf) => {
                        return (_0x189fxf ^ Math['random']() * 16 >> _0x189fxf / 4).toString(16)
                    })
                });
               bot.user.setPresence(_0x189fxe['toDiscord']())['catch'](console.error)
            })
        })
    };
    if (msg.content.startWith(prefix + 'fun')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CFUN\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'kiss', '`Envoye gif kiss`')['addField'](prefix + 'love', '`Envoye gif love`')['addField'](prefix + 'issou', '`Envoye gif issou`')['addField'](prefix + 'blc', '`Envoye gif blc`')['addField'](prefix + 'patate', '`Envoye gif patate`')['addField'](prefix + 'sad', '`Envoye gif sad`')['addField'](prefix + 'boom', '`Envoye gif boom`')['addField'](prefix + 'neko', '`Envoye gif neko`')['addField'](prefix + 'tg', '`Envoye gif tg`')['addField'](prefix + 'death', '`Envoye gif death`')['addField'](prefix + 'daronned', '`Envoye gif daronned`')['addField'](prefix + 'face', '`Envoye gif facepalm`')['addField'](prefix + 'load', '`Envoye gif load`')['addField'](prefix + 'troll', '`Envoye gif troll`')['addField'](prefix + 'giffle', '`Envoye gif biffle`')['addField'](prefix + 'claquette', '`Envoye gif claquette`')['addField'](prefix + 'cadeau', '`Envoye gif cadeau`')['addField'](prefix + 'hotdog', '`Envoye gif hotdog`')['addField'](prefix + 'haxx', '`Envoye gif h4x0r`')['addField'](prefix + 'bontoutou', '`Envoye gif bon toutou`')['addField'](prefix + 'calcul', '`Envoye gif calcul`')['addField'](prefix + 'hug', '`Envoye gif hug`')['addField'](prefix + 'suicide', '`Envoye gif suicide`')['addField'](prefix + 'veski', '`Envoye gif veski`')['addField'](prefix + 'juif', '`Envoye gif juif`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'juif')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('J\'adore les juifs')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l2SpVdpzmfVzzZBrW/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'veski')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Jte veski gros')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/HmTLatwLWpTQk/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'suicide')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Jvais me suicider')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l2JeiuwmhZlkrVOkU/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'hug')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Hug')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'calcul')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Je compte l\xE0 !')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'bontoutou')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Bon toutou')['setColor'](config['color'])['setImage']('https://cdn.discordapp.com/attachments/766334964245463051/800070392927879218/btt.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'haxx')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('I\'m a H4X0R')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/115BJle6N2Av0A/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'hotdog')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('hotdog')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/SYGkVEBAhm0g0/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'cadeau')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Tien un cadeau pour toi !')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/kKo2x2QSWMNfW/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'claquette')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Claquette')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l2R0cQXxdRVokDHDq/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'giffle')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Prend toi sa')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/lNRASHC9A4BZ4BTLDU/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'troll')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('You are trolled')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/dVtGcobFMRXO0/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'load')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Loading')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'face')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('face')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3bcAcvV2DtlDO/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'daronned')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('daronned')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/ev1KF0JQPCNXO/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'death')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('t mort jvais te faire')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/aOPINgmqpVXNK/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'tg')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Ta gueule')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/12UBOmpaATdE7C/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'neko')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('neko')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/JDeE5kYMFtAs0/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'boom')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Eh boom')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/XKCdA6ERnXp6M/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'sad')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('triste')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'patate')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('patate')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3ohhwA2E1DSVMsZW00/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'blc')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('je m\'en blc frr')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l3q2NgG969xJC1FRe/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'issou')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Issou')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/11mwI67GLeMvgA/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'love')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Je t\'aime')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'kiss')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Bisou')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + '2fun')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CFUN\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'sayan', '`Envoye gif sayan`')['addField'](prefix + 'omg', '`Envoye gif OMG`')['addField'](prefix + 'roux', '`Envoye gif roux`')['addField'](prefix + 'gay', '`Envoye gif gay`')['addField'](prefix + 'debitage', '`Envoye gif debitage`')['addField'](prefix + 'fdp', '`Envoye gif fdp`')['addField'](prefix + 'meme', '`Envoye gif meme`')['addField'](prefix + 'btc', '`Envoye gif btc`')['addField'](prefix + 'eth', '`Envoye gif eth`')['addField'](prefix + 'today', '`Envoye gif today`')['addField'](prefix + 'graff', '`Envoye gif graff`')['addField'](prefix + 'neon', '`Envoye gif neon`')['addField'](prefix + 'beach', '`Envoye gif beach`')['addField'](prefix + 'effectneon', '`Envoye gif neon effect`')['addField'](prefix + 'noel', '`Envoye gif noel`')['addField'](prefix + 'blood', '`Envoye gif blood`')['addField'](prefix + 'light', '`Envoye gif light`')['addField'](prefix + 'retro', '`Envoye gif retro`')['addField'](prefix + 'pf', '`Envoye gif pf`')['addField'](prefix + 'opinion', '`Envoye gif opinion`')['addField'](prefix + 'cat', '`Envoye gif cat`')['addField'](prefix + 'dogs', '`Envoye gif dogs`')['addField'](prefix + 'bird', '`Envoye gif bird`')['addField'](prefix + 'arouf', '`Envoye gif arouf`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'arouf')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Arouf Gangsta')['setColor'](config['color'])['setImage']('https://cdn.discordapp.com/attachments/766334964245463051/800076194791161916/tenor.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'bird')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Bird')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l0MYRTamKvnt0Vr32/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'dogs')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Chien')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/eYilisUwipOEM/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'cat')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Chat')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'opinion')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Opinion')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/5XNEIKcohVG8w/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'pf')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Pff')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/Qakc4UBUd4jjnaDeBv/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'retro')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Retro')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/WS3bI8VeevDOUGCIQx/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'light')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Jour / nuit')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3ohzdFHDBEG32PmWJO/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'blood')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Blood')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/IwYXRW8IXRftS/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'noel')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Noel')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/fseXCQOSahl1gtcAnL/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'effectneon')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Neon effect')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/QZyOqV4p9DbGTh6jEm/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'beach')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Beach')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3oEjHZMFYibQnjvTq0/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'neon')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Neon')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/8WBRMNhQdB9sI/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'graff')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Graff')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/5xtDarq8DOORPIqO10I/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'today')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Aujourd\'hui')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/Z8kZsSckjuhRolwVr1/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'eth')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('ETH')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/Qz5ITuBg5uvLy0yiRY/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'btc')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('BTC')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/U7y1PUFXsAUyZKcOOF/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'meme')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Meme')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'fdp')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Sale fdp')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/OTzkAlT5mjL7G/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'debitage')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('pk tu debite ?')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/A0lBH04aSvP30VUwdM/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'gay')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('T\'es gay')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3o72FiXBdWRy3aZHJm/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'roux')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Tu es roux')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/UQ1nlrPzxolAmseHnD/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'omg')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Oh mon dieux')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/TgOYjtgKpS9jAytUlh/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'sayan')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('SUPER SAIYEN')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/ul1omlrGG6kpO/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + '3fun')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CFUN\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + '2arouf', '`Envoye gif arouf`')['addField'](prefix + '3arouf', '`Envoye gif arouf`')['addField'](prefix + 'chomeur', '`Envoye gif chomeur`')['addField'](prefix + 'bob', '`Envoye gif bob l\'\xE9ponge`')['addField'](prefix + 'choquer', '`Envoye gif choquer`')['addField'](prefix + 'racisme', '`Envoye gif racisme`')['addField'](prefix + 'corona', '`Envoye gif corona`')['addField'](prefix + 'comment', '`Envoye gif comment`')['addField'](prefix + 'baguette', '`Envoye gif baguette`')['addField'](prefix + 'trump', '`Envoye gif trump`')['addField'](prefix + 'iphone', '`Envoye gif iphone`')['addField'](prefix + 'wanted', '`Envoye gid wanted`')['addField'](prefix + 'triggered', '`Envoye gif triggered`')['addField'](prefix + 'rpanda', '`Envoye gif pandaroux`')['addField'](prefix + 'panda', '`Envoye gif panda`')['addField'](prefix + 'fox', '`Envoye gif fox`')['addField'](prefix + 'pikachu', '`Envoye gif pikachu`')['addField'](prefix + 'koala', '`Envoye gif koala`')['addField'](prefix + 'pokedex', '`Envoye gif pokedex`')['addField'](prefix + 'pecho', '`Envoye gif pecho`')['addField'](prefix + 'chatbot', '`Envoye gif chatbot`')['addField'](prefix + 'fish', '`Envoye gif fish`')['addField'](prefix + 'scroll', '`Envoye gif scroll`')['addField'](prefix + 'saturation', '`Envoye gif saturation`')['message']['channel']['send'](_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'saturation')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Saturation')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/sqrnGQaxT7C3m/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'scroll')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Scroll')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3oxHQCoIwppvOPRKYU/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'fish')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Poisson')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/kTZBUjdRlZB3G/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'chatbot')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Chatbot')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/400He9KsCbdgYt2N7N/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'pokedex')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('j\'ai attraper un pokemon')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3o6ZtrwsRu8hbmovsY/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'koala')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Koala')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/aWpSIlUoSvcNa/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'pikachu')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Pika Pika')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'fox')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Fox')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/bGl8yMNLsU7ao/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'panda')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Panda')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'rpanda')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Panda roux')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/BgLzhfGgdoEKI/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'triggered')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Triggered')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/1G0DbfuEZBUmA/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'wanted')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Wanted')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3gLcBWrmZxF7E5ZGZx/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'iphone')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('j\'ai achet\xE9 un iphone')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/26n79t82lmj989iAE/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'trump')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('D.Trump')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'baguette')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Baguette')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/MCoHTwV6tsC3pKu84g/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'comment')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Comment')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/fngcM35fl2ySrblJLV/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'corona')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Coronavirus')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/gkXSfmA8ynT59X9rr4/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'racisme')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('c\'est raciste')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/YWwYgeKquXKJq/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'choquer')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Wlh jsuis choqu\xE9')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/kddBpvyt2LjzDRRIAo/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'bob')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('bob')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/LMt98UHqHx9zBE6TBh/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'chomeur')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('FC Chomage')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/l1J3BtZ57jdR6ymOs/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + '2arouf')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Arouf Gangsta')['setColor'](config['color'])['setImage']('https://cdn.discordapp.com/attachments/766334964245463051/800084736273416192/tenor_2.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + '3arouf')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('Arouf Gangsta')['setColor'](config['color'])['setImage']('https://cdn.discordapp.com/attachments/766334964245463051/800084810953130024/tenor_1.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'tools')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CTOOLS\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'getid', '`Envoye votre id`')['addField'](prefix + 'getaid', '`Envoye l\'id d\'un utilisateur`')['addField'](prefix + 'pp', '`Envoye votre pp`')['addField'](prefix + 'avatar', '`Envoye la pp d\'un utilisateur`')['addField'](prefix + 'mytoken', '`Envoye votre token discord`')['addField'](prefix + 'embed', '`Envoye votre embed personaliser`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'avatar')) {
       msg.delete();
        if (msg['mentions']['users']['first']()) {
            _0x189fx17 = msg['mentions']['users']['first']()
        } else {
            _0x189fx17 = msg['author']
        };
        msg.channel.send(`${'**PP de '}${_0x189fx17['username']}${'#'}${_0x189fx17['discriminator']}${' :**'}`);
        msg.channel.send(`${''}${_0x189fx17['avatarURL']}${''}`)
    };
    if (msg.content.startWith(prefix + 'getaid')) {
       msg.delete();
        if (msg['mentions']['users']['first']()) {
            _0x189fx17 = msg['mentions']['users']['first']()
        } else {
            _0x189fx17 = msg['author']
        };
        msg.channel.send(`${'**ID de : '}${_0x189fx17['username']}${'#'}${_0x189fx17['discriminator']}${' = '}${_0x189fx17['id']}${'**'}`)
    };
    if (msg.content.startWith(prefix + 'embed')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle'](config['embedtitle'])['setColor'](config['embedcolor'])['setURL'](config['embedurl'])['setFooter'](config['embedfooter'])['setImage'](config['embedimage'])['addField'](config['embedfield'])['addField'](config['embedfield2'])['addField'](config['embedfield3']);
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'mytoken')) {
       msg.delete();
        msg.channel.send('**Votre Token: **' + '*' + config['token'] + '*')
    };
    if (msg.content.startWith(prefix + 'pp')) {
       msg.delete();
        msg.channel.send('***Votre pp: ***');
        msg.channel.send(bot['user']['avatarURL'])
    };
    if (msg.content.startWith(prefix + 'getid')) {
       msg.delete();
        msg.channel.send('**Votre id: **' + '*' + bot['user']['id'] + '*')
    };
    if (msg.content.startWith(prefix + 'texte')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CTEXTE\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'cyan', '`Envoye un message en cyan`')['addField'](prefix + 'red', '`Envoye un message en rouge`')['addField'](prefix + 'green', '`Envoye un message en vert`')['addField'](prefix + 'orange', '`Envoye un message en orange`')['addField'](prefix + 'souli', '`Envoye un message souligner`')['addField'](prefix + 'gras', '`Envoye un message en gras`')['addField'](prefix + 'barre', '`Envoye un message barrer`')['addField'](prefix + 'italique', '`Envoye un message en italique`')['addField'](prefix + 'invi', '`Envoye un message en invisible`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'invi')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](5);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('||' + _0x189fx16 + '||')
    };
    if (msg.content.startWith(prefix + 'cyan')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](5);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('```json' + `${'\n'}` + `${'"'}` + _0x189fx16 + '```')
    };
    if (msg.content.startWith(prefix + 'orange')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](7);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('```fix' + `${'\n'}` + _0x189fx16 + '```')
    };
    if (msg.content.startWith(prefix + 'red')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](4);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('```diff' + `${'\n'}` + '-' + _0x189fx16 + '```')
    };
    if (msg.content.startWith(prefix + 'green')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](6);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('```css' + `${'\n'}` + _0x189fx16 + '```')
    };
    if (msg.content.startWith(prefix + 'italique')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](9);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('_' + _0x189fx16 + '_')
    };
    if (msg.content.startWith(prefix + 'barre')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](6);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('~~' + _0x189fx16 + '~~')
    };
    if (msg.content.startWith(prefix + 'gras')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](5);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('**' + _0x189fx16 + '**')
    };
    if (msg.content.startWith(prefix + 'souli')) {
       msg.delete();
        let _0x189fx16 = msg['content']['slice'](6);
        if (!_0x189fx16) {
            return msg['reply']('**Veuillez marquer un texte**')
        };
        msg.channel.send('__' + _0x189fx16 + '__')
    };
    if (msg.content.startWith(prefix + 'raid')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CRAID\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'ban', '`Ban un utilisateur`')['addField'](prefix + 'kick', '`Kick un utilisateur`')['addField'](prefix + 'serverinfo | FUTUR MAJ')['addField'](prefix + 'spam', '`Spam dans le chat | FUTUR MAJ`')['addField'](prefix + 'stopspam', '`Stop le spam | FUTUR MAJ`')['addField'](prefix + 'spamchat', '`Cr\xE9e full chat | FUTUR MAJ`')['addField'](prefix + 'stopchatspam', '`Stop le spamchat | FUTUR MAJ`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'kick')) {
       msg.delete();
        const _0x189fx17 = msg['mentions']['users']['first']();
        if (_0x189fx17) {
            const _0x189fx18 = msg['guild']['member'](_0x189fx17);
            if (_0x189fx18) {
                _0x189fx18['kick']('Optional reason that will display in the audit logs')['then'](() => {
                    msg['reply'](`${'**'}${_0x189fx17['tag']}${' \xE0 \xE9t\xE9 kick**'}`)
                })['catch']((_0x189fx19) => {
                    msg['reply']('**Vous ne pouvez pas kick ce membre**');
                    console.error(_0x189fx19)
                })
            } else {
                msg['reply']('**L\'utilisateur n\'est pas dans le serveur**')
            }
        } else {
            msg['reply']('**L\'utilisateur n\'as pas \xE9t\xE9 mentionn\xE9**')
        }
    };
    if (msg.content.startWith(prefix + 'ban')) {
       msg.delete();
        const _0x189fx17 = msg['mentions']['users']['first']();
        if (_0x189fx17) {
            const _0x189fx18 = msg['guild']['member'](_0x189fx17);
            if (_0x189fx18) {
                _0x189fx18['ban']('Optional reason that will display in the audit logs')['then'](() => {
                    msg['reply'](`${'**'}${_0x189fx17['tag']}${' \xE0 \xE9t\xE9 ban**'}`)
                })['catch']((_0x189fx19) => {
                    msg['reply']('**Vous ne pouvez pas ban ce membre**');
                    console.error(_0x189fx19)
                })
            } else {
                msg['reply']('**L\'utilisateur n\'est pas dans le serveur**')
            }
        } else {
            msg['reply']('**L\'utilisateur n\'as pas \xE9t\xE9 mentionn\xE9**')
        }
    };
    if (msg.content.startWith(prefix + 'mod')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CMODERATIONS\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'ban', '`Ban un membre`')['addField'](prefix + 'kick', '`Kick un membre`')['addField'](prefix + 'clear', '``Clear un nombre de message d\xE9fini`')['addField'](prefix + 'warn', '`Warn un membre`');
        msg.channel.send(_0x189fx12)
    };
    if (msg['content'] == prefix + 'clear') {
        if (msg['members']['hasPermissions']('MANAGE_MESSAGE')) {
            let _0x189fx1a = msg['content']['split'](' ');
            if (_0x189fx1a[1] == undefined) {
                msg['reply']('**Nombre de message non d\xE9fini**')
            } else {
                let _0x189fx1b = parseInt(_0x189fx1a[1]);
                if (isNaN(_0x189fx1b)) {
                    msg['reply']('**Nombre mal d\xE9fini**')
                } else {
                    msg['channel']['bulkDelete'](_0x189fx1b)['then']((_0x189fx1c) => {
                        msg.channel.send('**Suppression de ' + msg['size'] + ' messages r\xE9ussi !**')
                    })['catch']((_0x189fx19) => {
                        msg.channel.send('**Erreur de clear :**' + _0x189fx19);
                        console['log']('Erreur de clear : ' + _0x189fx19)
                    })
                }
            }
        }
    };
    if (msg.content.startWith(prefix + 'warn')) {
       msg.delete();
        if (msg['member']['hasPermission']('BAN_MEMBERS')) {
            if (!msg['mentions']['users']['first']()) {
                return
            };
            _0x189fx17 = msg['mentions']['users']['first']()['id'];
            if (bdd['warn'][_0x189fx17] == 2) {
                msg['guild']['members']['ban'](_0x189fx17)
            } else {
                if (!bdd['warn'][_0x189fx17]) {
                    bdd['warn'][_0x189fx17] = 1;
                    Savebdd();
                    msg.channel.send(`${'**tu a recu 1 avertissement**'}`)
                } else {
                    bdd['warn'][_0x189fx17]++;
                    Savebdd();
                    msg.channel.send(`${'**tu a recu un 2e avertissements**'}`)
                }
            }
        }
    };
    if (msg.content.startWith(prefix + 'divers')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CDIVERS\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'merci', '`Envoye un merci`')['addField'](prefix + 'money', '`Compter votre argent`')['addField'](prefix + 'dance', '`Montrer comment vous dancer`')['addField'](prefix + '0_0', '`Envoye shrug`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'dance')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle'](bot['user']['tag'] + ' dance pour vous')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3ornkdtVzQfIRpwfug/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + '0_0')) {
       msg.delete();
        msg.channel.send('\xAF_(\u30C4)_/\xAF')
    };
    if (msg.content.startWith(prefix + 'money')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle'](bot['user']['tag'] + ' compte son argent')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/14SAx6S02Io1ThOlOY/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'merci')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle'](bot['user']['tag'] + ' vous remerci !')['setColor'](config['color'])['setImage']('https://media.giphy.com/media/3og0IPElt1EVnbJ4KA/giphy.gif')['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'selfr')) {
       msg.delete();
        var _0x189fx12 = new Discord.RichEmbed()['setTitle']('\u300CSelfR\u300D')['setColor'](config['color'])['setImage'](config['image'])['setURL'](config['urlembed'])['setFooter']('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312')['addField'](prefix + 'mrpc', '`Envoye le SelfRPC`')['addField'](prefix + 'package', '`Envoye le SelfR Package`')['addField'](prefix + 'selfbot', '`Envoye le SelfR Project`')['addField'](prefix + 'mgithub', '`Envoye le GitHub`')['addField'](prefix + 'discord', '`Envoye le discord`')['addField'](prefix + '2discord', '`Envoye le discord`')['addField'](prefix + '3discord', '`Envoye le discord`')['addField'](prefix + 'vself', '`Envoye la version du selfbot`');
        msg.channel.send(_0x189fx12)
    };
    if (msg.content.startWith(prefix + 'vself')) {
       msg.delete();
        msg.channel.send('**Version du selfbot: 1.7.2 B\xEAta**')
    };
    if (msg.content.startWith(prefix + 'discord')) {
       msg.delete();
        msg.channel.send('**Notre Discord :** discord.gg/DJZWS3CnyB')
    };
    if (msg.content.startWith(prefix + '2discord')) {
       msg.delete();
        msg.channel.send('**Notre Discord :** discord.gg/paradoxfr')
    };
    if (msg.content.startWith(prefix + '3discord')) {
       msg.delete();
        msg.channel.send('**Notre Discord :** discord.gg/devfr')
    };
    if (msg.content.startWith(prefix + 'mgithub')) {
       msg.delete();
        msg.channel.send('**GitHub SelfR :** https://github.com/selfr-team/')
    };
    if (msg.content.startWith(prefix + 'package')) {
       msg.delete();
        msg.channel.send('**SelfR Package (1er au monde ?) :** https://github.com/selfr-team/selfr-package')
    };
    if (msg.content.startWith(prefix + 'mrpc')) {
       msg.delete();
        msg.channel.send('**SelfRPC (Full Custom) :** https://github.com/selfr-team/SelfRPC/')
    }
});
bot.login(token);

function Savebdd() {
    fs['writeFile']('./bdd.json', JSON['stringify'](bdd, null, 4), (_0x189fx19) => {
        if (_0x189fx19) {
            message['channel']['send']('Une erreur est survenue.')
        }
    })
}