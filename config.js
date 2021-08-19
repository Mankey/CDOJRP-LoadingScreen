var config = {
  'title': 'California DOJ Roleplay',
  'welcomeMessage': '',
  // Add images for the loading screen background.
  images: [
  'https://calidoj.com/images/intro/hollywood.png', 'https://calidoj.com/images/intro/1.PNG', 'https://calidoj.com/images/intro/GangPhoto.jpg',
  'https://calidoj.com/images/intro/5.PNG', 'https://calidoj.com/images/intro/7.jpg', 'https://calidoj.com/images/intro/8.png',
  'https://calidoj.com/images/intro/6.png', 'https://calidoj.com/images/intro/3.png', 'https://calidoj.com/images/intro/8.png',
  ],
  // Turn on/off music
  enableMusic: true,
  // Music list. (Youtube video IDs). Last one should not have a comma at the end.
  music: [
    ''
  ],
  // Change music volume 0-100.
  musicVolume: 0,
  // Change Discord settings and link.
  'discord': {
    'show': false,
    'discordLink': 'https://discord.gg/CDOJRP',
  },
  // Change which key you have set in guidehud/client/client.lua
  'menuHotkey': 'F1',
  // Turn on/off rule tabs. true/false
  'rules': {
    'generalconduct': true,
    'roleplaying': true,
    'rdmvdm': true,
    'metagaming': true,
    'newlife': true,
    'abuse': true,
  },
}

// Home page annountments.
var announcements = [
  'VDM/RDM will not be tolerated',
  'RPGs, Mini Guns and Grenade Launchers are RESTRICTED',
  'Visit our Discord today to unlock free content',
  'Unlock Everything we offer, become Elite Cali VIP Today!',
  'If you need staff, use /calladmin in game',
  'Most importantly, HAVE FUN!',
]


// Add/Modify rules below.
var guidelines = [
  'Breaking any of these rules may result in administrative action.',
  'Not knowing the rules does not make players exempt from them.',
  'If another player breaks rules it does not give you the right to break a rule yourself.',
  'Trying to skirt an obvious rule may result in a ban.',
  'Staff reserves the right to ban players they feel are being toxic, disruptive or not playing by the spirit of the game mode.',
  'Not all rules can be listed so use common sense when playing.',
  'Minor rules may be superseded by excellent role-play as determined by Staff.',
]

var generalconduct = [
  'Racism, bigotry, anti-antisemitism, and any other form of harassment is not tolerated.',
  'Players can not role-play sexual assault, rape, or anything that can be deemed as intense and inappropriate behavior.',
]

var roleplaying = [
  'Players must role-play every situation.',
  'Players can not rule quote.',
  'Players must have a microphone enabled to talk with other players in game.',
  'Players must role-play medical injuries correctly at all times.',
  'Players can not do something intentionally in front of police that wouldn\'t ordinarily be done. NO "Cop Baiting".',
  'Players can not steal unattended police/medic vehicles parked at police stations or hospitals.',
  'Players can not intentionally respawn, log out, or find another way to avoid or skirt potential role-play.',
]

var rdmvdm = [
  'Players can not kill or attack other players without role-play.',
  'Players must have a reason or a benefit to their character when trying to kill or attack another player.',
  'Example:  Yelling "hands up or die" without a reason is not valid role-play.',
  'Players may use vehicles as weapons as long as its within role-play and logical.',
  'Players can not intentionally use aerial vehicles to collide into other players or vehicles.',
]

var metagaming = [
  'Players can not use information gathered outside of role-play to influence their actions within the game.',
  'Players may remove another players communication devices in an role-play manner.',
  'Players with removed communication devices are expected to mute their third-party communication software.',
  'Players may only remove another players communication device when it is logical within role-play.',
  'Players can not use information gathered from outside the server (such as forums) while in-game.',
  'Knowledge and experiences should be learned and discovered by a players current character in-game.',
  'Players can not force another player into a situation that they cannot role-play out of.',
  'Players must use common sense when encountering power-gaming potential situations.',
]

var newlife = [
  'Players that are downed but then stabilized should continue role-play accordingly.',
  'Players that are killed ("respawn" is prompted) must "forget" their previous situation in which they have died.',
  'Players that are killed may still proceed with their current character. (players may DOA their character and start a new character story).',
]

var abuse = [
  'Players can not abuse or exploit bugs.',
  'Players can not hack or script. (using third-party software, injectors, etc).',
  'Players who report an exploit using the proper procedures will be rewarded ingame.',
]

// Modify hotkeys below.
var generalhotkeys = [
  'Press <kbd>F1</kbd> to open your character and vehicle menu.',
  'Press <kbd>F3</kbd> to open your emotes menu.',
  'Press <kbd>F6</kbd> CDOJRP free and whitelist custom car menu.',
  'Press <kbd>Z</kbd> to change your talk distance.',
  'Press <kbd>T</kbd> to talk in text chat.',
  'Hold <kbd>N</kbd> to voice talk in game.',
  'Press <kbd>L</kbd> to hide chat.',
]

var rphotkeys = [
  'Use <code>/help</code> in chat to see available cmds.',
  'Hold <kbd>X</kbd> to put your hands up.',
  'Press <kbd>U</kbd> to fall down.',
  'Press <kbd>G</kbd> while running at someone to tackle.',
  'Press <kbd>F3</kbd> to bring up the animation menu.',
  'Press <kbd>M</kbd> to open CIV Toolbox.',
]

var vehiclehotkeys = [
  'Double Press <kbd>E</kbd> outside your personal vehicle (set via <kbd>F1</kbd>) to lock/unlock.',
  'Press <kbd>BACKSPACE</kbd> to turn on/off emergency flashers.',
  'Press <kbd>-</kbd> to turn on/off left turn signal.',
  'Press <kbd>+</kbd> to turn on/off right turn signal.',
  'Press <kbd>Q</kbd> to turn on emergency lights. (EMS & Police)',
  'Press <kbd>LEFT ALT</kbd> to turn on sirens. (EMS & Police)',
  'Press <kbd>R</kbd> to change siren. (EMS & Police)',
]

var jobshotkeys = [

]