import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import './shop.component.scss';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { Component } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import { getCollections } from '../../firebase/shop.service';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collections = getCollections(snapshot);
      updateCollections(collections);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return <div className="shop-page">
      <Route exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props} />} />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props} />} />
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);