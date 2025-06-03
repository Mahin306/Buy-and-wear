// স্লোগান স্লাইডার লুপ (Future Enhancement Ready)
const slogans = [
  "Your choice hare",
  "Trendy. Affordable. Unique.",
  "Wear your attitude.",
  "T-shirts that speak your style."
];

let currentSlogan = 0;
const sloganElement = document.getElementById("slogan");

function rotateSlogan() {
  currentSlogan = (currentSlogan + 1) % slogans.length;
  sloganElement.textContent = slogans[currentSlogan];
}

// প্রতি 4 সেকেন্ডে স্লোগান পরিবর্তন হবে
setInterval(rotateSlogan, 4000);

// প্রোডাক্ট বাটনে ক্লিক করলে কনসোলে লগ দেখাবে (Debug / Future Analytics)
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    console.log("Buy button clicked:", e.target.closest(".product").querySelector("h2").textContent);
  });
});

// Future Ready: প্রোডাক্ট লোড করার জন্য API কলের জায়গা
/*
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    // এখানে future enhancement: ডায়নামিকভাবে প্রোডাক্ট দেখানো যাবে
    console.log("Loaded products:", products);
  });
*/

// পেজ লোড হলে কনসোলে ওয়েলকাম মেসেজ
window.addEventListener("load", () => {
  console.log("🎉 Buy and wear website loaded successfully!");
});