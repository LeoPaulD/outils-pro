<template>
    <div id="CultureNumerique">
        <br>
        <br>
        <h1 class="text-center" style="color: #6A1B9A">Culture numérique et évolution d'internet.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le lundi 2 novembre, Bertrand Bussac nous a informé sur les termes liés au developpement web. Puis il nous a formé sur l'outil Zapier pour automatiser très facilement des taches. Il nous a montré comment lier 2 applications afin d'automatiser des taches redondandes dans notre quotidien professionel. </p>
         <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >
        <v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" href="https://www.linkedin.com/in/soufiane-rouissi/" target="_blank"
    class="mx-auto col-lg-6"
    color="#6A1B9A"
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
      Soufiane Rouissi est directeur de l’ISIC de Bordeaux. Il est aussi enseignant chercheur et propose notamment des cours sur les plateformes de formation à distance, ou encore les environnements numériques, outils du Web 2.0 et identité numérique.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C5603AQGf7le27rIkZQ/profile-displayphoto-shrink_800_800/0/1522144397704?e=1615420800&v=beta&t=Rs2zeT-3X5QzgYvHDmf-pDX_9ApAO6Aen4Jj8FuCk9w"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Soufiane Rouissi</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-hover>
  <div class="col-12"></div>
        <h3 class="col-lg-6 text-left" style="color: #6A1B9A">L'évolution d'internet</h3>
        <p class="col-lg-6">Zapier est un service web qui vous permet d’automatiser des actions en connectant les différentes applications que vous utilisez au quotidien. Il existe plus de 1500 applications que vous pouvez utiliser avec Zapier. Parmi les plus courantes se retrouvent : Facebook, Twitter, Gmail, WordPress, Google Drive, Trello, Google Agenda, Linkedin, Slack et bien d’autres encore</p>
    </v-container>
  
  <br>
    </div>
</template>
<script>
export default {
    
}
</script>