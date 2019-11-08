import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'toc', loadChildren: './toc/toc.module#TOCPageModule' },
  { path: 'one', loadChildren: './one/one.module#OnePageModule' },
  { path: 'two', loadChildren: './two/two.module#TwoPageModule' },
  { path: 'three', loadChildren: './three/three.module#ThreePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
