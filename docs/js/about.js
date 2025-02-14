// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Apply animations to each history picture
gsap.utils.toArray('.history').forEach((history) => {
    gsap.to(history.querySelector('.history-image'), {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
            trigger: history,
            scrub: 0,
            start: 'top bottom',
            end: 'bottom top'
        }
    })
})

// Apply animations to each history info section
gsap.utils.toArray('.history-info').forEach((historyInfo) => {
    gsap.from(historyInfo, {
        opacity: 0,
        y: '5vh',
        scale: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            scrub: 2,
            trigger: historyInfo,
            start: 'top 90%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
            markers: false
        }
    })
})

// Apply staggered fade-in effect to quotes
gsap.utils.toArray('.history-quotes').forEach((quoteContainer) => {
    gsap.from(quoteContainer.querySelectorAll('.quote'), {
        opacity: 0,
        y: '5vh', // Optional: Adds a slight upward movement
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2, // Stagger delay between each quote
        scrollTrigger: {
            scrub: 2,
            trigger: quoteContainer,
            start: 'top 80%',
            end: 'bottom 90%',
            toggleActions: 'play none none reverse',
            markers: false
        }
    })
})

// Apply parallax effect to the background of the grid div
gsap.utils.toArray('.grid').forEach((grid) => {
    gsap.from(grid, {
        backgroundSize: 'calc(max(100vw, 100vh))',
        ease: 'linear',
        scrollTrigger: {
            trigger: grid, // Use the current grid element
            start: 'top bottom',
            end: 'bottom top',
            scrub: 8,
            markers: false
        }
    })
})
