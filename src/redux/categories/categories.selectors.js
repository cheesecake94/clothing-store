import { createSelector } from 'reselect';

const selectCategories = state => state.categories;

export const selectCategoryList = createSelector(
  [selectCategories],
  (categories) => categories.categoryList
);