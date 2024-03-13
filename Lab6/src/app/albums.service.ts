import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photos} from "./models";
import {AlbumsComponent} from "./albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client:HttpClient) { }

  getAlbums(){
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`,)
  }
  getAlbum(id:number){
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  deleteAlbum(id:number){
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  postAlbum(newAlbum:Album){
    console.log(newAlbum.id)

    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`,newAlbum)
  }
  putAlbum(newAlbum:Album){
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${newAlbum.id}`,newAlbum)
  }

  getPhotos(albumId: number) {
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }
}
