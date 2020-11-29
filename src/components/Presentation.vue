<template>
 
  

   <v-container fluid>
    
      <v-row dense>
        <v-col class="d-flex flex-column justify-space-around align-center">
          <h1 class="align-end ">Conférence, outils et monde professionnel</h1>
          <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque magni accusamus sapiente molestiae porro doloribus assumenda, nam explicabo, hic deserunt dicta quisquam ratione, dolorem excepturi itaque asperiores quidem necessitatibus ipsa!</p>
        </v-col>
        <v-col
          v-for="card in cards"
          :key="card.title"
          class="col-md-6 col-lg-6"
          
        >
          <v-card >
            <v-img
              :src="card.src"
              
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


 

  
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'OpenStreetMap', src: 'images/map.jpg', flex: 6 },
        { title: 'DesignSprint', src: 'images/design.jpg', flex: 6 },
        { title: 'Zapier', src: 'images/zapier.jpg', flex: 6 },
      ],
    }),
  }
</script>