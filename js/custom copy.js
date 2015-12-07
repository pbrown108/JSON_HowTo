  $(document).ready(function () {});

function button(element) {
    for (var i = 1; i <= $(".button").length; i++) {
        if (element === document.getElementById('button' + i)) {
            $('#content' + i).show(500);
        } else {
            $('#content' + i).hide(500);
        }
    }
}
        
function prevButton() {
    for (var i = 1; i <= $(".content").length; i++) {
        var index = i;
        if ($('#content' + index).is(':visible')) {
            $('#content' + index).animate({
                width: ["toggle", "easeOutExpo"],
                opacity: "toggle"
            }, 700, function() {
                //animation complete
            });
            if (index === 1) {
                index = $(".content").length;
            } else {
                index--;
            }
            $('#content' + index).animate({
                width: ["toggle", "easeInExpo"],
                opacity: "toggle"
            }, 700, function() {
                //animation complete
            });
            break;
        }
    }
}
        
function nextButton() {
    for (var i = 1; i <= $(".content").length; i++) {
        var index = i;
        if ($('#content' + index).is(':visible')) {
            $('#content' + index).animate({
                height: ["toggle", "easeOutExpo"],
                opacity: "toggle"
            }, 700, function() {
                //animation complete
            });
            if (index === $(".content").length) {
                index = 1;
            } else {
                index++;
            }
            $('#content' + index).animate({
                height: ["toggle", "easeInExpo"],
                opacity: "toggle"
            }, 700, function() {
                //animation complete
            });
            break;
        }
    }
}