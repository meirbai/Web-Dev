import {Component, OnInit} from '@angular/core';
import { Album } from '../models';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!:Album[];
  loaded:boolean=false
  newAlbum:Album;
  constructor(private albumsService:AlbumsService) {
    this.newAlbum = {
      id:0,
      title:'',
      userId:1
    }
  }

  ngOnInit(): void {
    this.getAlbums()
  }
  getAlbums(){
    this.loaded=false;
    this.albumsService.getAlbums().subscribe(album=>this.albums=album);
    this.loaded=true;
  }
  DeleteAlbum(id :number){
    this.albumsService.deleteAlbum(id).subscribe(()=>{})
    this.albums=this.albums.filter((album)=>album.id!==id)
  }
  CreateAlbum(){
    const maxId = Math.max(...this.albums.map(album => album.id), 0);
    var copy:Album={
      id:maxId+1,
      title:this.newAlbum.title,
      userId:1
    };

    this.albumsService.postAlbum(this.newAlbum).subscribe((albu)=>    this.albums.unshift(copy))
    this.newAlbum.title='';
  }

}
