function khongtratien() {
    const style = document.createElement('style');
    style.innerHTML = `
body {
    overflow: auto !important;
}

.single-page-app_layout_page__content {
    filter: none !important;
    clip-path: none !important;
    z-index: auto !important;
}
      
.single-page-app_paywall_paywall {
    display: none !important;
}`
    document.head.appendChild(style);
}

khongtratien()
console.log('Free Datadog!');

