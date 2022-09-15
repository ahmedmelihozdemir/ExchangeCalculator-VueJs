<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import MainComponent from '@/components/shared/MainComponent/MainComponent.vue';


@Component({
  components: {
    HeaderComponent,
    MainComponent,
  },
})
export default class LayoutComponent extends Vue {}
</script>
