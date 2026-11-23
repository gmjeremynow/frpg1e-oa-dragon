/**
 * Classes from Dragon Magazine OA articles: the genin (#121), the geisya (#121) and two sumotori (#157, Wieck and Carpenter).
 * XP arrays hold the minimum XP of each level as printed in each article's table.
 */
import { NINJA_CAP, MONK_CAP } from "../../frpg1e-oa-lite/scripts/classes.mjs";

const at = (table, level) => table[Math.max(1, Math.min(table.length - 1, level))];
const pct = n => `${n}%`;

// Dragon #121, Table 4: Geisya Spells Usable by Level (10th is the highest spell ability; later levels repeat it)
const GEISYA_ROWS = [[1], [2], [2, 1], [3, 2], [4, 2, 1], [4, 3, 1], [4, 4, 2], [4, 4, 3, 1], [4, 4, 4, 2], [4, 4, 4, 3]];
export const SPELLS = {
  dragonGeisya: Object.fromEntries(Array.from({ length: 30 }, (_, i) => [i + 1, [...GEISYA_ROWS[Math.min(i, 9)]]]))
};

// Carpenter's sumotori, Dragon #157 Table 2: [AC, extra martial attacks, extra martial damage, weight gain (lbs)]
export const CARP_CAP = [null, [10, "-", "-", 0], [10, "-", "-", 25], [9, "-", "+1", 50], [9, "1/4", "+2", 75], [8, "1/4", "+1D", 100],
  [7, "1/2", "+1D+1", 150], [6, "1/2", "+1D+2", 200], [5, "1/1", "+2D", 250]];
// Carpenter, Table 4: special abilities by level
const CARP_MANEUVERS = [[1, "Lock 1: Choke Hold"], [1, "Strike 1: Strong Slap"], [2, "Vital area 1: Stunning Slap"], [3, "Lock 2: Locking Block"], [4, "Throw 3: Hurl"],
  [5, "Lock 3: Incapacitator"], [6, "Movement 3: Immovability"], [7, "Lock 4: Immobilizing"], [8, "Special 5: Crushing Hug"]];
// Wieck's sumotori, Dragon #157 Table 3
const WIECK_ABIL = [[1, "Strike 1: Iron Fist"], [2, "+1 armor class"], [3, "Lock 2: Locking Block"], [4, "Movement 3: Immovability"], [5, "+1 initiative"],
  [6, "Throw 3: Hurl"], [7, "+1 armor class"], [8, "Throw 4: Great Throw"], [9, "+1 armor class"], [10, "Mental 5: Ironskin"]];

export const CLASSES = {
  genin: {
    label: "Genin (Dragon #121)", hitDie: 6, firstDice: 1, maxHD: 10, afterHP: 1, matrix: "thief", save: "thief", fighterCon: false,
    nonProf: -4, source: "Dragon #121", page: 42,
    xp: [0, 2501, 5001, 10001, 18001, 36001, 75001, 130001, 230001, 400001, 650001, 1000001], xpStep: 300000,
    backstab: level => at(NINJA_CAP, level)[10],
    attacksPerRound: [[6, "1/1"], [14, "3/2"], [null, "2/1"]],
    dragon: { prof: [5, 3], min: { dex: 14, int: 15, cha: 14 }, align: "Any non-good", races: "OA humans only",
      note: "The article gives no nonproficiency penalty; the ninja's (-4) is used." }
  },
  geisya: {
    label: "Geisya (Dragon #121)", hitDie: 4, firstDice: 1, maxHD: 6, afterHP: 1, matrix: "magicuser", save: "magicuser", fighterCon: false,
    nonProf: -6, source: "Dragon #121", page: 38,
    xp: [0, 2101, 4201, 6301, 9401, 13601, 20101, 40101, 190101], xpStep: 250000,
    titles: ["Maiko", "Student Geisya", "Student Geisya", "Student Geisya", "Student Geisya", "Geisya", "Geisya", "Geisya", "Geisha"],
    spells: [{ list: "geisya", progression: "dragonGeisya" }],
    dragon: { prof: [4, 1], min: { int: 12, wis: 12, cha: 11, dex: 13 }, align: "Any lawful", races: "OA humans and spirit folk (any level), hengeyokai (5th)",
      note: "250,000 xp per level after 9th (the article says \"beyond the 7th\" though its table runs to 9th)." }
  },
  sumotoriWieck: {
    label: "Sumotori (Wieck, Dragon #157)", hitDie: 12, firstDice: 1, maxHD: 9, afterHP: 0, matrix: "fighter", save: "fighter", fighterCon: true, exceptionalStr: true,
    nonProf: -2, source: "Dragon #157", page: 37,
    xp: [0, 3001, 6001, 12001, 20001, 40001, 80001, 160001, 320001, 500001, 800001, 1100001], xpStep: 300000,
    acBonus: level => (level >= 2 ? 1 : 0) + (level >= 7 ? 1 : 0) + (level >= 9 ? 1 : 0),
    dragon: { prof: [4, 4], min: { str: 16, dex: 12, con: 14, wis: 13 }, align: "Any lawful (male humans)", races: "OA humans only",
      note: "Uses no weapons, so nonproficiency doesn't arise; a bushi subclass, so fighter constitution and exceptional strength apply (the module's reading)." }
  },
  sumotoriCarpenter: {
    label: "Sumotori (Carpenter, Dragon #157)", hitDie: 10, firstDice: 1, maxHD: 8, afterHP: 0, maxLevel: 8, matrix: "cleric", save: "fighter", fighterCon: true, exceptionalStr: true,
    nonProf: -3, source: "Dragon #157", page: 34,
    xp: [0, 4501, 9001, 18001, 40001, 100001, 250001, 600001],
    naturalAC: level => at(CARP_CAP, level)[0],
    dragon: { prof: null, min: { str: 16, con: 16, int: 11, dex: 11 }, align: "Any lawful", races: "OA humans (the article names no race limit)",
      note: "One weapon proficiency ever (no ninja or long-study martial arts weapons); the article gives no other proficiency slots." }
  }
};
CLASSES.piaoShih = {
  label: "Piao Shih (Dragon #164)", hitDie: 8, firstDice: 1, maxHD: 11, afterHP: 2, matrix: "fighter", save: "fighter", fighterCon: true,
  nonProf: -2, source: "Dragon #164", page: 26,
  xp: [0, 2001, 4001, 8001, 16001, 32001, 64001, 128001, 250001, 500001, 750001, 1000001, 1250001, 1500001, 1750001, 2000001, 2250001], xpStep: 250000,
  titles: ["Lookout", "Sentry", "Outrider", "Escort", "Senior Escort", "Thiefstopper", "Banditslayer", "Wayclearer", "Troopleader", "Marchleader",
    "Captain of Escorts", "Master of Escorts", "Master of Escorts", "Master of Escorts", "Master of Escorts", "Master of Escorts", "Master of Escorts"],
  attacksPerRound: [[5, "1/1"], [10, "3/2"], [null, "2/1"]],   // as a bushi (OA Lite)
  // +1 to hit and damage throwing darts (the OA thrown dart; not blowgun darts)
  attackRules: {
    bonus: ({ item, missile }) => (missile && /^dart\b/i.test(item?.name ?? "") && !/blowgun/i.test(item?.name ?? ""))
      ? { mods: [{ label: "Piao shih darts", hit: 1, dmg: 1 }], notes: [] } : null
  },
  dragon: { prof: [4, 2], min: { str: 12, int: 12, wis: 12, dex: 12, con: 12, cha: 12 }, align: "Any lawful or good (never chaotic except chaotic good)",
    races: "OA humans and spirit folk (any level)",
    note: "Also needs 15 or more in strength or dexterity, and in wisdom or charisma. Hit points after 11th: +2 a level (15th is printed 11+13)." }
};
export const DRAGON_CLASS_KEYS = Object.keys(CLASSES);

/** Class abilities at a level: [{ text, page }] (pages are the magazine's). */
export function dragonFeatures(key, level, sys) {
  const L = Math.max(1, level);
  const out = [];
  const add = (text, page) => out.push({ text, page });
  switch (key) {
    case "genin": {
      const n = at(NINJA_CAP, L);
      add(`As a ninja of level ${L} (OA Table 24): hide in shadows ${pct(n[0])}, move silently ${pct(n[1])}, find/remove traps ${pct(n[2])}, climb walls ${pct(n[3])}, disguise ${pct(n[4])}, open locks ${pct(n[5])}, tightrope ${pct(n[6])}, pole vault ${n[7]} ft, fall ${n[8]} ft, escape ${pct(n[9])}; backstab ×${n[10]} (applied). Dexterity adjustments: OA Table 23.`, 42);
      add(`Ninja ki powers and multiple attacks (OA Table 36) as a ninja of his level. Hear noise ${pct(at(MONK_CAP, Math.min(17, L))[8])} (as a monk), and he learns details from what he hears.`, 42);
      add("Disguise: can change out of a disguise in one round. Maps: reads and draws accurate maps.", 42);
      add("Weapons: the ninja weapons and the genin weapons lists, and martial arts weapons with a weapon style. No armor except as a disguise.", 43);
      break;
    }
    case "geisya": {
      const disg = L > 1 ? `${pct(at(NINJA_CAP, L - 1)[4])} (as a ninja of level ${L - 1})` : "Unknown at 1st level (as a ninja one level lower: there is no 0-level ninja)";
      add(`Disguise ${disg}. Pick pockets as a ninja two levels lower: OA Table 24 has no pick pockets column, so Unknown.`, 39);
      add(`Feel spiritual presence ${pct(5 * Math.floor(L / 2))}. Game play: ${pct(5 * L)} to know a game's details; if she knows it, 25% to play at expert level, winning ${pct(7 * L)} of the time.`, 39);
      add(`Spells from the geisya list (Table 4). Languages: one more every two levels, up to half her intelligence.`, 39);
      if (L >= 2) add("2nd: specializes in one art (two slots, six hours' practice a week).", 39);
      if (L >= 4) add("4th: meditates as a shukenja.", 39);
      if (L >= 5) add("5th: must have the dance, music and poetry proficiencies.", 39);
      if (L >= 6) add("6th: takes on a younger sister, a student geisya of 2nd-5th level.", 40);
      if (L >= 9) add("9th: may open her own tea room and train 1-4 maiko.", 40);
      add("No armor, shields, oil or poison. Weapons: naginata, dagger, knife, gunsen, kiseru, shuriken.", 39);
      break;
    }
    case "sumotoriWieck": {
      add(`Sumo style abilities: ${WIECK_ABIL.filter(([lv]) => lv <= L).map(([, t]) => t).join("; ")}. (Armor class bonuses are applied.)`, 38);
      add("Psychic duel +3 (if his shobu ceremony roll succeeds). Hit dice never roll below twice his constitution hit point bonus" + (L >= 10 ? "; from 10th, twice that bonus each level (add by hand)." : "."), 38);
      add(`Ki: a save versus petrification ${L >= 9 ? "means no damage from a blunt weapon's base damage, and half on a failure" : "halves a blunt weapon's base damage"}.`, 38);
      if (L >= 2) add(`Ki (once a day): rounds plus strength points gained must equal ${L}.`, 38);
      add("No armor, shields, weapons, oil or poison. Experience from bouts: 10 × the opponent's hit points for a win, his hit points for a loss.", 37);
      break;
    }
    case "sumotoriCarpenter": {
      const c = at(CARP_CAP, L);
      add(`Armor class ${c[0]} (applied). Martial arts (sumai only): extra attacks ${c[1]}, extra damage ${c[2]}. Weight 240 + 1d6 lbs at 1st; Table 2 weight gain at this level: ${c[3] ? `+${c[3]} lbs` : "none"} (the article doesn't say whether the gains add up level by level: Unknown).`, 36);
      add(`Maneuvers: ${CARP_MANEUVERS.filter(([lv]) => lv <= L).map(([, t]) => t).join("; ")}.`, 36);
      add(`Ki (over 250 lbs only): +1 in psychic duels with anyone but a sumotori, samurai or kensai; strength 18/00 ${L} times a day${L >= 7 ? "; fear against foes of 1 HD or less (save versus breath weapon at +2)" : ""}${L >= 8 ? "; strength 19 twice a day" : ""}.`, 35);
      add("Wrestling: +2 to grapple or overbear non-sumotori (they are -2 against him); breaks holds with a hit roll; strength to-hit bonus counts as armor class against being overborne.", 35);
      add(`Strength and constitution percentiles +2d10 each level (like the cavalier). Living costs ${200 * L} gp a month. Full experience only for wrestling; half otherwise.`, 34);
      if (L >= 8) add("8th: may open a sumo school (10d4 students, with a patron).", 34);
      break;
    }
    case "piaoShih": {
      const disguise = 15 + 5 * (L - 1);
      const m = at(MONK_CAP, Math.min(17, L));
      add(`Darts: +1 to hit and damage (applied). Tracks as a ranger. Unarmed as a monk of level ${Math.min(17, L)} with kung fu (extra attacks ${m[2]}, extra damage ${m[3]}) in leather, studded leather or padded armor or none. Climbs walls ${pct(m[9])} (as an OA monk).`, 27);
      add(`Spots nonmagical disguises ${pct(disguise)} at first meeting. Learns twice the normal number of spoken languages.`, 27);
      const tac = [L >= 3 ? "first" : null, L >= 7 ? "second" : null].filter(Boolean), str = [L >= 5 ? "first" : null, L >= 9 ? "second" : null].filter(Boolean);
      add(`Specialties open: tactical ${tac.length ? tac.join(" and ") : "none yet (3rd)"}; strategic ${str.length ? str.join(" and ") : "none yet (5th)"} (a level sooner with dexterity 18 or wisdom 18).`, 28);
      if (L >= 4) add("4th: negotiates with robbers and monsters (+1% per point of wisdom and charisma; +5% with a foe bargained with before).", 28);
      if (L >= 5) add("5th: may train one zero-level pupil; authority over the party equal to its highest social class.", 28);
      if (L >= 9) add("9th: full control of a caravan's non-piao shih servants; usually a troop of two 4th-6th level lieutenants and 10-12 1st-2nd level piao shih.", 28);
      if (L >= 10) add("10th: commands three or more troops; senses danger once a day (as precognition) in wilderness he travels regularly.", 28);
      if (L >= 11) add("11th: may found an escort organization (4-16 zero-level men-at-arms); designs a banner.", 28);
      if (L >= 15) add("15th: banner morale effects, if never humiliatingly defeated.", 28);
      if (L >= 17) add("17th: accepted into the aristocracy.", 28);
      add("Experience mainly for safe delivery (a quarter with no danger; half for kills not in the line of duty); loses experience for clients lost. May not lie or deceive except for the safety of fellow piao shih, clients or loved ones.", 31);
      break;
    }
  }
  return out;
}
