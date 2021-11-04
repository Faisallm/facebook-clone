
var settingsMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle() {
    settingsMenu.classList.toggle('settings-menu-height')
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    // when users want to change the background theme

    if (localStorage.getItem('theme') == 'light') {
        // if it is white, it will make it dark.
        localStorage.setItem("theme", 'dark');
    }
    else {
        // if it is dark, it will make it white.
        localStorage.setItem('theme', 'light');
    }
}

// local storage in the javascript for the browser.
// key value pairs

// how to check if the local storage is there or not

// when users are visiting a website not for the first time.
if (localStorage.getItem('theme') == 'light') {
    // removing dark mode.  
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}

else if (localStorage.getItem('theme') == 'dark') {
    // dark mode!!
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}

else {
    // This line will be executed when ever people visit the...
    // website for the first time.
    localStorage.setItem("theme", 'light');
}


// //  getting a key from the local storage.
// localStorage.getItem('theme');