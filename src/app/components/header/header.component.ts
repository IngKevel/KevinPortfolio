import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initialAnimations();
    this.writeAnimation();
  }

  initialAnimations(): void{
    gsap.set('#img-principal', {
      autoAlpha: 0
    });

    gsap.to('#img-principal', {
      duration: 2,
      autoAlpha: 1
    });

    gsap.set('#job', {
      autoAlpha: 0
    });

    gsap.to('#job', {
      duration: 1,
      autoAlpha: 1,
      delay: 2
    });
  }

  writeAnimation(){

    let cursor = gsap.to('.cursor', {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1
    });
  }
}
