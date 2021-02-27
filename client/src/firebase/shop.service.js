import { firestore } from "./firebase.utils";

export const addCollectionsAndDocs = async (collectionKey, objects) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // batch all 'set' operations into a single transaction
  objects.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
}

export const getCollections = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
    }
  });

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
}