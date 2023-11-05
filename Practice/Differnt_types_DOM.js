//1)Element Object:

// Access an element by its ID
const myElement = document.getElementById("myElement");

// Access an element by its class name
const elementsByClass = document.getElementsByClassName("myClass");

//2)Node Object:

// Access the first child node of an element
const firstChild = myElement.firstChild;

// Access the parent node of an element
const parentNode = myElement.parentNode;

//3)Attribute Object:

// Access the "src" attribute of an image element
const imageSrc = myImageElement.getAttribute("src");

// Set the "href" attribute of a link element
myLinkElement.setAttribute("href", "https://example.com");

//4)Event Object:

//5)window object

// Open a new browser window
const newWindow = window.open("https://example.com");

// Set a timer to execute a function after a delay
window.setTimeout(function() {
  console.log("Delayed function executed");
}, 1000);


//6)From object

// Access a form element by its ID
const myForm = document.forms["myForm"];

// Access the value of an input element within a form
const inputValue = myForm.elements["inputField"].value;

//7)Location object

// Access the current URL
const currentURL = window.location.href;

// Redirect to a different URL
window.location.href = "https://newpage.com";

