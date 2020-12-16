const base_url = "https://ghibliapi.herokuapp.com/films"
const section = document.querySelector('section')
const row = document.querySelector('.row')
// const mid = document.getElementById('mid')

results()



function results(){
    

    fetch(base_url).then(function(result){
        return result.json()

    }).then(function(allFilms){
        parseResults(allFilms)
    })

}
function parseResults(movies){
    movieLength = movies.length
    for(i=0; i < movieLength; i++){
        current = movies[i]
        console.log("Current: ", current)
        let heading1 = document.createElement('h1')
        let heading3 = document.createElement('h3')
        let paragraph = document.createElement('p')
        let link = document.createElement('a')
        let article = document.createElement('article')
        let col = document.createElement('div')
        let btn = document.createElement('button')
        link.href = `https://www.google.com/search?q=${current.title} ${current.director}`
        link.target = 'blank'
        heading3.textContent = current.director
        link.textContent = current.title
        paragraph.textContent = current.description
        col.className = 'col-5'
        btn.textContent = 'More Info'
        

        row.appendChild(col)
        col.appendChild(article)
        article.appendChild(heading1)
        heading1.appendChild(link)
        article.appendChild(heading3)
        article.appendChild(paragraph)
        
    }
}

function showResults(json){
    console.log(json)
    while(section.firstChild){
        section.removeChild(section.firstChild)
    }
}