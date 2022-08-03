// Stop recruiter spam bots picking up email address's

const var1 = "l@coding"
const var2 = "duck.au"
const var3 = "danie"
const eCodeSTART = 'mailto:'
const emailLink = document.querySelectorAll("#emaillink")

emailLink[0].addEventListener("click", realLink)
emailLink[1].addEventListener("click", realLink)
emailLink[2].addEventListener("click", realLink)


function realLink() {
    console.log("email clicked");
    location.href = eCodeSTART + var3 + var1 + var2
}

// Stop recruiter spam bots picking up phone numbers

const mob1 = "317"
const mob2 = "+61448"
const mob3 = "190"
const mobStart = "tel:"
const mobLink = document.querySelectorAll("#moblink")

mobLink[0].addEventListener("click", realMobile)
mobLink[1].addEventListener("click", realMobile)
mobLink[2].addEventListener("click", realMobile)

function realMobile() {
    console.log("mobile phone clicked")
    location.href = mobStart + mob2 + mob3 + mob1
}