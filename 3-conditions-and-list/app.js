const app = Vue.createApp({
  data() {
    return { 
      inputEnteredValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputEnteredValue);
      this.inputEnteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
