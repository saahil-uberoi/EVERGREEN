function hover() {
    $(".button").on("mouseenter", function () {
        return $(this).addClass("hover");
    });
}

function hoverOff() {
    $(".button").on("mouseleave", function () {
        return $(this).removeClass("hover");
    });
}

function active() {
    $(".button").on("click", function () {
        return $(this).addClass("active");
    });
}

hover();
hoverOff();
active();