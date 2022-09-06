

let search_input = document.getElementById('search_input');
let content_area = document.getElementById('content_area');

function empty_example (example) {
    if (example == undefined) {
        example = "";
    } else {
       example = `<div class="" style="width:130px;">
                    <p class="card-text mx-0">Example : </p>
                </div>
                <div class="col-md-8 col-sm-12">
                    ${example}
                </div>`;
    }
    return  example;
}


function search_word () {
    let result = "";
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search_input.value)
    .then(response => response.json())
    .then((data) => {


        

        if (data[0] == undefined) {

            result += `<h3 class="text-danger">${search_input.value} <i class="fa-solid fa-xmark"></i></h3> Word or phrase does not exist. Please input a valid word`

        } else {
            result += ` <h3 class="text-success">${search_input.value} <i class="fa-solid fa-check pl-5"></i></h3>`;

            for (let i = 0; i < data[0].meanings.length; i++) {
                result += ` <div class="card my-4">
                                <div class="card-header"> Part of Speech : ${data[0].meanings[i].partOfSpeech} </div>
                                <div class="card-body">

                                    <div class="row">
                                        <div class="" style="width:130px;">
                                            <h5 class="card-title mx-0">Definition : </h5>
                                        </div>
                                        <div class="col-md-8 col-sm-12">
                                            ${data[0].meanings[i].definitions[0].definition}
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        ${empty_example(data[0].meanings[i].definitions[0].example)}
                                    </div>
                                    
                                </div>
                            </div>`
            }
    
            }
    content_area.innerHTML = result;
    })
    
}


