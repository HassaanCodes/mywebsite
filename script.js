document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Page Loaded");

    document.documentElement.style.scrollBehavior = "smooth";

    document.querySelectorAll(".project-images").forEach(project => {
        project.addEventListener('click', () => {
            window.open(project.dataset.link, '_blank', 'noopener')
        })
    })
})