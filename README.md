# 94. İstanbul Front-End Web Development Bootcamp Bitirme Projesi ---  Recipe App

## Proje Kapsamı

Recipe App bir yemek tarifi arama  projesidir. Sitenin ana sayfasında arama butonu ile arama işleminin olduğu sayfaya yönlendirmektedir. Arama butonu ile gidilen sayfa da default olarak bir yemek tarifi listelenmektedir. Arama işlemine göre yemek tarifleri , malzemeleri , toplam zamanı ve yemeğin türü listelenmektedir.


## Teknik Detaylar

Proje React ile yazılmıştır. React Router ve Hooks kullanılmıştır. API istekleri için axios kütüphanesinden yararlanılmıştır.


## Çalıştırılması

- Projeyi klonlayın.

     ``` git clone https://github.com/zynpnd/react-project-recipe.git```
- Npm' yükleyin.

   ``` npm install ```
- Uygulamayı çalıştırın.

   ``` npm start ```
   
   API'ye [buraya](https://developer.edamam.com/edamam-recipe-api) tıklayarak ulaşabilirsiniz.
   
##  Dosya Yapısı
 -    Projenin dosya yapısı aşağıdaki gibidir:



    .
    ├── ...
    ├── src   
    │   ├── assets   
    │   │   ├── 404-images.jpg 
    │   │   ├── home-images.jpg 
    │   │   ├── logo.png
    │   ├── components                      
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── Navbar.js
    │   │   ├── RecipeList.js
    │   │   ├── Search.js
    │   ├── pages
    │   │   ├── Default.js
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   ├── Recipes.js
    │   ├── App.js                          
    │   └── ...                             
    └── ...
