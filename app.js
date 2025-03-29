const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event, lastname) { //event is a vanilla JS default parameter if code is called without parentheses
      this.name = event.target.value + ' ' + lastname ;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    submitForm() {
      alert('submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
