// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  
  const unitpriceDOM = product.querySelector('.price span');
  const quantityDOM = product.querySelector('.quantity input');
  
  const priceNumber= unitpriceDOM.innerHTML;
  const quantityNumber = quantityDOM.value;

  let subtotalPrice = priceNumber * quantityNumber
  console.log(subtotalPrice);

  let subTotalDOM = product.querySelector('.subtotal span');
  subTotalDOM.innerText = subtotalPrice; 
  return subtotalPrice
}
// ITERATION 2

function calculateAll() {
  
  let totalCost = 0
  let productsListDOM = document.querySelectorAll('.product');
    productsListDOM.forEach( (product)=>{
    let subtotal = updateSubtotal(product);
    totalCost += subtotal;
    
  });
  
    // ITERATION 3
    
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerText = totalCost; 

}
  
  
  
  
  
  
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
