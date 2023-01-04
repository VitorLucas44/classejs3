// ## Exo1

// ### Créer une class Objet
// ### _Propriétés : nom, prix

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.


class Objet {
    constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
    }
}


    const objet1 = new Objet('Chaise', 10);
    const objet2 = new Objet('table', 5);

    const boite = [objet1, objet2];

    class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }
    
    prendre(objet) {
        this.sac.push(objet);
}
    
    acheter(vendeur, objet) {
        if (this.argent >= objet.prix) {
        this.sac.push(objet);
        this.argent -= objet.prix;
        vendeur.argent += objet.prix;
        console.log(`${this.nom} ! Merci pour votre achat de la ${objet.nom}`);
        } else {
        console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}`);
        }
    }
}
    
    const personnage1 = new Personnage('Vitor', [], 20);
    const personnage2 = new Personnage('Lucas', [], 15);
    
    personnage1.prendre(boite[0]);
    personnage2.prendre(boite[1]);
    
    personnage1.acheter(personnage2, personnage2.sac[0]);

