const icons=document.querySelectorAll('.icons a')

icons.forEach(icon =>{
    icon.addEventListener('click',()=>{
        icons.forEach(el => el.classList.remove('active'))
        icon.classList.add('active')
    })
})