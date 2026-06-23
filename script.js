const technicalBtn = document.getElementById("technicalBtn");
const creativeBtn = document.getElementById("creativeBtn");

const technical = document.getElementById("technical");
const creative = document.getElementById("creative");

technicalBtn.addEventListener("click", () => {

    technical.classList.remove("hidden");
    creative.classList.add("hidden");

    technicalBtn.classList.add("active");
    creativeBtn.classList.remove("active");
});

creativeBtn.addEventListener("click", () => {

    creative.classList.remove("hidden");
    technical.classList.add("hidden");

    creativeBtn.classList.add("active");
    technicalBtn.classList.remove("active");
});
