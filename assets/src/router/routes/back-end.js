import { lazy } from 'react';
import { ROLES } from '../../utilities/app.constant';

const backEndRoutes = [
    {
        pathName: '/dashbord',
        layout: 'Backend',
        component: lazy(() => import('../../views/back-end/dashbord')),
        permissions: [ROLES.admin, ROLES.client],
    }
];

export default backEndRoutes;