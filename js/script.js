
function getAPIData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            const data = JSON.parse(xhr.responseText);
            const lenght=data.results.length

            for (let i = 0;i<=lenght;i++){
                const result = data.results[i]
            }


        }
    }
    xhr.open('GET', 'https://swapi.co/api/people/   ');
    xhr.send()
}
function getperso(){
    let input = document.getElementById('name').value

}



getAPIData()