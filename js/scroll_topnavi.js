var topnavi_switch = false

var topnavi_create = function(link) {
    if (window.innerWidth <= 800 && topnavi_switch == false) {
        topnavi_switch = true;
        button_links_by_url = {
            "index": "event.html",
            "event": "#title"
        }
        button_texts_by_url = {
            "index": "I WANT TO USE >",
            "event": "RESERVE >"
        }
        var topnavi = document.createElement('div')
        topnavi.className = 'topnavi'
        var href_title = document.createElement('a')
        href_title.href = "index.html"
        var title = document.createElement('div')
        title.className = 'title'
        var text_title = document.createTextNode('JAKUPSIL IN YEONNAM')
        var href_reserve = document.createElement('a')
        href_reserve.href = button_links_by_url[link]
        var reserve = document.createElement('div')
        reserve.className = 'reserve'
        var text_reserve = document.createTextNode(button_texts_by_url[link])

        topnavi.appendChild(href_title);
        topnavi.appendChild(href_reserve);
        href_title.appendChild(title);
        href_reserve.appendChild(reserve);
        title.appendChild(text_title);
        reserve.appendChild(text_reserve);

        document.body.appendChild(topnavi);
    }
}

// Show and hide topnavi by device and scrolling
var controlled_scrolly_by_url = {
    "index": 650,
    "event": 500
}
var topnavi_control = function(show_scrollY) {
    if (window.innerWidth <= 800 ) {
        if (window.scrollY > show_scrollY) {
          document.getElementsByClassName('topnavi')[0].classList.add('show')
          topnavi_switch = true;
        }
        else {
          document.getElementsByClassName('topnavi')[0].classList.remove('show')
        }
    }
}
