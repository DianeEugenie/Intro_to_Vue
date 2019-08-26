import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Dishes", "Washing", "Feeding the doggos"]
    }
  });
});
