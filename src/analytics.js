/**
 * Module untuk menangani tracking event analytics.
 */
export function initAnalytics() {
  const body = document.body;
  const merchantId = body.getAttribute('data-analytics-merchant-id');

  console.log(`[Analytics] Initialized for Merchant ID: ${merchantId}`);

  // Contoh dispatch tracking event
  trackEvent('view_item_list', {
    flow: 'topup',
    item_category: 'Higgs Games Island',
    merchant_id: merchantId
  });
}

export function trackEvent(eventName, payload = {}) {
  console.log(`[Analytics Event: ${eventName}]`, payload);
  // Logika pengiriman data analytics ke server dapat ditempatkan di sini
}