import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
		children: [
			{
				path: 'about',
				loadChildren: () =>
					import('../about/about.module').then((m) => m.AboutPageModule),
			},
			{
				path: 'add',
				loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
			},
			{
				path: 'restaurants',
				loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
			}
		]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
