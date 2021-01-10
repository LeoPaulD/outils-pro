<template>
 
  

   <div  >
      
      <v-row dense>
        <v-col class="d-flex justify-space-between  flex-wrap col-12">
          <h1 class="col-md-6 text-center primary--text">Conférences, outils et applications</h1>
          
          <div class="d-flex justify-center col-md-6">
            <p class=" d-flex align-center" >
           Au premier semestre des masters Humanités numériques de l’Université Bordeaux-Montaigne, des intervenants nous ont présenté et formé à différents outils et applications. Sur cette plateforme je vais vous présenter ces différents outils succinctement.  </p>
          </div>
          
        </v-col>
        
        <scrollactive
          v-for="card in cards"
          :key="card.title"
          class="col-md-6 col-lg-6"
          
        >
        <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >

       
          <v-card  :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" :href="card.link" class="scrollactive-item">
            <v-img
              :src="card.src"
              
              
              
              class="white--text align-end menu-presentation"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              
              
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            
          </v-card>
           </v-hover>
        </scrollactive>
        
      </v-row>
      
    </div>


 

  
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Culture Numérique', src: 'images/numerique.jpg', link: '#CultureNumerique',flex: 3 },
        { title: 'OpenStreetMap', src: 'images/map.jpg', link: '#OpenStreetMap',flex: 3 },
        { title: 'DesignSprint', src: 'images/design.jpg', link: '#DesignSprint', flex: 3 },
        { title: 'Zapier', src: 'images/zapier.jpg', link: '#Zapier', flex: 3 },
      ],
    }),
  }
</script>