function showSidebar (){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar (){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
function lightmode(){
    let icon = document.body;
    icon.classList.toggle("dark-mode");
}
