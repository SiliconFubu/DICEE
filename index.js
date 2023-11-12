var images = ["images/dice1.png"
                ,"images/dice2.png"
                ,"images/dice3.png"
                ,"images/dice4.png"
                ,"images/dice5.png"
                ,"images/dice6.png"
            ];
let i = Math.floor(Math.random() * 6);
let x = Math.floor(Math.random() * 6);

$('img').eq(0).attr("src",images[x]) //player1
$('img').eq(1).attr("src",images[i]) //player2

if (i < x){
    $('h1').text('🚩 Play 1 Wins!')
}
else if (i > x){
    $('h1').text('Player 2 Wins! 🚩')
}
else{
    $('h1').text('Draw!')
}
