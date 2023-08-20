// ฟังก์ชันเพิ่ม/แก้ไขรายการสินค้าในตระกร้า
function updateBasket(productName, quantity) {
  var existingItem = shoppingBasket.find(item => item.productName === productName);

  if (existingItem) {
      existingItem.quantity = quantity;
  } else {
      shoppingBasket.push({ productName, quantity });
  }

  updateBasketDisplay();
}

// ฟังก์ชันอัพเดตการแสดงผลตระกร้า
function updateBasketDisplay() {
  var basketItems = document.getElementById("basket-items");
  basketItems.innerHTML = "";

  shoppingBasket.forEach(item => {
      var listItem = document.createElement("li");
      listItem.textContent = `${item.productName} - Quantity: ${item.quantity}`;
      basketItems.appendChild(listItem);
  });
}

// ฟังก์ชันยืนยันรายการ
function confirmOrder() {
  // ในส่วนนี้คุณสามารถทำตามต้องการ เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์ เปิดหน้าตะกร้าสินค้า ฯลฯ
  console.log("Confirmed Order:", shoppingBasket);
}

// ฟังก์ชันเปลี่ยนจำนวนสินค้า (+1 หรือ -1)
function changeQuantity(button, change) {
  var quantityInput = button.parentNode.querySelector('.quantity');
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;

  if (newQuantity < 0) { // เปลี่ยนเงื่อนไขนี้ให้เป็น < 1 แทน
      newQuantity = 0; // แทนที่จะเป็น 1
  }

  quantityInput.value = newQuantity;
  updateBasket(button.parentNode.parentNode.querySelector('h2').textContent, newQuantity);
}

function changeQuantity(button, change) {
  var inputElement = button.parentElement.querySelector('.quantity');
  var currentQuantity = parseInt(inputElement.value);
  var newQuantity = currentQuantity + change;
  
  if (newQuantity >= 0) {
      inputElement.value = newQuantity;
  }
}