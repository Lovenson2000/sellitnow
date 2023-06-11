//ADDING FUNCTIONALITY TO THE NAV BAR


function check() {
    let inputs = document.getElementById('checkbox');
    inputs.checked = true;
}
  //create uncheck function 
  function uncheck() {
    let inputs = document.getElementById('checkbox');
    inputs.checked = false;
}
  window.onload = function() {
    window.addEventListener('load', check, false);
}

// CREATING ANIMATION EFFECTS USING SCROLLREVEAL
  
//ANIMATING THE IMAGES IN THE MORE PRODUCTS SECTION

const sr = ScrollReveal();

sr.reveal('.more-image', { 
  delay: 400,
  duration: 800,
  distance: '50px',
  origin: "bottom",
  easing: "ease-in-out",
  interval: 300,

});

//ANIMATING THE STORY SECTION

sr.reveal(".story-1", {
  delay:600,
  duration:1500,
  distance: "90px",
  origin:"left",
  easing: "ease-in"

})

sr.reveal(".story-2", {
  delay:400,
  duration:1000,
  distance: "90px",
  origin:"right",
  easing: "ease-out"

})

sr.reveal(".story-3", {
  delay:400,
  duration:1000,
  distance: "80px",
  origin:"bottom",
  easing: "ease-in-out"

})

//ANIMATING THE STORY BUTTON FOR THE MOBILE VERSION ONLY
sr.reveal(".story-btn", {
  delay:200,
  duration:800,
  distance: "60px",
  origin:"bottom",
  easing: "ease-out",
  desktop:false,
  mobile:true

})




