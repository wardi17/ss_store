import { renderNominalOptions, renderPaymentOptions } from './products.js';
import { sendToWhatsApp } from './whatsapp.js';
import { renderSparkles } from './sparkles.js';

let selectedNominal = null;
let selectedPayment = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Komponen Grid
  renderNominalOptions('nominal-grid');
  renderPaymentOptions('payment-grid');
  renderSparkles('sparkles-container', 12);

  // 2. Handle Pilihan Nominal (Single Select)
  document.getElementById('nominal-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.js-option-nominal');
    if (!card) return;

    document.querySelectorAll('.js-option-nominal').forEach(el => el.classList.remove('selected'));
    card.classList.add('selected');

    selectedNominal = {
      title: card.dataset.title,
      price: card.dataset.price
    };
  });

  // 3. Handle Pilihan Pembayaran (Single Select)
  document.getElementById('payment-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.js-option-payment');
    if (!card) return;

    document.querySelectorAll('.js-option-payment').forEach(el => el.classList.remove('selected'));
    card.classList.add('selected');

    selectedPayment = {
      name: card.dataset.name
    };
  });

  // 4. Handle Submit Form
  const form = document.getElementById('topup-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = document.getElementById('user-id').value.trim();
    const userPhone = document.getElementById('user-phone').value.trim();

    // Validasi Sederhana
    if (!selectedNominal) {
      alert('Silakan pilih Nominal Top Up terlebih dahulu!');
      return;
    }

    if (!selectedPayment) {
      alert('Silakan pilih Metode Pembayaran terlebih dahulu!');
      return;
    }

    // Kirim Data Ke WA Modul
    sendToWhatsApp({
      userId,
      productTitle: selectedNominal.title,
      productPrice: selectedNominal.price,
      paymentMethod: selectedPayment.name,
      userPhone
    });
  });
});