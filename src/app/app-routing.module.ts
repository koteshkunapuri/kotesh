import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';
import { RigisterComponent } from './rigister/rigister.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'rigister',component:RigisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
