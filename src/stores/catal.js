import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCatal = defineStore('catal',()=> {{
    const products = ref([
        [
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Bravo', data: '19.06.2023', color: 'black', size: 'L', compound: 'Хлопок', collection: 'Spring', cost: 3500, article: 1},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Spring', data: '20.06.2023', color: 'white', size: 'M', compound: 'Хлопок', collection: 'Fallen', cost: 2200, article: 2},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Astro', data: '20.06.2023', color: 'pink', size: 'XL', compound: 'Полиэстер', collection: 'Fallen', cost: 1900, article: 3},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Fallen', data: '20.06.2023', color: 'pink', size: 'XXL', compound: 'Хлопок', collection: 'Fallen', cost: 2400, article: 4},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Fallen', data: '20.06.2023', color: 'white', size: 'S', compound: 'Хлопок', collection: 'Fallen', cost: 5000, article: 5},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Astro', data: '20.06.2023', color: 'pink', size: 'XS', compound: 'Нейлон', collection: 'Fallen', cost: 3100, article: 6},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Monstr', data: '20.06.2023', color: 'black', size: 'L', compound: 'Хлопок', collection: 'Fallen', cost: 4600, article: 7},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Spring', data: '20.06.2022', color: 'white', size: 'L', compound: 'Полиэстер', collection: 'Spring', cost: 3500, article: 8},
        ],
        [
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка CaRRo', data: '20.04.2021', color: 'black', size: 'M', compound: 'Хлопок', collection: 'Spring', cost: 3520, article: 9},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Fallen', data: '20.06.2021', color: 'black', size: 'M', compound: 'Хлопок', collection: 'Spring', cost: 3600, article: 10},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Maestro', data: '14.06.2022', color: 'white', size: 'S', compound: 'Хлопок', collection: 'Spring', cost: 1000, article: 11},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Fallen', data: '20.06.2023', color: 'black', size: 'S', compound: 'Полиэстер', collection: 'Fallen', cost: 2300, article: 12},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Spring', data: '21.03.2023', color: 'white', size: 'XL', compound: 'Хлопок', collection: 'Spring', cost: 5000, article: 13},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Fallen', data: '24.02.2022', color: 'pink', size: 'XL', compound: 'Хлопок', collection: 'Spring', cost: 3100, article: 14},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка New York', data: '20.06.2023', color: 'black', size: 'XLL', compound: 'Нейлон', collection: 'Fallen', cost: 2500, article: 15},
          {category: 'Футболка',link: new URL('@/assets/main/t-shirt.png', import.meta.url).href, name: 'Футболка Bravo', data: '20.06.2023', color: 'pink', size: 'S', compound: 'Хлопок', collection: 'Spring', cost: 4900, article: 16},
        ]
      ])
    const productStore = computed(() => products.value)
    const page = ref(0)

  return { products, productStore, page }
}})
