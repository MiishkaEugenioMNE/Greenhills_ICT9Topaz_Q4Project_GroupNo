//JavaScript Login & Login Attempts

let attempts = 0;
const MAX_ATTEMPTS = 3;
let authenticated = false;

function Login() {
    while (attempts < MAX_ATTEMPTS && !authenticated) {
        let Username = document.getElementById("Username").value;
        let Password = document.getElementById("Password").value;

        if (Username === "Miishka Eugenio" && Password === "121610") {
            authenticated = true;
            alert("Login successful!");
            window.location.href = "profile.html";
            return;
        } else {
            attempts++;
            alert("Invalid. Attempt " + attempts + " of " + MAX_ATTEMPTS);

            if (attempts === MAX_ATTEMPTS) {
                alert("Try Again Later!");
                document.getElementById("Username").disabled = true;
                document.getElementById("Password").disabled = true;
            }
            break;
        }
    }
}
//Profile Picture
//click avatar to open file picker
const avatarBox = document.getElementById("avatarBox");
const fileInput = document.getElementById("fileInput");
const avatar = document.getElementById("avatarPreview");

avatarBox.addEventListener("click", () => {
  fileInput.click();
});

//show image
fileInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      avatar.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
})