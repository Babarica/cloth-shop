import { defineStore } from 'pinia'

export const useBusket = defineStore('busket', {
  state: () => ({
    items: []
  }),
  actions: {
    addCard(article){
        this.items.push({article, cnt: 1})
    },
    removeCard(article){
        this.items = this.items.filter( item => item.article != article)
        console.log(this.items)
    }
  },
  getters: {
    hasItem: (state) => id => state.items.some(item => item.article == id),
    length: (state) => state.items.length
  }

})
