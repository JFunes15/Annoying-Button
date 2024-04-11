// script.js 
// Annoying Button
// Joshcar
// 2.22.24

// get document elements
const button = document.getElementById("redbutton");
const ffsound = document.getElementById("sound");
const words = document.getElementById("words");
const die = document.getElementById("death");
const weapon = document.getElementById("ruby");
const vania = document.getElementById("castle");
// this tells the script that the value "clicks" equals 1
let click = "1";

//main driver for annoying button
function onButtonClick() { 
// tells the script to scream for help
    // words.innerText ="PLACEHOLDER");

    if(click == 1)
{
    words.innerText = "WEAHYJGAEWHGDHAWGDY";
    ffsound.cloneNode(true).play();
}

if( click == 3)
{
    words.innerText = "Ruby Weapon is one of the Weapon creatures created by the planet as a defense mechanism. It and Emerald Weapon are two superbosses first introduced in the North American release, and later appearing in all subsequent versions. Ruby Weapon is fought in the desert near Corel Prison. It is invincible until it exposes its tentacles, and it will only do this if there is only one party member alive; if there is more than one party member alive and its tentacles are not exposed, Ruby will remove characters from battle until only one party member remains. Defeating it earns the Desert Rose item, which can be traded for a gold Chocobo with the Kalm traveler";
    weapon.cloneNode(true).play();
}
if( click == 4)
{
    words.innerText ="Emerald Weapon is located at the Bottom of the Sea, accessible by the submarine. A battle will ensue after making physical contact, although it is possible to avoid him by piloting the sub at its maximum height. Defeating Emerald Weapon earns the party the Earth Harp. In the PC version re-release of Final Fantasy VII beating Emerald Weapon also unlocks the Emerald Weapon achievement. Doing so in the PlayStation 4 version earns the Emerald Eviscerator trophy.";
    weapon.cloneNode(true).play();
}
if( click == 5)
{
    words.innerText ="Diamond Weapon is one of the Weapons the Planet released in response to Sephiroth summoning Meteor. It rises out of the ocean and charges toward Midgar, prompting Cloud's party to pursue it. Once the party defeats the Diamond Weapon it is still approaching Midgar. Once within range, it opens fire on the Shinra Building, nearly killing Rufus Shinra. Shinra fires the Sister Ray, a powerful Mako cannon, which pierces Diamond Weapon and destroys the barrier Sephiroth erected over the North Crater.";
    weapon.cloneNode(true).play();
}
if(click == 6)
{
    words.innerText ="Sapphire Weapon is one of the seven Weapons created by the Planet, and one of the five in Final Fantasy VII roused to protect the world following Meteor's summoning. It is aquatic and can shoot a laser from its mouth. It is the only Weapon that cannot be fought by the party. After Meteor is summoned and Tifa awakes in Junon, Heidegger reports to Rufus that a Weapon is approaching from the sea. When Sapphire Weapon reaches the shore, it surfaces from the water and rears its head in front of the city, only to have it blown off by the Mako Cannon.";
    weapon.cloneNode(true).play();
}
if(click == 7)
{
    words.innerText ="The Ultimate Weapon of Final Fantasy VII is one of the five Weapons created by the Planet as a defense mechanism and released from its slumber in the North Crater. Ultimate Weapon was the only Weapon that could be fought in the first Japanese version of Final Fantasy VII. Ultimate Weapon first appears in a FMV where it and the other Weapons escape the crater. Later, it is fought as a boss battle,[note 1] first in a mandatory Mideel battle during 'Struggle for the Huge Materia', and later can be encountered in optional battles. The player can find it roaming the skies and ram it with their airship and chase it when it settles on a location where it can be fought. It is worth fighting for the prizes it holds, and defeating it yields Cloud's ultimate weapon and makes Ruby Weapon available for a battle. " ;
    die.cloneNode(true).play();
}

if(click ==8)
{
    words.innerText ="Ultimate weapons are distinguishable for having unique damage algorithms, as well as eight linked Materia slots with zero Materia growth. Because of the weapons' unique damage algorithms, the damage they deal can be lower than that of other weapons under certain circumstances, making them not always the ideal weapon to equip. Unlike most other damage modifiers, each character's ultimate weapon applies the damage modifier after all other modifiers, instead of modifying the attack strength of the weapon itself. Cloud's ultimate weapon is the Ultima Weapon, dropped by the Ultimate Weapon boss. It deals more damage based on how close Cloud is to full HP. This 'raw damage' is then modified by the attack's strength (1 if it is a normal attack) and other modifiers. At full HP, the weapon would deal 4x damage and 1x damage at about 1/3rd HP. Barret's ultimate weapon, the Missing Score, is found inside the Sister Ray just before battling Helletic Hojo, but Barret must be in the party to receive it. It deals more damage the more AP the Materia loaded onto it contain. Because of its unique damage algorithm, Missing Score is subject to the overflow glitch that can let Barret kill any opponent in one hit. Master Magic, Master Command, Master Summon, Enemy Skill, and Underwater Materia do not add to this formula. Tifa's ultimate weapon is the Premium Heart obtained by examining a machine in the abandoned building that has a sign ITEM outside in Wall Market. It can be obtained after the player has found the Key to Midgar buried in Bone Village, which becomes available when Cloud and Tifa rejoin the party. The maximum Limit Bar Units is 255 regardless of Limit level (the Limit level simply adjusts the rate at which the bar fills). When the bar is full, the weapon does roughly 1–4x of its normal damage depending on the Limit level, and would do 1/16 of that damage when the Limit bar is empty. Unlike most weapon damage modifiers, this modifier does not solely adjust the weapon's attack power, but the character's final attack power, which includes Tifa's Strength and weapon attack bonus. Aeris's ultimate weapon, Princess Guard, can be found in room four of the clock room in the Temple of the Ancients. It is the only ultimate weapon that has Materia growth and has fewer than eight linked Materia slots. It deals more damage if her allies are KO'd.";
    vania.cloneNode(true).play();
}

click++

}

// add event listeners
button.addEventListener('click', () => onButtonClick());