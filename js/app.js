/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
var i;
var nav;
var newA;
var newLi;
var aElement;
var sectionElement;
var newSection;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

//building the fourth section dynamically and add a button to add other sections
newSection = document.createElement('section');
let sectionDiv = document.createElement('div');
sectionDiv.setAttribute('class','landing__container');
sectionDiv.innerHTML = "<h2>Section4</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>\n<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>";
newSection.appendChild(sectionDiv);
newSection.setAttribute('id','section4');
newSection.setAttribute('data-nav','Section 4');
document.querySelector('main').appendChild(newSection);

// build the nav
nav = document.getElementById("navbar");
newLi = document.createElement("li");
newA = document.createElement("a");
let text = "";
for ( i = 4; i>0; i--){
  text = "<li><a>Section"+i+"</a>\n</li>" + text;
}
nav.innerHTML = text;
newLi = document.createElement("li");
newA.textContent = "DarkMode";
newA.setAttribute('id','bodyMode');
newLi.append(newA);
document.getElementById("navbar").appendChild(newLi);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
aElement = document.querySelectorAll("a");
sectionElement = document.querySelectorAll("section");
aElement[0].addEventListener('click',function()
{
  sectionElement[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
aElement[1].addEventListener('click',function()
{
  sectionElement[1].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
aElement[2].addEventListener('click',function()
{
  sectionElement[2].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
aElement[3].addEventListener('click',function()
{
  sectionElement[3].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

// Set sections as active

let onChange = (entries, observer) => {
  entries.forEach(entry => {
    let listElements = document.querySelectorAll('a');
    if (entry.isIntersecting) {
      entry.target.setAttribute('class','your-active-class');
      let x = entry.target.getAttribute('data-nav');
      if ((x).toString() === "section 1")
      listElements[0].style.backgroundColor = "#04AA6D";
      else if ((x).toString() === "section 2") {
        listElements[1].style.backgroundColor = "#04AA6D";
      }
      else if ((x).toString() === "section 3") {
        listElements[3].style.backgroundColor = "#04AA6D";
      }
      else if ((x).toString() === "section 4") {
        listElements[3].style.backgroundColor = "#04AA6D";
      }
    }
    else{
        entry.target.removeAttribute('class','your-active-class');
        let x = entry.target.getAttribute('data-nav');
        if ((x).toString() === "section 1")
        listElements[0].style.backgroundColor = "#333";
        else if ((x).toString() === "section 2") {
          listElements[1].style.backgroundColor = "#333";
        }
        else if ((x).toString() === "section 3") {
          listElements[3].style.backgroundColor = "#333";
        }
        else if ((x).toString() === "section 4") {
          listElements[3].style.backgroundColor = "#333";
        }
    }
  });
};


let observer = new IntersectionObserver(onChange, {
  threshold: [0.3]
});
let targets = document.querySelectorAll('section');
targets.forEach((target => observer.observe(target)));




// Setting dark and light mode
const modeButton = document.getElementById("bodyMode");
modeButton.addEventListener('click',function(){
  if (modeButton.textContent === "DarkMode"){
  document.getElementById("mode").style.backgroundColor = "#121212";
  document.getElementById("newdiv").style.backgroundColor = "#202124";
  let pelement = document.querySelectorAll("p");
  let h1element = document.querySelectorAll("h1");
  let h2element = document.querySelectorAll("h2");

  console.log(pelement);

  for (let j = 0; j < pelement.length; j++) {
      pelement[j].style.color = "#6398d0";
  }
  for (let j = 0; j < h1element.length; j++) {
      h1element[j].style.color = "#f78e25";
  }
  for (let j = 0; j < h2element.length; j++) {
      h2element[j].style.color = "#f78e25";
  }

  modeButton.textContent = "LightMode";
}
else{
  document.getElementById("mode").style.backgroundColor = "#e3bfe2";
  document.getElementById("newdiv").style.backgroundColor = "#e4ebe5";
  let pelement = document.querySelectorAll("p");
  let h1element = document.querySelectorAll("h1");
  let h2element = document.querySelectorAll("h2");

  for (let j = 0; j < pelement.length; j++) {
      pelement[j].style.color = "black";
  }
  for (let j = 0; j < h1element.length; j++) {
      h1element[j].style.color = "black";
  }
  for (let j = 0; j < h2element.length; j++) {
      h2element[j].style.color = "black";
  }

  modeButton.textContent = "DarkMode";
}
});
