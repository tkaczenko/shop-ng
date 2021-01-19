export enum Category {
  PHONES = 'Телефоны',
  LAPTOPS = 'Ноутбуки',
  WATCHES = 'Часы'
}

export default class CategoryUtils {
  public static readonly CATEGORIES = CategoryUtils.toArray();

  private static toArray(): string[] {
    const arr = [];
    for (const n of Object.keys(Category)) {
      arr.push(n);
    }
    return arr;
  }
}

