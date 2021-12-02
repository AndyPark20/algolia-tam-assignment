import algoliasearch from 'algoliasearch';
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';

const appId = 'EZRFFAAMJ2';
const apiKey = 'e4a746809c0c9401c32a527141fd3d79';
const searchClient = algoliasearch(appId, apiKey);

class QuerySuggestion {
  constructor() {
    this.query();
  }
  query() {
    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
      searchClient,
      indexName: 'client_Spence_Williams_query_suggestions',
    });

    autocomplete({
      container: '#autocomplete',
      plugins: [querySuggestionsPlugin],
      openOnFocus: true,
    });
  }
}
export default QuerySuggestion;
