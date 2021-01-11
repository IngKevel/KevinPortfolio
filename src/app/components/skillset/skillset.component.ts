import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  skills1:any;
  skills2:any;
  skills3:any;
  skills4:any;
  skills5:any;

  constructor() { 
    this.skills1=[
      {
        'name' : 'Angular',
        'icon' : 'angular'
      },
      {
        'name' : 'Bootstrap',
        'icon' : 'bootstrap'
      },
      {
        'name' : 'C#',
        'icon' : 'c4'
      },
      {
        'name' : 'CSS',
        'icon' : 'css'
      }
    ]
    this.skills2=[
      {
        'name' : 'Firebase',
        'icon' : 'firebase'
      },
      {
        'name' : 'Git',
        'icon' : 'git'
      },
      {
        'name' : 'GSAP',
        'icon' : 'gsap'
      },
      {
        'name' : 'GULP',
        'icon' : 'gulp'
      }
    ]
    this.skills3=[
      {
        'name' : 'HTML',
        'icon' : 'html'
      },
      {
        'name' : 'Inkscape',
        'icon' : 'inkscape'
      },
      {
        'name' : 'Java',
        'icon' : 'java'
      },
      {
        'name' : 'Javascript',
        'icon' : 'javascript'
      }
    ]
    this.skills4=[
      {
        'name' : 'Jquery',
        'icon' : 'jquery'
      },
      {
        'name' : 'Kotlin',
        'icon' : 'kotlin'
      },
      {
        'name' : 'MySQL',
        'icon' : 'mysql'
      },
      {
        'name' : 'NPM',
        'icon' : 'npm'
      }
    ]
    this.skills5=[
      {
        'name' : 'Python',
        'icon' : 'python'
      },
      {
        'name' : 'Typescript',
        'icon' : 'typescript'
      },
      {
        'name' : 'Unity',
        'icon' : 'unity'
      },
      {
        'name' : 'Wordpress',
        'icon' : 'wordpress'
      }
    ]
  }

  ngOnInit(): void {
  }

}
