

function openContent(ref) {
    document.getElementById(ref).style.visibility = "visible";
    window.scrollTo(0, 0);
}

function closeContent(ref) {
    document.getElementById(ref).style.visibility = "hidden";
}

function resizeImages() {
    var element_photo = document.querySelectorAll("[id='img-projet']");
    for (var i = 0; i < element_photo.length; i++) {
        element_photo[i].style.height = window.innerHeight*0.8+"px";
        element_photo[i].style.width = 'auto';
    }
    var element_photo_small = document.querySelectorAll("[id='img-projet-small']");
    for (var i = 0; i < element_photo_small.length; i++) {
        element_photo_small[i].style.height = window.innerHeight*0.1+"px";
        element_photo_small[i].style.width = 'auto';
    }
}

function dragElement(elmnt) {

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            document.getElementById(elmnt);
            elmnt.onmousedown = dragMouseDown;
        }

        dragElement(document.getElementById(elmnt));
        //dragElement(document.getElementById("thumb-matrice"));
        //dragElement(document.getElementById("thumb-moscou"));

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
}

function focusImage(ref) { 
    document.getElementById(ref).style.zIndex = 1; 
    document.getElementById(ref).style.transform = "scale(1.05, 1.05)";
    var bg = ref + "-bg";
    document.getElementById(bg).style.opacity = 1;
}

function unfocusImage(content) {
    document.getElementById(content).style.zIndex = 0;
    document.getElementById(content).style.transform = "scale(1, 1)";
    var bg = content + "-bg";
    document.getElementById(bg).style.opacity = 0;
}

function translate() {
    var c_fr = document.querySelectorAll("[id='fr_description']");
    var c_en = document.querySelectorAll("[id='en_description']");
    if (lang === 'fr') {
        for (var i = 0; i < c_fr.length; i++) {
            c_fr[i].style.opacity = 1;
            c_en[i].style.opacity = 0;
        }
    } else {
        for (var i = 0; i < c_fr.length; i++) {
            c_fr[i].style.opacity = 0;
            c_en[i].style.opacity = 1;
        }
    }
}
