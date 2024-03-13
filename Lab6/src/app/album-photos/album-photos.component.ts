import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Photos} from "../models";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  loaded:boolean=false
  albumid!:number
  photos!:Photos[];
constructor(private route: ActivatedRoute,private albumService:AlbumsService) {
}
  ngOnInit(): void {
  this.getPhotos()
  }
  getPhotos(){
    this.loaded=false;
    this.route.paramMap.subscribe((param) => {
      const albumId = Number(param.get("albumId"))
      this.albumService.getPhotos(albumId).subscribe(photos=>
        this.photos=photos
      )
      this.albumid=albumId
    })
    this.loaded=true;
  }

}
