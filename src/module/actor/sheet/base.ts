import { CONFIG as YGG } from '../../../scripts/config';

/**
 * Extend the basic ActorSheet class
 * This sheet is an Abstract layer which is not used.
 * @category Actor
 * @extends {ActorSheet}
 */
export abstract class ActorSheetYgg extends ActorSheet {
  editMode: any;

  constructor(...args) {
    super(...args);
  }

  /** @override */
  getData() {

    const data = {
      // The Actor and its Items
      actor: duplicate(this.actor.data),
      data: this.actor.data.data,
      items: this.actor.items.map(i => {
        i.data.labels = i.labels
        return i.data
      }),
      // Basic data
      owner: this.entity.owner,
      limited: this.entity.limited,
      editable: this.isEditable,
      config: YGG
    }
    data.items.sort((a, b) => (a.sort || 0) - (b.sort || 0))
    return data
  }

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   * @override
   */
  activateListeners(html: HTML) {

    // Editable Only Listeners
    if ( this.isEditable ) {
      // Input focus and update
      const inputs = html.find("input")
      inputs.focus(ev => ev.currentTarget.select())

      // toggle edit mode button event
      this.editMode = this.object.data.flags.Sheet?.editMode
      this._applySettingsMode(this.editMode, html)

      html.find('.editBtn').click(e => {
          this.object.update({ 'flags.Sheet.editMode': !this.editMode })
      })
    } else {
      this._applySettingsMode(false, html);
    }

    // Owner Only Listeners
    if ( this.actor.owner ) {
      // Item Rolling
    } else {
      // Otherwise remove rollable classes
      html.find(".rollable").each((i, el) => el.classList.remove("rollable"))
    }

    // Handle default listeners last so system listeners are triggered first
    super.activateListeners(html)
  }

  _applySettingsMode(editMode, html) {
    const hidable = html.find('.hidable');
    console.log(editMode, html);
    for (const obj of hidable) {
      const data = obj.getAttribute('data-hidable-attr');
      if (data === '' || data === 0) {
          if (editMode === false) {
              obj.style.display = 'none';
          } else {
              obj.style.display = '';
          }
      }
    }
    if (editMode) {
      console.log('in edit mode');
      html.find('.show-on-edit').show();
      html.find('.hide-on-edit').hide();
      html.find('input').addClass('white-input');
      html.find('.saves-div').show();
      html.find('.skills-div').show();
    } else {
      html.find('.show-on-edit:not(.hidable)').hide();
      html.find('.hide-on-edit').show();
      html.find('input').removeClass('white-input');
      if (html.find('.saves-div .hidable[data-hidable-attr="1"]').length === 0) {
          html.find('.saves-div').hide();
      }
      if (html.find('.skills-div .hidable[data-hidable-attr="1"], .skills-div .hidable[data-hidable-attr="0.5"], .skills-div .hidable[data-hidable-attr="2"]').length === 0) {
          html.find('.skills-div').hide();
      }
    }
  }

}
