import { AdminComponent } from './components/admin/admin.component';
import { Test3Component } from './components/test3/test3.component';
import { HomeComponent } from './components/home/home.component';
import { Test1Component } from './components/test1/test1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component } from './components/test2/test2.component';
import { Test4Component } from './components/test4/test4.component';
import { Test5Component } from './components/test5/test5.component';



const routes: Routes = [
  {path:'giris' , component:HomeComponent },
{path:'kayıt' , component:Test1Component },
{path:'spor' , component:Test2Component },
{path:'magazin' , component:Test3Component },
{path:'' , component:Test4Component},
{path:'admin' , component:Test5Component},
{path:'adminsayfa' , component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
