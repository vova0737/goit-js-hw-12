import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderMarkup from './js/renderMarkup';

import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';

const { defaults } = require('@pnotify/core');
defaults.styling = 'material';
defaults.delay = 2000;

const debounce = require('lodash.debounce');

const refs = {
  countryContainer: document.querySelector('.country-cont'),
  countryList: document.querySelector('.country-list'),
  searchInput: document.querySelector('.input'),
};

refs.searchInput.addEventListener('input', debounce(searchInputHandler, 500));

function searchInputHandler(event) {
    const inputValue = event.target.value.trim();
    refs.countryContainer.innerHTML = '';
    refs.countryList.innerHTML = '';
    if (inputValue.length > 0) {
        fetchCountries(inputValue)
            .then(data => {
                if (data.length > 0 && data.length <= 10) {
                    renderMarkup(data);
                    success('Found!');
                } else if (data.length > 10) {
                    // error('Too many matches found!');
                    error(`${data.length} matches found. \n Enter a more specific query!`);
                } else {
                    error('No such country found!');
                }
            })
            .catch(error => (console.log(error)));
    }
}