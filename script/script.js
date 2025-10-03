const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay');
  const modalBtn = document.querySelector('#cart-modal-btn');

  const openModal = () => {
    modal.classList.add('open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
  };

  modalBtn.addEventListener('click', () => {
    openModal();
  });

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__close')
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const restsArray = [
    {
      id: 0,
      name: 'Пицца плюс',
      time: '50 мин',
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: './images/rests/rest1.jpg',
      description: 'Пицца плюс',
    },
  ];
  const restsContainer = document.querySelector('#rests-container');
}

modalFunc();
restsFunc();
