
const socket = new WebSocket("ws://localhost:8000");
//const socket = new WebSocket("wss://mai2.deno.dev");
socket.addEventListener("open", (e) => {
    console.log(socket.readyState);
    socket.send('ping');
});
socket.addEventListener("message", (e) => {
    console.log(e.data);
});

const button = document.getElementById('button');
    button.addEventListener('click', () => {
        const value = document.getElementById('input').value;
        console.log(value);
        socket.send(value);
    });
