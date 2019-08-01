var feedback = function(name, email, feedback) {
  this.name = name;
  this.email = email;
  this.feedback = feedback;
}
var usersFeed = []
$(document).ready(function() {
  $("#nav-btn2").hide()

  $("#nav-btn").click(function() {
    $(".mobile-nav").slideToggle()
    $("#nav-btn").hide()
      $("#nav-btn2").show()
  })
  $("#nav-btn2").click(function() {
    $(".mobile-nav").slideToggle()
    $("#nav-btn2").hide()
      $("#nav-btn").show()
  })
  $("#feedback").submit(function() {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("textarea").val();

    if (name == "") {
      alert("Your name is required")
    } else if (email == "") {
      alert("Your email is required")
    } else if (msg == "") {
      alert("Your feedback is required")
    } else {
      var newFeed = new feedback(name, email, msg);

      usersFeed.push(newFeed)
      console.log(usersFeed);
      alert("Thank you for your feedback")
    }


  })

})
