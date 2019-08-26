import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Dishes", "Washing", "Feeding the doggos"],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        if (this.newToDo !== "") {
          this.todos.push(this.newToDo);
          this.newToDo = "";
        };
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
