"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  console.log(document.getElementById("video-background"));
  document.getElementById("intro").style.height = window.innerHeight * 0.8 + "px";
  document.getElementById("video-background").style.bottom = "0px";
  vidRescale();
  //async load video in iframe
  var f = document.querySelectorAll("iframe")[0];
  f.src = "https://www.youtube.com/embed/VjqNcY2WdBc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=VjqNcY2WdBc";
});

window.addEventListener("resize", function (event) {
  vidRescale();
});

function vidRescale() {
  console.log("resizing");
  var intro = document.getElementById("intro");
  var vidB = document.getElementById("video-background");
  var vidF = document.getElementById("video-foreground");

  var w = window.innerWidth + 200;
  var h = intro.style.height.slice(0, -2) + 200;

  if (w / h > 16 / 9) {
    console.log("A");
    vidB.style.height = w / 16 * 9 + "px";
    vidB.style.width = w + "px";
    vidF.style.left = "0px";
  } else {
    console.log("B");
    vidB.style.width = h / 9 * 16 + "px";
    vidB.style.height = h + "px";
    //vidF.style.left = -1 * ((vidF.offsetWidth - w) / 2) + "px";
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwidmlkUmVzY2FsZSIsImYiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3JjIiwiaW50cm8iLCJ2aWRCIiwidmlkRiIsInciLCJpbm5lcldpZHRoIiwiaCIsInNsaWNlIiwid2lkdGgiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBU0MsS0FBVCxFQUFnQjtBQUM1REMsVUFBUUMsR0FBUixDQUFZSixTQUFTSyxjQUFULENBQXdCLGtCQUF4QixDQUFaO0FBQ0FMLFdBQVNLLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLENBQXVDQyxNQUF2QyxHQUNFQyxPQUFPQyxXQUFQLEdBQXFCLEdBQXJCLEdBQTJCLElBRDdCO0FBRUFULFdBQVNLLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxLQUE1QyxDQUFrREksTUFBbEQsR0FBMkQsS0FBM0Q7QUFDQUM7QUFDQTtBQUNBLE1BQU1DLElBQUlaLFNBQVNhLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLENBQXBDLENBQVY7QUFDQUQsSUFBRUUsR0FBRixHQUNFLHFIQURGO0FBRUQsQ0FWRDs7QUFZQU4sT0FBT1AsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBU0MsS0FBVCxFQUFnQjtBQUNoRFM7QUFDRCxDQUZEOztBQUlBLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEJSLFVBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsTUFBTVcsUUFBUWYsU0FBU0ssY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBTVcsT0FBT2hCLFNBQVNLLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWI7QUFDQSxNQUFNWSxPQUFPakIsU0FBU0ssY0FBVCxDQUF3QixrQkFBeEIsQ0FBYjs7QUFFQSxNQUFJYSxJQUFJVixPQUFPVyxVQUFQLEdBQW9CLEdBQTVCO0FBQ0EsTUFBSUMsSUFBSUwsTUFBTVQsS0FBTixDQUFZQyxNQUFaLENBQW1CYyxLQUFuQixDQUF5QixDQUF6QixFQUE0QixDQUFDLENBQTdCLElBQWtDLEdBQTFDOztBQUVBLE1BQUlILElBQUlFLENBQUosR0FBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCakIsWUFBUUMsR0FBUixDQUFZLEdBQVo7QUFDQVksU0FBS1YsS0FBTCxDQUFXQyxNQUFYLEdBQW9CVyxJQUFJLEVBQUosR0FBUyxDQUFULEdBQWEsSUFBakM7QUFDQUYsU0FBS1YsS0FBTCxDQUFXZ0IsS0FBWCxHQUFtQkosSUFBSSxJQUF2QjtBQUNBRCxTQUFLWCxLQUFMLENBQVdpQixJQUFYLEdBQWtCLEtBQWxCO0FBQ0QsR0FMRCxNQUtPO0FBQ0xwQixZQUFRQyxHQUFSLENBQVksR0FBWjtBQUNBWSxTQUFLVixLQUFMLENBQVdnQixLQUFYLEdBQW1CRixJQUFJLENBQUosR0FBUSxFQUFSLEdBQWEsSUFBaEM7QUFDQUosU0FBS1YsS0FBTCxDQUFXQyxNQUFYLEdBQW9CYSxJQUFJLElBQXhCO0FBQ0E7QUFDRDtBQUNGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvLWJhY2tncm91bmRcIikpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludHJvXCIpLnN0eWxlLmhlaWdodCA9XG4gICAgd2luZG93LmlubmVySGVpZ2h0ICogMC44ICsgXCJweFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvLWJhY2tncm91bmRcIikuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgdmlkUmVzY2FsZSgpO1xuICAvL2FzeW5jIGxvYWQgdmlkZW8gaW4gaWZyYW1lXG4gIGNvbnN0IGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpWzBdO1xuICBmLnNyYyA9XG4gICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9WanFOY1kyV2RCYz9jb250cm9scz0wJnNob3dpbmZvPTAmcmVsPTAmYXV0b3BsYXk9MSZsb29wPTEmbXV0ZT0xJnBsYXlsaXN0PVZqcU5jWTJXZEJjXCI7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmlkUmVzY2FsZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHZpZFJlc2NhbGUoKSB7XG4gIGNvbnNvbGUubG9nKFwicmVzaXppbmdcIik7XG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyb1wiKTtcbiAgY29uc3QgdmlkQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tYmFja2dyb3VuZFwiKTtcbiAgY29uc3QgdmlkRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tZm9yZWdyb3VuZFwiKTtcblxuICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoICsgMjAwO1xuICBsZXQgaCA9IGludHJvLnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgKyAyMDA7XG5cbiAgaWYgKHcgLyBoID4gMTYgLyA5KSB7XG4gICAgY29uc29sZS5sb2coXCJBXCIpO1xuICAgIHZpZEIuc3R5bGUuaGVpZ2h0ID0gdyAvIDE2ICogOSArIFwicHhcIjtcbiAgICB2aWRCLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcbiAgICB2aWRGLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiQlwiKTtcbiAgICB2aWRCLnN0eWxlLndpZHRoID0gaCAvIDkgKiAxNiArIFwicHhcIjtcbiAgICB2aWRCLnN0eWxlLmhlaWdodCA9IGggKyBcInB4XCI7XG4gICAgLy92aWRGLnN0eWxlLmxlZnQgPSAtMSAqICgodmlkRi5vZmZzZXRXaWR0aCAtIHcpIC8gMikgKyBcInB4XCI7XG4gIH1cbn1cbiJdfQ==
