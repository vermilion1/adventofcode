var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

function visit(x, y) {
	var key = [x, y].join(',');
	visited[key] || (visited[key] = 0);
	visited[key]++;
}

var visited = {};
var coords = {
	santa: {x: 0, y: 0},
	robo: {x: 0, y: 0}
};

visit(coords.santa.x, coords.santa.y);
visit(coords.robo.x, coords.robo.y);

input.split('').forEach((char, index) => {
	var isSanta = index % 2 === 0;
	var currentCoords = isSanta ? coords.santa : coords.robo;
	switch(char) {
		case '^':
			visit(currentCoords.x, ++currentCoords.y);
			break;
		case 'v':
			visit(currentCoords.x, --currentCoords.y);
			break;
		case '>':
			visit(++currentCoords.x, currentCoords.y);
			break;
		case '<':
			visit(--currentCoords.x, currentCoords.y);
			break;
	}
});

var total = Object.keys(visited).length;

console.log(total);
