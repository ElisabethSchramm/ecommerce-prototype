# Git Workflow Diagram

```mermaid
graph TD
  main --> develop

  develop --> release_1_0
  release_1_0 --> feature_product_list
  feature_product_list --> release_1_0
  release_1_0 --> develop
  develop --> main

  develop --> release_2_0
  release_2_0 --> feature_cart_crud
  release_2_0 --> feature_cart_checkout
  feature_cart_crud --> release_2_0
  feature_cart_checkout --> release_2_0
  release_2_0 --> develop
  develop --> main

  develop --> release_3_0
  release_3_0 --> feature_login
  release_3_0 --> feature_order_history
  feature_login --> release_3_0
  feature_order_history --> release_3_0
  release_3_0 --> develop
  develop --> main
