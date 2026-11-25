$(function () {
  // Highlight current page in the menu
  var page = location.pathname.split("/").pop() || "index.html";
  $("nav a").each(function () {
    if ($(this).attr("href") === page) $(this).addClass("active");
  });

  // Dark mode button
  if (localStorage.getItem("theme") === "dark") $("body").addClass("dark");
  $("#themeBtn").on("click", function () {
    $("body").toggleClass("dark");
    localStorage.setItem("theme", $("body").hasClass("dark") ? "dark" : "light");
  });

  // Typing effect on home page
  var text = "Aspiring Software Developer", i = 0;
  (function type() {
    if (i <= text.length) { $("#typing").text(text.slice(0, i++)); setTimeout(type, 80); }
  })();

  // Skill bars animation
  $(".bar span").each(function () {
    $(this).animate({ width: $(this).data("level") + "%" }, 1200);
  });

  // Form validation and output
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var msg = $("#message").val().trim();
    var ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!name || !ok || !msg) {
      $("#output").empty();
      $("#msg").css("color", "red").text("Please fill all fields with a valid email.");
    } else {
      $("#msg").css("color", "green").text("Thank you, " + name + "! Your message was submitted.");
      $("#output").html("<h3>Submitted Details</h3><p><b>Name:</b> " + $("<div>").text(name).html() +
        "</p><p><b>Email:</b> " + $("<div>").text(email).html() +
        "</p><p><b>Message:</b> " + $("<div>").text(msg).html() + "</p>");
      this.reset();
    }
  });
});