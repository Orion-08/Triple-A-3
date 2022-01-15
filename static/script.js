var def = 1;
function def_display() {
  if (def == 1) {
    document.getElementById("username").style.display = "inline";
    document.getElementById("img1").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    return (def = 0);
  }
}

def_display();
// alert("Hi");
var a = 1;
function show_hide_usnm() {
  if (a == 1) {
    document.getElementById("img1").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    document.getElementById("img2").style.filter = "none";
    document.getElementById("img3").style.filter = "none";
    document.getElementById("img4").style.filter = "none";
    document.getElementById("img5").style.filter = "none";
    document.getElementById("username").style.display = "inline";
    document.getElementById("email").style.display = "none";
    document.getElementById("pass").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("loc").style.display = "none";
    return (a = 1);
  }
  // else{
  //     // document.getElementById("username").style.display="none";
  //     // return a=1;
  // }
}
var b = 1;
function show_hide_email() {
  if (b == 1) {
    document.getElementById("img2").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    document.getElementById("img1").style.filter = "none";
    document.getElementById("img3").style.filter = "none";
    document.getElementById("img4").style.filter = "none";
    document.getElementById("img5").style.filter = "none";
    document.getElementById("email").style.display = "inline";
    document.getElementById("username").style.display = "none";
    document.getElementById("pass").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("loc").style.display = "none";
    return (b = 1);
  }
  // else{
  // document.getElementById("email").style.display="none";
  // return b=1;
  // }
}
var c = 1;
function show_hide_pass() {
  if (c == 1) {
    document.getElementById("img3").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    document.getElementById("img1").style.filter = "none";
    document.getElementById("img2").style.filter = "none";
    document.getElementById("img4").style.filter = "none";
    document.getElementById("img5").style.filter = "none";
    document.getElementById("pass").style.display = "inline";
    document.getElementById("username").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("loc").style.display = "none";
    return (c = 1);
  }
  // else{
  // document.getElementById("pass").style.display="none";
  // return a=1;
  // }
}
var d = 1;
function show_hide_phone() {
  if (d == 1) {
    document.getElementById("img4").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    document.getElementById("img1").style.filter = "none";
    document.getElementById("img3").style.filter = "none";
    document.getElementById("img2").style.filter = "none";
    document.getElementById("img5").style.filter = "none";
    document.getElementById("phone").style.display = "inline";
    document.getElementById("username").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("pass").style.display = "none";
    document.getElementById("loc").style.display = "none";
    return (d = 1);
  }
  // else{
  //     // document.getElementById("phone").style.display="none";
  //     // return a=1;
  // }
}
var e = 1;
function show_hide_loc() {
  if (e == 1) {
    document.getElementById("img5").style.filter =
      " drop-shadow(2px 2px 5px rgb(2, 96, 173))";
    document.getElementById("img1").style.filter = "none";
    document.getElementById("img3").style.filter = "none";
    document.getElementById("img4").style.filter = "none";
    document.getElementById("img2").style.filter = "none";
    document.getElementById("loc").style.display = "inline";
    document.getElementById("phone").style.display = "none";
    document.getElementById("username").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("pass").style.display = "none";
    return (e = 1);
  }
  // else{
  //     // document.getElementById("loc").style.display="none";
  //     return a=1;
  // }
}
