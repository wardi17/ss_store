// Data Nominal (Menggunakan CDN Icon Game/Gold publik)
export const nominalList = [
  { id: 'nom_1', title: '100M Gold', price: 'Rp 8.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_2', title: '200M Gold', price: 'Rp 14.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_3', title: '300M Gold', price: 'Rp 19.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_4', title: '400M Gold', price: 'Rp 24.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_5', title: '500M Gold', price: 'Rp 30.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_6', title: '600M Gold', price: 'Rp 39.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_7', title: '700M Gold', price: 'Rp 44.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_8', title: '800M Gold', price: 'Rp 49.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_9', title: '900M Gold', price: 'Rp 54.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
  { id: 'nom_10', title: '1B Gold', price: 'Rp 58.000', image: 'https://cdn-icons-png.flaticon.com/512/272/272525.png' },
];

// Data Pembayaran (Memakai SVG Icon / Online Image CDN)
export const paymentList = [
  { id: 'pay_dana', name: 'DANA', category: 'E-Wallet', image: 'https://cdn.iconscout.com/icon/free/png-256/free-dana-logo-icon-download-in-svg-png-gif-file-formats--payment-method-e-wallet-indonesia-pack-logos-icons-3521394.png' },
  { id: 'pay_ovo', name: 'OVO', category: 'E-Wallet', image: 'https://cdn.iconscout.com/icon/free/png-256/free-ovo-logo-icon-download-in-svg-png-gif-file-formats--payment-method-e-wallet-indonesia-pack-logos-icons-3521636.png' },
  { id: 'pay_bca', name: 'BCA', category: 'Bank Transfer', image: 'https://cdn.iconscout.com/icon/free/png-256/free-bca-logo-icon-download-in-svg-png-gif-file-formats--bank-central-asia-indonesia-pack-logos-icons-3521323.png' },
  { id: 'pay_seabank', name: 'SeaBank', category: 'Bank Transfer', image: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png' },
  { id: 'pay_mandiri', name: 'Mandiri', category: 'Bank Transfer', image: 'https://cdn.iconscout.com/icon/free/png-256/free-mandiri-logo-icon-download-in-svg-png-gif-file-formats--bank-indonesia-pack-logos-icons-3521564.png' },
];

/**
 * Render Pilihan Nominal
 */
export function renderNominalOptions(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = nominalList.map(item => `
    <div class="col-6 col-md-4 col-lg-3">
      <div 
        class="option-card js-option-nominal"
        data-id="${item.id}"
        data-title="${item.title}"
        data-price="${item.price}"
      >
        <div class="product-image-wrap">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="img-option"
            onerror="this.src='https://cdn-icons-png.flaticon.com/512/272/272525.png'"
          >
        </div>

        <div class="product-info">
          <div class="product-title">
            ${item.title}
          </div>

          <div class="product-price">
            ${item.price}
          </div>
        </div>

        <div class="card-check">
          <i class="bi bi-check-lg"></i>
        </div>
      </div>
    </div>
  `).join('');
}


/**
 * Render Pilihan Pembayaran
 */
export function renderPaymentOptions(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = paymentList.map(item => `
    <div class="col-6 col-md-4 col-lg-3">
      <div 
        class="option-card payment-card js-option-payment"
        data-id="${item.id}"
        data-name="${item.name}"
      >

        <div class="payment-logo-wrap">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="img-payment"
            onerror="this.style.display='none'"
          >
        </div>

        <div class="product-info">
          <div class="product-title">
            ${item.name}
          </div>

          <div class="payment-category">
            ${item.category}
          </div>
        </div>

        <div class="card-check">
          <i class="bi bi-check-lg"></i>
        </div>

      </div>
    </div>
  `).join('');
}