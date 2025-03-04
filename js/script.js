import { CreateElementInMarquee } from "./createElementInMarquee.js"

document.querySelector('.ProfilePicture').style.animation = 'scale_reveal 2s ease forwards';
document.querySelector('.Name').style.animation = 'margin_top_reveal 2s ease forwards';
document.querySelector('.HeaderButton').style.animation = 'padding_left_reveal 2s ease forwards';

const Div = [
    document.getElementById('SchoolProjects'),
    document.getElementById('PersonnalProjects')
]

const datas = await fetch("./json/data.json").then(data => data.json());

datas.reverse();
datas.forEach((data, index) => {
    CreateElementInMarquee(
        Div[data.type],
        data.title,
        data.description,
        data.collaborators,
        data.langage,
        data.github,
        data.images,
        index
    )
});

const Contact = () => {
    document.getElementsByClassName("popupContact")[0].style.display = "block"
}

document.getElementsByName("contact").forEach(elem =>
    elem.addEventListener("click", Contact)
)