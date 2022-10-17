export const getTokenFromCookie = (req) => {
    if (!req.headers.cookie) return;
    const cookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("token="));
    if (!cookie) return;
    const token = cookie.split("=")[1];
    return token;
};
