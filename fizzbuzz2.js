function fizzbuzz() {
  var start = document.getElementById("start").value;
  start = parseInt(start);
  var finish = document.getElementById("finish").value;
  finish = parseInt(finish);
  var fizzbuzz = [];
  for (var i = 1; i < start; i++) {
    console.log("0 to start " + i)
    fizzbuzz.push("<li class='hide'></li>");
  }
  for (var i = start; i <= finish; i++) {
    console.log("start to finish " + i);
    fizzbuzz.push("<li><div>" + i + "</div></li>");
  }
  console.log("done " + i);
  document.getElementById("result").innerHTML = fizzbuzz.join("");
  console.log(fizzbuzz.join(""));
};
