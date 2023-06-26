<template>
    <div class="flex gap-4 justify-center mt-24">
        <button id="coll-btn" @click="()=>sendPage(value)" :disabled="value-1 == catal.page" class="w-4 disabled: h-4 disabled:bg-main-black cursor-pointer bg-white border border-black rounded-full" v-for="value,page in catal.products.length" :key="page">
        </button>
    </div>

</template>
<script setup>
import { useCatal } from '@/stores/catal'
const catal = useCatal()
const  sendPage = (page) =>{
    catal.page = page-1
}
</script>
<style scoped>
</style>