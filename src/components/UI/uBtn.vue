<template>
    <button 
    :class="[color ? 'bg-main-pink hover:bg-black' : 'bg-black hover:bg-main-pink', style ? 'italic' : 'non-italic', trans ? 'uppercase' : 'normal-case']"
    :style="{paddingLeft: padX + 'px', paddingRight:padX + 'px', paddingTop: padY + 'px', paddingBottom: padY + 'px', fontSize: fs + 'px'}"
    class="text-white transition delay-75 ease-in-out rounded-lg font-bold leading-none font-fira"
     :disabled="disabled" 
     @click="$emit('link')">
        {{ text }}
    </button>

</template>
<script>
export default {
    props: {
        color: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: 'Нажать'
        },
        trans: {
            type: Boolean,
            default: false
        },
        style: {
            type: Boolean,
            default: false
        },
        fs: {
            type: Number,
            default: 14
        },
        padX: {
            type: Number,
            default: 4
        },
        padY: {
            type: Number,
            default: 4
        }
    },
    emits: ["link"]
}


</script>
<style scoped>

</style>