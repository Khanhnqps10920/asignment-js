$(document).ready(function() {
  $('.shop-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

const fakeData = [
  {
    url: 'images/slick-img-2.jpg',
    name: 'GLORY TEE',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-3.jpg',
    name: 'LTE EARPLUS MUSIC',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-4.jpg',
    name: 'SKETCH WEARSHIRT',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-5.jpg',
    name: 'SIGNATURE TEE',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-6.jpg',
    name: 'SKETCH TEE',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-7.jpg',
    name: 'GYMBAG',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-8.jpg',
    name: 'ROSIE BACK TEE',
    price: '20.00$'
  },
  {
    url: 'images/slick-img-9.jpg',
    name: 'AMARE COLOR HOODIE',
    price: '20.00$'
  }
];

const renderSliderItem = item => {
  //clone template
  const itemTemplate = document.getElementById('itemTemplate');
  const itemElement = itemTemplate.content.cloneNode(true);
  //fill item data
  const nameElement = itemElement.querySelector('#name');
  const priceElement = itemElement.querySelector('#price');
  const imagesElement = itemElement.querySelector('#itemImg');
  nameElement.textContent = item.name;
  priceElement.textContent = item.price;
  imagesElement.src = item.url;
  return itemElement;
};

const renderListOfItem = items => {
  const shopSlider = document.querySelector('.shop-slider');
  console.log(shopSlider);
  if (shopSlider) {
    for (const item of items) {
      const itemElement = renderSliderItem(item);
      console.log(itemElement);
      if (itemElement) {
        shopSlider.appendChild(itemElement);
      }
    }
  }
};

renderListOfItem(fakeData);
