import { lazy } from "react";

const authRoutes = [
    {
        pathName: '/login',
        component: lazy(() => import('../../views/auth/login')),
    }
]

export default authRoutes;