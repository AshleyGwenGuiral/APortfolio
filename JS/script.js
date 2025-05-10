
    function downloadResume() {
      // Replace with your actual resume path
      const resumeUrl = "IMAGES/RESUME.pdf";
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = "RESUME.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }


    // JS is not required here, but included if needed for dynamic features
    ("About page loaded.");

   
    // Add future JS features here
    console.log("Home page loaded.");

 
    
    function showImage() {
      const img = document.getElementById("projectImage");
      img.style.display = "block";
    }
