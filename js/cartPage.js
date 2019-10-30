const emptyCart = document.querySelector('.empty-cart');
const cart = document.querySelector('.cart-big');
const total = document.querySelector('#total');
console.log(total);

const btnContinue = document.querySelector('#continue');
btnContinue.addEventListener('click', () => {
  window.location = 'index.html';
});

const cartItem = JSON.parse(localStorage.getItem('cart'))
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
console.log(cartItem);
if (cartItem.length > 0) {
  cart.style.display = 'block';
  emptyCart.style.display = 'none';
} else {
  cart.style.display = 'none';
  emptyCart.style.display = 'flex';
}

const updateCartQuantity = cart => {
  const total = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const cartNumber = document.querySelector('#cartNumber');
  cartNumber.textContent = ` ( ${total} )`;
};

updateCartQuantity(cartItem);

const buildCartItem = item => {
  const itemTemplate = document.querySelector('#itemTemplate');
  const itemFragment = itemTemplate.content.cloneNode(true);
  const itemElement = itemFragment.querySelector('.cart-list-item');

  const itemImg = itemElement.querySelector('.item-imgs');
  const itemName = itemElement.querySelector('.item-name');
  const itemQuantity = itemElement.querySelector('.item-quantity');
  const itemPrice = itemElement.querySelector('.item-price');
  const removeBtn = itemElement.querySelector('.remove');

  itemImg.src = item.imgSrc;
  itemName.textContent = item.itemTitle;
  itemQuantity.textContent = `Quantity: ${item.quantity}`;
  itemPrice.textContent = `Price: ${item.quantity * item.itemPrice}$`;
  removeBtn.addEventListener('click', () => {
    const confirmMess = 'Ban muon xoa san pham nay ?';
    if (window.confirm(confirmMess)) {
      const listCart = document.querySelector('.cart-list');
      listCart.removeChild(itemElement);
      const itemIdx = cartItem.findIndex(cartItem => {
        return cartItem.itemTitle === item.itemTitle;
      });
      console.log(itemIdx);
      cartItem.splice(cartItem[itemIdx], 1);
      localStorage.setItem('cart', JSON.stringify(cartItem));
      console.log(cartItem);
      updateCartQuantity(cartItem);

      if (!cartItem.length) {
        cart.style.display = 'none';
        emptyCart.style.display = 'flex';
      }
    }
  });

  return itemElement;
};

const renderCartList = () => {
  const listCart = document.querySelector('.cart-list');
  if (listCart) {
    for (const item of cartItem) {
      const itemElement = buildCartItem(item);
      listCart.appendChild(itemElement);
    }
  }
};

renderCartList();

const renderCartTotal = total => {
  const t = cartItem.reduce((total, cur) => {
    return total + cur.quantity * cur.itemPrice;
  }, 0);
  total.textContent = `$ ${t}`;
};

renderCartTotal(total);
