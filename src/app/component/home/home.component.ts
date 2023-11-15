import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images =[
    {
      imageSrc:'https://imgcentauro-a.akamaihd.net/05_Campanhas/2023/JaeBlack/Homes/Desk/prim-desk2.png',
      imageAlt:'Tenis 1'
    },
  
    {
      imageSrc:'https://imgcentauro-a.akamaihd.net/05_Campanhas/2023/NikeMD-0111/desk.jpg',
      imageAlt:'Tenis 2'
    },
  
    {
      imageSrc:'https://www.designi.com.br/images/preview/10017535.jpg',
      imageAlt:'Tenis 3'
    },
    {
      imageSrc:'https://www.designi.com.br/images/preview/10135428.jpg',
      imageAlt:'Tenis 4'
    },
   ]
  

}
