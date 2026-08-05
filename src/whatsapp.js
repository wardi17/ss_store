// Ganti dengan Nomor WhatsApp Tujuan / Admin toko Anda (Gunakan format Internasional tanpa '+')
const ADMIN_PHONE_NUMBER = '6281295880557'; 

/**
 * Mengirim data pemesanan ke WhatsApp
 */
export function sendToWhatsApp(data) {
  const message = 
`*--- PESANAN BARU TOP UP ---*
  
🎮 *User ID:* ${data.userId}
💎 *Produk:* ${data.productTitle}
💰 *Harga:* ${data.productPrice}
💳 *Metode Bayar:* ${data.paymentMethod}
📱 *WA Pembeli:* ${data.userPhone}

_Mohon segera diproses, terima kasih!_`;

  // Encode URL agar pesan dapat dikirim via WA Link API
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${ADMIN_PHONE_NUMBER}?text=${encodedMessage}`;

  // Buka tab WhatsApp baru
  window.open(waUrl, '_blank');
}