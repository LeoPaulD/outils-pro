<template>

   <v-container id="OpenStreetMap" >

    <h1 class="text-center">Premiers pas avec OpenStreeMap</h1>
    <v-container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda blanditiis cupiditate officia magnam vel! Non ut aliquid dolores quae distinctio praesentium cupiditate est vel minima eum impedit, et beatae.</p>
    </v-container>
    <div class="d-flex justify-center">
       
    <v-carousel class="col-sm-10">
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
    <iframe width="100%" height="600px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/enrichir-open-street-map_530122?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
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