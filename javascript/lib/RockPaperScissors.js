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

// Game.prototype.PAIRS = {
// 	rock: { scissors: 'beats', lizard: 'beats' },
// 	paper: { rock: 'beats', spock: 'beats' },
// 	scissors: { paper: 'beats', lizard: 'beats' },
// 	lizard: { spock: 'beats', paper: 'beats' },
// 	spock: { scissors: 'beats', rock: 'beats' },
// };

Game.prototype.PAIRS = {
	rock: ['scissors', 'lizard'],
	paper: ['rock', 'spock'],
	scissors: ['paper', 'lizard'],
	lizard: ['spock', 'paper'],
	spock: ['scissors', 'rock'],
};

// Game.prototype.winner = function() {
//     if(this.PAIRS[this.player1.pick][this.player2.pick] === 'beats') return this.player1;
//     if(this.PAIRS[this.player2.pick][this.player1.pick] === 'beats') return this.player2;
//     if(this.player1.pick === this.player2.pick) return null;
// };

Game.prototype.winner = function() {
    if(this.PAIRS[this.player1.pick].indexOf(this.player2.pick) > -1) return this.player1;
    if(this.PAIRS[this.player2.pick].indexOf(this.player1.pick) > -1) return this.player2;
    if(this.player1.pick === this.player2.pick) return null;
};