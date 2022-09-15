<template>
  <div class="home">
    <LayoutComponent></LayoutComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutComponent from '@/components/layout/LayoutComponent.vue';

@Component({
  components: {
    LayoutComponent,
  },
})
export default class HomeView extends Vue {}
</script>
