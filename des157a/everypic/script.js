(function() {
    "use strict"
    console.log("reading js");

    /*
    const scrollContainer = document.getElementsByClassName("main");
    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
    */
    var item = document.getElementsByTagName('main')[0];
    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0){item.scrollLeft += 100;} 
        else {item.scrollLeft -= 100;}
    });
})();




