import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.component.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);