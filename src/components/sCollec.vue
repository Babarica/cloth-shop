<template>
  <div class="relative after:absolute before:absolute after:content-circle before:content-bcircle after:left-0 before:right-0 after:-top-40 before:-bottom-80">
    <u-container>
      <div class="mt-col-top flex relative">
        <div>
          <p class="font-rubik font-semibold text-xs text-main-pink mb-8">Последняя коллекция</p>
          <p class="font-rubik font-extrabold text-mega leading-none mb-32">Весна —</p>
          <div v-motion-slide-visible-once-bottom class="relative after:content-boy before:content-boy-sd after:absolute before:absolute before:-top-24 after:-top-20">
            <img :src="img" alt="" />
          </div>
          <p class="max-w-col-text mt-16 mb-16 text-main-gray font-fira text-xs leading-lite">
            В этой коллекции мы использовали только самые актуальные тренды сезона, чтобы создать для
            вас неповторимый образ. Каждая вещь выполнена из высококачественных материалов.
          </p>
          <u-btn
            :style="false"
            :padX="129"
            :padY="15"
            :fs="20"
            :color="false"
            :text="'Заказать'"
            :trans="true"
            @link="
              () => {
                console.log(1)
              }
            "
          ></u-btn>
        </div>
        <div  class="mt-16 ml-20">
            <div class="flex">
                <div v-motion-slide-visible-once-left class="relative after:absolute before:absolute after:content-handsome after:-top-8 before:content-handsome-sd before:-top-8 before:left-6 before:z-10">
                    <img v-motion-slide-visible-once-left :src="imgB" alt="img">
                    <p class="absolute block -top-12 text-main-pink font-rubik font-extrabold text-ultra -left-14">Spring</p>
                    <span  class="after:absolute after:content-handsome after:left-12 after:-top-8 after:z-20"></span>
                </div>
                <div class="relative">
                    <p class="font-rubik text-ultra italic top-80 rotate-90 absolute z-10 font-extrabold">
                        2023
                    </p>
                    <p class="date">
                        2023
                    </p>
                </div>
            </div>
            <p class="font-rubik italic font-black text-2xl text-red-400 max-w-lg mt-24 leading-lite">“Мы делаем стиль, мы делаем движение — это наш способ самовыражения”</p>
        </div>
      </div>
    </u-container>
  </div>
</template>
<script setup>
import uBtn from './UI/uBtn.vue'
import uContainer from './UI/uContainer.vue'
let img = new URL('@/assets/coll/boy_bg.jpg', import.meta.url).href
let imgB = new URL('@/assets/coll/handsome.jpg', import.meta.url).href
</script>
<style scoped>
    .date {
        text-shadow:0px 1px 0 rgb(243,143,143),0px -1px 0 rgb(243,143,143),1px 0px 0 rgb(243,143,143),-1px 0px 0 rgb(243,143,143),1px 1px 0 rgb(243,143,143),1px -1px 0 rgb(243,143,143),-1px 1px 0 rgb(243,143,143),-1px -1px 0 rgb(243,143,143),0px 2px 0 rgb(243,143,143),0px -2px 0 rgb(243,143,143),2px 0px 0 rgb(243,143,143),-2px 0px 0 rgb(243,143,143),2px 2px 0 rgb(243,143,143),2px -2px 0 rgb(243,143,143),-2px 2px 0 rgb(243,143,143),-2px -2px 0 rgb(243,143,143);
        -webkit-text-shadow:0px 1px 0 rgb(243,143,143),0px -1px 0 rgb(243,143,143),1px 0px 0 rgb(243,143,143),-1px 0px 0 rgb(243,143,143),1px 1px 0 rgb(243,143,143),1px -1px 0 rgb(243,143,143),-1px 1px 0 rgb(243,143,143),-1px -1px 0 rgb(243,143,143),0px 2px 0 rgb(243,143,143),0px -2px 0 rgb(243,143,143),2px 0px 0 rgb(243,143,143),-2px 0px 0 rgb(243,143,143),2px 2px 0 rgb(243,143,143),2px -2px 0 rgb(243,143,143),-2px 2px 0 rgb(243,143,143),-2px -2px 0 rgb(243,143,143);
        -moz-text-shadow:0px 1px 0 rgb(243,143,143),0px -1px 0 rgb(243,143,143),1px 0px 0 rgb(243,143,143),-1px 0px 0 rgb(243,143,143),1px 1px 0 rgb(243,143,143),1px -1px 0 rgb(243,143,143),-1px 1px 0 rgb(243,143,143),-1px -1px 0 rgb(243,143,143),0px 2px 0 rgb(243,143,143),0px -2px 0 rgb(243,143,143),2px 0px 0 rgb(243,143,143),-2px 0px 0 rgb(243,143,143),2px 2px 0 rgb(243,143,143),2px -2px 0 rgb(243,143,143),-2px 2px 0 rgb(243,143,143),-2px -2px 0 rgb(243,143,143);
        font-size: 128px;
        color:rgb(255, 255, 255);
        font-family: 'Rubik', sans-serif;
        font-style: italic;
        font-weight: 800;
        display: block;
        position: absolute;
        top: -10px;
        z-index: 1;
        transform: rotate(90deg);
        top: 49%;
        left: 40px;
    }
</style>
