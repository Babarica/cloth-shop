<template>
    <a @click="()=>scrollToTop()" :class="{'visible': top}" class="fixed opacity-0 after:content-arrow-top after:absolute max-lg:hidden after:top-32 after:w-4 after:left-12 transition delay-300 ease-out cursor-pointer left-0 z-20 w-40 top-0 h-full hover:bg-top-pink "></a>

</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
 const top = ref(false)
 let num = ref(0)
    onMounted(()=>{
      window.addEventListener('scroll', toTop);
    })
    function toTop(){
      if(window.scrollY>num || num < 50){
            num = window.scrollY
            top.value = false
      }else{
          top.value = true
          num = window.scrollY
      }
    }
    function scrollToTop(){
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }
    onUnmounted(()=>{
      window.removeEventListener('scroll', toTop)
    })
</script>
<style scoped>
 .visible {
    opacity: 1;
  }
</style>