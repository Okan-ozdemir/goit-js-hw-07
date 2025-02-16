// Seçilen kategori listesini al
const categoriesList = document.querySelector("#categories");

// Tüm kategori öğelerini al
const categoryItems = categoriesList.querySelectorAll(".item");

// Kategori sayısını konsola yazdır
console.log(`Toplam kategori sayısı: ${categoryItems.length}`);

// Her kategori için başlık ve öğe sayısını konsola yazdır
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li").length;
  console.log(`Kategori: ${categoryTitle}\nÖğe sayısı: ${categoryElements}`);
});
