const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server,{

    cors:{
        origin:"*",
    }
});



//making connection ready
io.on("connection", (socket) => {
  console.log("what is socket: ", socket);
  console.log("socket is active to be connected");

  //creating seprearte event
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    //emit the payload
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("Server is listening at port no. 5000");
});
