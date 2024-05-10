import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cozy',
  standalone: true,
  imports: [],
  templateUrl: './cozy.component.html',
  styleUrl: './cozy.component.css'
})
export class CozyComponent implements OnInit {
  photos: string[] = [
    "./assets/home.png",
    "./assets/login.png",
    "./assets/signup.png",
    "./assets/categ.png",
    "./assets/trending.png",
    "./assets/contactus.png",
    "./assets/keepontouch.png",
    "./assets/trending.png",
    "./assets/products.png",
    "./assets/prod.png",
    // Ajoutez autant de photos que vous le souhaitez
  ];
  currentPhotoIndex: number = 0;
  currentPhoto!: string;

  constructor() { }

  ngOnInit(): void {
    this.showPhoto(this.currentPhotoIndex);
  }

  showPhoto(index: number): void {
    this.currentPhoto = this.photos[index];
  }

  nextPhoto(): void {
    this.currentPhotoIndex++;
    if (this.currentPhotoIndex >= this.photos.length) {
      this.currentPhotoIndex = 0; // Revenir à la première photo si on atteint la fin
    }
    this.showPhoto(this.currentPhotoIndex);
  }
  previousPhoto(): void {
    this.currentPhotoIndex--;
    if (this.currentPhotoIndex < 0) {
      this.currentPhotoIndex = this.photos.length - 1; // Revenir à la dernière photo si on est à la première
    }
    this.showPhoto(this.currentPhotoIndex);
  }
}
