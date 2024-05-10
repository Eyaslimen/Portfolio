import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-unilivres',
  standalone: true,
  imports: [],
  templateUrl: './unilivres.component.html',
  styleUrl: './unilivres.component.css'
})
export class UnilivresComponent implements OnInit {
  photos: string[] = [
    "./assets/p1.png",
    "./assets/p2.png",
    "./assets/p3.png",
    "./assets/p5.png",
    "./assets/p6.png",
    "./assets/p7.png",
    "./assets/p8.png",
    "./assets/p9.png",
    "./assets/p10.png",
    "./assets/p11.png",
    "./assets/p12.png",
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

