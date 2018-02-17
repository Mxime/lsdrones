"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.innerWidth > 480) {
    document.getElementById("intro").style.height = window.innerHeight * 0.8 + "px";
    document.getElementById("video-background").style.bottom = "0px";
  }
  vidRescale();
  //async load video in iframe
  code_video;
  var code_video = document.querySelectorAll("#code_video")[0].value || "VjqNcY2WdBc";
  var f = document.querySelectorAll("iframe")[0];
  f.src = "https://www.youtube.com/embed/" + code_video + "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=" + code_video;
});

window.addEventListener("resize", function (event) {
  vidRescale();
});

function vidRescale() {
  var intro = document.getElementById("intro");
  var vidB = document.getElementById("video-background");
  var vidF = document.getElementById("video-foreground");

  var w = window.innerWidth + 200;
  var h = intro.style.height.slice(0, -2) + 200;

  if (w / h > 16 / 9) {
    vidB.style.height = w / 16 * 9 + "px";
    vidB.style.width = w + "px";
    vidF.style.left = "0px";
  } else {
    vidB.style.width = h / 9 * 16 + "px";
    vidB.style.height = h + "px";
  }
}

$(document).ready(function () {
  $("#projects-items li:not([style*='display: none'])").last().addClass("last");
  var nbChild = $("#projects-items li:not([style*='display: none'])").length % 4;
  $("#projects-items").removeClass().addClass("projects with-" + nbChild);
  if ($("#projects-items li:not([style*='display: none'])").length < 4) {
    $("#projects-items").addClass("less-than-4-children");
  }
  if (nbChild = 2) {
    $("#projects-items li:not([style*='display: none'])").eq(-2).addClass("before-last");
  }
  $("#filterOptions li").click(function () {
    $("#projects-items li").removeClass("last").removeClass("before-last");
    // fetch the class of the clicked item
    var ourClass = $(this).data("show");
    console.log(ourClass);
    // reset the active class on all the buttons
    $("#filterOptions li").removeClass("active");
    // update the active state on our clicked button
    $(this).addClass("active");
    if (ourClass == "all") {
      // show all our items
      $("#projects-items").find("li").show(400);
    } else {
      // hide all elements that don't share ourClass
      $("#projects-items").find("li:not(." + ourClass + ")").hide(400);
      // show all elements that do share ourClass
      $("#projects-items").find("li." + ourClass).show(400);
    }
    nbChild = $("#projects-items li:not([style*='display: none'])").length % 4;
    $("#projects-items").removeClass().addClass("projects with-" + nbChild);
    if ($("#projects-items li:not([style*='display: none'])").length < 4) {
      $("#projects-items").addClass("less-than-4-children");
    }
    if (nbChild = 2) {
      $("#projects-items li:not([style*='display: none'])").eq(-2).addClass("before-last");
    }
    $("#projects-items li:not([style*='display: none'])").last().addClass("last");
    return false;
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInZpZFJlc2NhbGUiLCJjb2RlX3ZpZGVvIiwicXVlcnlTZWxlY3RvckFsbCIsInZhbHVlIiwiZiIsInNyYyIsImludHJvIiwidmlkQiIsInZpZEYiLCJ3IiwiaCIsInNsaWNlIiwid2lkdGgiLCJsZWZ0IiwiJCIsInJlYWR5IiwibGFzdCIsImFkZENsYXNzIiwibmJDaGlsZCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiZXEiLCJjbGljayIsIm91ckNsYXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwic2hvdyIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFTQyxLQUFULEVBQWdCO0FBQzVELE1BQUlDLE9BQU9DLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JKLGFBQVNLLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLENBQXVDQyxNQUF2QyxHQUNFSixPQUFPSyxXQUFQLEdBQXFCLEdBQXJCLEdBQTJCLElBRDdCO0FBRUFSLGFBQVNLLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxLQUE1QyxDQUFrREcsTUFBbEQsR0FBMkQsS0FBM0Q7QUFDRDtBQUNEQztBQUNBO0FBQ0FDO0FBQ0EsTUFBTUEsYUFDSlgsU0FBU1ksZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUMsQ0FBekMsRUFBNENDLEtBQTVDLElBQXFELGFBRHZEO0FBRUEsTUFBTUMsSUFBSWQsU0FBU1ksZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsQ0FBcEMsQ0FBVjtBQUNBRSxJQUFFQyxHQUFGLHNDQUF5Q0osVUFBekMsdUVBQXFIQSxVQUFySDtBQUNELENBYkQ7O0FB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aUJBQUYsRUFBcUJHLFFBQXJCO0FBQ0Q7QUFDRCxRQUFLQyxVQUFVLENBQWYsRUFBbUI7QUFDakJKLFFBQUUsa0RBQUYsRUFDR08sRUFESCxDQUNNLENBQUMsQ0FEUCxFQUVHSixRQUZILENBRVksYUFGWjtBQUdEO0FBQ0RILE1BQUUsa0RBQUYsRUFDR0UsSUFESCxHQUVHQyxRQUZILENBRVksTUFGWjtBQUdBLFdBQU8sS0FBUDtBQUNELEdBMUNEO0FBMkNELENBNUREIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDgwKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyb1wiKS5zdHlsZS5oZWlnaHQgPVxuICAgICAgd2luZG93LmlubmVySGVpZ2h0ICogMC44ICsgXCJweFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tYmFja2dyb3VuZFwiKS5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICB9XG4gIHZpZFJlc2NhbGUoKTtcbiAgLy9hc3luYyBsb2FkIHZpZGVvIGluIGlmcmFtZVxuICBjb2RlX3ZpZGVvO1xuICBjb25zdCBjb2RlX3ZpZGVvID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvZGVfdmlkZW9cIilbMF0udmFsdWUgfHwgXCJWanFOY1kyV2RCY1wiO1xuICBjb25zdCBmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKVswXTtcbiAgZi5zcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtjb2RlX3ZpZGVvfT9jb250cm9scz0wJnNob3dpbmZvPTAmcmVsPTAmYXV0b3BsYXk9MSZsb29wPTEmbXV0ZT0xJnBsYXlsaXN0PSR7Y29kZV92aWRlb31gO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZpZFJlc2NhbGUoKTtcbn0pO1xuXG5mdW5jdGlvbiB2aWRSZXNjYWxlKCkge1xuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIik7XG4gIGNvbnN0IHZpZEIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvLWJhY2tncm91bmRcIik7XG4gIGNvbnN0IHZpZEYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvLWZvcmVncm91bmRcIik7XG5cbiAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aCArIDIwMDtcbiAgbGV0IGggPSBpbnRyby5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpICsgMjAwO1xuXG4gIGlmICh3IC8gaCA+IDE2IC8gOSkge1xuICAgIHZpZEIuc3R5bGUuaGVpZ2h0ID0gdyAvIDE2ICogOSArIFwicHhcIjtcbiAgICB2aWRCLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcbiAgICB2aWRGLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICB9IGVsc2Uge1xuICAgIHZpZEIuc3R5bGUud2lkdGggPSBoIC8gOSAqIDE2ICsgXCJweFwiO1xuICAgIHZpZEIuc3R5bGUuaGVpZ2h0ID0gaCArIFwicHhcIjtcbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJChcIiNwcm9qZWN0cy1pdGVtcyBsaTpub3QoW3N0eWxlKj0nZGlzcGxheTogbm9uZSddKVwiKVxuICAgIC5sYXN0KClcbiAgICAuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICBsZXQgbmJDaGlsZCA9XG4gICAgJChcIiNwcm9qZWN0cy1pdGVtcyBsaTpub3QoW3N0eWxlKj0nZGlzcGxheTogbm9uZSddKVwiKS5sZW5ndGggJSA0O1xuICAkKFwiI3Byb2plY3RzLWl0ZW1zXCIpXG4gICAgLnJlbW92ZUNsYXNzKClcbiAgICAuYWRkQ2xhc3MoYHByb2plY3RzIHdpdGgtJHtuYkNoaWxkfWApO1xuICBpZiAoJChcIiNwcm9qZWN0cy1pdGVtcyBsaTpub3QoW3N0eWxlKj0nZGlzcGxheTogbm9uZSddKVwiKS5sZW5ndGggPCA0KSB7XG4gICAgJChcIiNwcm9qZWN0cy1pdGVtc1wiKS5hZGRDbGFzcyhgbGVzcy10aGFuLTQtY2hpbGRyZW5gKTtcbiAgfVxuICBpZiAoKG5iQ2hpbGQgPSAyKSkge1xuICAgICQoXCIjcHJvamVjdHMtaXRlbXMgbGk6bm90KFtzdHlsZSo9J2Rpc3BsYXk6IG5vbmUnXSlcIilcbiAgICAgIC5lcSgtMilcbiAgICAgIC5hZGRDbGFzcyhcImJlZm9yZS1sYXN0XCIpO1xuICB9XG4gICQoXCIjZmlsdGVyT3B0aW9ucyBsaVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiI3Byb2plY3RzLWl0ZW1zIGxpXCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJsYXN0XCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJiZWZvcmUtbGFzdFwiKTtcbiAgICAvLyBmZXRjaCB0aGUgY2xhc3Mgb2YgdGhlIGNsaWNrZWQgaXRlbVxuICAgIHZhciBvdXJDbGFzcyA9ICQodGhpcykuZGF0YShcInNob3dcIik7XG4gICAgY29uc29sZS5sb2cob3VyQ2xhc3MpO1xuICAgIC8vIHJlc2V0IHRoZSBhY3RpdmUgY2xhc3Mgb24gYWxsIHRoZSBidXR0b25zXG4gICAgJChcIiNmaWx0ZXJPcHRpb25zIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIC8vIHVwZGF0ZSB0aGUgYWN0aXZlIHN0YXRlIG9uIG91ciBjbGlja2VkIGJ1dHRvblxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgaWYgKG91ckNsYXNzID09IFwiYWxsXCIpIHtcbiAgICAgIC8vIHNob3cgYWxsIG91ciBpdGVtc1xuICAgICAgJChcIiNwcm9qZWN0cy1pdGVtc1wiKVxuICAgICAgICAuZmluZChcImxpXCIpXG4gICAgICAgIC5zaG93KDQwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhpZGUgYWxsIGVsZW1lbnRzIHRoYXQgZG9uJ3Qgc2hhcmUgb3VyQ2xhc3NcbiAgICAgICQoXCIjcHJvamVjdHMtaXRlbXNcIilcbiAgICAgICAgLmZpbmQoXCJsaTpub3QoLlwiICsgb3VyQ2xhc3MgKyBcIilcIilcbiAgICAgICAgLmhpZGUoNDAwKTtcbiAgICAgIC8vIHNob3cgYWxsIGVsZW1lbnRzIHRoYXQgZG8gc2hhcmUgb3VyQ2xhc3NcbiAgICAgICQoXCIjcHJvamVjdHMtaXRlbXNcIilcbiAgICAgICAgLmZpbmQoXCJsaS5cIiArIG91ckNsYXNzKVxuICAgICAgICAuc2hvdyg0MDApO1xuICAgIH1cbiAgICBuYkNoaWxkID0gJChcIiNwcm9qZWN0cy1pdGVtcyBsaTpub3QoW3N0eWxlKj0nZGlzcGxheTogbm9uZSddKVwiKS5sZW5ndGggJSA0O1xuICAgICQoXCIjcHJvamVjdHMtaXRlbXNcIilcbiAgICAgIC5yZW1vdmVDbGFzcygpXG4gICAgICAuYWRkQ2xhc3MoYHByb2plY3RzIHdpdGgtJHtuYkNoaWxkfWApO1xuICAgIGlmICgkKFwiI3Byb2plY3RzLWl0ZW1zIGxpOm5vdChbc3R5bGUqPSdkaXNwbGF5OiBub25lJ10pXCIpLmxlbmd0aCA8IDQpIHtcbiAgICAgICQoXCIjcHJvamVjdHMtaXRlbXNcIikuYWRkQ2xhc3MoYGxlc3MtdGhhbi00LWNoaWxkcmVuYCk7XG4gICAgfVxuICAgIGlmICgobmJDaGlsZCA9IDIpKSB7XG4gICAgICAkKFwiI3Byb2plY3RzLWl0ZW1zIGxpOm5vdChbc3R5bGUqPSdkaXNwbGF5OiBub25lJ10pXCIpXG4gICAgICAgIC5lcSgtMilcbiAgICAgICAgLmFkZENsYXNzKFwiYmVmb3JlLWxhc3RcIik7XG4gICAgfVxuICAgICQoXCIjcHJvamVjdHMtaXRlbXMgbGk6bm90KFtzdHlsZSo9J2Rpc3BsYXk6IG5vbmUnXSlcIilcbiAgICAgIC5sYXN0KClcbiAgICAgIC5hZGRDbGFzcyhcImxhc3RcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn0pO1xuIl19
