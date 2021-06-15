export const addItemToRequest = (requests, requestToAdd) => {
  const newRequests = requests.filter(
    (Item) => Item.type !== requestToAdd.type
  );

  return [...newRequests, { ...requestToAdd }];
};
export const clearItem = (requests, requestToAdd) => {
  requests.splice(requestToAdd, 1);
  const newRequests = requests;
  console.log("newRequest" + JSON.stringify(newRequests));
  return newRequests;
};
