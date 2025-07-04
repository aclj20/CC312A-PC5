const publicRoutes = {
    LANDING: {
        ROOT: "/"
    },
    LOGIN: {
        ROOT: "/login"
    },
    REGISTER: {
        ROOT: "/register"
    }
} as const;

const ROUTES = {
    ...publicRoutes
}

export default ROUTES;