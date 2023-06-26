<template>
  <nav
    :class="{ scrolled: !atTopOfPage }"
    class="animate fixed transition m-auto w-full z-50 bg-white top-0 pr-2 pl-2 pt-5 pb-5"
  >
    <u-container>
      <div class="flex-wrap flex items-center justify-between">
        <router-link
          @click="$scrollToTop"
          class="font-fira text-black text-2xl uppercase font-bold leading-none"
          to="/"
          >Fallen in depression</router-link
        >
        <div class="flex gap-8 items-center max-md:mt-4">
          <div class="flex gap-8 font-rubik">
            <a
              class="font-medium text-xl cursor-pointer"
              @click="trader.scrollTo(trans.id)"
              v-for="trans in trader.transitions"
              :key="trans.id"
            >
              {{ trans.title }}
            </a>
          </div>
          <div class="flex gap-8 font-rubik ml-16 max-lg:ml-0">
            <router-link
              class="bg-cover relative bg-center w-6 h-6 bg-no-repeat"
              :class="route.image"
              v-for="route in routes"
              :key="route.id"
              :to="{ name: route.route }"
            >
              <a
                class="absolute top-4 bg-main-pink left-3 text-white w-6 text-center rounded-full"
                :class="[route.route !== 'busket' ? 'hidden' : 'block']"
                >{{ busket.length }}</a
              >
            </router-link>
          </div>
        </div>
      </div>
    </u-container>
  </nav>
</template>
<script setup>
import uContainer from './UI/uContainer.vue'
import { useTrade } from '@/stores/trader'
import { useBusket } from '@/stores/busket'
import { onMounted, onUnmounted, computed } from 'vue'
import { ref } from 'vue'
const trader = useTrade()
const busket = useBusket()
const props = defineProps({
  routes: {
    type: Array,
    default: {}
  }
})
let atTopOfPage = ref(true)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
function handleScroll() {
  if (window.scrollY > 0) {
    if (atTopOfPage.value) atTopOfPage.value = false
  } else {
    if (!atTopOfPage.value) atTopOfPage.value = true
  }
}
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
nav.scrolled {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  border-bottom: 0px;
}
</style>
