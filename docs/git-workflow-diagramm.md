# Git Workflow Diagram

```mermaid
graph TD

  %% Hauptzweige
  main((main)) --> develop((develop))

  %% Feature Branches (von develop)
  develop --> feature_product_list
  develop --> feature_cart_crud
  develop --> feature_cart_checkout
  develop --> feature_login
  develop --> feature_order_history

  %% Features zurück in develop
  feature_product_list --> develop
  feature_cart_crud --> develop
  feature_cart_checkout --> develop
  feature_login --> develop
  feature_order_history --> develop

  %% Releases (von develop)
  develop --> release_1_0((release_1_0))
  develop --> release_2_0((release_2_0))
  develop --> release_3_0((release_3_0))

  %% Inhalte der Releases
  feature_product_list --> release_1_0
  feature_cart_crud --> release_2_0
  feature_cart_checkout --> release_2_0
  feature_login --> release_3_0
  feature_order_history --> release_3_0

  %% Merge zu main
  release_1_0 --> main
  release_2_0 --> main
  release_3_0 --> main

