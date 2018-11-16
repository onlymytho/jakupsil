function insert_members() {
    /*
        Shuffle the order of members information
    */
    var hyuk = "<div id='hyuk' class='info'><img src='./asset/hyuk.png'><div class='name'>HYUK</div><div class='phone'>+82<br>10<br>6766<br>1453</div></div>"
    var sol = "<div id='sol' class='info'><img src='./asset/sol.png'><div class='name'>SOL</div><div class='phone'>+82<br>10<br>7285<br>0320</div></div>"
    var shin = "<div id='shin' class='info'><img src='./asset/shin.png'><div class='name'>SHIN</div><div class='phone'>+82<br>10<br>4787<br>4207</div></div>"
    var members = [hyuk, sol, shin]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(members)
    for (member in members) {
        var target = document.querySelector('.info_item#members')
        target.insertAdjacentHTML( 'beforeend', members[member]);
    }
}
