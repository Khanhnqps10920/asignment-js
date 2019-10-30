const cart = [];
const btnAddToCart = document.querySelectorAll('.add-to-cart-btn');

btnAddToCart.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const itemTitle = parent.querySelector('#itemName').textContent;
    const itemImg = parent.querySelector('#itemImg');

    const itemIdx = cart.findIndex(
      cartItem => cartItem.itemTitle === itemTitle
    );
    console.log(itemIdx);
    if (itemIdx !== -1) {
      cart[itemIdx] = {
        ...cart[itemIdx],
        quantity: cart[itemIdx].quantity + 1
      };
    } else {
      const cartItem = {
        itemTitle,
        imgSrc: itemImg.src,
        quantity: 1,
        itemPrice: Math.round(Math.random() * 200)
      };
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    const cartItem = JSON.parse(localStorage.getItem('cart'))
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    updateCartQuantity(cartItem);
  });
});

const updateCartQuantity = cart => {
  const total = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const cartNumber = document.querySelector('#cartNumber');
  cartNumber.textContent = ` ( ${total}   )`;
};

const cartItem = JSON.parse(localStorage.getItem('cart'))
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

updateCartQuantity(cartItem);
