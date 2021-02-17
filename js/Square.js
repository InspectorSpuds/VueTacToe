app.component('square',{
  props:{
    rowIndex: Number,
    colIndex: Number
  }, 
  template:`
    <td>{{ piece }}</td>
  `, 
  data() {
    return {
      piece: null
    }
  },
  methods: {

  }
});