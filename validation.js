$(function(){
    $('#contact-form').validate({
        rules:{
            fname:{
                required:true
            },
            car_num: {
                required: true,
                number: true
              },
              cvv_num: {
                required: true,
                number: true
              }

        },
        messages:{
            required: '<br>Please enter an email address',
            email:'<br>Please enter a valid email id'
        }
    })
})