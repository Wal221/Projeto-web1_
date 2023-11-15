import { Component, Input } from '@angular/core';

interface caroselImages{
  imageSrc:string;
  imageAlt:string;
}


@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss']
})
export class CaroselComponent {

  @Input() images:caroselImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide =false;
  @Input() slideInterval =3000; //padrão de 3 segundos

  selectedIndex =0;

  ngOnInit(){
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(){
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }



  //set index of image on dot/indicator click
  selectImage(index:number ): void{
    this.selectedIndex = index;
  }

  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex=this.images.length -1
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick(){
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex= 0;
    }else{
      this.selectedIndex++;
    }
  }

}
