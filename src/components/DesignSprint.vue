<template>


  <div id="DesignSprint">
    <br>
    <br>
  <h1 class="text-center brown--text">Innover en utilisant le Design Sprint.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le mercredi 14 octobre, Camille DE AMORIN BONNEAU nous a appris les grands principes de la méthode de création Design Sprint sous forme d'ateliers pratiques. Nous avons réalisé les 5 étapes du Design Sprint en version accéléré car nous l'avons realisé en une journée au lieu de 5.</p>
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
  <div class="col-12"></div>
        <h3 class="col-lg-6 text-left brown--text">Qu'est que ce processus de création appelé Design Sprint&nbsp;?</h3>
        <p class="col-lg-6">Le Design Sprint est un processus de création conçue pour les start-ups et les grandes entreprises. L’idée novatrice du Design Sprint est d’imposer une contrainte temporelle, 5 jours. Il permet d'obtenir un premier prototype d’un produit et les retours d’expérience des utilisateurs. Pour y parvenir, cette méthode mélange différentes techniques d’idéation, de stratégie business, et de conception centrée sur l’utilisateur.</p>
    </v-container>
  <br>
  <v-stepper v-intersect="onIntersect" v-model="e1"  color="purple">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        color="brown"
      >
        Problématique : Jour 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        color="brown"
      >
        Solutions : Jour 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
        :complete="e1 > 3"
        step="3"
        color="brown"
      >
        Prendre des décisions : Jour 3
      </v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step 
        :complete="e1 > 4"
        step="4"
        color="brown"
       >
        Prototyper - Jour 4
      </v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step 
        color="brown"
        step="5"
        
        >

        Présenter : Jour 5
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" style="height: 800px; overflow:scroll">
        <v-div class="d-flex justify-center flex-wrap">

          
          <p class="col-lg-11 text-center">
            Le jour 1 est consacré à la compréhension du problème et aux choix d’une cible pour notre sprint.
          </p>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7zOBMxRYJ7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
          
          <div class="col-lg-11">
            <br>
            <ul>
              <li>Objectifs : transmettre la connaissance métier à toute l’équipe et définir la problématique à solutionner</li>
              <li>Ateliers : présentations par les experts métier, sessions de questions / réponses, rédaction de la user journey typique du persona avec lequel nous allons travailler</li>
            </ul>
          </div>
          
        </v-div>
        
        <br>
        <v-btn
          color="brown"
          @click="e1 = 2"
          dark
          
        >
          Continue
        </v-btn>
       

        
      </v-stepper-content>

      <v-stepper-content step="2" style="height: 800px; overflow:scroll">
        <div class="d-flex justify-center flex-wrap" >
          
          <p class="col-lg-10 text-center">
            Le jour 2, permet de trouver et dessiner des solutions à notre problèmatique.
          </p>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_ITJ5lAXQhg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
          <div class="col-lg-11">
            <br>
            <ul>
              <li>Objectif : ouvrir le plus de portes possibles, designer le plus grand nombre de solutions possibles sans se fixer de limites</li>
              <li>Ateliers : 5 why’s, ideas wall, needs / wants / desires, crazy 8, one big idea</li>
            </ul>
          </div>
        
        </div>
       
        <br>
        <v-btn
          color="brown"
          @click="e1 = 3"
          dark
        >
          Continue
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="3" style="height: 800px; overflow:scroll">
        <div class="d-flex justify-center flex-wrap">
          
          <p class="col-lg-10 text-center">
            Le jour 3, on sélectionne les dessins et solutions les plus pertinantes par rapport à notre problèmatique.
          </p>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7BKBFOOKbNo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
          <div class="col-lg-11">
            <br>
            <ul>
              <li>Objectif : se mettre d’accord sur la / les solutions les plus pertinentes afin de répondre à la problématique posée le premier jour</li>
              <li>Ateliers : zen voting, storyboard, premier tweet</li>
            </ul>
          </div>
        </div>
        <br>
        <v-btn
          color="brown"
          @click="e1 = 4"
          dark
        >
          Continue
        </v-btn>

        
      </v-stepper-content>
      <v-stepper-content step="4" style="height: 800px; overflow:scroll">
        <div class="d-flex justify-center flex-wrap">
          
          <p class="col-lg-10 text-center">
            Le jour 4, on construit le prototype de la solution, une preuve de concept suffisament réaliste.
          </p>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IGcwFV76t7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
        </div>
       <div class="col-lg-11">
            <br>
            <ul>
              <li>Objectif : construire le prototype que nous présenterons aux utilisateurs</li>
              <li>Atelier : prototypage (réalisé essentiellement par les designers, avec les commentaires régulier des autres membres de l’équipe)</li>
            </ul>
          </div>
        <br>
        <v-btn
          color="brown"
          @click="e1 = 5"
          dark
        >
          Continue
        </v-btn>

        
      </v-stepper-content>
      <v-stepper-content step="5" style="height: 800px; overflow:scroll">
        <div class="d-flex justify-center flex-wrap">
          
          <p class="col-lg-10 text-center">
            Le jour 5 est consacré au recueille des impressions des utilisateurs.
          </p>
          <br>
          <v-responsive :aspect-ratio="16/9" max-width="800px">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jQmBuKN10VY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
          </v-responsive>
        <div class="col-lg-11 ">
            <br>
            <ul>
              <li>Objectifs : recueillir le retour des utilisateurs, valider / invalider notre solution, puis prendre une décision sur la suite à y donner</li>
              <li>Ateliers : user tests en personne, débriefing des tests</li>
            </ul>
          </div>
        </div>
        
        <br>
        <v-btn
          color="brown"
          @click="e1 = 1"
          dark
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