const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");
console.log(sidemenu);

const openmenu = function () {
  sidemenu.style.right = "0";
};
const closemenu = function () {
  sidemenu.style.right = "-200px";
};

const openTab = function (tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzx0MurhQQ0nJsa2SjAWPSDejqW51hbUz238jQp2Ys3GokNWRo7Htu8pQ-_1DtSv1ESMg/exec";
const form = document.forms["submit-to-google-sheet"];
const messege = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      messege.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        messege.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
