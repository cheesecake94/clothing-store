import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.component.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {
          collection.items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);