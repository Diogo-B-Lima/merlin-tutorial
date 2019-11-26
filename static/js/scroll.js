// When the user scrolls the page, execute myFunction
    window.onscroll = function() {scrollFunction()};

    // Get the header
    var header = document.getElementById("scrollDiv");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    function scrollFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


