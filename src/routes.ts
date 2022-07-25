import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomePage from "./views/HomePage.vue"
import LoveFlower from "./views/LoveFlower.vue"
import BirthdayFlower from "./views/BirthdayFlower.vue"
import FriendFlower from "./views/FriendFlower.vue"
import WeddingFlower from "./views/WeddingFlower.vue"
import FlowerDetail from "./views/FlowerDetail.vue"
import FlowerPay from "./views/FlowerPay.vue"
import PersonCenter from "./views/PersonCenter.vue"




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/LoveFlower', component: LoveFlower},
        {path: '/BirthdayFlower', component: BirthdayFlower},
        {path: '/FriendFlower', component: FriendFlower},
        {path: '/WeddingFlower', component: WeddingFlower},
        {path: '/FlowerDetail', component: FlowerDetail},
        {path: '/FlowerPay', component: FlowerPay},
        {path: '/PersonCenter', component: PersonCenter}

    ]

})
export default router
