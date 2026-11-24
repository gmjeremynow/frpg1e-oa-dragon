# OA Dragon for 1e FRPG, v0.1.1

An optional add-on for the OA Lite module (frpg1e-oa-lite, 0.1.1 or later) on the 1e FRPG system for Foundry VTT (system 0.48.0 or later, Foundry V14). It brings in OA material from eight issues of Dragon Magazine, restated in plain words. Turn the module on or off in Manage Modules.

Based on these Dragon Magazine articles (TSR). The rules are restated in plain words; the numbers follow the articles, and prices are converted to standard coins with OA Table 46. You need the magazines for their original text.

- #121 (May 1987): "Sage Advice" by Skip Williams; "The Geisya" by Gregg Sharp; "The Genin" by David Howery; "The Deadliest Perfume" by John P. Brown.
- #127 (November 1987): "A Menagerie of Martial Arts" by Len Carpenter.
- #130 (February 1988): "Arcane Lore: Magic from East to West" by Len Carpenter; "The Eastern Sea" (printed with the setting's adjective) by Margaret Foy.
- #139 (November 1988): "Hand-to-Hand Against the Rules" by Vince Garcia.
- #146 (June 1989): "Arrows of the East" by David Kloba.
- #151 (November 1989): "Sage Advice" by Skip Williams; "Soldiers of the Law" by Dan Salas.
- #157 (May 1990): "Where There Is One Sumotori . . ." by Stewart Wieck; ". . . There's Bound To Be Another!" by Len Carpenter.
- #164 (December 1990): "Flying Feet and Lightning Hands" by Len Carpenter; "Things Your Sensei Never Taught You" by Rudy Thauberger; "Bonds of Brotherhood" by Tom Griffith; "Born to Defend: The piao shih" by Joseph R. Ravitts.

The Sage Advice columns are treated as clarifications. Everything else is an optional supplement for the DM.

## Install

Install OA Lite first. Then, in Foundry's Setup screen, go to Add-on Modules, Install Module, and paste this manifest URL:

`https://github.com/gmjeremynow/frpg1e-oa-dragon/releases/latest/download/module.json`

Switch it on in the world (with OA Lite) and accept the offer to build the OA Dragon compendia. They can be rebuilt at any time from Configure Settings, 1e FRPG: OA Dragon, Rebuild OA Dragon compendia (this replaces the copies in the world). If OA Lite isn't active, or the full OA module is, the add-on stays off and says so.

## What it adds

- Classes on the character sheet: Genin (#121), Geisya (#121, with her own spell list), Sumotori (Wieck) and Sumotori (Carpenter) (#157; the magazine printed both versions, so both are here as separate classes), and Piao Shih (#164), the caravan guard and dart master. A box on the OA tab lists each one's abilities at its current level.
- Compendia:
  - OA Dragon Journals: the articles in plain words, by topic (Using This Module, Sage Advice, Classes, Martial Arts, Archery, Ships, Magic and Treasure, Monks and the Law), including a page listing where Sage Advice differs from OA Lite.
  - OA Dragon Spells: 108 spells: the geisya list (20) and OA spells adapted for PHB clerics (26), druids (17), magic-users (35) and illusionists (10) from "Magic from East to West".
  - OA Dragon Martial Arts: 22 styles and 34 special maneuvers.
  - OA Dragon Proficiencies: the genin-only proficiencies, the shobu ceremony and paddling.
  - OA Dragon Equipment: the nine new arrows and the shinobi shozoku.

## Left out

- "Earn Those Heirlooms!" by Jay Ouzts (#151): an inheritance-point system for OA birthrights, built entirely on honor and family, which OA Lite doesn't have.
- Honor awards and penalties throughout, castes, and Sage Advice answers about honor, birth rank, birthrights, daimyo, the setting's calendar and its currency.
- The setting's country names ("Soldiers of the Law" describes city gates country by country; the customs are kept without the names) and the place names of the authors' own campaigns.
- The short story scenes in "Bonds of Brotherhood" are summarized.
- Other articles in these issues are not included, among them "Whaddya mean, Jack the Samurai?" (Japanese names, #121), "The Life and Death of a Castle" and "Sun Dragon Castle" (#121).

## Choices made here

- Prices: converted with the real values in OA Table 46 (1 fen = 1 cp, 1 yuan = 5 cp, 1 tael = 10 sp, 1 ch'ien = 5 gp), each in the largest coin that divides it evenly; the printed price is given beside it. Ship costs are printed in thousands of tael (1,000 tael = 500 gp).
- Race limits (OA Lite races): genin, OA humans only; geisya, OA humans and spirit folk at any level and hengeyokai to 5th; both sumotori, OA humans (Wieck's are male humans; Carpenter's article names no race, so the module uses humans); piao shih, OA humans and spirit folk at any level. PHB races give no ruling for these classes.
- Genin: the article gives no nonproficiency penalty; the ninja's (-4) is used. Its abilities follow the ninja tables of OA Lite.
- Geisya: experience beyond 9th level is 250,000 a level (the article says "beyond the 7th" though its table runs to 9th). Her spell table stops at 10th level ("maximum spell ability"); later levels keep the 10th-level row.
- Sumotori (Wieck): a bushi subclass, so fighter constitution bonuses and exceptional strength apply; his armor class bonuses (2nd, 7th and 9th) are applied. His minimum hit points and post-9th hit points, strength ki and initiative bonus are noted for hand use.
- Sumotori (Carpenter): armor class by level is applied; highest level 8th. Weight, percentile ability gains and wrestling bonuses are noted for hand use.
- Piao shih: +1 to hit and damage with thrown darts and bushi attacks per round are applied; his ability minimums (no score below 12, plus 15 in strength or dexterity and in wisdom or charisma) are shown but the either/or part isn't checked. Hit points after 11th level are +2 a level (15th level is printed 11+13). His four specialties are chosen and applied by hand. Base honor and birth rank are left out.
- Spells for PHB casters: each is a copy of the OA spell with the article's change at the top and the OA description below it. Detect lycanthrope, force werechange, cure rot, glowing eyes, fog shape and prevent rot are built the same way from the OA spells they come from. The printed cleric spell "Fare" is the shukenja spell fate.
- Martial arts: style items work like OA Lite's (drag one to the Weapons list). Wieck's sumo style is printed as OA Table 69 building entries, not finished statistics, so it is described in the journal rather than made an item.
- Arrows: the article moves armor class adjustments from the bows to the arrows. The sheet takes them from the bow, so each arrow's description lists its adjustments for the daikyu and hankyu to apply by hand.
- Ships: the rules build on "High Seas" (Dragon #116), which you need for sailing, maneuvering, damage and fire.
- Sage Advice: answers that differ from OA Lite are listed on the "Rulings and the OA Lite Module" journal page; OA Lite is not changed.

## Kept as printed

- Geisya experience table: 6th level ends at 20,101 and 7th begins at 20,101.
- Kensai alternate experience (#139): 9th level begins at 250,000.
- The bird arrow does 1-2 to any size in the text, 1-4/1-2 in Table 4.
- Daikyu table: the hollow-tip arrow's -1 at AC 8.
- Ships, Table Ie: the lorca's oars are printed "m"; the river junk's poling entry has seven numbers for six columns (Unknown which belongs where); the text gives the river junk 18 oars and the fishing junk six, Table Ie gives 16 and none.
- Ships, Table V: tsunami damage is printed "S/level".
- The dragon boat's draft: 3 inches in the text, 15 inches in Table Id.
- Carpenter's sumai style: attacks printed "211".
- Carpenter's sumotori weight gain: whether Table 2's figures add up level by level is not said (Unknown).
- Crushing Hug: broken with a bend bars/lift gates roll in #157, with a to-hit roll at -4 in #164 (both given).
- Resuscitation (#164): "a +2 penalty".
- Piao shih: the text makes 11th level "Master of Escorts"; the level table calls 11th "Captain of Escorts" and 12th "Master of Escorts".
- Grenade size: a vial of holy water (#121), a flask of oil (#151).
- The black lotus: the text says nothing can save a doomed victim; a rules note gives neutralize poison 5% per caster level.

## Changes

- 0.1.1: the genin and both sumotori now appear in the OA tab's "Ki uses today" box (needs OA Lite 0.1.2 or later). Dragon maneuvers that make an attack (scissors kick, double kick, double-fist punch, crushing hug, crushing drop, thunderpunch, the slash and blunt maneuvers, pause and silence, reflection, strong slap and stunning slap) now get an Attack button on the OA tab: it rolls to hit with the chosen style and puts the maneuver's damage and effect on the chat card. Arrow cutting, slowed aging, controlled breathing, quick strike and flowing water are marked as always in effect. The rest keep the Show button.
- 0.1.0: first release.
