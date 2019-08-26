import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [{name: "Dishes", priority: "high", status: true},
      {name: "Washing", priority: "low", status: false},
      {name: "Feeding the doggos", priority: "high", status: false}],
      newTodo: "",
      newPriority: "high"
    },
    methods: {
      saveNewTodo: function() {
          const todoToAdd = {name: this.newTodo, priority: this.newPriority, status: false};
          this.todos.push(todoToAdd);
          this.newTodo = "";
      },
      doneTodo: function(index) {
        this.todos[index].status = true;
      }
    }
  });
});
