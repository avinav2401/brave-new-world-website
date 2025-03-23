// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', () => {
    // Load initial section
    loadSection('overview');
    
    // Navigation handling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            loadSection(section);
        });
    });
});

async function loadSection(sectionName) {
    try {
        const response = await fetch(`sections/${sectionName}.html`);
        const content = await response.text();
        document.querySelector('main').innerHTML = content;
    } catch (error) {
        console.error('Error loading section:', error);
    }
}