import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { AboutBook } from "./aboutBook/aboutBook";

export default [
    index("routes/home.tsx"),
    route("aboutBook", "./routes/aboutBook.tsx"),

] satisfies RouteConfig;
