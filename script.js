// LUMATRACE WEBSITE

// Explore button functionality

function exploreProject() {

    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });

}

// Welcome message

window.addEventListener("load", function() {

    console.log("Welcome to LUMATRACE!");

});

// Interactive project section

const projectContent = document.getElementById("project-content");

projectContent.addEventListener("click", function() {

    projectContent.innerHTML =
        "Welcome to LUMATRACE! Our journey into scientific exploration starts here.";

});
