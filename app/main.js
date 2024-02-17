const productsCard = getElementsAllByClass("product_card");
const couponApplyButton = getElementWithId("coupon_apply_button");
const makePurchaseButton = getElementWithId("make_purchase_button");
const goHome = getElementWithId("go_home");
let count = 1;
let totalPrice = 0;
const couponCode = "SELL200";
for (const card of productsCard) {
  card.addEventListener("click", function (e) {
    const parentNode = e.target.parentNode.parentNode;
    if (parentNode.classList.contains("product_card")) {
      console.log(parentNode);
      const productName = parentNode.querySelector("#product_name").innerText;
      makePurchaseButton.disabled = false;
      const productPrice = Number(
        parentNode.querySelector("#product_price").innerText
      );
      appendElementInCart(productName);
      cartCalculation(productPrice);
      count++;
      if (totalPrice >= 200) {
        couponApplyButton.disabled = false;
        couponApplyButton.classList.replace("bg-gray-300", "bg-[#E527B2]");
      }
    }
  });
}

function appendElementInCart(name) {
  const cartContainer = getElementWithId("cart_container");
  const p = createNewElement("p");
  const productName = `${count}. ${name}`;
  setInnerText(p, productName);
  cartContainer.appendChild(p);
}

function cartCalculation(price) {
  totalPrice += price;
  const totalPriceElement = getElementWithId("total_price");
  setInnerText(totalPriceElement, totalPrice);
  const totalElement = getElementWithId("total");
  setInnerText(totalElement, totalPrice);
}

couponApplyButton.addEventListener("click", function () {
  const coupon = getElementWithId("coupon_input");
  const couponInput = coupon.value;
  if (couponCode === couponInput) {
    const discountAmount = (totalPrice * 20) / 100;
    const discountShowElement = getElementWithId("discount_amount");
    setInnerText(discountShowElement, discountAmount);
    const total = totalPrice - discountAmount;
    const totalElement = getElementWithId("total");
    setInnerText(totalElement, total);
  }
});

goHome.addEventListener("click", function () {
  window.location.reload();
});
