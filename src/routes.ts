import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./views/HomePage"
import LoveFlower from "./views/LoveFlower"
import BirthdayFlower from "./views/BirthdayFlower"
import FriendFlower from "./views/FriendFlower"
import WeddingFlower from "./views/WeddingFlower"
import FlowerDetail from "./views/FlowerDetail"
import FlowerPay from "./views/FlowerPay"
import PersonCenter from "./views/PersonCenter"


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
