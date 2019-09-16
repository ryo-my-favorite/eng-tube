<template>
  <v-app>
    <div id="app">
      <v-app-bar color="deep-purple darken-2" dark>
        <v-toolbar-title>
          <router-link class="link white--text" to="/">
            Super Magic Video
          </router-link>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <router-link class="link white--text" to="/link">Link</router-link>
      </v-app-bar>
      <router-view/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
export default Vue.extend({

});
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.link{
  text-decoration: none;
}

</style>
