import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { ProductModel } from '../../shared/models/product.model';

export const PRODUCTS: ProductModel[] = [
  {
    id: 1,
    name: 'ACER Nitro 5 AN515-44-R3LB Obsidian Black',
    description: 'Aspire 5 – компактний ноутбук у тонкому корпусі з металевою кришкою, якісним дисплеєм Full HD IPS і великим набором інтерфейсів. Завдяки продуктивним компонентам ноутбук чудово впорається з ресурсомісткими завданнями, а також підійде для більшості ігор.',
    price: 20000,
    category: Category.LAPTOPS,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21 Ultra 16/512 GB Phantom Black',
    description: 'Представляем смартфон Galaxy S21 Ultra 5G. Уникальные камеры — это революция в области фотографии, с помощью которых вы сможете снимать 8К видео кинематографического качества и превращать каждый кадр в эпические фотоснимки — и все это можно делать просто "на ходу". А сочетание сверхбыстрого 5-нм процессора Galaxy, прочного стеклянного корпуса, батареи на целый день работы и поддержка сетей 5G полностью оправдывает его название — Ultra.',
    price: 21000,
    category: Category.PHONES,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Samsung Galaxy Watch Active 2 40 mm Stainless steel Silver',
    description: 'Samsung Galaxy Watch Active 2 розроблені, щоб допомогти вам дізнатися більше та досягти більшого. Це виходить за межі відстеження кроків і калорій, щоб запропонувати дієве розуміння всього, від вашого стилю бігу до частоти серцевих скорочень.',
    price: 22000,
    category: Category.WATCHES,
    isAvailable: true,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    return PRODUCTS;
  }
}
