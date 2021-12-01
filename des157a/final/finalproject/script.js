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

            let target = this.hash;
            document.querySelector(this.getAttribute('href')).scrollLeft({
                behavior: 'smooth'
            });
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' //it gets the selected attribute and the page scrolls into view wherever the user clicked with behaviour "smooth"
            });
        });
    });

    window.addEventListener("keydown", function(e) {
        if(["ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    /*

    document.addEventListener('mousemove', reportPos);
    let prevLoc = 0;

    function reportPos(e) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 5;
        const xPos = e.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if (changePhoto !== prevLoc) {
            modalImg.src = `images/${changePhoto}.jpg`;
            prevLoc = changePhoto;
        }
    }
    */

    const mapBtn = document.querySelector("#map");

    mapBtn.addEventListener("click", () => {
      modal2Img.src = image.src = "./images/map.jpg";
      modal2.classList.add("appear");

      window.addEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          modal2.classList.remove("appear");
        }
      });
  
      mapclose.addEventListener("click", () => {
        modal2.classList.remove("appear");
      });
    });


    const infoBtn = document.querySelector("#info");

    infoBtn.addEventListener("click", () => {
      modal3Txt.innerHTML = "Welcome to my final project for DES 157A! While you're here, please try out the following steps:<br><li>Hover over the text</li><li>Try scrolling over horizontally using shift + mousescroll<li>Hover over all the images<li>Click any of the images<li>Cycle through the images<li>Click on the 'Check out map' button";
      modal3.classList.add("appear");

      window.addEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          modal3.classList.remove("appear");
        }
      });
  
      infoclose.addEventListener("click", () => {
        modal3.classList.remove("appear");
      });
    });

    // loading animation
    window.addEventListener("load", function () {
      const loadingbar = document.getElementById("innerloadingbar");
      loadingbar.className = "loadingAnimClass";
      setTimeout(() => {
          const preloader = document.getElementById("preloader");
          preloader.className = "fadeout";

          setTimeout(() => {
              preloader.style.display = "none";
          }, 1000);
      }, 2000);
    });





    const images = document.querySelectorAll("#image");
    const modal = document.querySelector(".modal");
    const modal2 = document.querySelector(".modal2");
    const modal3 = document.querySelector(".modal3");
    const modalImg = document.querySelector(".modalImg");
    const modal2Img = document.querySelector(".modal2Img");
    const modalTxt = document.querySelector(".modalTxt");
    const modal3Txt = document.querySelector(".modal3Txt");
    const close = document.querySelector(".close");
    const mapclose = document.querySelector(".mapclose");
    const infoclose = document.querySelector(".infoclose");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    const navLinks = document.querySelectorAll('nav ul li a');


    navLinks.forEach(function(eachLink) {
      eachLink.addEventListener('click', smoothScroll);
    });

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
          modalImg.src = image.src;
          modalTxt.innerHTML = image.alt;
          modal.classList.add("appear");
      
          let imageIndex = index;
          let next = imageIndex++;
          let prev = imageIndex--;
      
          window.addEventListener("keyup", (e) => {
            if (next >= images.length) {
                    next = 0;
                  } else if (prev < 0) {
                    prev = images.length - 1;
                  }
      
            if (e.keyCode === 37) {
              modalImg.src = images[prev].src;
              modalTxt.innerHTML = images[prev].alt;
              prev--;
              next = prev + 2;
            } else if (e.keyCode === 39) {
              modalImg.src = images[next].src;
              modalTxt.innerHTML = images[next].alt;
              next++;
              prev = next - 2;
            } else if (e.keyCode === 27) {
              modal.classList.remove("appear");
            }
          });
      
          prevBtn.addEventListener("click", () => {
            modalImg.src = images[prev].src;
            modalTxt.innerHTML = images[prev].alt;
            prev--;
            next = prev + 2;
            if (next >= images.length) {
              next = 0;
            } else if (prev < 0) {
              prev = images.length - 1;
            }
          });
      
          nextBtn.addEventListener("click", () => {
            modalImg.src = images[next].src;
            modalTxt.innerHTML = images[next].alt;
            next++;
            prev = next - 2;
            if (next >= images.length) {
              next = 0;
            } else if (prev < 0) {
              prev = images.length - 1;
            }
          });
      
          close.addEventListener("click", () => {
            modal.classList.remove("appear");
          });

        });
      });
})();




