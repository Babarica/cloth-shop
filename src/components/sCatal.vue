<template>
    <div class="pt-36">
        <p ref="catalog" class="font-rubik text-2xl font-medium mb-10">Каталог</p>
        <div>
            <p class="mb-10">Все фильтры</p>
        </div>
        <div>
            <div class="flex flex-wrap gap-8">
                <u-card v-for="card in catal.productStore[catal.page]" :key="card.article" :card="card"></u-card>
            </div>
            <u-pagination></u-pagination>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { useCatal } from '@/stores/catal'
import uPagination from './UI/uPagination.vue'
import { useTrade } from "@/stores/trader"
import uCard from './UI/uCard.vue';
const trader = useTrade()  
const catal = useCatal()
const catalog = ref(null)
trader.transitions[0].info = catalog
</script>
<style scoped>

</style>