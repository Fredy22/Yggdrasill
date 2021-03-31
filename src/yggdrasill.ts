import { CONFIG as YGGCONFIG } from './scripts/config'
import registerSettings from './module/settings'
import loadTemplates from './module/templates'
import registerActors from './module/register-actors'
import YGGActor from './module/actor/actor'

require('./styles/yggdrasill.scss')

Hooks.once('init', async () => {
  console.log('ArM5 | Initializing System')
  CONFIG.ARM5 = YGGCONFIG

  // Assign actor/item classes.
  CONFIG.Actor.entityClass = YGGActor

  registerSettings()
  loadTemplates()
  registerActors()
  console.log('Yggdrasill | Initializing System OK')
})

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
 Hooks.once("ready", () => {

  // Determine whether a system migration is required and feasible
  const currentVersion = game.settings.get("yggdrasill", "worldSchemaVersion")
  const NEEDS_MIGRATION_VERSION = Number(game.system.data.schema)
  const COMPATIBLE_MIGRATION_VERSION = 0.1
  const needMigration = (currentVersion < NEEDS_MIGRATION_VERSION) || (currentVersion === null)

  // Perform the migration
  if ( needMigration && game.user.isGM ) {
    if ( currentVersion && (currentVersion < COMPATIBLE_MIGRATION_VERSION) ) {
      ui.notifications.error(`Your Yggdrasill system data is from too old a Foundry version and cannot be reliably migrated to the latest version. The process will be attempted, but errors may occur.`, {permanent: true});
    }
    // migrations.migrateWorld()
  }
})
