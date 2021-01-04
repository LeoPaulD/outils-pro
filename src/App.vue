<template>
  <v-app>
    <v-banner
        v-if="deferredPrompt"
        color="primary"
        dark
        class="text-left"
        absolute
        
      >
        Installer l'applications sur votre appareil 
        
        <template v-slot:actions>
          <v-btn text @click="dismiss">Ignorer</v-btn>
          <v-btn text @click="install">Installer</v-btn>
        </template>
      </v-banner>
    <!-- <v-app-bar
      color="primary"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Monde professionel, DNHD</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      

      <v-menu
        left
        bottom
      >
        

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="http://leo-paul.fr/images/pp.png"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title> Léo-Paul DUBOURG</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <VueScrollProgress></VueScrollProgress>
      
      <v-container>
        <Presentation />
        <div class="d-flex justify-center">
  <div class="col-md-8 col-sm-10">
         
        
        <br>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <OpenStreetMap />
        <br>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <DesignSprint />
         <br>
         <br>
         <v-divier></v-divier>
         <br>
         <br>
        <Zapier />
        </div>
  </div>

      </v-container>
      
    </v-main>
    <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
    fixed
  >
    <v-btn href="#presentation">
      <span>Présentation</span>

      <v-icon>mdi-presentation</v-icon>
    </v-btn>

    <v-btn href="#OpenStreetMap">
      <span>OpenStreetMap</span>

      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn href="#DesignSprint"> 
      <span>DesignSprint</span>

      <v-icon>mdi-brush</v-icon>
    </v-btn>

    <v-btn href="#Zapier">
      <span>Zapier</span>

      <v-icon>mdi-clipboard-list-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
    
  
  </v-app>
</template>

<script>
import Zapier from './components/Zapier';

import OpenStreetMap from './components/OpenStreetMap.vue';

import DesignSprint from './components/DesignSprint.vue';
import Presentation from './components/Presentation.vue';

import Cookies from "js-cookie";

export default {
  name: 'App',

  components: {
    Zapier,
    OpenStreetMap,
    DesignSprint,
    Presentation,
  },
  data() {
    return {
      drawer: null,
      isIntersecting: false,
      isPresentation: false,
      value: 0,
      deferredPrompt: null,
    };
  },
   computed: {
     
      color () {
        switch (this.value) {
          case 0: return 'primary'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'red'
          default: return 'green lighten-1'
        }
      },
    },
  created() {
    
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.deferredPrompt = e;
      }
      
    });
window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      Cookies.set("add-to-home-screen", null, { expires: 15 });
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
    onPre (entries, observer) {
        this.isPresentation = entries[0].isPresentation >= 0.5
        var presentation = this.isPresentation
        if (presentation == true) {
          this.value = 1
        }
      },
    onIntersect (entries, observer) {
        this.isIntersecting = entries[0].isIntersecting >= 0.5
        var inter = this.isIntersecting
        if (inter == true) {
          this.value = 2
          
        }
        
        
        
      },
    
    


  }
};
</script>
