$(function() {

fetch("https://jsonplaceholder.typicode.com/users/?userId=1")
    .then(response => response.json())
    .then(displayUser)
    .then(removeLoading);

function displayUser(data) {
    console.log(data);
    let user = data.map(x => 
            "<ul><li>" + x.name + "</li>" + 
            "<ul><li>" + x.email + "</li>" + 
            "<li>" + x.address.street + " " + x.address.suite + " " + x.address.city + ", " + x.address.zipcode + "</li></ul></ul>"
            ).join('');
    $("#users").html(user);
}

function removeLoading() {
    $("#loading").hide();
}

});