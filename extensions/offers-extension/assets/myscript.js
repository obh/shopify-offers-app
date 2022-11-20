//https://github.com/Shopify/product-reviews-sample-app/blob/main/theme-app-extension/assets/product-reviews-form.js
(function () {
  function selectElement(selector, node) {
    return (node || document).querySelector(selector);
  }

  function myMethod({target}){
    console.log("method called");
  }


   document
    .querySelector(".prapp-review .clickBtn")
    .addEventListener("click", myMethod);

})();
