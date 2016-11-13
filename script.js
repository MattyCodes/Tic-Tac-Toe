$(document).ready(function() {
	rowOne = $($('tr')[0]).children();
	rowTwo = $($('tr')[1]).children();
	rowThree = $($('tr')[2]).children();
	clickBox();
	clickOption();
});

var resetBoard = function() {
	// Resets the game board.
	$('td').removeClass('one');
	$('td').removeClass('two');
};

var clickBox = function() {
	// Runs Game logic.
	var clicks = 0;
	$('td').on('click', function() {
		if ( checkWinner() == null ) {
			if ( $(this).hasClass('one') || $(this).hasClass('two') ) {
				alert("This box has already been selected!");
			} else {
				clicks += 1;
				if (clicks % 2 == 0) {
					$(this).addClass('two');
				} else {
					$(this).addClass('one');
				};
			};
		} else {
			alert("The Game has Ended.")
		};
		if ( checkWinner() == 'playerOne' ) {
			clicks = 0;
			setTimeout(function() {
				$("#one").fadeIn();
			}, 350);
		} else if ( checkWinner() == 'playerTwo' ) {
			clicks = 0;
			setTimeout(function() {
				$("#two").fadeIn();
			}, 350);
		};
	});
};

var checkWinner = function() {
	// Runs one check at a time to find the winner.
	if ( checkHorizontal() != null ) {
		return checkHorizontal();
	} else if ( checkVertical() != null ) {
		return checkVertical();
	} else if ( checkDiagonalOne() != null ) {
		return checkDiagonalOne();
	} else if ( checkDiagonalTwo() != null ) {
		return checkDiagonalTwo();
	} else {
		return null;
	};
};

var checkHorizontal = function() {
	// Check each row horizontally.
	if ( $(rowOne[0]).hasClass('one') && $(rowOne[1]).hasClass('one') && $(rowOne[2]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowOne[0]).hasClass('two') && $(rowOne[1]).hasClass('two') && $(rowOne[2]).hasClass('two') ) {
		return 'playerTwo';
	} else if ( $(rowTwo[0]).hasClass('one') && $(rowTwo[1]).hasClass('one') && $(rowTwo[2]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowTwo[0]).hasClass('two') && $(rowTwo[1]).hasClass('two') && $(rowTwo[2]).hasClass('two') ) {
		return 'playerTwo';
	} else if ( $(rowThree[0]).hasClass('one') && $(rowThree[1]).hasClass('one') && $(rowThree[2]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowThree[0]).hasClass('two') && $(rowThree[1]).hasClass('two') && $(rowThree[2]).hasClass('two') ) {
		return 'playerTwo';
	} else {
		return null;
	};
};

var checkVertical = function() {
	// Check each row vertically.
	if ( $(rowOne[0]).hasClass('one') && $(rowTwo[0]).hasClass('one') && $(rowThree[0]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowOne[0]).hasClass('two') && $(rowTwo[0]).hasClass('two') && $(rowThree[0]).hasClass('two') ) {
		return 'playerTwo';
	} else if ( $(rowOne[1]).hasClass('one') && $(rowTwo[1]).hasClass('one') && $(rowThree[1]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowOne[1]).hasClass('two') && $(rowTwo[1]).hasClass('two') && $(rowThree[1]).hasClass('two') ) {
		return 'playerTwo';
	} else if ( $(rowOne[2]).hasClass('one') && $(rowTwo[2]).hasClass('one') && $(rowThree[2]).hasClass('one') ) {
		return 'playerOne';
	} else if ( $(rowOne[2]).hasClass('two') && $(rowTwo[2]).hasClass('two') && $(rowThree[2]).hasClass('two') ) {
		return 'playerTwo';
	} else {
		return null;
	};
};

var checkDiagonalOne = function() {
	// Check diagonally from top left to bottom right.
	 if ( $(rowOne[0]).hasClass('two') && $(rowTwo[1]).hasClass('two') && $(rowThree[2]).hasClass('two') ) {
	 	return 'playerTwo';
	 } else if ( $(rowOne[0]).hasClass('one') && $(rowTwo[1]).hasClass('one') && $(rowThree[2]).hasClass('one') ) {
	 	return 'playerOne';
	 } else {
	 	return null;
	 };
};

var checkDiagonalTwo = function() {
	// Check diagonally from top right to bottom left.
	 if ( $(rowOne[2]).hasClass('two') && $(rowTwo[1]).hasClass('two') && $(rowThree[0]).hasClass('two') ) {
	 	return 'playerTwo';
	 } else if ( $(rowOne[2]).hasClass('one') && $(rowTwo[1]).hasClass('one') && $(rowThree[0]).hasClass('one') ) {
	 	return 'playerOne';
	 } else {
	 	return null;
	 };
};

var clickOption = function() {
	$("body").on("click", ".option", function() {
		resetBoard();
		$(".user-msg").hide();
	});
};
