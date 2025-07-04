export const publicRoutes = {
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

export const ROUTES = {
    ...publicRoutes
}