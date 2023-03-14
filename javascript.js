function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!email || !phone) {
      alert("Please both Email and Phone Number is Required");
      return false;
    }

    if (!phone.match(/^\d{11}$/)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    alert("Successfully submitted!")

    return true;  
  }



    
  