function showContact() {
    document.getElementById("contact").style.display = "block";
    setTimeout(() => {
        document.getElementById("contact").style.width = "80%";
        document.getElementById("contact").style.height = "80%";
    }, 0);
}

function hideContact() {
    document.getElementById("contact").style.width = "40%";
    document.getElementById("contact").style.height = "40%";
    document.getElementById("contact").style.display = "none";
}