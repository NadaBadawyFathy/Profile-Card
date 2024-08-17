let showsocial = (toggleCard, socialCard) => {
    let toggle = document.getElementById(toggleCard);
    let social = document.getElementById(socialCard);

    toggle.addEventListener('click', ()=>{

        if (social.classList.contains('animation')) {
            social.classList.add('down-animation');

            setTimeout(()=>{
                social.classList.remove('down-animation');
            },1000);
        }

        social.classList.toggle('animation');
    })
}
showsocial('card-toggle', 'card-social');