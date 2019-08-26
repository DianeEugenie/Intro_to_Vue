import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [{name: "Dishes", priority: "high"},
      {name: "Washing", priority: "low"},
      {name: "Feeding the doggos", priority: "high"}],
      newTodo: "",
      newPriority: ""
    },
    methods: {
      saveNewTodo: function() {
          const todoToAdd = {name: this.newTodo, priority: this.newPriority};
          this.todos.push(todoToAdd);
          this.newTodo = "";
      }
    }
  });
});


// methods: {
//   saveNewItem: function() {
//     if (this.newItem !== "") {
//     const itemToAdd = {name: this.newItem, purchased: false};
//     this.items.push(itemToAdd);
//     this.newItem = "";
//     };
//   },
//   buyItem: function(index) {
//     this.items[index].purchased = true;
//   }
// }
// });
// });
