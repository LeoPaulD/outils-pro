<template>

   <v-container id="OpenStreetMap" >
     <br>
     <br>
    <h1 class="text-center teal--text" >Premiers pas avec OpenStreetMap.</h1>
    <br>
    <div class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le mardi 6 octobre, Armelle Gillard nous a formé à l'outil OpenStreetMap et surtout elle nous a appris les bonnes pratiques pour devenir contributeur à cette banque de données ouverte. On a appris à délimiter une zone à cartographier, à analyser sur le terrain et pour finir à enrichir OpenStreetMap de nos observations.</p>
         <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >
    
        <v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" href="https://www.linkedin.com/in/armelle-gilliard/" target="_blank"
    class="mx-auto col-lg-6"
    color="teal"
    dark
    
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-linkedin
      </v-icon>
      <span class="title ">Linkedin</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Armelle Gilliard a plus de 20 ans d’expérience dans le domaine du numérique, est aujourd’hui experte en open data et maître d’œuvre en projets innovants.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE8YFwG_su2rQ/profile-displayphoto-shrink_800_800/0/1516297289002?e=1615420800&v=beta&t=pZd_td-ut7fRn26d3yEiX4-rAp0U92wnp_ml0ccRqYc"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Armelle Gilliard</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-hover>
  <div class="col-12"></div>
        <h3 class="col-lg-6 text-left teal--text">Qu'est que l'outil collaboratif OpenStreetMap&nbsp;?</h3>
        <p class="col-lg-6">OpenStreetMap (OSM) est un projet de cartographie qui a pour but de constituer une base de données géographiques libre du monde en utilisant le système GPS et d'autres données libres. Par l'utilisation de moyens informatiques basés sur Internet qui permettent l'intervention et la collaboration de tout utilisateur volontaire, OpenStreetMap relève de la géomatique 2.0 et est aussi une contribution à ce qui est appelé la néogéographie, dont les outils composent le GeoWeb</p>
    </div>
    <br>
    <div class="d-flex justify-center ">
       
    <v-carousel  class="mobilenone">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3 grey lighten-1 rounded-xl pa-4">
            {{ item.title }} 
          </div>
        </v-row>
         
       
      
        </v-carousel-item>
    </v-carousel>
    </div>
    <br>
    <iframe class="mobilenone" width="100%" height="600px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/enrichir-open-street-map_530122?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            title: "Découpage de 6 zones",
            src: 'images/field_papers.png',
          },
          {
            title: "Zone A1",  
            src: 'images/A1.png',
          },
          {
            title: "Zone A2",  
            src: 'images/A2.png',
          },
          {
            title: "Zone A3",  
            src: 'images/A3.png',
          },
          {
            title: "Zone B1",  
            src: 'images/B1.png',
          },
          {
            title: "Zone B2",  
            src: 'images/B2.png',
          },
          {
            title: "Zone B3",  
            src: 'images/B3.png',
          },
        ],
        
      }
    },
  }
</script>