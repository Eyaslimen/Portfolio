import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindfulu',
  standalone: true,
  imports: [],
  templateUrl: './mindfulu.component.html',
  styleUrl: './mindfulu.component.css'
})
export class MindfuluComponent implements OnInit {
  photos: string[] = [
    "./assets/1.jpeg",
    "./assets/2.jpeg",
    "./assets/3.jpeg",
    "./assets/4.jpeg",
    "./assets/5.jpeg",
    "./assets/6.jpeg",
    "./assets/7.jpeg",
    "./assets/8.jpeg",
    "./assets/9.jpeg",
    "./assets/10.jpeg",
    "./assets/11.jpeg",
    "./assets/12.jpeg",
    "./assets/13.jpeg",
    "./assets/14.jpeg",
    "./assets/15.jpeg",
    "./assets/16.jpeg",
    "./assets/17.jpeg",
    "./assets/18.jpeg",
    "./assets/19.jpeg",
    "./assets/20.jpeg",
    "./assets/21.jpeg",
    "./assets/22.jpeg",
    "./assets/23.jpeg",
    "./assets/24.jpeg",
    "./assets/21.jpeg",
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

