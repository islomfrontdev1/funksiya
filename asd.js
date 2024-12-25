document.getElementById("dark-mode").addEventListener("click", function () {
    alert("Dark mode rejimi yoqildi");
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    document.querySelector(".navbar").style.backgroundColor = "#333";
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.style.color = "#fff";
    });
    document.querySelector(".content").style.color = "#fff";
    document.querySelector(".cta-button").style.backgroundColor = "#ff9e2c";
});

document.getElementById("light-mode").addEventListener("click", function () {
    alert("Light mode rejimi yoqildi");
    document.body.style.backgroundColor = "#e8d7c0";
    document.body.style.color = "#333";
    document.querySelector(".navbar").style.backgroundColor = "#e8d7c0";
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.style.color = "#333";
    });
    document.querySelector(".content").style.color = "#333";
    document.querySelector(".cta-button").style.backgroundColor = "#ff9e2c";
});
