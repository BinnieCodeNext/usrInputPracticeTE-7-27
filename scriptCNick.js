/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function displayWelcome() {
  let name = document.querySelector('#usrname').value;
  document.querySelector('#pwd').value = "";
  console.log(name);
  window.alert("Welcome " + name);
  
  // Store
  localStorage.setItem("usrname", name);
  
  // Retrieve
  
}

function welcome() {
  let name2 = localStorage.getItem("usrname");
  document.querySelector("#welcome").innerHTML = name2;
}
