import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import router from "../router";
export const useTrade = defineStore("trade",() => {{
    const transitions = reactive([
        {info: null, title: 'Каталог', id: 1,},
        {info: null, title: 'О нас', id: 2},
        {info: null, title: 'Скидки', id: 3},
    ])
    function scrollTo(num) {
        router.push({path: '/'})
        if(transitions[num-1].info){
            transitions[num-1].info.scrollIntoView({ behavior: 'smooth' })
        }
        else {
            setTimeout(()=>{
                transitions[num-1].info.scrollIntoView({ behavior: 'smooth' })
            }, 400)
        }
    }
    return {transitions,scrollTo}
}})