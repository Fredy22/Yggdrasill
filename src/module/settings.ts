/**
 * @ignore
*/
export default function () {

  game.settings.register('yggdrasill', 'worldSchemaVersion', {
    name: 'Schema Version',
    hint: "Records the schema version for Yggdrasill system data.",
    scope: 'world',
    config: true,
    default: 0,
    type: Number,
  });
}
