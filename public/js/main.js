

let perso1 = {
    nom : 'Sergio',
    course : ['banane','fraise','orange'],
    ajouter(){
        this.course.pop()
        perso2.course.push('orange')
    }
}

let perso2 = {
    nom : 'François',
    course : ['tomate','cerise','carotte'],
    derober(){
        
        
    }
}
perso1.ajouter();
perso2.derober();
console.log(perso1);
console.log(perso2);