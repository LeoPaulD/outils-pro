<template>
  <v-parallax
    height="900"
    
    src="https://picsum.photos/3000/3000"
  >
  <v-card
  
  height="900"
  class="col-lg-8 presentation">
  
  <!-- <div class="d-flex flex-center">
      
      <div class="col-lg-10 d-flex">
          <v-responsive :aspect-ratio="9/14" max-width="250px">
           <img src="https://picsum.photos/250/400" alt="">
          </v-responsive>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos corrupti ab voluptatem fuga tenetur rem dolore, quis, praesentium id sequi doloremque ipsa itaque a, nostrum ullam iusto iste! Culpa</p>
      </div>
  </div> -->

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

  </v-card>

  </v-parallax>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'OpenStreetMap', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>