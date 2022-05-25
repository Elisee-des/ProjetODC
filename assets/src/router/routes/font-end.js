import { lazy } from 'react';
const fontEndRoutes = [
    {
        pathName: '/',
        layout: 'Fontend',
        component: lazy(() => import('../../views/font-end/home')),
        permissions: ['all'],
    }
];

export default fontEndRoutes;