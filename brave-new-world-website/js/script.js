// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', () => {
    // Load navigation and initial section
    loadNavigation();
    loadSection('overview');
    
    // Navigation handling (Event Delegation)
    document.addEventListener('click', (e) => {
        if (e.target.matches('nav a')) {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            loadSection(section);
        }
    });
});

async function loadNavigation() {
    try {
        const response = await fetch('sections/nav.html');
        const content = await response.text();
        document.querySelector('header').innerHTML = content;
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

async function loadSection(sectionName) {
    try {
        const response = await fetch(`sections/${sectionName}.html`);
        const content = await response.text();
        document.querySelector('main').innerHTML = content;
    } catch (error) {
        console.error('Error loading section:', error);
    }
}