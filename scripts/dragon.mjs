/**
 * OA Dragon for 1e FRPG: OA material from Dragon Magazine (#121, 127, 130, 139, 146, 151, 157, 164) for OA Lite.
 * Needs the OA Lite module (frpg1e-oa-lite). Registers the genin, geisya, piao shih and two sumotori classes, the geisya spell list,
 * a proficiency group, class limits for the OA races, a box on the OA tab, and world compendia.
 */
import { CLASSES, SPELLS, DRAGON_CLASS_KEYS, dragonFeatures } from "./classes.mjs";
import { offerImport, importCompendia } from "./compendia.mjs";
import { registerDragonManeuvers } from "./maneuvers.mjs";

export const MID = "frpg1e-oa-dragon";
const LITE = () => !!game.modules.get("frpg1e-oa-lite")?.active;
const FULL_OA = () => !!game.modules.get("frpg1e-oa")?.active;
let API = null;
let OFF = "";

Hooks.once("frpg1e.init", api => {
  if (!LITE()) { OFF = "OA Dragon needs the OA Lite module (frpg1e-oa-lite). Turn it on in Manage Modules."; return; }
  if (FULL_OA()) { OFF = "OA Dragon works with OA Lite, and OA Lite stays off while the full OA module is active. Turn the full OA module off in Manage Modules."; return; }
  if (!api.registerSpellList) { OFF = "OA Dragon needs 1e FRPG 0.48.0 or later."; return; }
  API = api;
  api.registerSpellList("geisya", "Geisya (Dragon #121)");
  api.registerProficiencyGroup("oaDragon", "Dragon (OA)");
  for (const [k, t] of Object.entries(SPELLS)) api.registerSpellProgression(k, t);
  for (const [k, d] of Object.entries(CLASSES)) api.registerClass(k, d);
});

/* Class limits for the OA Lite races ("U" = any level, a number = maximum level). Races not listed here don't get the class. */
const LIMITS = {
  "human-oa": { genin: "U", geisya: "U", sumotoriWieck: "U", sumotoriCarpenter: 8, piaoShih: "U" },
  "spirit-bamboo": { geisya: "U", piaoShih: "U" }, "spirit-river": { geisya: "U", piaoShih: "U" }, "spirit-sea": { geisya: "U", piaoShih: "U" },
  hengeyokai: { geisya: 5 },
  korobokuru: {}
};
Hooks.once("setup", () => {
  if (!API) return;
  for (const [race, lims] of Object.entries(LIMITS)) {
    const ext = API.RACE_DEFS?.[race]?.ext;
    if (!ext) continue;
    Object.assign(ext.classes, lims);
    ext.knownClasses = [...new Set([...(ext.knownClasses ?? []), ...DRAGON_CLASS_KEYS])];
  }
});

Hooks.once("init", () => {
  game.settings.register(MID, "compendiaVersion", { scope: "world", config: false, type: String, default: "" });
  game.settings.registerMenu(MID, "rebuild", { name: "OA Dragon compendia", label: "Rebuild OA Dragon compendia", icon: "fa-solid fa-book",
    type: class extends foundry.applications.api.ApplicationV2 { render() { importCompendia({ confirm: true }); return this; } }, restricted: true });
  game.oaDragon = { importCompendia };
});

Hooks.once("ready", () => {
  if (OFF) { ui.notifications.error(OFF, { permanent: true }); return; }
  // maneuver attack buttons on the OA tab (needs OA Lite 0.1.2 or later)
  if (game.oaLite?.registerManeuver) registerDragonManeuvers(game.oaLite.registerManeuver);
  // ki uses for the OA tab's "Ki uses today" box (needs OA Lite 0.1.2 or later)
  const reg = game.oaLite?.registerKi;
  if (reg) {
    reg("genin", L => [{ id: "breath", label: `Hold breath ${L} rounds, as a ninja (OA p.21)`, max: 1 },
      ...(L >= 5 ? [{ id: "water", label: `Walk on water, ${5 * L} ft, as a ninja (OA p.21)`, max: L }] : []),
      ...(L >= 12 ? [{ id: "walls", label: "Pass through walls, as a ninja (OA p.21)", max: 1, all: true }] : [])]);
    reg("sumotoriWieck", L => L >= 2 ? [{ id: "str", label: `Strength boost: rounds plus strength points gained equal ${L} (Dragon #157 p.38)`, max: 1 }] : []);
    reg("sumotoriCarpenter", L => [{ id: "str", label: "Strength 18/00, over 250 lbs only (Dragon #157 p.35)", max: L },
      ...(L >= 8 ? [{ id: "str19", label: "Strength 19, over 250 lbs only (Dragon #157 p.35)", max: 2 }] : [])]);
  }
  if (game.user.isGM) offerImport();
});

/* ---------- OA tab: a box for the Dragon classes ---------- */
const esc = s => foundry.utils.escapeHTML ? foundry.utils.escapeHTML(String(s ?? "")) : String(s ?? "");
function profText(def, level) {
  const p = def.dragon?.prof;
  if (!p) return "";
  const [initial, per] = p;
  const extra = per === 1 ? Math.max(0, level - 1) : Math.floor(level / per);
  return `<p><strong>Proficiencies:</strong> ${initial + extra} (${initial} at 1st, one more every ${per === 1 ? "level" : `${per} levels`}).</p>`;
}
function boxHTML(actor) {
  const s = actor.system;
  const mine = (s.classInfo ?? []).filter(c => DRAGON_CLASS_KEYS.includes(c.key));
  if (!mine.length) return "";
  return mine.map(c => {
    const def = CLASSES[c.key];
    const d = def.dragon ?? {};
    const req = Object.entries(d.min ?? {}).map(([k, v]) => `${k.toUpperCase()} ${v}`).join(", ");
    const lines = dragonFeatures(c.key, c.level, s);
    return `<div class="box oa-dragon"><h3 class="box-title">${esc(def.label)} ${c.level}</h3>
      ${lines.map(l => `<p>${esc(l.text)} <span class="hint">(${esc(def.source)} p.${l.page})</span></p>`).join("")}
      ${profText(def, c.level)}
      <p class="hint">Minimums: ${esc(req)}. Alignment: ${esc(d.align)}. Races: ${esc(d.races)}. No experience bonus. ${esc(d.note ?? "")} See the class in the OA Dragon Journals.</p></div>`;
  }).join("");
}
Hooks.on("renderCharacterSheet", (app, element) => {
  if (!API) return;
  const actor = app.actor ?? app.document;
  if (!actor || !["character", "npc"].includes(actor.type)) return;
  const root = element instanceof HTMLElement ? element : element?.[0] ?? app.element;
  // OA Lite builds the OA tab in its own render hook; wait a tick in case it runs after this one.
  setTimeout(() => {
    const tab = root?.querySelector(".tab-body[data-tab='oa']");
    if (!tab) return;
    tab.querySelectorAll(".oa-dragon").forEach(n => n.remove());
    const html = boxHTML(actor);
    if (html) tab.insertAdjacentHTML("afterbegin", html);
  }, 0);
});
