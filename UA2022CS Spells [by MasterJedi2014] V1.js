/*	-INFORMATION-
	Subject:	Spells
	Effect:		This script adds the UA versions of the spells from the 2022 Unearthed Arcana "The Cleric and Revised Species" article.
				It also adds a version of the "Prayer of Healing" spell that is compliant with the updates to healing spells in UA23PT8, the difference being that this extra version doubles the healing done by the spell.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-03-20 (sheet v13.1.0)
*/

var iFileName = "UA2022CS Spells [by MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/03/20",
};

SourceList["UA22CS"] = {
	name : "Unearthed Arcana 2022: The Cleric and Revised Species",
	abbreviation : "UA22CS",
	date : "2022/12/01",
	url : "https://media.dndbeyond.com/compendium-images/one-dnd/cleric-and-revised-species/tr8jAj5cc33uQixi/UA-2022-ClericandSpecies.pdf",
};

/*	-SCRIPT AUTHOR NOTE-
	Due to the ambiguous state these spells are in regarding whether they are still in playtesting or not, all of the below spells are set to be excluded by default.
	The user will need to enable the spells that they want to use/playtest.
*/

// Add spells
SpellsList["aid ua22cs"] = {
	name : "Aid (UA22CS)",
	source : [["UA22CS", 12], ["SRD", 114], ["P", 211], ["MJ:HB", 0]],
	classes : ["artificer", "bard", "bard_ua22xc", "cleric", "cleric_ua23pt6", "paladin", "paladin_ua23pt6", "ranger", "ranger_ua23pt6"],
	defaultExcluded : true,
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A tiny strip of white cloth",
	duration : "Instantaneous",
	description : "6 creatures gain 5+5/SL temp HP", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "Your spell bolsters creatures, filling them with resolve. Choose up to six creatures within range. Each target gains 5 Temporary Hit Points." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the number of Temporary Hit Points increases by 5 for each slot level above 2nd.",
};
SpellsList["banishment ua22cs"] = {
	name : "Banishment (UA22CS)",
	source : [["UA22CS", 16], ["SRD", 120], ["P", 217], ["MJ:HB", 0]],
	classes : ["cleric", "cleric_ua23pt6", "paladin", "paladin_ua23pt6", "sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	defaultExcluded : true,
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "An item distastful to the target",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1+1/SL crea save or banished; crea return if spell lasts < 1 min; end of turn save to return early", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma Saving Throw or be transported to a harmless demiplane for the duration. The target can willingly fail the save." + "\n   " + "While in the demiplane, the target is Incapacitated. At the end of each of its turns, the target can repeat the save, ending the Spell on itself on a success. When the Spell ends on the target, it reappears in the space it left or in the nearest unoccupied space if that space is occupied." + "\n   " + "If the Spell lasts on the target for 1 minute and the target is an Aberration, a Celestial, an Elemental, a Fey, or a Fiend, the target doesn’t return. It is instead transported to a random location on a plane associated with its Creature Type." + AtHigherLevels + "When you cast this Spell using a Spell Slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
};
SpellsList["guidance ua22cs"] = {
	name : "Guidance (UA22CS)",
	source : [["UA22CS", 19], ["SRD", 151], ["P", 248], ["MJ:HB", 0]],
	classes : ["artificer", "cleric", "cleric_ua23pt6", "druid", "druid_ua23pt8"],
	defaultExcluded : true,
	level : 0,
	school : "Div",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to you or an ally within 10 feet of you failing an Ability Check",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 creature (myself included) adds 1d4 to a failed Ability Check", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You channel magical insight to the creature who failed the Ability Check. That creature can roll a d4 and add the number rolled to the check, potentially turning it into a success.",
};
SpellsList["prayer of healing ua22cs"] = {
	name : "Prayer of Healing (UACS)",
	source : [["UA22CS", 23], ["SRD", 170], ["P", 267], ["MJ:HB", 0]],
	classes : ["cleric", "cleric_ua23pt6", "paladin", "paladin_ua23pt6"],
	defaultExcluded : true,
	level : 2,
	school : "Abjur",
	time : "10 min",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V",
	duration : "Instantaneous",
	description : "Spell mod willing creatures heal 2d8+1d8/SL HP \u0026 gain Short Rest benefits", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You utter an extended prayer of restoration. Choose a number of willing creatures equal to your Spellcasting Ability Modifier (minimum of 1). Each of those creatures who remains within range for the Spell’s entire casting gains the benefits of a Short Rest and also regains 2d8 Hit Points, and a creature can’t be affected by this Spell again until that creature finishes a Long Rest." + AtHigherLevels + "When you cast this Spell using a Spell Slot of 3rd level or higher, the healing increases by 1d8 for each slot above 2nd.",
};
SpellsList["resistance ua22cs"] = {
	name : "Resistance (UA22CS)",
	source : [["UA22CS", 25], ["SRD", 175], ["P", 272], ["MJ:HB", 0]],
	classes : ["artificer", "cleric", "cleric_ua23pt6", "druid", "druid_ua23pt8"],
	defaultExcluded : true,
	level : 0,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to you or an ally within 10 feet of you failing an Saving Throw",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 creature (myself included) adds 1d4 to a failed Saving Throw", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You channel magical protection to the creature who failed the Saving Throw. That creature can roll a d4 and add the number rolled to the save, potentially turning it into a success.",
};
SpellsList["spiritual weapon ua22cs"] = {
	name : "Spiritual Weapon (UA22CS)",
	source : [["UA22CS", 25], ["SRD", 182], ["P", 278], ["MJ:HB", 0]],
	classes : ["cleric", "cleric_ua23pt6"],
	defaultExcluded : true,
	level : 2,
	school : "Evoc",
	time : "1 bns",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; spell atk 1d8+1d8/SL+ability modifier Force dmg; bns a to move 20 ft and/or attack", //Ripped directly from "ListsSpells.js" and then altered
	descriptionShorter : "Create wea; spell atk 1d8+1d8/SL+spell modifier Force dmg; bns a move 20 ft and/or atk", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You create a floating, spectral force that resembles a weapon of your choice and that lasts for the duration. The force appears within range in a space of your choice, and you can immediately make one melee spell attack against a creature within 5 feet of the force. On a hit, the target takes Force Damage equal to 1d8 + your spellcasting ability modifier." + "\n   " + "As a Bonus Action on your later turns, you can move the force up to 20 feet and repeat the attack against a creature within 5 feet of it." + AtHigherLevels + "When you cast this Spell using a Spell Slot of 3rd level or higher, the damage increases by 1d8 for every slot level above 2nd.",
};

// Add version of "Prayer of Healing" spell that is compliant with the updates to healing spells in UA23PT8
SpellsList["prayer of healing ua22cs ua23pt8"] = {
	name : "Prayer of Healing(UACS/PT8)",
	source : [["UA22CS", 23], ["SRD", 170], ["P", 267], ["MJ:HB", 0]],
	classes : ["cleric", "cleric_ua23pt6", "paladin", "paladin_ua23pt6"],
	defaultExcluded : true,
	level : 2,
	school : "Abjur",
	time : "10 min",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V",
	duration : "Instantaneous",
	description : "Spell mod willing creatures heal 4d8+2d8/SL HP \u0026 gain Short Rest benefits", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "SCRIPT AUTHOR NOTE: Modified to be in alignment with the updates to healing spells in UA23PT8; Changes made amount only to doubling the healing of the spell, with no other changes made." + "\n   " + "You utter an extended prayer of restoration. Choose a number of willing creatures equal to your Spellcasting Ability Modifier (minimum of 1). Each of those creatures who remains within range for the Spell’s entire casting gains the benefits of a Short Rest and also regains 4d8 Hit Points, and a creature can’t be affected by this Spell again until that creature finishes a Long Rest." + AtHigherLevels + "When you cast this Spell using a Spell Slot of 3rd level or higher, the healing increases by 2d8 for each slot above 2nd.",
};