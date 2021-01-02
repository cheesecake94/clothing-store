import { Component } from "react";
import './category-list.component.scss';
import CategoryItem from "../category-item/category-item.component";
import CATEGORY_LIST_DATA from "./category-list.data";

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: CATEGORY_LIST_DATA
    }
  }

  render() {
    return <div className="category-list">
      {this.state.categories.map(({ id, title, imageUrl, size }) =>
        <CategoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
      )}
    </div>
  }
}

export default CategoryList;