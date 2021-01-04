import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'

import { LMap, LTileLayer, LControl,LMarker,LTooltip,LFeatureGroup, LPopup, LControlLayers, LControlZoom, LIcon, LWMSTileLayer} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

import VueScrollProgress from 'vue-scroll-progress'

Vue.use(VueScrollProgress)


Vue.component('l-map', LMap);
Vue.component('l-icon', LIcon);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-wms-tile-layer', LWMSTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-control', LControl);
Vue.component('l-control-layers', LControlLayers);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-tooltip',LTooltip);
Vue.component('l-popup',LPopup);
Vue.component('l-feature-group', LFeatureGroup)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
