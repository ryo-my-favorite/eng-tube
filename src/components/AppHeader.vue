<template>
    <v-app-bar :color="getColor()" dark>
        <v-toolbar-title>
            <router-link class="link white--text" to="/">
                Be Magician
            </router-link>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-menu>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-app-bar-nav-icon/>
                </v-btn>
            </template>
            <v-list class="list-menu">
                <v-list-item
                v-for="item in menuListItems"
                :key="item.title"
                >
                    <v-list-item-title class="" v-on:click="moveTo( item.path )">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> 
    </v-app-bar>    
</template>

<script lang="ts">
enum ViewMode {
    Classic,
    Beginner,
}
interface ListItem {
    title: string;
    path: string;
}
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
    @Prop( { default: ViewMode.Classic } )
    public headerMode: ViewMode;

    public menuListItems: ListItem[] = [
        {title: 'Classic Mode', path: '/'},
        {title: 'Begginer Mode', path: '/beginner'},
    ];
    public getColor(): string {
        console.log(this.headerMode);
        return this.headerMode === ViewMode.Classic ? 'gray darken-4' : 'green darken-4';
    }
    public moveTo(path: string) {
        this.$router.push(path);
    }
}
</script>

<style scoped>
.list-menu{
    margin-top: 36px;
}
</style>