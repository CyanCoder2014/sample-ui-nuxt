<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 ">
        <div class="p-5 m-5 d-flex justify-center">
          <VuetifyLogo />
        </div>
      </v-card>
      <v-card class="py-5 text-center">
        <h1 class="headline">
          Sample UI project (Nuxt.js + Vuetify)
        </h1>
        <v-card-text>
          <p>Cluster User tasks by to-do state</p>
          <p><small>Developed by Farid (ms) Maghsoud</small></p>
          <ChartDemo/>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="secondary"
            nuxt
            to="/report"
          >
            Show Report
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
