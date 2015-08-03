// if div by 3 print fizz
// if div by 5 print buzz
// if div by 3 and 5 print fizzbuzz
function fizzbuzz() {
  var start = document.getElementById("start").value;
  start = parseInt(start);
  var finish = document.getElementById("finish").value;
  finish = parseInt(finish);
  var fizzbuzz = [];
  console.log("start fizz buzz with:");
  console.log(typeof(start));
  console.log(finish);
  for (var i = start; i <= finish; i++) {
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      fizzbuzz += "<li class='fizz buzz'>fizzbuzz</li>";
    } else if (i % 5 === 0) {
      fizzbuzz += "<li class='buzz'>buzz</li>";
    } else if (i % 3 === 0) {
      fizzbuzz += "<li class='fizz'>fizz</li>";
    } else {
      console.log(i);
      fizzbuzz += "<li>" + i + "</li>";
    }
  };
  console.log("loop complete");
  document.getElementById("result").innerHTML = fizzbuzz;
};
// got it on 3rd try. First time forgot to use ===, second time had to make i <= 100 as it was only running to 99
