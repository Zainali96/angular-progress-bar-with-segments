import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_project';

  beginnerPoints = 0;
  silverPoints = 50000;
  goldPoints = 100000;
  daimondPoints = 300000;

  firstProgress:any;
  secondProgress:any;
  thirdProgress:any;
  percentage:number;
  points = 75000;
  firstValue:number;
  secondValue:number;

  constructor () {

    setTimeout(() => {
      if(this.points > 0){
        this.firstProgress = document.getElementById('first-progress');
        this.secondProgress = document.getElementById('second-progress');
        this.thirdProgress = document.getElementById('third-progress');
        
        if(this.points <= 50000){
          this.firstValue = (this.points - this.beginnerPoints) * 100;
          this.secondValue = this.silverPoints - this.beginnerPoints;
          this.percentage = Math.round(this.firstValue/this.secondValue);

          this.fillFirstProgress(this.percentage);
        }else{
          this.fillFirstProgress(100); 
          
          if(this.points > 50000 && this.points <= 100000){
            this.firstValue = (this.points - this.silverPoints) * 100;
            this.secondValue = this.goldPoints - this.silverPoints;
            this.percentage = Math.round(this.firstValue/this.secondValue);
            
            console.log('percentage',this.percentage);
            this.fillSecondProgress(this.percentage);
          }else{
            this.fillFirstProgress(100);
            this.fillSecondProgress(100);
            
            if(this.points > 100000 && this.points <= 300000){
              this.firstValue = (this.points - this.goldPoints) * 100;
              this.secondValue = this.daimondPoints - this.goldPoints;
              this.percentage = Math.round(this.firstValue/this.secondValue);
            
              console.log('percentage',this.percentage);  
              this.fillThirdProgress(this.percentage);
              
            }else{
              if(this.points > 300000){

                this.fillFirstProgress(100);
                this.fillSecondProgress(100);
                this.fillThirdProgress(100);
              }
            }
          }
        }

      }
    })
  }

  fillFirstProgress(percentage){
    this.firstProgress.style.width = percentage+'%';
    this.firstProgress.style.height = '15px';
    this.firstProgress.style.background = '#f15194';
    this.firstProgress.style.borderTopLeftRadius = '50px';
    this.firstProgress.style.borderBottomLeftRadius = '50px'; 
  }

  fillSecondProgress(percentage){
    this.secondProgress.style.width = percentage+'%';
    this.secondProgress.style.height = '15px';
    this.secondProgress.style.background = '#f15194'; 
  }

  fillThirdProgress(percentage){
    this.thirdProgress.style.width = percentage+'%';
    this.thirdProgress.style.height = '15px';
    this.thirdProgress.style.background = '#f15194';
    this.thirdProgress.style.borderTopRightRadius = '50px';
    this.thirdProgress.style.borderBottomRightRadius = '50px'; 
  }
}
