Deno.serve(async (req) => {
    if (req.headers.get("upgrade") != "websocket") {
        const url = new URL(req.url);
        let filepath = decodeURIComponent(url.pathname);
        if (filepath === '/') {
            filepath = '/index.html';
        }
        console.log(filepath);

        try {
            const file = await Deno.open(
                "static/" + filepath, { read: true }
            );
            return new Response(file.readable);
        } catch {
            return new Response("404 Not Found", { status: 404 });
        }
    }

    //WebSocket
    const { socket, response } = Deno.upgradeWebSocket(req, 0);
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
