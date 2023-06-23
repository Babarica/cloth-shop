<template>
    <div class="flex gap-4 justify-center mt-24">
        <button @click="()=>sendPage(value)" :disabled="false" class="w-4 disable:bg-main-black h-4 disabled:cursor-pointer bg-white border border-black rounded-full" v-for="value,page in catal.products.length" :key="page">
        </button>
    </div>

</template>
<script setup>
import { useCatal } from '@/stores/catal'
const catal = useCatal()
const sendPage = (page, event) =>{
    console.log(event)
    catal.page = page-1
}
</script>
<style scoped>

</style>