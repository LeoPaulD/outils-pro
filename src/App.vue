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
      

     <v-app-bar class="d-flex justify-center align-center" style="height: 70px;" id="presentation">
        <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <div style="border: 2px dashed #66BB6A; padding: 2.5px; border-radius: 50%;" class="ma-1"  :elevation="hover ? 16 : 2"
          >
         <v-avatar
        color="teal"
        size="53"
        v-bind="attrs"
          v-on="on"
       

      ><v-img src="images/map.jpg"></v-img></v-avatar>
      
       </div>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="teal"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>OpenStreetMap</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            
          </v-toolbar-items>
        </v-toolbar>
        <div class="d-flex justify-center ">

        <div class="story">
          <v-responsive :aspect-ratio="16/9"   >
        <v-img
        src="images/map-story.jpg"
        
        alt="test"
        class="grey lighten-2"
      ></v-img>
      </v-responsive>
        </div>
        
          </div>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <div style="border: 2px dashed #66BB6A; padding: 2.5px; border-radius: 50%;" class="ma-1"  :elevation="hover ? 16 : 2"
          >
         <v-avatar
        color="brown"
        size="53"
        v-bind="attrs"
          v-on="on"
       

      ><v-img src="images/design.jpg"></v-img></v-avatar>
      
       </div>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="brown"
        >
          <v-btn
            icon
            dark
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Design Sprint</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            
          </v-toolbar-items>
        </v-toolbar>
        <div class="d-flex justify-center ">

        <div class="story">
        <v-responsive :aspect-ratio="16/9"   >
        <v-img
        src="images/design-story.jpg"
        
        alt="test"
        class="grey lighten-2"
      ></v-img>
      </v-responsive>
        </div>
          </div>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <div style="border: 2px dashed #66BB6A; padding: 2.5px; border-radius: 50%;" class="ma-1"  :elevation="hover ? 16 : 2"
          >
         <v-avatar
        color="red darken-4"
        size="53"
        v-bind="attrs"
          v-on="on"
       

      ><v-img src="images/zapier.jpg"></v-img></v-avatar>
      
       </div>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="red darken-4"
        >
          <v-btn
            icon
            dark
            @click="dialog3 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Zapier</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            
          </v-toolbar-items>
        </v-toolbar>
        <div class="d-flex justify-center ">

        <div class="story">
        <v-responsive :aspect-ratio="16/9"   >
        <v-img
        src="images/Zapier_story.jpg"
        
        alt="test"
        class="grey lighten-2"
      ></v-img>
      </v-responsive>
        </div>
          </div>
      </v-card>
    </v-dialog>
       
        
      
       
       
   

     </v-app-bar>

     
      
   

    <v-main>
     
      
      <VueScrollProgress></VueScrollProgress>
      
     
      <v-container>
        <Presentation />
        <div class="d-flex justify-center">
  <div class="col-md-8 col-sm-10">
         <br>
        <br>
        <v-divider></v-divider>
        <CultureNumerique />
        <br>
        <br>
        <v-divider></v-divider>
        
        <OpenStreetMap />
        <br>
        <br>
        <v-divider></v-divider>
        <DesignSprint  />
        
         <br>
         <br>
         <v-divider></v-divider>
         
        <Zapier />
        </div>
  </div>

      </v-container>
      
    </v-main>
    <scrollactive v-on:itemchanged="onItemChanged" :offset="0">
      <div class="mobile">
        <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    
    fixed
    
    
  >
  
  

    <v-btn href="#presentation" class="scrollactive-item mobilenone">
      

      <v-icon>mdi-presentation</v-icon>
    </v-btn>
    <v-btn href="#CultureNumerique" class="scrollactive-item">
      

      <v-icon>mdi-lightbulb-on</v-icon>
    </v-btn>

    <v-btn href="#OpenStreetMap" class="scrollactive-item">
      

      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn href="#DesignSprint" class="scrollactive-item"> 
      

      <v-icon>mdi-brush</v-icon>
    </v-btn>

    <v-btn href="#Zapier" class="scrollactive-item">
      

      <v-icon>mdi-clipboard-list-outline</v-icon>
    </v-btn>
    
  </v-bottom-navigation>
      </div>
     
  <div class="medium">
    <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
    fixed
    
    
  >
  
  

    <v-btn href="#presentation" class="scrollactive-item mobilenone">
      <span >Présentation </span>

      <v-icon>mdi-presentation</v-icon>
    </v-btn>
    <v-btn href="#CultureNumerique" class="scrollactive-item">
      <span >Culture Numerique</span>

      <v-icon>mdi-lightbulb-on</v-icon>
    </v-btn>

    <v-btn href="#OpenStreetMap" class="scrollactive-item">
      <span >OpenStreetMap </span>

      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn href="#DesignSprint" class="scrollactive-item"> 
      <span >DesignSprint</span>

      <v-icon>mdi-brush</v-icon>
    </v-btn>

    <v-btn href="#Zapier" class="scrollactive-item">
      <span >Zapier</span>

      <v-icon>mdi-clipboard-list-outline</v-icon>
    </v-btn>
    
  </v-bottom-navigation>
  </div>
   
  <div class="large">
     <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    horizontal
    fixed
    
    
    
  >
  
  

    <v-btn href="#presentation" class="scrollactive-item mobilenone">
      <span >Présentation </span>

      <v-icon>mdi-presentation</v-icon>
    </v-btn>
    <v-btn href="#CultureNumerique" class="scrollactive-item">
      <span >Culture Numerique</span>

      <v-icon>mdi-lightbulb-on</v-icon>
    </v-btn>

    <v-btn href="#OpenStreetMap" class="scrollactive-item">
      <span >OpenStreetMap </span>

      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn href="#DesignSprint" class="scrollactive-item"> 
      <span >DesignSprint</span>

      <v-icon>mdi-brush</v-icon>
    </v-btn>

    <v-btn href="#Zapier" class="scrollactive-item">
      <span >Zapier</span>

      <v-icon>mdi-clipboard-list-outline</v-icon>
    </v-btn>
    
  </v-bottom-navigation> 
  </div>
    
  </scrollactive>
    
  
  </v-app>
</template>

<script>
import Zapier from './components/Zapier';

import OpenStreetMap from './components/OpenStreetMap.vue';

import DesignSprint from './components/DesignSprint.vue';
import Presentation from './components/Presentation.vue';
import CultureNumerique from './components/CultureNumerique.vue';

import Cookies from "js-cookie";

export default {
  name: 'App',

  components: {
    Zapier,
    OpenStreetMap,
    DesignSprint,
    Presentation,
    CultureNumerique,
  },
  data() {
    return {
      drawer: null,
      isIntersecting: false,
      isPresentation: false,
      value: 0,
      deferredPrompt: null,
      
      dialog: false,
      dialog2: false,
      dialog3: false,
      
      
      
    };
  },
   computed: {
     
      color () {
        switch (this.value) {
          case 0: return 'primary'
          case 1: return 'purple darken-3'
          case 2: return 'teal'
          case 3: return 'brown'
          case 4: return 'red darken-4'
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
    onItemChanged(event, currentItem, lastActiveItem) {
      
      currentItem = currentItem.hash.substring(1);
   
    if (currentItem == 'presentation') {
      this.value = 0;
    }
    if (currentItem == 'CultureNumerique') {
      this.value = 1;
    }
    if (currentItem == 'OpenStreetMap') {
      this.value = 2;
    }
     if (currentItem == 'DesignSprint') {
      this.value = 3;
    }
    if (currentItem == 'Zapier') {
      this.value = 4;
    }
    
  },
  

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
          this.value = 2
        }
      },
    onIntersect (entries, observer) {
        this.isIntersecting = entries[0].isIntersecting >= 0.5
        var inter = this.isIntersecting
        if (inter == true) {
          this.value = 3
          
        }
        
        
        
      },
      

      
    
    


  }
  
};
</script>
