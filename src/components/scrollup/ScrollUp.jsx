import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollup = this.document.querySelector(".scrollup");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 560) 
            scrollup.classList.add("show-scroll");
        else 
            scrollup.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  )
}

export default ScrollUp