<template>
  <div class="home">
    <v-container class="container_main">
      <v-row>
        <v-col cols="8">
          <div class="wrap_video">
            <youtube
            :video-id="videoId"
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
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface LinkItem {
  id: string;
  title: string;
}
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public listItems: LinkItem[] = [
    {id: 'Zgl5eqTiiE4', title: 'Ambitious Card'},
    {id: 'juLBZBL2Pl0', title: 'Elevator Card'},
  ];
  public videoId: string = 'Zgl5eqTiiE4';

  public changeVideo(id: string) {
    this.videoId = id;
  }
}
</script>

<style scoped>
.container_main{
  padding: 32px auto;
  width: 100%;
  background-color: #eee;
}
.wrap_video{
  background-color: #fff;
  padding: 16px 8px;
}
.side-bar_right{
  background-color: #fff;
  height: 100%;
}
</style>
