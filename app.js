const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      console.log('running again');
      if (this.name === '') {
        return '';
      }

      return this.name + ' ' + 'Doe';
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    },    
  }
});

app.mount('#events');
