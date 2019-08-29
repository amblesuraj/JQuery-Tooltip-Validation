

$(document).ready(function(){


    $("#register").validate({

        rules:{
            fname:"required",
            lname:"required",
            username:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:3
            },
            cPassword:{
                required:true,
                equalTo:"#password"   
             }

        },
        messages:{
            fname:"Fname is required",
            lname:"lname is required",
            username:{
                required:"username is required",
                minlength:"usrname must be 3 characters long"
            },
            email:{
                required:"Email is required",
                email:"Enter valid email"
            },
            password:{
                required:"password is required",
                minlength:"passowrd must be 3 charactes long"
            },
            cPassword:{
                required:"confirm password is required",
                equalTo:"confirm passowrd must be same as password"  
             }

        },
        tooltip_options:{
            fname:{
                trigger:"focus",
                placement:"top"
            },
            lname:{
                trigger:"focus",
                placement:"top"
            },
            username:{
                trigger:"focus",
                placement:"right"
            },
            email:{
                trigger:"focus",
                placement:"left"
            },password:{
                trigger:"focus",
                placement:"top"
            },
            cPassword:{
                trigger:"focus",
                placement:"bottom"
            }
        },
        errorElement:"span",
        errorPlacement:function(error,element)
        {
            error.addClass("invalid-feedback");
            element.parents(".form-group").addClass("has-feedback");

            if(element.prop("type") === "checkbox")
            {
                error.insertAfter(element.parent("label"));
            }
            else{
                error.insertAfter(element);
            }
        },
        highlight:function(element,errorClass,validClass)
        {
                $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight:function(element,errorClass,validClass)
        {
            $(element).removeClass("is-invalid").addClass("is-valid");
        },
        submitHandler:function(form)
        {
            form.valid();
        }


    });

});