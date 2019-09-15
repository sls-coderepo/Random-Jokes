

const API = {
    fetchJSON: () => {
    return fetch("https://icanhazdadjoke.com/", {
        "headers": {
            "Accept": "application/json"
        }
    }).then(data => data.json())
      
}} 

 //API.fetchJSON();

const WEB = {
    createHTML: (data) => {
        return `
        <section>
            <h1>${data.joke}</h1>
        </section>
        
        `
    }
}


 document.querySelector("#btn-getJokes").addEventListener("click", () => {
    API.fetchJSON().then(response => 
        document.querySelector("#main-container").innerHTML += WEB.createHTML(response))
}
) 


