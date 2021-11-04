// (_id, quantity, price, product (object), client (object), active)

// https://medium.com/@alekssk/make-that-single-page-app-remember-with-crudcrud-a25742df1383
// https://www.postman.com/avionics-pilot-48065649/workspace/workshop-api-training/documentation/17533705-73fc0341-bd24-4624-affb-d0f9a7af4479

// https://crudcrud.com/api/2f67d6414ef24dd9a9c03c03306fc608/stock

const registerProduct = (product) => {
  fetch('https://crudcrud.com/api/2f67d6414ef24dd9a9c03c03306fc608/stock', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default registerProduct;
