import './category-list.component.scss';
import CategoryItem from "../category-item/category-item.component";
import { selectCategoryList } from '../../redux/categories/categories.selectors'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const CategoryList = ({ categories }) => {
  return <div className="category-list">
    {categories.map(({ id, ...otherProps }) =>
      <CategoryItem key={id} {...otherProps} />
    )}
  </div>
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoryList
})

export default connect(mapStateToProps)(CategoryList);