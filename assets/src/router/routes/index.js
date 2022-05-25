import authRoutes from "./auth";
import backEndRoutes from "./back-end";
import fontEndRoutes from "./font-end";


const routes = [
    ...authRoutes,
    ...backEndRoutes,
    ...fontEndRoutes
];
export default routes;
