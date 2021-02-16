import templateList from '../template/template-list.hbs';
import templateInfo from '../template/template-info.hbs';

const refs = {
  countryContainer: document.querySelector('.country-cont'),
  countryList: document.querySelector('.country-list'),
  searchInput: document.querySelector('.input'),
};

function renderMarkup(countries) {
    let markup = null;
    if (countries.length === 1) {
        markup = templateInfo(countries);
        
        document.getElementById('input-id').value = "";
               
        return refs.countryContainer.insertAdjacentHTML('beforeend', markup);

    } else if (countries.length > 1 || countries.length <=10) {
        markup = templateList(countries);
        return refs.countryList.insertAdjacentHTML('beforeend', markup);
    }
}

export default renderMarkup;