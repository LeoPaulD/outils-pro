<template>
<div id="Zapier">
  <br>
  <br>
  <h1 class="text-center" style="color: #B71C1C">Automatiser facilement des taches avec Zapier.</h1>
  <br>
  <v-container class="d-flex justify-space-around flex-wrap">
        <p class="col-lg-6">Le lundi 2 novembre, Bertrand Bussac nous a informé sur les termes liés au developpement web. Puis il nous a formé sur l'outil Zapier pour automatiser très facilement des taches. Il nous a montré comment lier des applications afin d'automatiser des taches redondandes dans notre quotidien professionel. </p>
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
  
        <h3 class="col-lg-6 "  style="color: #B71C1C">Qu'est que cette outil d'automatisation appelé Zapier&nbsp;?</h3>
        <p class="col-lg-6">Zapier est un service web qui vous permet d’automatiser des actions en connectant les différentes applications que vous utilisez au quotidien. Il existe plus de 1500 applications que vous pouvez utiliser avec Zapier. Parmi les plus courantes se retrouvent : Facebook, Twitter, Gmail, WordPress, Google Drive, Trello, Google Agenda, Linkedin, Slack et bien d’autres encore</p>
        <div class="col-12"></div>
        <p class="col-lg-6 " >Pendant cette formation, Bertrand Bussac nous a exposé la problèmatique qu'il rencontré dans son école le Wagon lors des inscriptions et a répondu a cette problématique par l'exemple en nous formant à Zapier. Sa problématique était comment gérer facilement les demandes d'inscriptions à son école. Pour répondre à cette problématique, il a créé un formulaire sur la plateforme TypeForme, pour que les étudiants puissent s'inscrire. Une fois que l'étudiant a rempli le formulaire, une fiche est créé sur le Trello de Bertrand Bussac. Si les documents demandés sont complet après verification, Bertrand Bussac place la fiche dans la colonne complet et ça déclanche l'envoi d'un mail à l'étudiant pour le notifier que son dossier est complet. Mais si le dossier est incomplet, l'étudiant est notifié que son dossier n'est pas complet. </p>
        <p class="col-lg-6">De mon côté, j'ai utilisé Zapier pour gérer mes invitations à ma webtv. En effet avec mon colocataire, nous avons créé Feu Libre une émission diffusé en direct sur Twitch puis retransmise sur Youtube. A chaque émission nous recevons deux invités. Le message d'invitation à toujours une base commune et quelques variables qui fluctuent. J'ai réfléchi quels sont les éléments fixe de mon message et quels sont les éléments qui changent dans mon message. La présentation de l'emission reste identique ainsi que les formules de politesses. Mais le numéro de l'émission, le théme de l'émission, la date et l'heure de l'émission ainsi que le nom des invités sont des éléments de fluctuasion. Je vous détail donc ma démarche d'automatisation dans la chronologie suivante :   </p>
         
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
  <br>
  <br>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red darken-4',
          icon: 'mdi-form-textbox',
          title: "Création d'un formulaire sur Typeform",
          content: "Je créais un formulaire pour transmettre les informations qui fluctuent dans mes invitations, c'est à dire le numéro de l'émission, le nom/prénom et mail de mes invités, la date et l'heure de l'émission et le thème de l'émission. Une fois mon formulaire rempli des actions se mettent en place."
        },
        {
          color: 'red darken-4',
          icon: 'mdi-email',
          title: "Envoi  des mails d'invitations avec Gmail",
          content: "Un mail est envoyé a mes invités grâce aux adresses mails que j'ai rentré dans mon formulaire avec un message générique d'invitation enrichi des données de mon formulaire."
        },
        {
          color: 'red darken-4',
          icon: 'mdi-trello',
          title: 'Archivage des invitations sur Trello',
          content: "Une fois l'invitation envoyé par mail, le message de l'invitation est archivé sous forme de carte sur Trello pour retrouver facilement le nom de mes invités des anciennes émissions, du numéro de l'émission, des dates ou encore du thème de l'émission. "
        },
        {
          color: 'red darken-4',
          icon: 'mdi-share-variant',
          title: 'Améliorations possibles',
          content: "Le jour de l'émission, quelques heures avant le direct, on pourrait imaginer envoyer une newsletter à une liste de mails, faire un tweet pour informers notre comunauté de la difusion de l'émission ce jour, ainsi que leur donner le lien de diffusion."
        },
        
      ],
    }),
  }
</script>