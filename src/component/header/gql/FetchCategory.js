export const FetchCategory = {
  query: `
query fetchCategory($id: String!){
  categoryList(
    filters: {
      ids: {eq : $id}
     
    }
  ) {
    children_count
    children {
      id
      level
      name
      path
      url_path
      url_key
      children {
       id
        level
        name
        path
        url_path
        url_key
      }
    }
  }}
                `,
};
