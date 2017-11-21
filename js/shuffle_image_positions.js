// Shuffle the position of images
let content_width = window.getComputedStyle(document.getElementsByClassName('content')[0]).getPropertyValue('width').split("px")[0]

leftmargins = [1, 2, 'center']
for (var i=0; i<document.getElementsByClassName('img_wrapper').length; i++){
    r = Math.floor(Math.random() * 4)
    leftmargin = leftmargins[r]

    if (leftmargin == 'center') {
        document.getElementsByClassName('img_wrapper')[i].style.margin = '0 auto'
    }
    if (leftmargin == 'right'){
        document.getElementsByClassName('img_wrapper')[i].style.float = 'left'
        // document.getElementsByClassName('img_wrapper')[i].style.marginLeft = leftmargin + 'px';
    }
}
