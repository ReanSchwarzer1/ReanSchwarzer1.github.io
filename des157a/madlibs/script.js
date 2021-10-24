(function () {
    "use strict";
    console.log("reading js");

    let form = document.querySelector("body");
    let madlib = document.querySelector("#madlib");
    let ipt = document.querySelector("#ipt");
    let otpt = document.querySelector("#otpt");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let noun1 = document.querySelector("#noun1").value;
        let name1 = document.querySelector("#name1").value;
        let noun2 = document.querySelector("#noun2").value;
        let adj1 = document.querySelector("#adj1").value;
        let verb1 = document.querySelector("#verb1").value;
        let adj2 = document.querySelector("#adj2").value;
        let noun3 = document.querySelector("#noun3").value;

        for (let field of document.querySelectorAll("ipt[type=text]"))
            field.value = "";

        let text = `High Alert Tranmission: Captain. ${name1.toUpperCase()} here, we are in need of immediate support! The ${noun1.toUpperCase()} can no longer maintain it's thrusters.
         We have accidentally warped near a ${adj1.toUpperCase()} black-hole, 10 times the size of our system! Please help us to ${verb1.toUpperCase()} and send the best rescue forces from the Star-ship alliance! 
         I have primed the ship's AI to handle a ${adj2.toUpperCase()} warp towards the ${noun2.toUpperCase()} system near our planet ${noun3.toUpperCase()} which could potentially rip the ship apart! [Transimission Lost...]`;
        ipt.classList.add("slideout");
        otpt.classList.add("slidein");
        madlib.innerHTML = text;
    });
})();