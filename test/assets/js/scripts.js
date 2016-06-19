
jQuery(document).ready(function() {


    /*
        Subscription form
    */
    $('.subscribe form').submit(function(e) {
    	e.preventDefault();
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
    });

});
