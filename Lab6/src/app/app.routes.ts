import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

export const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"home",component:HomeComponent,title:"Home page"
  },
  {
    path:"about",component:AboutComponent,title:"About page"
  },
  {
    path:"albums",component:AlbumsComponent,title:"Albums page"
  },
  {
    path:"albums/:albumId",component:AlbumDetailComponent,title:"Album Details page"
  },
  {
    path:"albums/:albumId/photos",component:AlbumPhotosComponent,title:"Album Photos page"
  },
  {
    path:"**",component:NotFoundComponent,title:"404 - not found"
  }

];
