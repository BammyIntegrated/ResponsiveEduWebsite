// Change NavBar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})


// show faqs answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.classList.toggle('open')

    // change icon

    const icon = faq.querySelector('.faq__icon i');
    if(icon.className = 'uil uil-plus'){
        icon.className = 'uil uil-minus'
    }

})