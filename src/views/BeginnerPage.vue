<template>
  <div class="biginner-home">
    <app-header header-mode=1></app-header>
    <v-container class="container_main">
      <v-row>
        <v-col cols="8">
          <div class="wrap_video">
            <youtube
            :video-id="videoId"
            fitParent
            resize
            ref="youtube"
            ></youtube>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="side-bar_right">
            <v-list>
              <v-list-item
              v-for="item in listItems"
              :key="item.id"
              v-on:click="changeVideo(item.id)"
              >
                <div>{{item.title}}</div>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LinkItem } from './Home.vue';
import AppHeader from '@/components/AppHeader.vue';

@Component({
  components: {
    AppHeader,
  },
})

export default class BeginnerPage extends Vue{
  public listItems: LinkItem[] = [
    {id: 'Zgl5eqTiiE4', title: 'Ambitious Card'},
    {id: 'juLBZBL2Pl0', title: 'Elevator Card'},
    {id: 'k7nJk8L22CE', title: 'Triumph'},
    {id: 'sm9OBPvUHvE', title: 'Oil & Water'},
    {id: 'QJv44-Ghj_Y', title: '3 Card Monte'},
  ];
  public videoId: string = 'Zgl5eqTiiE4';

  public changeVideo(id: string) {
    this.videoId = id;
  }
};
</script>

<style scoped>

</style>