export function CreateElementInMarquee(parentDiv = null, exerciceName = '', exerciceDescription = '', group = [], langage = '', link = '', images = []) {
    if (parentDiv === null) {
        return
    }

    const div = document.createElement('div')
    div.className = 'marquee-content-slot'

    const ExerciceLangage = document.createElement('p')
    ExerciceLangage.textContent = langage
    ExerciceLangage.className = 'marquee-content-slot-langage'
    div.appendChild(ExerciceLangage)
    
    const ExerciceName = document.createElement('h3')
    if (exerciceName) {
        exerciceName = exerciceName.replaceAll('-', ' ').split(' ')
        exerciceName = exerciceName.map(elem => elem[0].toUpperCase() + elem.substring(1).toLowerCase())
        exerciceName = exerciceName.join(' ')

        ExerciceName.textContent = exerciceName
    }
    div.appendChild(ExerciceName)

    const ExerciceDescrition = document.createElement('p')
    ExerciceDescrition.innerHTML = exerciceDescription
    div.appendChild(ExerciceDescrition)

    parentDiv.appendChild(div)

    div.addEventListener('click', () => {
        const popupBackground = document.createElement('div')
        popupBackground.className = 'popupBackground'

        const popupBody = document.createElement('div')
        popupBody.className = 'popupBody'
        
        const closeBtn = document.createElement("button");
        closeBtn.className = "closeBtn";
        closeBtn.textContent = "X"
        closeBtn.addEventListener("click", () => popupBackground.remove());
        popupBody.appendChild(closeBtn)

        const LinkToTheGithub = document.createElement('a')
        LinkToTheGithub.href = link
        LinkToTheGithub.target = '_blank'
        LinkToTheGithub.innerHTML = '<img src="./static/image/github_logo.png">'
        LinkToTheGithub.className = 'githubLink'
        popupBody.appendChild(LinkToTheGithub)

        const Langage = document.createElement('p')
        Langage.className = 'langage';
        Langage.textContent = langage;
        popupBody.appendChild(Langage)

        const ExerciceName = document.createElement('h3')
        ExerciceName.textContent = exerciceName
        popupBody.appendChild(ExerciceName)

        const ExerciceDescrition = document.createElement('p')
        ExerciceDescrition.innerHTML = exerciceDescription
        popupBody.appendChild(ExerciceDescrition)

        const ExerciceGroup = document.createElement('p')
        ExerciceGroup.innerHTML = `Group members:
            ${group.map(people => `<li>${people}</li>`).join('')}
        `
        popupBody.appendChild(ExerciceGroup)

        const DivImage = document.createElement('div')
        DivImage.className = 'DivImage'

        images.forEach(image => {
            const Image = document.createElement('img')
            Image.src = image

            DivImage.appendChild(Image)
        })
        popupBody.appendChild(DivImage)

        popupBackground.appendChild(popupBody)
        document.body.appendChild(popupBackground)
    })
}