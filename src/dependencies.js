// Foundation imports
import jQuery from 'jquery';
import whatInput from 'what-input';
import Foundation from 'foundation-sites';

// Font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGift, faLockOpen, faBox, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

// Assigning dependencies' globals
window.$ = window.jQuery = jQuery;
window.whatInput = whatInput;
window.Foundation = Foundation;

// Adding only required icons to font awesome's output bundle
library.add(faGift, faLockOpen, faBox, faSyncAlt, faCircle);

// Register font awesome's icons as vue global components
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
