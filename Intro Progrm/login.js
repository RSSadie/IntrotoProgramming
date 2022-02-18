function checkCreds(){
    console.log("checkCreds() started...");
    //create the name and badge variables and fill them in
    var firstName = document.getElementById("fName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name: " + lastName);
    var badgeNumb = document.getElementById("badgeID").value;
    console.log("Badge Number: " + badgeNumb);

    //name a fullName variable
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);

    //check if full name is 20 chars or less
    var fullNameLength = fullName.length;
    console.log(fullNameLength);
    if(fullNameLength > 21 || fullNameLength < 3){
        document.getElementById("loginStatus").innerHTML =
        "Invalid Full Name; please resubmit.";
        //check if the badge number is less than 1000
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML =
        "Invalid Badge Number; please resubmit."
    } else {
        //if everything is ok, then grant access to the UATSpace webpage
        alert("Access Granted, Welcome " + fullName);
        location.replace("http://127.0.0.1:5500/Intro%20Progrm/tagsV1.html");
    }
}