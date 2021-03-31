import ActorSheetPJ from './actor/sheet/pj'

function registerActors() {
  Actors.unregisterSheet('core', ActorSheet);

  // Register PJ Sheet
  Actors.registerSheet('yggdrasill', ActorSheetPJ, {
    types: ['PJ'],
    makeDefault: true,
  });

}

export default registerActors;
