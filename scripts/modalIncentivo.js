const myModal = new bootstrap.Modal('#exampleModal')


document.addEventListener("mouseleave", (mouseSaiu) => {       
    if(mouseSaiu.clientY <= 0 || mouseSaiu.clientX <= 0 ||      
        (mouseSaiu.clientX >= window.innerWidth || mouseSaiu.clientY >= window.innerHeight))
            {
            
            myModal.show()
            
        }
        });

const btn = document.querySelector("#refresh")

btn.addEventListener("click", () => {
    location.reload()
})

const btn2 = document.querySelector("#refresh2")

btn2.addEventListener("click", () => {
    location.reload()
})