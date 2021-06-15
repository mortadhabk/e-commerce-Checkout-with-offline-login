import { createSelector } from "reselect";

const selectCategory = (state) => state.Category;

export const selectCategories = createSelector(
  [selectCategory],
  (item) => item.category
);

export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  (item) => Object.keys(item).map((key) => item[key])
);
