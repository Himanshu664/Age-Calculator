function calAge() {
  var inputage = document.getElementById("dob").value;
  var ud = Date.parse(inputage);
  var nd = Date.now();
  var agemilli = nd - ud;
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var yy = Math.round(agemilli / years);
  var month = yy * 12;
  var day = yy * 365;
  var hour = Math.round(agemilli / hours);
  document.getElementById("demo").innerHTML =
    "Age in years " +
    yy +
    " Age in month " +
    month +
    " Age in days " +
    day +
    " Age in hour " +
    hour;
}
