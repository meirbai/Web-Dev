import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;
  newAlbum:Album
  loaded:boolean=false

  constructor(private route: ActivatedRoute,private albumService:AlbumsService) {
    this.newAlbum={
      id:0,
      title:'',
      userId:0
    }
  }

  ngOnInit(): void {
    this.loaded=false;
    this.route.paramMap.subscribe((param) => {
      const albumId = Number(param.get("albumId"))
      this.albumService.getAlbum(albumId).subscribe(album=>this.album=album)
    })
    this.loaded=true;
  }
  changeAlbum(){
    this.newAlbum.id=this.album.id
    this.albumService.putAlbum(this.newAlbum).subscribe(album=>this.album=album);
  }


}
