var server = require("http").createServer();
var io = require("socket.io")(server);

var players = {}; // let clients = {}

function Player(id) {
	this.id = id;
	this.holoTag = id;
	this.position = [0, 0, 0];
	this.rotation = [0, 0, 0];
	this.channel = "";
	this.entity = null;
}

io.sockets.on("connection", function(socket) {
	console.log(`New client connected: ${socket.id}`);

	socket.on("disconnect", function() {
		console.log(`Client disconnected: ${socket.id}`);

		// Send everyone except the connecting client the id of the disconnected client.
		socket.broadcast.emit("client:disconnected", socket.id);

		delete players[socket.id]; // delete clients[socket.channel][socket.id]

		if (socket.channel) socket.leave(socket.channel);
	});

	socket.on("player:init", function(channel) {
		console.log(
			`${socket.id} init connection to holospace channel: ${channel}`
		);

		var id = socket.id;
		var newPlayer = new Player(id);

		players[id] = newPlayer;

		socket.channel = channel || "DeepSpace";
		socket.join(channel);
		newPlayer.channel = socket.channel;

		// clients[socket.channel] = clients[socket.channel] || {};
		// clients[socket.channel][socket.id] = clients[socket.channel][socket.id] || {};
		// clients[socket.channel][socket.id] = { ...newPlayer };

		// Send the connecting player her unique ID,
		// and data about the other players already connected.
		socket.emit("player:data", { player: newPlayer, others: players }); // others: clients[socket.channel]

		// Send everyone except the connecting player data about the new player.
		// io.to(socket.channel).emit('player:joined', newPlayer);
		socket.broadcast.emit("player:joined", newPlayer);
	});

	socket.on("position:update", function(data) {
		if (!players[data.id]) return;
		players[data.id].position = [data.x, data.y, data.z];

		// io.in(socket.channel).emit('move:player', data);
		socket.broadcast.emit("move:player", data);
	});

	socket.on("rotation:update", function(data) {
		if (!players[data.id]) return;
		players[data.id].rotation = [data.x, data.y, data.z];

		// io.in(socket.channel).emit('turn:player', data);
		socket.broadcast.emit("turn:player", data);
	});

	socket.on("player:exit", function(data) {
		console.log(
			`${socket.id} exiting holospace channel: ${socket.channel}`
		);

		delete players[data]; // delete clients[socket.channel][data];

		// Send everyone except the connecting player data about the disconnected player.
		socket.broadcast.emit("client:disconnected", data);
	});
});

console.log("Server started.");
server.listen(3000);
