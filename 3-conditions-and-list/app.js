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
  },
});

app.mount('#user-goals');
