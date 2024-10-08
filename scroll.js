let lastScrollTop = 0;

        window.addEventListener('wheel', function(e) {
            e.preventDefault(); // Evitar el scroll por defecto
            const sections = document.querySelectorAll('.section');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (e.deltaY > 0) {
                // Scroll hacia abajo
                if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                    window.scrollTo({
                        top: (Math.floor(scrollTop / window.innerHeight) + 1) * window.innerHeight,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Scroll hacia arriba
                if (scrollTop > 0) {
                    window.scrollTo({
                        top: (Math.floor(scrollTop / window.innerHeight) - 1) * window.innerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });