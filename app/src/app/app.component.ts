import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products = [
    {
      name: 'Product 1',
      description: 'Description of product 1',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home%20App.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/d9057c79-2b13-4bf7-ab6a-3458d3cf31ea-Grocery.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/d0f757ed-1d94-46c1-870b-010c3136b9ea-Home.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/362c1530-38f2-4bfa-b65d-0d4e84f73f5e-Beauty.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/97a54c52-1572-4410-95e8-7027fc0464de-Kids.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/bb49a17d-93d1-4428-93d0-9c2ead66fe23-Pharmacy.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/2eac5475-390e-484c-8dc9-a3b3a6758abf-Avto.png',
      link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9dsTAlR7y2FMjgBk45TzyruQLW2JTwqZz7h5--3htGh3LA5sDiHzRoClB4QAvD_BwE'
      // images: ['url-to-image-1', 'url-to-image-2', 'url-to-image-3']
    },

  ];
  shareProduct(product: any) {
    const message = `Check out this product: ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https:https://web.telegram.org/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
    window.open(telegramUrl);
  }
}
