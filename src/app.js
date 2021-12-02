import Autocomplete from './components/autocomplete';
import PushData from './components/pushdata';
import QuerySuggestion from './components/querysuggestions';

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
    this._pushData();
    this._querySuggestion();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
  }

  _pushData() {
    this.PushDataToAlgolia = new PushData();
  }

  _querySuggestion() {
    this.QuerySuggestion = new QuerySuggestion();
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

const app = new SpencerAndWilliamsSearch();
