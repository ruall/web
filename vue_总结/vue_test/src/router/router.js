//静态引入
// import Home from "@/pages/Home/Home";
// import Category from "@/pages/Category/Category";
// import Cart from "@/pages/Cart/Cart";
// import Buy from "@/pages/Buy/Buy";
// import Login from "@/pages/Login/Login";

//动态引入 按需加载，提高首屏渲染效率
const Home = () => import('@/pages/Home/Home')
const Category = () => import('@/pages/Category/Category')
const Cart = () => import('@/pages/Cart/Cart')
const Buy = () => import('@/pages/Buy/Buy')
const Login = () => import('@/pages/Login/Login')


const routes = [
    {
        path: '/home/:id',
        component: Home,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            isShowFooter: true
        },
        // props: (route) => ({a: 1, b: 2, path: route.path})
        props(route) {
            return {
                a: 1,
                b: 2,
                path: route.path
            }
        }
    },
    {
        name: 'Buy',
        path: '/buy',
        component: Buy,
        meta: {
            isShowFooter: false
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: 'login'
    },
]

export default routes