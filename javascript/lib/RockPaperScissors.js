function Player(name) {
  this.name = name;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}


Player.prototype.picks = function(pick) {
	this.pick = pick	
  	// body...
};

Game.prototype.PAIRS = {
	rock: 'scissors',
	paper: 'rock',
	scissors: 'paper',
};


Game.prototype.winner = function() {
    if(this.PAIRS[this.player1.pick] === this.player2.pick) return this.player1;
    if(this.PAIRS[this.player2.pick] === this.player1.pick) return this.player2;
    if(this.player1.pick === this.player2.pick) return null;
};