Deno.serve(async (req) => {
    if (req.headers.get("upgrade") != "websocket") {
        const html = await Deno.readFile('./index.html');
        return new Response(html, {
            status: 200,
            headers: {
                "content-type": "text/html",
            },
        });
    }
    const { socket, response } = Deno.upgradeWebSocket(req, 0);
    socket.addEventListener("open", () => {
        console.log("a client connected!");
    });
    socket.addEventListener("message", (event) => {
        if (event.data === "ping") {
            socket.send("pong");

            const e = Math.E;
            for (let x = -e; x <= e; x += 0.0001) {
                const y = Math.sin(e ** 11 * x) * Math.sqrt((e ** 2 - x ** 2) / 1.8)
                    + Math.log(Math.abs(x) + 0.7);
                socket.send(JSON.stringify({ x, y }));
            }
        }
    });
    return response;

});
