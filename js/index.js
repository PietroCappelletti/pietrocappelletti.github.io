var isDarkTheme;

window.addEventListener("load", function(){
    setThemeVariables();
});

window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && setThemeVariables() // listener
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && setThemeVariables() // listener
);
  

function setThemeVariables(){
    isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkTheme){
        //dark theme colors
        document.querySelector(':root').style.setProperty('--bg-color', '#2c2c2c');
        document.querySelector(':root').style.setProperty('--txt-color', '#ffffff');
        document.querySelector(':root').style.setProperty('--main-color', '#3398cc');
        document.querySelector(':root').style.setProperty('--main-dark-color', '#207bb9');
        document.querySelector(':root').style.setProperty('--main-light-color', '#207bb9');
    }
    else
    {
        //light mode colors
        document.querySelector(':root').style.setProperty('--bg-color', '#fafafa');
        document.querySelector(':root').style.setProperty('--txt-color', '#000000');
        document.querySelector(':root').style.setProperty('--main-color', '#3398cc');
        document.querySelector(':root').style.setProperty('--main-dark-color', '#207bb9');
        document.querySelector(':root').style.setProperty('--main-light-color', '#207bb9');
    }
}