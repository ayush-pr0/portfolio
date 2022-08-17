const scriptURL =
    "https://script.google.com/macros/s/AKfycbzTjBubwfR8EgxuURuDoFWYgXLEiZhWOQhdiX_xKiEPTa94wCWsNMJ-Y7a4lLLLRBaB/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message send Successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
