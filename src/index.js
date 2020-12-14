console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let breedLi
let dogPic

document.addEventListener("DOMContentLoaded", () => { 
    fetchImages() 
    fetchBreeds()
    colorLi()
    
})
    function fetchImages() {
        return fetch(imgUrl)
        .then(response => response.json())
        .then(dogs => renderImages(dogs))
    }

    function renderImages(dogs) { 
        let container = document.getElementById('dog-image-container')
        dogs.message.forEach(dog => { 
            dogPic = document.createElement('img')
            dogPic.src = dog
            container.appendChild(dogPic)
        })
    }

    function fetchBreeds() {
        return fetch(breedUrl)
        .then(response => response.json())
        .then(breeds => {let b = Object.keys(breeds.message)
            renderBreeds(b) 
        })
        
    }

    function renderBreeds(b) {
        const ul = document.querySelector('#dog-breeds')
        b.forEach(breed => {
            breedLi = document.createElement('li')
            breedLi.innerText = breed
            ul.appendChild(breedLi)
        })    
    }

    function colorLi() {
        let lis = document.querySelectorAll('li')
        lis.addEventListener ('click', () => {
            lis.style.color = "red"
         })
    }
  





