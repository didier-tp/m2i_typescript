"use strict";
var Personne = /** @class */ (function () {
    function Personne(numero, nom, age) {
        if (numero === void 0) { numero = undefined; }
        if (nom === void 0) { nom = "?"; }
        if (age === void 0) { age = 0; }
        this._age = 0;
        this.numero = numero;
        this.nom = nom;
        this.age = age;
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
console.log(JSON.stringify(p2));
//# sourceMappingURL=Personne copy.js.map