import { withRouter } from 'react-router-dom';
import './category-item.component.scss';

const CategoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return <div
    className={`${size} category-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="bg-img" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
}

export default withRouter(CategoryItem);