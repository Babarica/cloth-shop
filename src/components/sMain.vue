<template>
  <div class="flex justify-between">
    <div class="w-main-block h-main-height-block bg-main-pink rounded-lg relative max-lg:hidden">
      <span class="before:content-link absolute -left-16 rounded-b-lg"></span>
      <span class="after:content-bink absolute left-4 top-6"></span>
    </div>
    <div class="flex flex-col ml-main-left max-lg:ml-0">
      <div class="font-rubik mb-1">
        <p class="text-xm font-light mb-6 leading-tight">
          Для тех кто реально в<br /><span class="burger">Депрессии</span>
        </p>
        <p class="max-w-main-text text-xs leading-lite mb-6 text-main-gray max-lg:max-w-none">
          Наша компания является лидером на рынке продажи футболок высокого качества. Мы предлагаем
          широкий ассортимент моделей различных цветов, дизайнов и материалов. 
        </p>
        <div class="flex gap-10">
          <p class="leading-none text-xs">
            <span class="text-main-pink font-bold">10К+</span><br />Заказов
          </p>
          <p class="leading-none text-xs">2 года<br />работы</p>
          <p class="leading-none text-xs">99% успешных<br />доставок</p>
        </div>
      </div>
      <div
        class="flex content-center justify-center w-main-cirlce h-main-height-cirlce bg-main-paper relative ml-auto mt-8 max-lg:mx-auto"
      >
        <img class="max-h-22.5 transition delay-200 ease-in-out hover:scale-110 cursor-pointer transform-gpu self-center" src="@/assets/main/t-shirt.png" />
        <span class="before:content-style absolute right-2 rounded-b-lg"></span>
        <span
          class="after:content-arrow flex after:self-center transition  cursor-pointer after:mt-2 after:transition after:delay-100 hover:after:scale-125 bg-center justify-center bg-black w-main-small h-main-small br-8 rounded-full absolute bottom-2 right-12"
        ></span>
      </div>
      <a @click="trader.scrollTo(1)" class="text-center mt-auto font-fira ml-52 max-w-main-link uppercase underline cursor-pointer max-lg:mx-auto max-lg:mt-10"
        >Перейти в каталог</a
      >
    </div>
  </div>
</template>
<script setup>
import { useTrade } from "@/stores/trader"
const trader = useTrade()  
</script>
<style scoped>
.burger {
  text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0), 1px 0px 0 rgb(0, 0, 0),
    -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 0px 2px 0 rgb(0, 0, 0),
    0px -2px 0 rgb(0, 0, 0), 2px 0px 0 rgb(0, 0, 0), -2px 0px 0 rgb(0, 0, 0), 2px 2px 0 rgb(0, 0, 0),
    2px -2px 0 rgb(0, 0, 0), -2px 2px 0 rgb(0, 0, 0), -2px -2px 0 rgb(0, 0, 0);
  -webkit-text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0), 1px 0px 0 rgb(0, 0, 0),
    -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 0px 2px 0 rgb(0, 0, 0),
    0px -2px 0 rgb(0, 0, 0), 2px 0px 0 rgb(0, 0, 0), -2px 0px 0 rgb(0, 0, 0), 2px 2px 0 rgb(0, 0, 0),
    2px -2px 0 rgb(0, 0, 0), -2px 2px 0 rgb(0, 0, 0), -2px -2px 0 rgb(0, 0, 0);
  -moz-text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0), 1px 0px 0 rgb(0, 0, 0),
    -1px 0px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 0px 2px 0 rgb(0, 0, 0),
    0px -2px 0 rgb(0, 0, 0), 2px 0px 0 rgb(0, 0, 0), -2px 0px 0 rgb(0, 0, 0), 2px 2px 0 rgb(0, 0, 0),
    2px -2px 0 rgb(0, 0, 0), -2px 2px 0 rgb(0, 0, 0), -2px -2px 0 rgb(0, 0, 0);
  font-size: 70px;
  color: rgb(255, 255, 255);
  font-family: Rubik, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
}
</style>
