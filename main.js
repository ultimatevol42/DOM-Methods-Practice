const bodyElement = document.querySelector('body')
const mainELement = document.createElement('main')
const buttonElement = document.createElement('button')
const imgElement = document.createElement('img')
const anchorElement = document.createElement('a')


bodyElement.append(buttonElement)
buttonElement.append('Good Morning Vietnam')

bodyElement.append(mainELement)

imgElement.className = 'image'
imgElement.src = ' https://upload.wikimedia.org/wikipedia/en/d/d0/Good_Morning%2C_Vietnam.jpg'
mainELement.append(imgElement)

anchorElement.className = 'link'
anchorElement.href = 'https://upload.wikimedia.org/wikipedia/en/d/d0/Good_Morning%2C_Vietnam.jpg'
mainELement.append(anchorElement)
anchorElement.append ('Wikipeda')

buttonElement.addEventListener('click', function(){
    mainELement.remove ()
})


