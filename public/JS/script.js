$(document).ready(function() {
    console.log("Running");
    // Add a new burger.
    $(".addBurgerButton").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/burgers/create", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".devourBtn").on("submit", function(event) {
        event.preventDefault();

        var id = $('.burgerID').val();
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });
})