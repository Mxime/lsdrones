document.addEventListener("DOMContentLoaded", function(event) {
  if (window.innerWidth > 480) {
    document.getElementById("intro").style.height =
      window.innerHeight * 0.8 + "px";
    document.getElementById("video-background").style.bottom = "0px";
  }
  vidRescale();
  //async load video in iframe
  code_video;
  const code_video =
    document.querySelectorAll("#code_video")[0].value || "VjqNcY2WdBc";
  const f = document.querySelectorAll("iframe")[0];
  f.src = `https://www.youtube.com/embed/${code_video}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=${code_video}`;
});

window.addEventListener("resize", function(event) {
  vidRescale();
});

function vidRescale() {
  const intro = document.getElementById("intro");
  const vidB = document.getElementById("video-background");
  const vidF = document.getElementById("video-foreground");

  let w = window.innerWidth + 200;
  let h = intro.style.height.slice(0, -2) + 200;

  if (w / h > 16 / 9) {
    vidB.style.height = w / 16 * 9 + "px";
    vidB.style.width = w + "px";
    vidF.style.left = "0px";
  } else {
    vidB.style.width = h / 9 * 16 + "px";
    vidB.style.height = h + "px";
  }
}

$(document).ready(function() {
  $("#projects-items li:not([style*='display: none'])")
    .last()
    .addClass("last");
  let nbChild =
    $("#projects-items li:not([style*='display: none'])").length % 4;
  $("#projects-items")
    .removeClass()
    .addClass(`projects with-${nbChild}`);
  if ($("#projects-items li:not([style*='display: none'])").length < 4) {
    $("#projects-items").addClass(`less-than-4-children`);
  }
  if ((nbChild = 2)) {
    $("#projects-items li:not([style*='display: none'])")
      .eq(-2)
      .addClass("before-last");
  }
  $("#filterOptions li").click(function() {
    $("#projects-items li")
      .removeClass("last")
      .removeClass("before-last");
    // fetch the class of the clicked item
    var ourClass = $(this).data("show");
    console.log(ourClass);
    // reset the active class on all the buttons
    $("#filterOptions li").removeClass("active");
    // update the active state on our clicked button
    $(this).addClass("active");
    if (ourClass == "all") {
      // show all our items
      $("#projects-items")
        .find("li")
        .show(400);
    } else {
      // hide all elements that don't share ourClass
      $("#projects-items")
        .find("li:not(." + ourClass + ")")
        .hide(400);
      // show all elements that do share ourClass
      $("#projects-items")
        .find("li." + ourClass)
        .show(400);
    }
    nbChild = $("#projects-items li:not([style*='display: none'])").length % 4;
    $("#projects-items")
      .removeClass()
      .addClass(`projects with-${nbChild}`);
    if ($("#projects-items li:not([style*='display: none'])").length < 4) {
      $("#projects-items").addClass(`less-than-4-children`);
    }
    if ((nbChild = 2)) {
      $("#projects-items li:not([style*='display: none'])")
        .eq(-2)
        .addClass("before-last");
    }
    $("#projects-items li:not([style*='display: none'])")
      .last()
      .addClass("last");
    return false;
  });
});
