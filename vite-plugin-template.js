// vite-plugin-template.js
import fs from "fs";

export const transformHtmlPlugin = () => ({
    name: "transform-html",
    transformIndexHtml: {
        transform(html) {
            console.debug(html)
            return html;
        }
    }
});

export default function templatePlugin() {
    return {
        name: "vite-plugin-template",
        configureServer: ({ middlewares }) => {
            middlewares.use(async (req, res, next) => {
                console.debug(req.url)
                console.debug(req)
                // if (ctx.url.endsWith(".html")) {
                //     const templatePath = ctx.url.replace(/^\//, ""); // Убираем начальный слэш
                //     const templateContent = fs.readFileSync(templatePath, "utf-8");
                //
                //     ctx.body = templateContent;
                // } else {
                //     await next();
                // }
            });
        },
    };
}
