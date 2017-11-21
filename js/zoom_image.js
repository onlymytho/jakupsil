document.addEventListener( 'click', function( event ) {
    if (event.path[0].className == 'item_img') {
        zoom.to({
            element: event.path[0],
            padding: 80
        })
    }
});
