import {CONFIG as YGG} from '../../../scripts/config'

/**
 * Extend the basic ActorSheet class to do all the PF2e things!
 * This sheet is an Abstract layer which is not used.
 * @category Actor
 * @extends {ActorSheet}
 */
 export default abstract class ActorSheetArM5 extends ActorSheet {
  private _filters: {}
  editMode: any

  constructor(...args) {
    super(...args)
  }
}