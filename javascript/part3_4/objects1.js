var booksArray = ["Great Expectations", "The Remains of the day", "Peter Pan"];
var myBox = {height:6, width:8, length:10, volume: 480,
			material:"carboard", contents: booksArray, numOfBooks: 0};

console.log(myBox.width);
myBox.contents.push("On The Road");
console.log(myBox.contents);
console.log(myBox.volume);
myBox.height = 10;
myBox.volume=myBox.width*myBox.length*myBox.height;
console.log(myBox.volume);

//delete always returns true, it is asking is this property gone when delete completes
console.log(delete myBox.contents);
console.log(booksArray);

function addBook(box, name, writer) {
	box["numOfBooks"]++;
	box["book" + box["numOfBooks"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Charles Dickens");

addBook(myBox, "The Remains of the Day", "Kazuo Ishiguro");

addBook(myBox, "Peter Pan", "J.M. Barrie");

console.log(myBox.book1.title);
console.log(myBox["book2"]["author"]);

