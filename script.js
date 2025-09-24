function getFormvalue(event) {
      event.preventDefault(); // stop form from refreshing the page

      // Access form fields using document.forms
      const form = document.forms["loginForm"];
      const firstName = form["fname"].value.trim();
      const lastName = form["lname"].value.trim();

      if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
        return;
      }

      // Concatenate names
      const fullName = `${firstName} ${lastName}`.trim();

      // Show result
      alert(fullName);
    }