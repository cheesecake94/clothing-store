import { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.component.scss';
import SHOP_DATA from './shop.data'

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const collections = this.state.collections;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, title, items }) => (
            <CollectionPreview key={id} title={title} items={items} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;