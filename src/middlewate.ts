import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/sign-in", "/sign-up", "/api/webhook", "/api/subscribe"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};