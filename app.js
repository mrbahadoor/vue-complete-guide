const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Interpolation',
            courseGoalA: 'Finish the course and learn vue!',
            courseGoalB: '<u>Master vue and build amazing apps!</u>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');