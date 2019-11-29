
function getAPIData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            const data = JSON.parse(xhr.responseText);
            const lenght=data.results.length

            for (let i = 0;i<lenght;i++){
                let input = document.getElementById('name').value
                const result = data.results[i]
                console.log(result)
                if(result.name == input){

                    let template =document.querySelector('.info')
                    template.innerHTML ='<ul><li>name: '+result.name+'</li>'+
                        '<li>gender : '+result.gender+'</li>'+
                        '<li>year of birth :'+result.birth_year+'</li>'+
                        '<li>height : '+result.height+'cm</li>'+
                        '<li>weight : '+result.mass+'kg</li>'+
                        '<li>hair color : '+result.hair_color+'</li>'+
                        '<li>eye color : '+result.eye_color+'</li>'+
                        '<li>skin color : '+result.skin_color+'</li>'
                }


            }


        }
    }
    xhr.open('GET', 'https://swapi.co/api/people/   ');
    xhr.send()
}


