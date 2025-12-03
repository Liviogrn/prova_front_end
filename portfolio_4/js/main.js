// Aguardar o DOM estar carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // Toggle do menu hamburger
    function toggleMenu(){
        document.getElementById("navLinks").classList.toggle("show");
    }
    window.toggleMenu = toggleMenu;

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("navLinks").classList.remove("show");
        });
    });

    // Scroll suave para as âncoras
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
        const navbar = document.querySelector(".navbar");
        const navLinks = document.getElementById("navLinks");
        
        if(navbar && navLinks && !navbar.contains(e.target) && navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });

    // Portfolio card slidedown ao clicar na imagem
    document.querySelectorAll(".portfolio-card").forEach(card => {
        const clickableImage = card.querySelector(".clickable-image");
        
        if(clickableImage) {
            clickableImage.addEventListener("click", function(e) {
                e.stopPropagation();
                // Fechar outros cards abertos
                document.querySelectorAll(".portfolio-card.active").forEach(activeCard => {
                    if(activeCard !== card) {
                        activeCard.classList.remove("active");
                    }
                });
                // Toggle do card clicado
                card.classList.toggle("active");
            });
        }
    });

});

