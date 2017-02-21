
<<<<<<< HEAD
window._ = require('lodash');
=======
/*window._ = require('lodash');*/
>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

<<<<<<< HEAD
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
=======
/*window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');*/
>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

<<<<<<< HEAD
window.Vue = require('vue');
require('vue-resource');
=======
/*window.Vue = require('vue');
require('vue-resource');*/
>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

<<<<<<< HEAD
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});
=======
/*Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});*/
>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
