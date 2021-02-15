if (!window.x) {
    x = {};
}

function makeBold() {
    var selection = window.getSelection();
    if (selection.rangeCount) {
        var range = selection.getRangeAt(0).cloneRange();
        var newNode = document.createElement("mark");
        range.surroundContents(newNode);
        selection.removeAllRanges();
        //  selection.addRange(range);
        $('button').fadeOut(2);
    }
}

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

var pageX;
var pageY;

$(document).ready(function() {
    $(document).bind("mouseup", function() {
        var selectedText = x.Selector.getSelected();
        if (selectedText != '') {
            $('button').css({
                'left': pageX + 5,
                'top': pageY - 55
            }).fadeIn(200);
        } else {
            $('button').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e) {
        pageX = e.pageX;
        pageY = e.pageY;
    });
});
