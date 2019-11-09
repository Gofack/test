var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var randomFunction = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// var createEl = function(wrapper, clone) {
//     var t = document.querySelector('template').content.querySelector(clone);
//     var wr = document.querySelector(wrapper);
//     var el = t.cloneNode(true);
//     return wr.appendChild(el);
// };

// var fillContent = function(arr, clone) {
//     var t = document.querySelector('template').content.querySelector(clone);
//     var el = t.cloneNode(true);
//     for(var i=0;i<arr.length;i++){
//         el.querySelector('.setup-similar-label').textContent = arr[i].name;
//         el.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
//         el.querySelector('.wizard-eyes').style.fill = arr[i].eyeColor;
//     }
// };

var firstNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['Де марья', 'Верона', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; 
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

var params = [
    {
        name: randomFunction(firstNames) + ' ' + randomFunction(lastNames),
        coatColor: randomFunction(coatColors),
        eyeColor: randomFunction(eyeColors),
    },
    {
        name: randomFunction(firstNames) + ' ' + randomFunction(lastNames),
        coatColor: randomFunction(coatColors),
        eyeColor: randomFunction(eyeColors),
    },
    {
        name: randomFunction(firstNames) + ' ' + randomFunction(lastNames),
        coatColor: randomFunction(coatColors),
        eyeColor: randomFunction(eyeColors),
    },
    {
        name: randomFunction(firstNames) + ' ' + randomFunction(lastNames),
        coatColor: randomFunction(coatColors),
        eyeColor: randomFunction(eyeColors),
    }
];



if ('content' in document.createElement('template')) {
    var t = document.querySelector('template').content.querySelector('.setup-similar-item');
    var list = document.querySelector(".setup-similar-list");
    for(var i = 0;i<params.length;i++) {
        var el = t.cloneNode(true);

        el.querySelector('.setup-similar-label').textContent = params[i].name;
        el.querySelector('.wizard-coat').style.fill = params[i].coatColor;
        el.querySelector('.wizard-eyes').style.fill = params[i].eyeColor;

        list.appendChild(el);
        // createEl('.setup-similar-list', '.setup-similar-item');
        // fillContent(params, '.setup-similar-item');
    }
} 
else {
    console.log('Do not support tag template in your browser!');
}