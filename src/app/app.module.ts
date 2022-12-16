import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe_book/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe_book/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping_list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipe_book/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
