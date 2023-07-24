const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download.jpeg") {
    myImage.setAttribute("src", "images/dowload1.jpeg");
  } else {
    myImage.setAttribute("src", "images/download.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `LOVE IS POWERFUL, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `LOVE IS POWERFUL, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };