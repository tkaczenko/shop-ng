# Task 2
1. Created modules: `AppModule, CartModule, ProductsModule, SharedModule`.
2. Updated ProductListComponent: implemented `getProducts()` for presenter. 
3. Updated ProductComponent to disable buttons if item is not available.
4. Implemented `CartService#getTotal()`, `CartService#getTotalAmount()`.
5. Showing totalQuantity, totalAmount in `CartListComponent`
6. Implemented `CartItemComponent`.
7. Used `@Input()`, `@Output()`.
8. Used `OnPush`.
9. Used `ngOnInit()`, `ngAfterViewInit()`, `ngOnChanges()`.
10. CartItemComponent with `onBlur()` and `onClick()`.
11. Added title element for `AppComponent` to set header from class.
12. Implemented `HighlightDirective`.
13. Used `ngClass` in `ProductComponent`.
14. Realized showing alert if somebody types not valid number for cart-item.

# Questions for task 2:
1. Do we need to use `strictPropertyInitialization` in `tsconfig.json` to avoid lint errors with @Input declaration?
# Task 3
1. Implemented `CartService` with additional methods.
2. Implemented `ConfigOptionsService`. 
3. Implemented `ConstantsService`.
4. Implemented `GeneratorService` with `generatorFactory()` and provided via `generatedString`.
5. Implemented `LocalStorageService`.
6. Implemented `FirstComponent`. Can we inject `configToken`, `generatedString` as `Optional`?.
7. Implemented `ClickDirective` and used in `FirstComponent`.

# Questions for task 3:
1. How to implement `CartItemComponent` to use OnPush strategy?
2. Can we inject `configToken`, `generatedString` as `Optional`?
