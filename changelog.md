# Task 5
1. `app-routing.module.ts` and `products-routing.module.ts` for routing products list (based on TaskFeature Area).
2. `ProductViewComponent` with routing in `products-routing.module.ts`
3. `app-routing.module.ts`, `cart-routing.module.ts` for routing of cart (based on UserFeature Area).
4. `ProcessOrderComponent` with routing in `app-routing.module`, `order-routing.module`. Routing use `IsCartEmptyGuard`.
5. `AdminModule` with `admin-routing.module`. It use `CanActivateGuard`, `CanDeactivateGuard`, `Resolve` guard in `ProductsService`.
6. `app-routing.module`, `products-routing.module`, `cart-routing.module`, `order-routing.module`, `admin-routing.module`.
7. `CartService` use updated `LocalStorageService` to save and retrieve cartItems.
8. Realized navigation cross Products, Cart, CartItem with `NavigationService`. It's not an ideal solution. We've got two `router-outlet` and `routerLink` must change the value based on the level.
 

# Questions for task 2:
1. Do we need to use `strictPropertyInitialization` in `tsconfig.json` to avoid lint errors with @Input declaration?

# Questions for task 3:
1. How to implement `CartItemComponent` to use OnPush strategy?
2. Can we inject `configToken`, `generatedString` as `Optional`?
