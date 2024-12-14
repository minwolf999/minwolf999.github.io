export function CreateElementInMarquee(parentDiv = null, exerciceName = '', exerciceDescription = '', group = [], langage = '', link = '', images = [], index = 0) {
    if (parentDiv === null) {
        return
    }

    const div = document.createElement('div')
    div.className = 'marquee-content-slot'

    div.innerHTML = `
        <div class="marquee-content-div">
            <h3 class="marquee-content-slot-name">
                ${exerciceName.replaceAll('-', ' ').split(' ').map(elem => elem[0].toUpperCase() + elem.substring(1).toLowerCase()).join(' ')}
            </h3>

            <p class="marquee-content-slot-langage">
                ${langage}
            </p>
        </div>

        <p>
            ${exerciceDescription}
        </p>
    `

    parentDiv.appendChild(div)

    div.addEventListener('click', () => {        
        const popupBackground = document.createElement('div')
        popupBackground.className = 'popupBackground'
        popupBackground.id = index

        popupBackground.innerHTML =`
        <div class="popupBody">
            <div class="popupHeader">
                <button class="closeBtn" onclick="document.getElementById('${index}').remove()">X</button>

                <h3 class="ExerciceName">
                    ${exerciceName.replaceAll('-', ' ').split(' ').map(elem => elem[0].toUpperCase() + elem.substring(1).toLowerCase()).join(' ')}
                </h3>

                <p class="langage">
                    ${langage}
                </p>

                <a class="githubLink" href="${link}" target="_blank">
                    <img src="./static/image/github_logo.png">
                </a>
            </div>
                
            <p>
                ${exerciceDescription}  
            </p>

            <p>
                Group members: ${group.map(people => `<li>${people}</li>`).join('')}
            </p>

            <div class="DivImage">
                ${images.map(image => '<img src="' + image + '">').join('')}
            </div>
        </div>
        `

        document.body.appendChild(popupBackground)
    })
}