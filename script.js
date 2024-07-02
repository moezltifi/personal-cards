let name =['ahmed','ali','mohamed','hassan','moez','yassin']
let ages =['18 years old','21 years old','19 years old','23 years old','20 years old','22 years old']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(name,ages) {
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let image = document.createElement('img');

    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    image.src = 'img/1.jpg';

    title.appendChild(head);
    age.appendChild(ageContent);

    card.style.width = "250px";
    card.style.height = "300px";
    card.style.background = "#555";
    card.style.color = "#fff";
    card.style.padding = "10px";
    card.style.margin = "2px";
    card.style.display = "inline-block";
    
    image.style.width = "100%";
    image.style.height = "200px";

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(image);

    container.appendChild(card);
}
for(let i=0; i<name.length; i++){
    element(name[i],ages[i])
}
