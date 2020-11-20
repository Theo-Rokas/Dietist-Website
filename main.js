$(document).ready(function(){

// BMI jQuery code
    
    // Hide result field
    $("#result").hide();

    // Checking if weight input field is empty
    $('#weight').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");  
            $(this).css("border", "1px solid red");  
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#weight').click(function()
    {                   
        $(this).attr("placeholder", "Weight");
        $(this).css("border", "1px solid green");   
    });

    // Checking if height input field is empty
    $('#height').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field"); 
            $(this).css("border", "1px solid red");     
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#height').click(function()
    { 
        $(this).attr("placeholder", "Height"); 
        $(this).css("border", "1px solid green");  
    });

    // Calculate your BMI
    $("#calc").click(function(){
    
        // Create some variables
        // gender = checked radio button value
        // weight = value of input with id "weight"
        // height = value of input with id "height"
        var gender = $("input[name=radio]:checked").val();
        var weight = $("#weight").val();
        var height = $("#height").val();
        
        // To ensure that user will put value on all three inputs
        if(gender != undefined && weight > 0 && height > 0){

            // Calcute bmi and store it in variable with same name
            bmi = weight / (height*height);
            bmi = parseInt(bmi);

            $("#result").text("Your BMI: " + bmi).fadeIn(1000);
                        
            // check if gender is man
            // remove class red
            // add class pink
            // then revert this
            // with some delay
            if(gender == "man"){
                
                $("#man").removeClass("red").addClass("pink");
                setTimeout(function () { 
                    $("#man").removeClass("pink").addClass("red");
                }, 1000);

                if(bmi <= 19.5){
                    $("#scrawny").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#scrawny").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man1").addClass("pink");
                    setTimeout(function () { 
                        $("#man1").removeClass("pink");
                    }, 1000);
                }
                else if( bmi <= 24.9){
                    $("#normal").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#normal").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man2").addClass("pink");
                    setTimeout(function () { 
                        $("#man2").removeClass("pink");
                    }, 1000);
                }
                else if(bmi <= 29.9){
                    $("#obese1").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese1").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man3").addClass("pink");
                    setTimeout(function () { 
                        $("#man3").removeClass("pink");
                    }, 1000);
                }
                else if(bmi <= 40){
                    $("#obese2").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese2").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man4").addClass("pink");
                    setTimeout(function () { 
                        $("#man4").removeClass("pink");
                    }, 1000);
                }
                else{
                    $("#obese3").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese3").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man5").addClass("pink");
                    setTimeout(function () { 
                        $("#man5").removeClass("pink");
                    }, 1000);
                }
            }
            // check if gender is woman
            // remove class red
            // and add class pink
            // then revert this
            // with some delay
            else if(gender == "woman"){
                
                $("#woman").removeClass("red").addClass("pink");
                setTimeout(function () { 
                    $("#woman").removeClass("pink").addClass("red");
                }, 1000);

                if(bmi <= 19.5){
                    $("#scrawny").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#scrawny").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man1").addClass("pink");
                    setTimeout(function () { 
                        $("#man1").removeClass("pink");
                    }, 1000);
                }
                else if( bmi <= 24.9){
                    $("#normal").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#normal").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man2").addClass("pink");
                    setTimeout(function () { 
                        $("#man2").removeClass("pink");
                    }, 1000);
                }
                else if(bmi <= 29.9){
                    $("#obese1").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese1").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man3").addClass("pink");
                    setTimeout(function () { 
                        $("#man3").removeClass("pink");
                    }, 1000);
                }
                else if(bmi <= 40){
                    $("#obese2").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese2").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man4").addClass("pink");
                    setTimeout(function () { 
                        $("#man4").removeClass("pink");
                    }, 1000);
                }
                else{
                    $("#obese3").removeClass("red").addClass("pink");
                    setTimeout(function () { 
                        $("#obese3").removeClass("pink").addClass("red");
                    }, 1000);

                    $("#man5").addClass("pink");
                    setTimeout(function () { 
                        $("#man5").removeClass("pink");
                    }, 1000);
                }
            }
        }
        // If the users did not put all three or put negative ones
        else{
            if(gender == undefined){
                alert("Choose your gender");
            }
            else if(weight == 0){
                alert("Put your weight");
            }
            else if(weight < 0){
                alert("You can not have negative weight");
            }
            else if(height == 0){
                alert("Put your height");
            }
            else if(height < 0){
                alert("You can not have negative height");
            }
        }
        $("#result").fadeOut(1000);        
    });





// Contact form jQuery code    

    // Checking if mName input field is empty
    $('#mName').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");    
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#mName').click(function()
    { 
        $(this).attr("placeholder", "Name");
        $(this).css("border", "1px solid green"); 
    });

    // Checking if mEmail input field is empty
    $('#mEmail').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");    
        }
        else{
            $(this).css("border", "1px solid green"); 
        }
    });
    $('#mEmail').click(function()
    { 
        $(this).attr("placeholder", "Email");
        $(this).css("border", "1px solid green"); 
    });

    // Checking if mSubject input field is empty
    $('#mSubject').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field"); 
            $(this).css("border", "1px solid red");   
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#mSubject').click(function()
    { 
        $(this).attr("placeholder", "Subject"); 
        $(this).css("border", "1px solid green");
    });

    // Checking if mMessage input field is empty
    $('#mMessage').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field"); 
            $(this).css("border", "1px solid red");   
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#mMessage').click(function()
    { 
        $(this).attr("placeholder", "Message");
        $(this).css("border", "1px solid green"); 
    });

    // Ajax call for send messages
    $("#messages").click(function(e){

        // Creating our variables by inputs values
        var mName = $("#mName").val();
        var mEmail = $("#mEmail").val();
        var mSubject = $("#mSubject").val();
        var mMessage = $("#mMessage").val();

        // To ensure that user will put value on all four inputs
        if(mName != undefined && mEmail != undefined && mSubject != undefined && mMessage != undefined){
            
            // Ajax call will send our data in message.php via post method
            // and show success or failure alert message
            $.ajax({
                url: "messages.php",
                data:
                'mName='      + mName 
                +'&mEmail='   + mEmail 
                +'&mSubject=' + mSubject 
                +'&mMessage=' + mMessage,
                type: "POST",
                dataType: "html",   //expect html to be returned                
                success:function(data){
                    alert("User with name " + mName + " successfully sent message");
                },
                failure:function(){
                    alert("Something went wrong");
                }
            });
        }
        else{
            if(mName == undefined){
                alert("Insert your name");
            }
            else if(mEmail == undefined){
                alert("Insert your email");
            }
            else if(mSubject == undefined){
                alert("Insert your subject");
            }
            else if(mMessage == undefined){
                alert("Insert your message");
            }
        }
    });





// Sign form jQuery code

    // Checking if mName input field is empty
    $('#uUsername').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");     
        }
        else{
            $(this).css("border", "1px solid green"); 
        }
    });
    $('#uUsername').click(function()
    { 
        $(this).attr("placeholder", "Username"); 
        $(this).css("border", "1px solid green"); 
    });

    // Checking if mEmail input field is empty
    $('#uPassword').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");     
        }
        else{
            $(this).css("border", "1px solid green");  
        }
    });
    $('#uPassword').click(function()
    { 
        $(this).attr("placeholder", "Password");
        $(this).css("border", "1px solid green");  
    });

    // Checking if mSubject input field is empty
    $('#uName').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");     
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#uName').click(function()
    { 
        $(this).attr("placeholder", "Name"); 
        $(this).css("border", "1px solid green"); 
    });

    // Checking if mMessage input field is empty
    $('#uEmail').blur(function() //whenever you click off an input element
    {                   
        if( !$(this).val() ) { //if it is blank. 
            $(this).attr("placeholder", "Required Field");
            $(this).css("border", "1px solid red");     
        }
        else{
            $(this).css("border", "1px solid green");
        }
    });
    $('#uEmail').click(function()
    { 
        $(this).attr("placeholder", "Email");
        $(this).css("border", "1px solid green");  
    });
    
    // Ajax call for sign in
    $("#users").click(function(e){

        // Creating our variables by inputs values
        var uUsername = $("#uUsername").val();
        var uPassword = $("#uPassword").val();
        var uName = $("#uName").val();
        var uEmail = $("#uEmail").val() ;  
        
        // To ensure that user will put value on all four inputs
        if(uUsername != undefined && uPassword != undefined && uName != undefined && uEmail != undefined){

            // Ajax call will send our data in users.php via post method
            // and show success or failure alert message
            $.ajax({
                url: "users.php",
                data:
                'uUsername='      + uUsername 
                +'&uPassword='    + uPassword 
                +'&uName='        + uName 
                +'&uEmail='       + uEmail,
                type: "POST",
                dataType: "html",   //expect html to be returned                
                success:function(data){
                    alert("User with name " + uName + " successfully signed in");
                },
                failure:function(){
                    alert("Something went wrong");
                }
            });
        }
        else{
            if(uUsername == undefined){
                alert("Insert your username");
            }
            else if(uPassword == undefined){
                alert("Insert your password");
            }
            else if(uName == undefined){
                alert("Insert your name");
            }
            else if(uEmail == undefined){
                alert("Insert your mail");
            }
        }        
    });





// Users jQuery code

    // Ajax call for admin user
    $("#admin").click(function(e) {

        // Ajax call will take the data from admin.php via get method
        // on success will create a table with the data
        // on failure will show alert message
        // we will see username and password
        $.ajax({
            url: "admin.php",
            type: "GET",
            dataType: "html",   //expect json to be returned                
            success:function(data){
                //$("#adminInfos").html(data);
                data = $.parseJSON(data); // <-- *** parse JSON ***
                var html_to_append = '';
                $.each(data, function(i, item) {
                    html_to_append +=
                        '<tr class="mt-3 text-uppercase"><td class="p-2">' +
                        item.username + 
                        '</td><td class="p-2">' +
                        item.password +
                        '</td><td class="p-2">' +
                        item.name +
                        '</td><td class="p-2">' +
                        item.email +
                        '</td></tr>';
                });
                $("#adminInfosJson").html(html_to_append);
            },
            failure:function (){
                alert("Something went wrong");
            }
        });
    });

    // Ajax call for no admin user
    $("#noAdmin").click(function(e) {

        // Ajax call will take the data from admin.php via get method
        // on success will create a table with the data
        // on failure will show alert message
        // we will not see username and password
        $.ajax({
            url: "admin.php",
            type: "GET",
            dataType: "html",   //expect json to be returned                
            success:function(data){
                //$("#noAdminInfos").html(data);
                data = $.parseJSON(data); // <-- *** parse JSON ***
                var html_to_append = '';
                $.each(data, function(i, item) {
                    html_to_append +=
                        '<tr class="mt-3 text-uppercase"><td class="p-2">' +
                        'Only Admin' + 
                        '</td><td class="p-2">' +
                        'Only Admin' +
                        '</td><td class="p-2">' +
                        item.name +
                        '</td><td class="p-2">' +
                        item.email +
                        '</td></tr>';
                });
                $("#noAdminInfosJson").html(html_to_append);
            },
            failure:function (){
                alert("Something went wrong");
            }
        });
    });
});


