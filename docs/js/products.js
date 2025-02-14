// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Apply animations to each product section
gsap.utils.toArray('.product').forEach((product) => {
    // Parallax zoom-out effect on the product image
    gsap.to(product.querySelector('.product-image'), {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
            trigger: product,
            scrub: 0,
            start: 'top bottom',
            end: 'bottom top',
        },
    });
});


// Apply animations to each product info section
gsap.utils.toArray('.product-info').forEach((product_info) => {
    gsap.from(product_info, {
        opacity: 0,
        y: "5vh", // Optional: Adds a slight upward movement
        scale: 0.8, // Optional: Scales the element down slightly
        // duration: 2, // Only if not using 'scrub'
        ease: 'power2.out', // Only if not using 'scrub'
        scrollTrigger: {
            scrub: 2,
            trigger: product_info,
            start: 'top 90%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
            markers: false,
            // Remove 'scrub' if you want a time-based animation
        },
    });
});

// Apply staggered fade-in effect to product reviews
gsap.utils.toArray('.product-reviews').forEach((reviewsContainer) => {
    gsap.from(reviewsContainer.querySelectorAll('.review'), {
        opacity: 0,
        y: "5vh", // Optional: Adds a slight upward movement
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2, // Stagger delay between each review
        scrollTrigger: {
            scrub: 2,
            trigger: reviewsContainer,
            start: 'top 80%',
            end: 'bottom 90%',
            toggleActions: 'play none none reverse',
            markers: false,
        },
    });
});

// Apply fade-in effect to the music stores section
gsap.from('#music-stores', {
    opacity: 0,
    y: "5vh", // Optional: Adds a slight upward movement
    delay: 0.8,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
        scrub: 2,
        trigger: '#music-stores',
        start: 'top 80%',
        end: 'bottom 90%',
        toggleActions: 'play none none reverse',
    },
});

// Apply parallax effect to the background of the grid div
gsap.utils.toArray('.grid').forEach((grid) => {
    gsap.from(grid, {
        // backgroundPositionY: '15vh', // Adjust the value as needed for the parallax effect
        backgroundSize: "calc(max(100vw, 100vh))",
        ease: 'linear',
        scrollTrigger: {
            trigger: grid, // Use the current grid element
            start: 'top bottom',
            end: 'bottom top',
            scrub: 8,
            markers: false,
        },
    });
});