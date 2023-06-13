const styleSwitcherToggler = document.querySelector('.style__switcher__toggler');
styleSwitcherToggler.addEventListener('click', ()=>{
    document.querySelector('.style__switcher').classList.toggle('open');
});

//Hide Style switcher on Scroll
window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style__switcher').classList.contains('open'))
    {
        document.querySelector('.style__switcher').classList.remove('open');
    }
});

//Theme
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled', 'true');
        }
    });
}
//Dark Mode
const dayNight=document.querySelector('.day-night');

dayNight.addEventListener('click', ()=>{
    // dayNight.querySelector('i').classList.toggle('fa-sun');
    // dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load', ()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector('i').classList.add("fa-sun");
    }else{
        dayNight.querySelector('i').classList.add("fa-moon");
    }
});
