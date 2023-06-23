<template>
    <div class="relative max-w-card rounded-lg pt-5 pb-4 shadow-card font-fira text-xl" @click="$emit('open', card.article)">
        <a class="absolute bg-heart w-5 h-5 bg-no-repeat bg-center right-3" @click="$emit('add', card.article)"></a>
        <img :src="card.link" alt="img">
        <p class="text-center pt-1 font-extra pr-4">{{ card.name }}</p>
        <p class="text-center pr-20">{{ card.cost }} ₽</p>
    </div>
</template>
<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        }
    },
    emits: ["add", "open"]
}
</script>
<style scoped>

</style>