<template>
    <div :class="[active ? 'shadow-pink' : 'shadow-card']" class="relative max-w-card rounded-lg pt-5 pb-4 transition-all font-fira text-xl" @click="$emit('open', card.article)">
        <a :class="[active ? 'bg-Pheart' : 'bg-heart']" class="absolute cursor-pointer w-6 h-5 bg-no-repeat bg-center right-3" @click="addCard(card.article)"></a>
        <img :src="card.link" alt="img">
        <p class="text-center pt-1 font-extra pr-4">{{ card.name }}</p>
        <p class="text-center pr-20">{{ card.cost }} ₽</p>
    </div>
</template>
<script>
    import { useBusket } from '@/stores/busket'
export default {
    setup(){
        const busket = useBusket()
        return { busket }
    },
    data(){
        return {
            active: false
        }
    },
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addCard(article){
            this.$emit('add', article)
            this.active = this.busket.hasItem(this.card.article)
        }
    },
    mounted(){
        this.active = this.busket.hasItem(this.card.article)
    },
    emits: ["add", "open"]
}
</script>
<style scoped>

</style>