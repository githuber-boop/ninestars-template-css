//  Navbar
const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const links = document.getElementsByClassName('links')[0]
const link = document.querySelectorAll('.link')
const mobile = document.getElementsByClassName('navbar-mobile')[0]

toggleBtn.addEventListener('click', () =>{
    links.classList.toggle('active')
    mobile.classList.toggle('active')
})

// FAQ
var acc = document.getElementsByClassName("accordion--btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("color-active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  } 

// 

// Navbar Mobile Section Click

for (let i = 0; i < link.length; i++) {
  // link[i].style.backgroundColor = "red";
  link[i].addEventListener('click',()=> {
    links.classList.remove('active')
    mobile.classList.remove('active')
  })
}

// 


// Intersection Observer with Scrollspy

// document.addEventListener('DOMContentLoaded',() => {
//   (function Scrollspy(){
//       const targets = document.querySelectorAll('.item'),
//       options = {
//         threshold:0.5
//       }

//       if('IntersectionObserver' in window){
//         (()=> {
//           const inView = target=>{ 
//             const interSecObserver = new IntersectionObserver(entries=>{
//               entries.forEach(entry=>{
//                 const element =entry.target
//                 let currentNav =document.querySelectorAll(`a[href='#${element.id}']] `);
//                 (entry.isIntersecting) ? currentNav.classList.add('color-active') : currentNav.classList.remove('color-active')
//               })
//             },options)
//             interSecObserver.observe(target)
//           }
//           targets.forEach(inView)
//         })()
//       }
//   })() 
// })

// 

// Google Maps

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;