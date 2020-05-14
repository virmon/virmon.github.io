const URL = "http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php";

$(function() {
    $("#puppies").click(updatePictures);
    $("#kitties").click(updatePictures);
});

function updatePictures() {
    var animal = "";
    if ($("#puppies").attr("checked") == "checked") {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    $.ajax(URL, {
		"type": "get",
		"data": {
        	"animal": animal
		}
    }).done(displayPictures);
}

function displayPictures(data) {
    $("#pictures").html(data);
}