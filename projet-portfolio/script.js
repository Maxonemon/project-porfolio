document.addEventListener('DOMContentLoaded', function() {
    
    var navLinks = document.querySelectorAll('.nav-link');

    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            

            
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            
            link.classList.add('active');
        });
    });
});
