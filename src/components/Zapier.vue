<template>
<div id="Zapier">
  <br>
  <br>
  <h1 class="text-center">Automatiser facilement des taches avec Zapier.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le lundi 2 novembre, Bertrand Bussac nous a informé sur les termes liés au developpement web. Puis il nous a formé sur l'outil Zapier pour automatiser très facilement des taches. Il nous a montré comment lier 2 applications afin d'automatiser des taches redondandes dans notre quotidien professionel. </p>
         <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >
        <v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" href="https://www.linkedin.com/in/bertrand-bussac-4185034a/" target="_blank"
    class="mx-auto col-lg-6"
    color="red darken-4"
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
      Bertrand Bussac est président de la formation Wagon à Bordeaux et est vice président de FrenchTech Bordeaux.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFYzWNPtvefYg/profile-displayphoto-shrink_800_800/0/1533216447237?e=1615420800&v=beta&t=Aurc8vc5s20uq4zlQ8vearA7YUhxJlmEAaxZMEPN10Q"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Bertrand Bussac</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-hover>
  <div class="col-12"></div>
        <h2 class="col-lg-6 text-left">Qu'est que cette outil d'automatisation appelé Zapier&nbsp;?</h2>
        <p class="col-lg-6">Zapier est un service web qui vous permet d’automatiser des actions en connectant les différentes applications que vous utilisez au quotidien. Il existe plus de 1500 applications que vous pouvez utiliser avec Zapier. Parmi les plus courantes se retrouvent : Facebook, Twitter, Gmail, WordPress, Google Drive, Trello, Google Agenda, Linkedin, Slack et bien d’autres encore</p>
    </v-container>
  
  <br>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>