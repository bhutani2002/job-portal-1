var header = document.getElementsByTagName("header")[0];
var avatar = document.getElementsByClassName("fa-circle-user")[0];
window.addEventListener("scroll", () => {
    if (window?.scrollY > 100) {
        if (header == undefined) return
        else {
            header.classList.add("header-color");
            avatar.classList.add("fa-circle-user-color");
        }
    } else {
        header.classList.remove("header-color");
        avatar.classList.remove("fa-circle-user-color");
    }
})