// Calculate the rental price based on the selected duration
function calculateRentalPrice() {
    // Get the selected duration
    const duration = document.getElementById("duration").value;
  
    // Get the product price
    const productPrice = parseFloat(document.getElementById("product-price").innerHTML);
  
    // Calculate the rental price
    const rentalPrice = productPrice * duration;
  
    // Update the rental price on the page
    document.getElementById("rental-price").innerHTML = rentalPrice;
  }
  
  // Listen for changes in the duration select element
  document.getElementById("duration").addEventListener("change", calculateRentalPrice);
  