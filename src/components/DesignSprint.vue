<template>


  
  <v-stepper v-intersect="onIntersect" v-model="e1" id="DesignSprint">
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

          <h1 class="col-10 text-center primary white--text rounded-xl" >Problématique : Jour 1</h1>
          
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