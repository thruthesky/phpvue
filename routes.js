
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User, props: true },
    { path: '*', component: NotFoundComponent }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

