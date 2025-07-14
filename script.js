// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alternativa para mostrar instruções locais
function showLocalInstructions(projectId) {
    const instructions = document.getElementById(`local-instructions-${projectId}`);
    instructions.style.display = instructions.style.display === 'block' ? 'none' : 'block';
}