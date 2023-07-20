// dark theme active

function dark(){
    var d = document.getElementById('mainbody');
    d.classList.add('dark-theme');
    document.getElementById('light-btn').style.display="block";
    document.getElementById('dark-btn').style.display="none";

    // d.remove("light-theme");
    // d.add("dark-theme");
}
function light(){
    var d = document.getElementById('mainbody');
    d.classList.add('light-theme');
    d.classList.remove('dark-theme');
    document.getElementById('light-btn').style.display="none";
    document.getElementById('dark-btn').style.display="block";

    // d.remove("light-theme");
    // d.add("dark-theme");
}