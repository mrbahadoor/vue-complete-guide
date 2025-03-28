const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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
    }
  }
});

app.mount('#events');
