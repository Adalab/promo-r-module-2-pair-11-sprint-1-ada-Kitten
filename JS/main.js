'use strict';

//variables
const newForm = document.querySelector('.js-new-form');

const catList = document.querySelector('.js-list');

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  'Ruiseño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace1 = 'British Shorthair';

const kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace2 = 'British Shorthair';

const kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace3 = 'British Shorthair';

let html = '';

const kitten1 = `<li class="card">
 <article>
   <img
     class="card_img"
     src="${kittenImage1}"
     alt="gatito"
   />
   <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
   <h4 class="card_race">${html}</h4>
   <p class="card_description">
     ${kittenDesc1}
   </p>
 </article>
</li>`;

const kitten2 = `<li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;

const kitten3 = ` <li class="card">
<img
  class="card_img"
  src="${kittenImage3}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

let descrSearchText;

const plusIcon = document.querySelector('.item');
const addButton = document.querySelector('.js-btn-add');
const cancelButton = document.querySelector('.js-btn-cancel');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');

const searchForm = document.querySelector('.js-search-form');
const inputSearchDesc = document.querySelector('.js-input-search-desc');
const inputSearchRace = document.querySelector('.js-input-search-race');
const labelMessageSearchError = document.querySelector(
  '.js-label-search-error'
);
const searchButton = document.querySelector('.js-btn-search');

if (kittenRace1 === '') {
  html = 'no se ha especificado raza';
} else {
  html = kittenRace1;
}

plusIcon.addEventListener('click', (event) => {
  event.preventDefault();
  newForm.classList.toggle('collapsed');
});

if (kittenDesc1.includes(descrSearchText)) {
  catList.innerHTML = catList.innerHTML + kitten1;
}

if (kittenDesc2.includes(descrSearchText)) {
  catList.innerHTML = catlist.innerHTML + kitten2;
}

if (kittenDesc3.includes(descrSearchText)) {
  catList.innerHTML = catList.innerHTML + kitten3;
}

if (formElement.classList.contains('collapsed')) {
  newForm.classList.remove('collapsed');
} else {
  newForm.classList.add('collapsed');
}
