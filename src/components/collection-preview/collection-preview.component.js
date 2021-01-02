import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.component.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
            .slice(0, 4)
            .map(({ id, name, price, imageUrl }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
            ))
        }
      </div>
    </div>
  );
}

export default CollectionPreview;