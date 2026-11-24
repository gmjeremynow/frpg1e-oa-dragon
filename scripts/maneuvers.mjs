/**
 * OA Dragon maneuvers for the OA Lite tab: attack buttons for the maneuvers that make an attack roll, and the
 * always-in-effect markers. Registered with OA Lite's registerManeuver (OA Lite 0.1.2 or later).
 * Damage for "double" or "triple" damage multiplies the weapon's dice, as in OA Lite (the articles don't say whether bonuses are).
 */
const C164 = "Dragon #164 p.11-12", T164 = "Dragon #164 p.16-17", S157 = "Dragon #157 p.35";

export const DRAGON_MANEUVERS = {
  "Scissors Kick": { source: C164, hitMod: -2, pre: "Two targets within 6 feet of each other; each kick is at -2 to hit (applied).",
    hit: "Normal martial arts damage to each target hit.", miss: "Missing both, he loses his next melee attack regaining his balance." },
  "Crushing Hug": { source: C164, dice: "3d10", pre: "Needs strength 16 and a weight of 250 lbs or more.",
    hit: "3-30 damage a round until the victim dies or breaks free with a to-hit roll at -4 (in the Dragon #157 sumotori article, a bend bars/lift gates roll instead).",
    miss: "-4 on his next attack." },
  "Double-Fist Punch": { source: C164, hitMod: -1, pre: "Two blows on one opponent, each at -1 to hit (applied): roll once for each.",
    hit: "Normal damage for each blow. If both land, the defender saves versus paralyzation at -4 or is stunned (2-12 rounds) or incapacitated (1-3 hours) as for a natural 20 (OA p.105)." },
  "Crushing Drop": { source: C164, mult: 2, hit: "The foe lands 1-2 feet away, takes double damage, and saves versus paralyzation or is unconscious for 2-8 rounds.",
    miss: "He is thrown to the ground himself and automatically loses initiative next round." },
  "Pause and Silence": { source: C164, none: true, pre: "Gives up one martial arts attack to study the opponent.",
    hit: "+1 on all attacks against this opponent for the rest of the melee (never more than +1).", miss: "Costs only the attack." },
  "Double Kick": { source: T164, pre: "Two opponents in range: target both. One roll, which must be enough to hit the one with the better (lower) armor class.",
    hit: "Normal damage to both.", miss: "If it misses either, the kick fails entirely and he loses all his actions next round." },
  "Reflection": { source: T164, none: true, pre: "Declared at the start of the round, against a blunt weapon (hands and feet included): the opponent's attack hits automatically and he rolls damage.",
    hit: "All that damage is turned back on the opponent, or on another foe within reach.", miss: "He takes the damage normally." },
  "Thunderpunch": { source: T164, mult: 3, pre: "The only action possible that round.",
    hit: "Triple damage; the opponent saves versus breath weapon or is stunned for 1-6 rounds.", miss: "He can't attack or defend for a round." },
  "Blind": { source: T164, hit: "Normal damage, and a 25% chance the eye is blinded: armor class 2 worse and -2 to hit (both eyes: 4 worse and -4). Lasts until the wound is treated; 2% chance it is permanent." },
  "Vein": { source: T164, none: true, hit: "1 damage, then 1 a round from blood loss until the wound is bound or healed; further hits add to the loss." },
  "Artery": { source: T164, none: true, hit: "1 damage, then 3 a round until the wound is tended.", miss: "No damage, and he loses his next attack." },
  "Heavy Blow": { source: T164, mult: 2, hit: "Double damage.", miss: "He loses his next attack." },
  "Limb Paralysis": { source: T164, mult: 2, hit: "The victim saves versus paralyzation. On a failure, a finger, hand, arm, foot or leg is paralyzed for 24 hours (withering palm, OA p.94) and the double damage applies; on a save, normal damage only." },
  "Stunning Blow": { source: T164, hit: "Normal damage; the victim saves versus paralyzation or is stunned and can't attack for 1-4 rounds.", miss: "He loses his next attack." },
  "Great Blow": { source: T164, mult: 3, pre: "The only attack that round.", hit: "Triple damage; the victim saves versus paralyzation or is knocked out for 3-6 rounds.", miss: "He loses his next two attacks." },
  "Strong Slap": { source: S157, dice: "1d10", pre: "Not used in a civilized sumo match.", hit: "As iron fist: 1d10 damage (on each attack if the style's principal body part is the hands, otherwise on one attack a round)." },
  "Stunning Slap": { source: S157, none: true, pre: "Not used in a civilized sumo match.", hit: "As stunning touch: the victim saves versus paralyzation or is stunned for 1d4 rounds and can take no action.", miss: "No effect." }
};

export const DRAGON_ALWAYS_ON = ["Arrow Cutting", "Slowed Aging", "Controlled Breathing", "Quick Strike", "Flowing Water"];

export function registerDragonManeuvers(reg) {
  for (const [name, def] of Object.entries(DRAGON_MANEUVERS)) reg(name, def);
  for (const name of DRAGON_ALWAYS_ON) reg(name, null, { alwaysOn: true });
}
