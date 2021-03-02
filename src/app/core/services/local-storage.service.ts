export class LocalStorageService {
  private localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  set(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  remove(key: string): void {
    this.localStorage.removeItem(key);
  }

  clear(): void {
    this.localStorage.clear();
  }
}
