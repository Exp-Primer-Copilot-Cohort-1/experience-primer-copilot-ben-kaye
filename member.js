function skillsMember() {
  var member = document.getElementById("member");
  var memberVal = member.options[member.selectedIndex].value;
  if (memberVal === "1") {
    document.getElementById("skills").style.display = "block";
    document.getElementById("skills").style.display = "block";
  } else {
    document.getElementById("skills").style.display = "none";
    document.getElementById("skills").style.display = "none";
  }
}