import { Component } from "react";
import './category-list.component.scss';
import CategoryItem from "../category-item/category-item.component";

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'shop/hats'
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'shop/jackets'
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'shop/sneakers'
        },
        {
          id: 4,
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: 'shop/womens'
        },
        {
          id: 5,
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return <div className="category-list">
      {this.state.categories.map(({ id, title, imageUrl, size }) =>
        <CategoryItem key={id} title={title} imgUrl={imageUrl} size={size} />
      )}
    </div>
  }
}

export default CategoryList;