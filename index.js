const express = require("express")
const fs = require("fs");
const html = fs.readFileSync("./site.html", "utf8");
const app = express();
app.use("/static", express.static("./static"));
app.get("/", (req, res) => res.type("html").end(html));
const server = app.listen(parseInt(process.argv[2] ?? 8080), () => console.log("Site up!"));
process.on("SIGINT", () => server.close());
