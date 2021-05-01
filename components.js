const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const User = {
    props: ['id'],
    template: '<div>User {{ id }}. <a href="#" @click="sayHi">Say Hi ^^;</a><div>{{ data }}</div><button @click="data.count--">Decrease</button></div>',
    created: function() {
        console.log('User component created!!', this.id);
    },
    methods: {
        sayHi: function() {
            this.$set(data.obj, 'c', 'Cherry!');
        }
    }
};
const NotFoundComponent = { template: '<div>Not found</div>' };
