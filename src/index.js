import './styles.css';
import error from './pnotify.js';
import fetchCountries from './fetchCountries.js';
import renderMarkup from './renderMarkup.js';

const debounce = require('lodash.debounce');

const refs = {
  countryContainer: document.querySelector('.country-cont'),
  countryList: document.querySelector('.country-list'),
  searchInput: document.querySelector('.input'),
};

refs.searchInput.addEventListener('input', debounce(searchInputHandler, 500));

function searchInputHandler(event) {
    const inputValue = event.target.value;
    refs.countryContainer.innerHTML = '';
    refs.countryList.innerHTML = '';
    if (inputValue.length > 1) {
        fetchCountries(inputValue)
            .then(data => {
                if (data.length > 0 && data.length <= 10) {
                    renderMarkup(data);
                    // error('Found!');
                } else if (data.length > 10) {
                    error('Too many matches found!');
                } else {
                    error('No such country found!');
                }
            })
            .catch(error => (console.log(error)));
    }
}