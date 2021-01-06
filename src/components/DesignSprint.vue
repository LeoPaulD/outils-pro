<template>


  <div id="DesignSprint">
    <br>
    <br>
  <h1 class="text-center">Innover en utilisant le Design Sprint.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda blanditiis cupiditate officia magnam vel! Non ut aliquid dolores quae distinctio praesentium cupiditate est vel minima eum impedit, et beatae.</p>
         <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >
        <v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" href="https://www.linkedin.com/in/camille-de-amorin-bonneau-750b1333/" target="_blank"
    class="mx-auto col-lg-6"
    color="brown"
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
      Camille DE AMORIN BONNEAU accompagne le développement des entreprises pour le développement des compétences marketing.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C5603AQEd8YXncJX0eQ/profile-displayphoto-shrink_800_800/0/1516547071070?e=1615420800&v=beta&t=REBGE8Hr9zRVka5mHPchn4_Ab89Vd1QjlX3EvWWXSA4"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Camille <br> DE AMORIN BONNEAU</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-hover>
    </v-container>
  <br>
  <v-stepper v-intersect="onIntersect" v-model="e1" >
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Problématique : Jour 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Solutions : Jour 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
        :complete="e1 > 3"
        step="3"
      >
        Prendre des décisions : Jour 3
      </v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step 
        :complete="e1 > 4"
        step="4"
       >
        Prototyper - Jour 4
      </v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step 
        
        step="5"
        >

        Présenter : Jour 5
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-div class="d-flex justify-center flex-wrap">

          <h2 class="col-12 text-center">Problématique : Jour 1</h2>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7zOBMxRYJ7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>

          <div class="col-10">
            <ul>
              <li>Objectifs : transmettre la connaissance métier à toute l’équipe et définir la problématique à solutionner</li>
              <li>Ateliers : présentations par les experts métier, sessions de questions / réponses, rédaction de la user journey typique du persona avec lequel nous allons travailler</li>
            </ul>
          </div>
          
        </v-div>
        
        <br>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
       

        
      </v-stepper-content>

      <v-stepper-content step="2">
        <div class="d-flex justify-center">
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_ITJ5lAXQhg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>

        
        </div>
       
        <br>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="3">
        <div class="d-flex justify-center">
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7BKBFOOKbNo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
       
        </div>
        <br>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>
      <v-stepper-content step="4">
        <div class="d-flex justify-center">
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IGcwFV76t7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
        </div>
       
        <br>
        <v-btn
          color="primary"
          @click="e1 = 5"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>
      <v-stepper-content step="5">
        <div class="d-flex justify-center">
          
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jQmBuKN10VY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
        
        </div>
        
        <br>
        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>
    </v-stepper-items>
    
  </v-stepper>
  
  
  </div>
 
</template>
<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>