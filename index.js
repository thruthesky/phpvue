function domRemove(id) {
    document.getElementById(id).outerHTML = "";
}
/**
 * Vue 앱을 생성하고, root instance 를 `#app` 으로 mount 한다. 이 때, router 를 inject 한다.
 * @type {Vue}
 */
const app = new Vue({
    el: '#app',
    router: router,

    created: function () {
        domRemove('seo');
    },

    methods: {
        aTag: function (event) {
            event.preventDefault();
            console.log('aTag', event.target.href);
            var uri = event.target.href.split('//')[1];
            var uris = uri.split('/');
            uris.shift();
            var url = '/' + uris.join('/');
            console.log('url: ', url);
            this.$router.push(url);
        }
    }
});

