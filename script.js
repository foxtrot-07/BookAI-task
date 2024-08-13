document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('.main');
    const mainBody = document.querySelector('.main-body');
    const tableRows = document.querySelectorAll('.pricing-table tr');

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode-active');
        main.classList.toggle('dark-mode-active');
        mainBody.classList.toggle('dark-mode-active');
        tableRows.forEach(row => row.classList.toggle('dark-mode-active'));
    }
   
    // Event listeners
    darkModeToggle.addEventListener('click', toggleDarkMode);
    document.querySelectorAll('.pricing-table th').forEach(th => {
    });
});
