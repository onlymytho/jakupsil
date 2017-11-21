(function(){
    emailjs.init("user_SrwuDhdxfbpjOtsNl1l2G");
})();
var sendMail = function() {
    /*
        Send email by using emailjs.
    */

    // Send input data as sanghyuk_jung user and jakupsil template with name, phone, email and date parameters.
    emailjs.send("sanghyuk_jung","jakupsil",{
        name: document.querySelector('input#name').value,
        phone: document.querySelector('input#phone').value,
        email: document.querySelector('input#email').value,
        date: document.querySelector('input#date').value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
};
var reserve_submit = function() {
        /*
            Validate inputs and if all is filled, send email.
        */
        // Validate inputs
        for (i=0; i<document.querySelectorAll('form input').length; i++) {
            if (document.querySelectorAll('form input')[i].value == "") {
                // If there's an empty input, show alert
                alert('항목을 모두 입력해주세요. (' + document.querySelectorAll('form input')[i].name + ')')
                return false
            }
            else {
                continue
            }
        }
        // If all input is filled, send email
        sendMail()
        alert('예약신청이 접수되었습니다. 빠른 시일 내에 연락드리곘습니다. 감사합니다.')
        return true
}
