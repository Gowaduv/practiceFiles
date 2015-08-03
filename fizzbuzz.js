// if div by 3 print fizz
// if div by 5 print buzz
// if div by 3 and 5 print fizzbuzz
for (var i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}
// got it on 3rd try. First time forgot to use ===, second time had to make i <= 100 as it was only running to 99