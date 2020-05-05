"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(numero, nom, _age) {
        if (numero === void 0) { numero = undefined; }
        if (nom === void 0) { nom = "?"; }
        if (_age === void 0) { _age = 0; }
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a >= 0)
                this._age = a;
            else
                throw "age negatif invalide";
        },
        enumerable: true,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this._age++;
    };
    return Personne;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(numero, nom, salaire) {
        if (numero === void 0) { numero = 0; }
        if (nom === void 0) { nom = "?"; }
        if (salaire === void 0) { salaire = 0; }
        var _this = 
        //super(); 
        _super.call(this, numero, nom) || this;
        _this.salaire = salaire;
        return _this;
    }
    return Employe;
}(Personne));
var e1 = new Employe(1, "toto", 2500);
e1.salaire = 3000;
console.log("Empoye e1 :" + JSON.stringify(e1));
var p1;
p1 = new Personne();
p1.nom = "toto";
try {
    p1.age = -30;
}
catch (e) {
    console.log(e);
}
p1.incrementerAge();
console.log(p1.nom + ' ' + p1.age);
var p2 = new Personne(2, "toto2", 45);
console.log(p2.nom + ' ' + p2.age);
console.log(p2);
Reflect.defineProperty(p2, "_age", { value: p2.age,
    writable: true, enumerable: false, configurable: true });
Reflect.defineProperty(p2, "age", { value: p2.age,
    writable: true, enumerable: true, configurable: true });
console.log(">>>>" + JSON.stringify(p2));
var chose; // 12 ou "abc" ou ...
var obj;
//obj= null; 
obj = { numero: 2 };
//données souvent recupérées via HTTP
var persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
var persJs = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
var persJs2 = { numero: 3, nom: "Bon", prenom: "jean" };
function affPerson(p) {
    console.log("****" + p.nom + " " + p.numero);
}
function affPersonMoinsBien(p) {
    var pa = p;
    console.log("****" + pa["nom"] + " " + pa["numero"]);
}
affPerson(persJs);
var p3;
p3 = Object.assign(new Personne(), persJs);
//Object.assign(target, source) opère une sorte de fusion entre 2 objets javascript
//ça recopie toutes les sous parties communes de source vers target (.numero , .nom)
//et ça retourne le résultat
console.log(p3.age);
p3.incrementerAge();
console.log(p3.age);
//# sourceMappingURL=Personne.js.map