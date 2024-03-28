import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'orders',
        label: 'Order Tracking',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'apiintegration',
        label: 'Api Integration',
        path: '/apiintegration',
        icon: <HiOutlineCog />
    },
    {
        key: 'help',
        label: 'Help ',
        path: '/help',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
