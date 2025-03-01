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
    const { socket, response } = Deno.upgradeWebSocket(req);
    socket.addEventListener("open", () => {
        console.log("a client connected!");
    });
    socket.addEventListener("message", (event) => {
        if (event.data === "ping") {
            socket.send("pong");
        }
    });
    return response;

});
