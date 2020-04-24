//На втором табе имя любого покемона
// и описание всех его способностей (effect), взятое из PokeAPI.
// https://pokeapi.co/api/v2/pokemon/144/


/*var leftpage = document.getElementById("right");
var paragraph = document.createElement("P");
paragraph.innerHTML ='PIKACHUUUU';
leftpage.append(paragraph)
*/
let res = []
let pokemon_name = "dsf"
var request = new XMLHttpRequest();
request.open("GET", " https://pokeapi.co/api/v2/pokemon/144/", false);
request.onload = function () {
    var json = JSON.parse(request.responseText)

    // json['abilities'].array.forEach(element => {
    //     alert(element);
    // })
    // console.log(json)
    pokemon_name = json['name']

    for (let el in json['abilities']) {
        // alert(json['abilities'][el]);

        let request_ability = new XMLHttpRequest();
        request_ability.open("GET", json['abilities'][el]['ability']['url'], false);
        request_ability.onload = function () {

            var json_ability = JSON.parse(request_ability.responseText)
            console.log(json_ability)


            for (let effect in json_ability['effect_entries']) {
                if (json_ability['effect_entries'][effect]['language']['name'] === 'en') {
                    res.push(json['abilities'][el]['ability']['name'].toUpperCase() + ' : ' + json_ability['effect_entries'][effect]['effect'])

                }
            }

        }
        request_ability.send(null)

    }
}
request.send(null)
console.log(res)


let page = document.getElementById("right");
let h2 = document.createElement("H2");
h2.innerHTML = pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)
page.append(h2)

let img=document.createElement("IMG");
img.src="articuno.webp"
img.width="400"
page.appendChild(img)

let h3 = document.createElement("H3");
h3.innerHTML = "Effects: "
page.append(h3)


let ul = document.createElement("UL");


for (el in res) {
    let li = document.createElement("LI");
    li.innerHTML = res[el]
    ul.append(li);
}
page.append(ul);