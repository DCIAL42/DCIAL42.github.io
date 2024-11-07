function showContact() {
    document.getElementById("contact").style.display = "block";
    setTimeout(() => {
        document.getElementById("contact").style.minWidth = "50%";
        document.getElementById("contact").style.minHeight = "50%";
    }, 0);
}

function hideContact() {
    document.getElementById("contact").style.minWidth = "40%";
    document.getElementById("contact").style.minHeight = "40%";
    document.getElementById("contact").style.display = "none";
}

let sections = [document.getElementById("home"),document.getElementById("about"),document.getElementById("work"),document.getElementById("images")];
let navLi = document.querySelectorAll("nav ul li");

window.onscroll = () => {
    console.log("af");
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop ) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};