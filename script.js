

let search_input = document.getElementById('search_input');
let content_area = document.getElementById('content_area');

function search_word () {
    let result = "";


    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search_input.value)
    .then(response => response.json())
    .then((data) => {
        result += `<h3 class="text-primary">${search_input.value}</h3>`
        for (let i = 0; i < data[0].meanings.length; i++) {
            result += ` <div class="card my-4">
                            <div class="card-header"> Part of Speech : ${data[0].meanings[i].partOfSpeech} </div>
                            <div class="card-body">
                                <h5 class="card-title">Definition : ${data[0].meanings[i].definitions[0].definition}</h5>
                                <p class="card-text">Example : ${data[0].meanings[i].definitions[0].example}</p>
                            </div>
                            </div>`
        }
        
        content_area.innerHTML = result;
    })
    
}


