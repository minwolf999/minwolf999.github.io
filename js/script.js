import { CreateElementInMarquee } from "./createElementInMarquee.js"
import { SetAnimation } from "./setAnimation.js"

SetAnimation()

const Div = [
    document.getElementById('school'),
    document.getElementById('personnal')
]

const datas = await fetch("./json/data.json").then(data => data.json());

datas.reverse();
datas.forEach(data => {
    CreateElementInMarquee(
        Div[data.type],
        data.title,
        data.description,
        data.collaborators,
        data.langage,
        data.github,
        data.images
    )
});
