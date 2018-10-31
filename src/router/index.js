export default [
    {
        path: '/',
        component: () => import('@/view/index')
    },
    {
        path: '/houseShare',
        component: () => import('@/view/share/HouseShare')
    },
    {
        path: '/rentingShare',
        component: () => import('@/view/share/RentingShare')
    },
    {
        path: '/roommateShare',
        component: () => import('@/view/share/RoommateShare')
    }
]
