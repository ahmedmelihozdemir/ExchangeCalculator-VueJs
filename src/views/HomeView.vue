<template>
  <div class="home">
    <MainComponent msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from '@/components/maincomponent/MainComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MainComponent,
  },
});
</script>
