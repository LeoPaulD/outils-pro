<template>
    <div id="CultureNumerique">
        <br>
        <br>
        <h1 class="text-center" style="color: #6A1B9A">Culture numérique et évolution d'internet.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le lundi 28 septembre et mardi 29,  Soufiane Rouissi nous a fait deux conférences sur la culture numérique, les évolutions d'internet et l'apprentissage en ligne. Ces cours sont essentiel pour notre culture personnelle et pour comprendre les enjeux et l'évolution du numérique. On comprend ainsi mieux l'interet de maitriser les différents outils sur lesquels nous sommes formé durant cette formation.</p>
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
        <h3 class="col-lg-6 text-left" style="color: #6A1B9A">La culture numérique</h3>
        <p class="col-lg-6">La culture numérique désigne l’« ensemble des manières de faire, des manières de penser, des représentations et des significations propres à un groupe, auxquelles participent pleinement les objets matériels » (Millerand, 1999). Elle fait référence aux changements culturels produits par le développement et la diffusion de contenus numériques.</p>
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
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <br>
          <p>{{item.content}}</p>
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
          color: '#6A1B9A',
          icon: 'mdi-web',
          title: "WEB 1.0 | Web statique",
          content: "Le web statique est centrés sur la distribution d’informations. Il se caractérise par des sites orientés produits, qui sollicent peu l’intervention des utilisateurs."
        },
        {
          color: '#6A1B9A',
          icon: 'mdi-account-multiple',
          title: "WEB 2.0 | Web social",
          content: "Le web social privilégie la dimension de partage et d’échange d’informations et de contenus (textes, vidéos, images ou autres). Il voit l’émergence des réseaux sociaux, des smartphones et des blogs. Le web se démocratise et se dynamise"
        },
        {
          color: '#6A1B9A',
          icon: 'mdi-database',
          title: 'WEB 3.0 | Web sémantique',
          content: "Le web sémantique vise à organiser la masse d’informations disponibles en fonction du contexte et des besoins de chaque utilisateur, en tenant compte de sa localisation, de ses préférences, etc. C’est un web qui tente de donner sens aux données. Cest aussi un web plus portable et qui fait de plus en plus le lien entre monde réel et monde virtuel. Il répond aux besoins d’utilisateurs mobiles, toujours connectés à travers une multitude de supports et d’applications malines ou ludiques."
        },
        {
          color: '#6A1B9A',
          icon: 'mdi-server-security',
          title: 'WEB 4.0 | Web intelligent',
          content: "Le web intelligent vise à immerger l’individu dans un environnement (web) de plus en plus prégnant. Il pousse à son paroxisme la voie de la personnalisation ouverte par le web 3.0 mais il pose par la même occasion de nombreuses questions quant à la protection de la vie privée, au contrôle des données"
        },
        
      ],
    }),
}
</script>