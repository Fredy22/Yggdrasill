import ActorSheetYgg from "./base"

/**
 * @category Actor
 * @extends {ActorSheetYgg}
 */
class ActorSheetPJ extends ActorSheetYgg {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['yggdrasill', 'sheet', 'actor'],
      width: 700,
      height: 800
    })
  }
  
}

export default ActorSheetPJ
