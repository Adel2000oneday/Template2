let NavMenu =document.querySelector(".Nav-Menu")
let Menu =document.querySelector(".slide")
NavMenu.addEventListener("click",function(){
    Menu.classList.toggle("active")
})
// const landing = document.querySelector(".landing")
// wrapper = document.querySelector(".over-lay"),
// sliderArray =Array.from( document.querySelectorAll(".landing img")),
// TextEL = document.querySelector(".text")
// slider = sliderArray.length
// let currentEl = 0
// buttons = document.querySelectorAll(".button")
// console.log(buttons)
// prevButton =document.getElementById("prev")
// nextButton =document.getElementById("next")
// // create ul element
// let UlEl =document.createElement("ul")
// UlEl.setAttribute("class","bullets")
// for(let i= 0;i<slider;i++){
// let LiEl =document.createElement("li")
// LiEl.setAttribute("data-index",i+1)
// UlEl.appendChild(LiEl)
// }
// landing.appendChild(UlEl)
// // the main function
// function theChecker(){
//     sliderArray[currentEl].classList.add("active")
//     UlEl.children[currentEl].classList.add("active")
//     removeActive()
//     autoSlide()
// }
// UlArray =Array.from( document.querySelectorAll(".bullets li")),
// function removeActive(){
//     sliderArray.forEach(function (img){
//         img.classList.remove("active")
//     });

//     UlArray.forEach(function (liEl){
//         liEl.classList.remove("active")
//     })
// }
//console.log(sliderArray)
// // Define function to start automatic image slider
// const autoSlide = () => {
// // Start the slideshow by calling slideImage() every 2 seconds
//     intervalId = setInterval(() => slideImage(++currentEl), 2000);
// }
// // Call autoSlide function on page load
// autoSlide()
// const slideImage = () => {
//     console.log(currentEl)
//     currentEl = currentEl === slider ? 0 : currentEl < 0 ? slider -1 :currentEl
//     wrapper.style.transform = `translate(-${currentEl * 100}%)`
// }
// // A function that updates the carousel display to show the next or previous image
// const updateClick = (e) => {
// // Stop the automatic slideshow
// clearInterval(intervalId);
// // Calculate the updated image index based on the button clicked
// currentEl += e.target.id === "next" ? 1: -1;
// slideImage(currentEl) ;
// autoSlide()
// }
// buttons.forEach((button) => button.addEventListener("click", updateClick));
// // Add mouseover event listener to wrapper element to stop auto sliding
// UlEl.addEventListener("mouseover", () => clearInterval(intervalId));
// // Add mouseleave event listener to UlEl element to start auto sliding again
// UlEl.addEventListener("mouseleave", autoSlide);
// // Add mouseover event listener to wrapper element to stop auto sliding
// prevButton.addEventListener("mouseover", () => clearInterval(intervalId));
// // Add mouseleave event listener to buttons element to start auto sliding again
// prevButton.addEventListener("mouseleave", autoSlide);
// // Add mouseover event listener to wrapper element to stop auto sliding
// nextButton.addEventListener("mouseover", () => clearInterval(intervalId));
// // Add mouseleave event listener to buttons element to start auto sliding again
// nextButton.addEventListener("mouseleave", autoSlide);
// // Add mouseover event listener to wrapper element to stop auto sliding
// TextEL.addEventListener("mouseover", () => clearInterval(intervalId));
// // Add mouseleave event listener to buttons element to start auto sliding again
// TextEL.addEventListener("mouseleave", autoSlide);
// theChecker()

// activation option list
// let optionEl =document.getElementsByClassName("options li")
//     console.log(optionEl)
// optionEl.onclick=choose()
// function choose(){

//     optionEl.classList.add("active")
// }
// TRY WRITING INVALID INPUT
// Filter portfolio items
const options = document.querySelectorAll('#options li');
const portContent = document.querySelector('.port-content');

options.forEach(option => {
option.addEventListener('click', () => {
    // Remove active class from all options
    options.forEach(opt => opt.classList.remove('active'));
    // Add active class to clicked option
    option.classList.add('active');
    // Get filter value
    const filterValue = option.getAttribute('data-filter');
    // Show/hide portfolio items based on filter value
    portContent.querySelectorAll('.port-item').forEach(item => {
    if (filterValue === '*' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    });
});
});