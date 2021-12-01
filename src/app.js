import Autocomplete from './components/autocomplete';
import PushData from './components/pushdata';

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
    this._pushData();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
  }

  _pushData() {
    this.PushDataToAlgolia = new PushData();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');

    searchbox.addEventListener('click', () => {
      autocomplete.style.display = 'block';
    });

    searchbox.addEventListener('blur', () => {
      autocomplete.style.display = 'none';
    });
  }
}

// const test = new SpencerAndWilliamsSearch();
// console.log(test._pushData());

const app = new SpencerAndWilliamsSearch();
