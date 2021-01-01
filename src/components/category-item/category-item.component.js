import './category-item.component.scss';

const CategoryItem = ({ title, imgUrl, size }) => {
  return <div className={`${size} category-item`}>
    <div className="bg-img" style={{backgroundImage: `url(${imgUrl})`}} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
}

export default CategoryItem;