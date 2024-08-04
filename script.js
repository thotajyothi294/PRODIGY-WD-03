let currentPlayer = 'X';

function makeMove(cellNumber) {
	const cell = document.getElementById(`cell-${cellNumber}`);
	if (cell.innerText === '') {
		cell.innerText = currentPlayer;
		cell.classList.add(currentPlayer);
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		checkWin();
	}
}

function checkWin() {
	const winConditions = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];
	for (let i = 0; i < winConditions.length; i++) {
		const [a, b, c] = winConditions[i];
        if (document.getElementById(`cell-${a}`).innerText !== '' &&
        document.getElementById(`cell-${a}`).innerText === document.getElementById(`cell-${b}`).innerText &&
        document.getElementById(`cell-${a}`).innerText === document.getElementById(`cell-${c}`).innerText) {
        alert(`Player ${document.getElementById(`cell-${a}`).innerText} wins!`);
        return;
    }
}
}
