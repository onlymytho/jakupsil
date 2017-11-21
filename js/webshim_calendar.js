document.writeln("<script type='text/javascript' src='https://cdn.emailjs.com/dist/email.min.js'></script>")

// Calendar UI by using webshim library
var calendar = function() {
    webshim.polyfill('es5 mediaelement forms');
    webshim.setOptions('forms-ext', {
        replaceUI: 'auto',
        types: 'date',
        date: {
            startView: 2,
            inlinePicker: true,
            classes: 'date_picker'
    }
    });
    //start polyfilling
    webshim.polyfill('forms forms-ext');
}
calendar()
