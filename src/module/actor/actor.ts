// import { } from "./dataDefinitions";

/**
 * @category Actor Entity
 * @extends Actor
 */
export class YGGActor extends Actor {
  /**
   * Augment the basic actor data with additional dynamic data
   */
  prepareData() {
    super.prepareData();

    // Prepare character & npc data; primarily attribute and action calculation.
    const actorData = this.data;
    if (actorData.type === 'PJ') this._prepareCharacterData(actorData);

    return actorData;
  }

  /**
   * Prepare Character type specific data.
   */
  private _prepareCharacterData(actorData: CharacterData) {
    const data = actorData.data;
  }
}
