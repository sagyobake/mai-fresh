Deno.serve(async (req) => {
    if (req.headers.get("upgrade") != "websocket") {
        const url = new URL(req.url);
        let filepath = decodeURIComponent(url.pathname);
        if (filepath === '/') {
            filepath = '/index.html';
        }
        console.log(filepath); //アクセスされたファイル名
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

    socket.addEventListener("message", async (event) => {
        await fetch("https://api.line.me/v2/bot/message/push", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

                'Authorization': "Bearer EGLpy+QFWeKGUcWztUfJDDJbW0JKuZco6PxrEKgBKg5wWMR6oRj9luSrUYUw8ho4gySPE7Orox662OipmXwmJP9jNEw58rbJVpuCAgUwDClXXmp+fflNyZTJTgm7yHjy36RCnxNe/B2tgDVhxyM6hgdB04t89/1O/w1cDnyilFU=",
            },

            body: JSON.stringify({
                "to": "Ua1428322da044757d3e017fc86a54e0b",
                "messages": [
                    {
                        "type": "text",
                        "text": event.data,
                    },
                ],
            }),

        });
    });

    socket.addEventListener("close", (event) => {

    });


    return response;

});
