var elixir = require('laravel-elixir');
require('smartcontent-cdk/tasks');

/*
 |-----------------------------
 | Smart Content Creative Build
 |-----------------------------
 |
 | The smartcontent-cdk executes standard build tasks for a creative
 | through the creative mixin.
 |
 | Any custom tasks specific to the creative should be defined
 | in `./tasks.js` and called above or below `mix.creative()`.
 |
 */

elixir(function (mix) {

  mix.creative();

});
