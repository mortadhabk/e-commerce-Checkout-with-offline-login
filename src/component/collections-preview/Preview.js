import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/actions";
import { withRouter } from "react-router-dom";
function Preview({ isLoading, products, history }) {
  const dispatch = useDispatch();
  const array1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const display = isLoading ? (
    <div>
      <div>
        <Container>
          <Grid container spacing={3}>
            {array1.map(() => (
              <Grid item xs={12} sm={3}>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={230} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  ) : (
    <div class="product-layout">
      {products.map((item) => (
        <div class="product">
          <div class="img-container">
            <img
              className="image"
              src={item.image.url}
              onClick={() => history.push(`/${item.url_key}`)}
            />
            <div class="addCart" onClick={() => dispatch(addItem(item))}>
              <i class="fas fa-shopping-cart"></i>
            </div>

            <ul class="side-icons">
              <span>
                <i class="fas fa-search"></i>
              </span>
              <span>
                <i class="far fa-heart"></i>
              </span>
              <span>
                <i class="fas fa-sliders-h"></i>
              </span>
            </ul>
          </div>
          <div class="bottom">
            <a href="">{item.name}</a>
            <div class="price">
              <span>
                {" "}
                {item.price_range.minimum_price.regular_price.value + " "}
                {item.price_range.minimum_price.regular_price.currency}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return display;
}

export default withRouter(Preview);
// import React from "react";
// import Skeleton from "@material-ui/lab/Skeleton";
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import { useDispatch } from "react-redux";
// import { withRouter } from "react-router-dom";
// import {
//   selectCartID,
//   selectCartItemsDistruct,
// } from "../../store/cart/cart.selector";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { addProductsToCartApi } from "../../pages/cart/use/addProductsToCartApi";
// function Preview({
//   isLoading,
//   products,
//   history,
//   AddProductToCart,
//   cartId,
//   cartDestructure,
// }) {
//   const dispatch = useDispatch();
//   const array1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//   const display = isLoading ? (
//     <div>
//       <div>
//         <Container>
//           <Grid container spacing={3}>
//             {array1.map(() => (
//               <Grid item xs={12} sm={3}>
//                 <Skeleton variant="text" />
//                 <Skeleton variant="circle" width={40} height={40} />
//                 <Skeleton variant="rect" width={210} height={230} />
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </div>
//     </div>
//   ) : (
//     <div class="product-layout">
//       {products.map((item) => (
//         <div class="product">
//           <div class="img-container">
//             <img
//               className="image"
//               src={item.image.url}
//               onClick={() => history.push(`/${item.sku}`)}
//             />
//             <div
//               class="addCart"
//               onClick={() => AddProductToCart({ cartId, item })}
//             >
//               <i class="fas fa-shopping-cart"></i>
//             </div>

//             <ul class="side-icons">
//               <span>
//                 <i class="fas fa-search"></i>
//               </span>
//               <span>
//                 <i class="far fa-heart"></i>
//               </span>
//               <span>
//                 <i class="fas fa-sliders-h"></i>
//               </span>
//             </ul>
//           </div>
//           <div class="bottom">
//             <a href="">{item.name}</a>
//             <div class="price">
//               <span>
//                 {" "}
//                 {item.price_range.minimum_price.regular_price.value + " "}
//                 {item.price_range.minimum_price.regular_price.currency}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
//   return display;
// }

// const mapStateToProps = createStructuredSelector({
//   cartId: selectCartID,
//   cartDestructure: selectCartItemsDistruct,
// });
// const mapDispatchToProps = (dispatch) => ({
//   AddProductToCart: (cart) => dispatch(addProductsToCartApi(cart)),
// });
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(Preview)
// );
