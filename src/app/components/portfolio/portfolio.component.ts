import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  proyects:any;

  constructor() { 
    this.proyects=[
      {
        'title' : 'Comacc',
        'description' : 'Comacc.mx es una pagina web diseñada para tienda Comacc, se diseño utilizando tecnologias como Jquery, Bootstrap, HTML.',
        'image' : '../../../assets/images/Proyectos/comacc.png',
        'link' : 'https://www.comacc.mx/'
      },
      {
        'title' : 'La Cueva Del Bot',
        'description' : 'LaCuevaDelBot.com es una pagina web diseñada para la redaccion de post sobre la cultura geek, se diseño utilizando tecnologias como Wordpress y Inkscape',
        'image' : '../../../assets/images/Proyectos/lcdb.png',
        'link' : 'https://lacuevadelbot.com'
      },
      {
        'title' : 'Binario2Decimal',
        'description' : 'Binario2Decimal es una app que te ayuda a convertir números binarios a decimales, o viceversa, desarrollado en Android Studio, escrito en Java',
        'image' : '../../../assets/images/Proyectos/bin2dec.png',
        'link' : 'https://keveldev.com/Binario2Decimal/'
      }
    ]
  }

  ngOnInit(): void {
  }

}
