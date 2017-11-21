// Show and hide topnavi by device and scrolling
var topnavi_control = function(show_scrollY) {
    if (window.innerWidth <= 800) {
        if (window.scrollY > show_scrollY) {
          document.getElementsByClassName('topnavi')[0].classList.add('show')
        }
        else {
          document.getElementsByClassName('topnavi')[0].classList.remove('show')
        }
    }
}
