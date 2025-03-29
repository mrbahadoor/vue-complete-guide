const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }    
  },
  computed: {
    fullname() {
      console.log('running again');
      if (this.name === '' || this.fullname === '' ) {
        return '';
      }

      return this.name + ' ' + this.lastName;
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
