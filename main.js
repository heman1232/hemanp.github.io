function openMenu(){
document.getElementById('sideMenu').style.marginLeft = '0';
document.getElementById('main').style.marginLeft = '250px';
document.getElementById('expandArrow').style.marginLeft = '250px';
document.body.style.backgroundColor = 'rgba(0,0,0,0.3)';

}

function closeMenu(){
document.getElementById('sideMenu').style.marginLeft = '-250';
document.getElementById('expandArrow').style.marginLeft = '0';
document.getElementById('main').style.marginLeft = '0';
document.body.style.backgroundColor = '#fff';
}