export function addCart(product) {
  return {
    type: "ADDITEM",
    payload: product,
  };
}

export function deleteCart(product) {
  return {
    type: "DELITEM",
    payload: product,
  };
}
