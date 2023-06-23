<template>
    <sHeader :routes="routes"></sHeader>
    <router-view  v-slot="{ Component, route }">
      <transition name="main" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
    <u-top-btn></u-top-btn>

</template>
<script setup>
import sHeader from '@/components/sHeader.vue';
import uTopBtn from '@/components/UI/uTopBtn.vue';
    const routes = [
        {image: "bg-logo-busket", route: 'busket', id: 1},
        {image: "bg-logo-profile",route: 'profile', id: 2},
    ]
   
</script>
<style scoped>
  .main-enter-active,
  .main-leave-active{
    transition: opacity 0.35s, transform 0.35s;
  }
  .main-enter-from,
  .main-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
 
</style>