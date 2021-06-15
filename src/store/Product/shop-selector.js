import { createSelector } from "reselect";

const selectShop = (state) => state.Product;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.products
);
export const selectFirstCollections = createSelector(
  [selectCollections],
  (shop) => shop.filter((index) => index < 20)
);
export const selectpadding = createSelector([selectShop], (shop) => shop.pages);
export const selectCollectionsLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const productisLoading = createSelector(
  [selectCollectionsLoading],
  (collections) => collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((cartItem) => cartItem.url_key === collectionUrlParam)
  );

export const categoriefilter = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((cartItem) =>
      cartItem.categories.map((el) => el.id).includes(+collectionUrlParam)
    )
  );
