export default {
    
    name: 'home',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/home/layouts/HomeLayout.vue'),
    children: [
        {
            path: '',
            name: 'welcome',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/home/views/Welcome.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/home/views/About.vue'),
        }
    ]
}