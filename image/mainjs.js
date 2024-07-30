function popupBook() {
    window.open("bookmark_popup.html", "", "width = 390px, height = 350px, top= 50px, left = 50px");
}

function popupAdd() {
    window.open("addicon_popup.html", "", "width = 390px, height = 290px, top= 50px, left = 50px");
}


document.addEventListener('DOMContentLoaded', function() {
    const mainUnder = document.querySelector('.main_under');
    const serchUnder = document.querySelector('.serbox');
    const cl = document.getElementById('cl');
    const cl2 = document.getElementById('cl2');

    cl.addEventListener('click', function(event) {
        event.preventDefault();
        mainUnder.style.opacity = mainUnder.style.opacity === '1' ? '0' : '1';
    });

    cl2.addEventListener('click', function(event) {
        event.preventDefault();
        serchUnder.style.opacity = serchUnder.style.opacity === '1' ? '0' : '1';
    });
});