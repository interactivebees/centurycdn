//$("#searchform").submit(function(e) {
$(document).ready(function(){	
	
$("#bpcontactform").submit(function(e) {
e.preventDefault(); 
    var url = "bpcontactform.php"; // the script where you handle the form input.
	$(".ec-form").hide();
     $(".loader").show();
    $.ajax({
           type: "POST",
           url: url,
           data: $("#bpcontactform").serialize(), // serializes the form's elements.
           success: function(data)
           {
			   //alert(data);
			   window.location.href='thanks.php';
			   
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
$("#contactform").submit(function(e) {
e.preventDefault(); 
    var url = "contactform.php"; // the script where you handle the form input.
     $(".loader").show();
    $.ajax({
           type: "POST",
           url: url,
           data: $("#contactform").serialize(), // serializes the form's elements.
           success: function(data)
           {
			  // alert(data);
			   window.location.href='thanks.php';
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
$(".mobile").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });	
});
function onlyAlphabets(e, t) {
            try {
                if (window.event) {
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)||charCode==32 ||charCode==8)
                    return true;
                else
                    return false;
            }
            catch (err) {
                alert(err.Description);
            }
        }

	
