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
    var item = document.getElementsByTagName('main')[0]; //this is getting all elements in main 
    window.addEventListener('wheel', function(event) { //eventlistener "listens"/waits for the user to use the mouse wheel and then begins function
        if (event.deltaY > 0){item.scrollLeft += 100;}  //if change in deltaY (Y axis is 0), then the whole page/page in "main"  scrolls left
        else {item.scrollLeft -= 100;} //scrolls right
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => { //getting all <a> elements with "href" tag
        anchor.addEventListener('click', function (e) { //listening for click (when the user clicks one of the <a> href hyperlinks)
            e.preventDefault(); 
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' //it gets the selected attribute and the page scrolls into view wherever the user clicked with behaviour "smooth"
            });
        });
    });

})();




