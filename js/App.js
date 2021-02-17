app = Vue.createApp({
  data() {
    return {
      boardState: [[],[],[]],
      currPlayer: 1
    }
  }, 
  methods: {
    incrementTurn() {
      this.currPlayer += 1;
      if(this.currPlayer > 2) {
        this.currPlayer = 3;
      }
    }
  }
})