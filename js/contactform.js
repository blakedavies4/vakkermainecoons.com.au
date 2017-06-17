$('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSc6pFz8qVZTcf5B9EipHZNMfHEqs3RQksadFjvjDU_IcH5v-w/formResponse",
	        data: $(this).serialize(),
	        type: "POST",
	        dataType: "xml",
	        success: function(data) {
	          console.log('Submission successful');
	        },
	        error: function(xhr, status, error) {
	          console.log('Submission failed: ' + error);
	        }
	      });
	    });
	    $('#gform').on('submit', function(e) {
	  		$('#gform *').fadeOut(0);
	  		$('#contact-box *').fadeOut(0);
	  		$('#gform').prepend(
	    		'<h3 class="thank-you">Thank-you!!<h3><p class="thank-you">Your message has been submitted successfully.</p>'
	    	);
	  	});