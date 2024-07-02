var rh_responses = 0
var comm_responses = 0
var script = null

async function GetJSON(url) {
    return await fetch(url).then(data => data.json()).catch(err => {console.log(err);})
}

async function StartGame() {
    script = await GetJSON('./static/json/script.json')

    DisplayElement(...script[0])
}

function DisplayElement(text, responses) {
    document.body.innerHTML = ''
    var div = document.createElement('div')
    
    if (responses[0].length === 2) {
        div.textContent = text
        div.className = "RH_Question"

        const Responses = document.createElement('div')
        Responses.className = "responses"

        for (let i = 0; i < responses.length; i++) {
            const response = document.createElement('div')
            response.textContent = responses[i][0]
            response.className = "response"
    
            Responses.appendChild(response)
    
            response.addEventListener('click', () => {
                if (responses[i][1] % 2 === 1) {
                    rh_responses++
                } else {
                    comm_responses++
                }
    
                DisplayElement(...script[responses[i][1]])
            })
        }

        document.body.appendChild(Responses)
    } else {
        div = endGame(div)
    }

    document.body.appendChild(div)
}

function endGame(div) {
    div.className = "RH_Question"

    if (comm_responses > rh_responses) {
        div.innerHTML = `Au vus de vos réponses vous semblez être orienté vers un profil commercial. Vous
            excellez dans les stratégies de placement, la négociation avec les entreprises
            clientes et l'analyse de marché.
            <br><br>
            Score RH: ${rh_responses}
            <br>
            Score Commercial: ${comm_responses}`
    } else if (rh_responses > comm_responses) {
        div.innerHTML = `Au vus de vos réponses vous avez une inclinaison pour un profil RH. Vous êtes
            doué pour la gestion des talents intérimaires, la médiation des conflits et le
            développement des compétences
            <br><br>
            Score RH: ${rh_responses}
            <br>
            Score Commercial: ${comm_responses}`
    } else {
        div.innerHTML = `Au vus de vos réponses vous avez un profil mixe. Vous êtes aussi doué en stratégie 
            de placement ainsi qu'en gestion de talent. 
            <br><br>
            Score RH: ${rh_responses}
            <br>
            Score Commercial: ${comm_responses}`
    }

    return div
}

