console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgContainer = document.getElementById('dog-image-container')
const breedUl = document.getElementById('dog-breeds')
let breed
const breedDropdown = document.getElementById('breed-dropdown')

function fetchImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => dogData = data.message)
    .then(dogData => dogData.forEach(dog => renderDogImg(dog)))
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedOjt => {
        
        breed = Object.keys(breedOjt.message)
        dogBreeds(breed)
    })
}



function renderDogImg(dog){
    
    const img = document.createElement('img')

    img.src = dog
    img.alt = "dog"
    
    
    imgContainer.appendChild(img)
}

function dogBreeds(breed){
    breed.forEach(dogBreed => { 
        const breedLi = document.createElement('li')

        breedLi.innerText = dogBreed
        breedUl.append(breedLi)

        
    })
}

breedUl.addEventListener("click", colorChanger)

function colorChanger(e){
    if (e.target.tagName === "LI"){
        e.target.style.color = "green"
    }

}

breedDropdown.addEventListener('change', dropdownHandle)

function dropdownHandle(e){
   
    const filterBreed = breed.filter(dog => dog.startsWith(e.target.value))

    while (breedUl.firstChild){
        breedUl.lastChild.remove()
    }

    dogBreeds(filterBreed)
}


fetchBreeds()
fetchImages()