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

        let text = `hgfhfgh ${name1[0].toUpperCase()}${name1.substring(1).toLowerCase()}! ddgdgdgd rere ${noun1[0].toUpperCase()}${noun1.substring(1).toLowerCase()} hhhh.
         fjisdsdis ${adj1.toLowerCase()} jjifdfjdfd, fsdfsdfsdf ${verb1.toLowerCase()} there 
         dfnnfosgnsdgn. sdfsdfnsdoffn ffdfdsffff ${adj2.toLowerCase()} ${noun2.toLowerCase()} tfgfdhskuyiitduryds
         nkldfsnn ${noun3[0].toUpperCase()}${noun3.substring(1).toLowerCase()} dfgfdgfdgfdg`;
        ipt.classList.add("slideout");
        otpt.classList.add("slidein");
        madlib.innerHTML = text;
    });
})();