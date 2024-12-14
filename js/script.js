import { CreateElementInMarquee } from "./createElementInMarquee.js"

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
