#  Recipe App

Aranan herhangi bir yiyecek veya yemeğin bilgilerine göz atan ve bunları almak için Edamam API'sini kullanan bir projedir.

## Proje Kapsamı

Bu proje, aranan herhangi bir yiyecek veya yemeğin bilgilerine göz atan ve bunları almak için Edamam API'sini kullanan açık kaynaklı  bir react projedir.

Sitenin ana sayfasında arama butonu ile arama işleminin olduğu sayfaya yönlendirmektedir. Arama butonu ile gidilen sayfa da default olarak bir yemek tarifi listelenmektedir. Arama işlemine göre yemek tarifleri , malzemeleri , toplam zamanı ve yemeğin türü listelenmektedir.

## Teknik Detaylar

Proje React ile yazılmıştır. React Router ve Hooks kullanılmıştır.Stillerin yazımı için CSS-IN-CSS metodu kullanılmıştır. API istekleri için Axios kütüphanesinden yararlanılmıştır.

## Çalıştırılması

- Projeyi klonlayın.

  ` git clone https://github.com/zynpnd/react-project-recipe.git`

- Npm' yükleyin.

  `npm install`

- Uygulamayı çalıştırın.

  `npm start`

  API'ye [buraya](https://developer.edamam.com/edamam-recipe-api) tıklayarak ulaşabilirsiniz.
  
 ## Örnek Dosya Yapısı
    .
    ├── ...
    ├── src
    │ ├── assets
    │ │ ├── 404-images.jpg
    │ │ ├── home-images.jpg
    │ │ ├── logo.png
    │ ├── components
    │ │ ├── Footer
    │ │ │ ├── Footer.css
    │ │ │ ├── Footer.js
    │ │ ├── Navbar
    │ │ │ ├── Navbar.css
    │ │ │ ├── Navbar.js
    │ │ ├── Search
    │ │ │ ├── Search.css
    │ │ │ ├── Search.js
    │ │ ├── Header.js
    │ │ ├── RecipeList.js
    │ ├── pages
    │ │ ├── About
    │ │ │ ├── About.css
    │ │ │ ├── About.js
    │ │ ├── Contact
    │ │ │ ├── Contact.css
    │ │ │ ├── Contact.js
    │ │ ├── Login
    │ │ │ ├── Login.css
    │ │ │ ├── Login.js
    │ │ ├── Default.js
    │ │ ├── Home.js
    │ │ ├── Recipes.js
    │ ├── App.js                        
    │ └── ...                            
    └── ...

## Ekran Görüntüleri

Home Page

![GitHub Logo](/image/home.png)

About Page

![GitHub Logo](/image/about.png)

Recipe Page

![GitHub Logo](/image/recipe.png)

Contact Page

![GitHub Logo](/image/contact.png)
  
  
  
  
 
