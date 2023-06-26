<template>
    <div>
          <u-container>
            <s-main class="mt-main-top"></s-main>
          </u-container>
          <s-collec></s-collec>
          <u-container>
            <s-catal></s-catal>
          </u-container>
          <!-- <div ref="about">dada</div>
          <div ref="disc">dada</div> -->
    </div>
  </template>
  <script setup>
    import uContainer from "@/components/UI/uContainer.vue";
    import sMain from "../components/sMain.vue";
    import sCollec from "../components/sCollec.vue";
    import sCatal from "../components/sCatal.vue";
    import { useTrade } from "@/stores/trader"

    import { onMounted, ref } from 'vue'
    const trader = useTrade()  
    
    // const about = ref(null)
    // const disc = ref(null) 
   
    // trader.transitions[1].info = about
    // trader.transitions[2].info = disc
  </script>
  
  