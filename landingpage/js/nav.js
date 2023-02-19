$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(".open-btn").on("click", function () {
  $(".sidebar").addClass("active");

  $(".open-btn").hide();

  $(".close-btn").show();
});
$(".close-btn").on("click", function () {
  $(".sidebar").removeClass("active");

  $(".close-btn").hide();

  $(".open-btn").show();
});
