function contactForm() {
    var contactFormHost = 'https://reachus-uracus.herokuapp.com',
        //contactFormHost = '',
        form = $('#form_reach_us'),
        notice = $('#reachus_message'),
        sendingIndicator = $('#sndg-msg-rchus,#loading-indicator-rchus');

    if (form.length) {
        $.ajax({
            type: 'POST',
            url: contactFormHost + '/send_email',
            data: form.serialize(),
            dataType: 'json',
            success: function(response) {
                switch (response.message) {
                    case 'success':
                        NProgress.done();
                        notice.text(notice.data('success')).fadeIn();
                        sendingIndicator.hide();
                        form [0].reset();
                        break;

                    case 'failure_email':
                        NProgress.done();
                        notice.text(notice.data('error')).fadeIn();
                        sendingIndicator.hide();
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                notice.text(notice.data('error')).fadeIn();
            }
        });

    }
    return false;
}
$('document').ready(function(){
    $("#btn-submit").click(function(){
        var formStatus = validator.form();
        if(formStatus == true){
        $("#overlay, #popup").fadeIn();
        NProgress.start();
        //formValidator();
        return contactForm();
        }
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $('#popup,#overlay').fadeOut(6000);
    });
});
