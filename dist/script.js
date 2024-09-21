const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Ensure GSAP is included in your project
    const letters = document.querySelectorAll('h2 span');

    // Use GSAP to animate each letter with a stagger effect
    gsap.from(letters, {
        opacity: 0,             // Start from transparent
        y: 20,                  // Start from 20px below its final position
        duration: 0.5,          // Each letter takes 0.5 seconds to animate
        stagger: 0.1,           // Delay of 0.1 seconds between each letter
        ease: "power3.out" 
    });
  




    // document.addEventListener("DOMContentLoaded", function() {
    //     const heading = document.getElementById('dynamic-heading');
    //     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F4FF33', '#FF33A1', '#33FFF4']; // Array of colors
    //     let index = 0;
    
    //     function changeColor() {
    //         const spans = heading.getElementsByTagName('span');
    //         for (let i = 0; i < spans.length; i++) {
    //             spans[i].style.color = colors[(index + i) % colors.length];
    //         }
    //         index = (index + 1) % colors.length;
    //     }
    
    //     setInterval(changeColor, 500); // Change color every 500 milliseconds
    // });
    
 