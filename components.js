
// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
};
const NotFoundComponent = { template: '<div>Not found</div>' };
