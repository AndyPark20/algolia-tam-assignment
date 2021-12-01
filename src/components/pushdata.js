import algoliasearch from 'algoliasearch';
import data from '../../data/products.json';

class PushData {
  constructor() {
    this.pushData();
  }

  pushData() {
    // Create an instance
    const client = algoliasearch(
      'EZRFFAAMJ2',
      'e4a746809c0c9401c32a527141fd3d79'
    );
    const index = client.initIndex('client_Spence_Williams');
    index.addObjects(data);
  }
}

export default PushData;
