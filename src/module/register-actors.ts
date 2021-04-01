import { ActorSheetPJ } from './actor/sheet/pj';

export function registerActors() {
  Actors.unregisterSheet('core', ActorSheet);

  // Register PJ Sheet
  Actors.registerSheet('yggdrasill', ActorSheetPJ, {
    types: ['PJ'],
    makeDefault: true,
  });
}
