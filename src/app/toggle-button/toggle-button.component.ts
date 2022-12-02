import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  showSecretParagraph = false;
  onButtonClicks:number[]=[];
  count=1;

  ngOnInit(): void {
  }

  onToggleParagraph() {
    this.showSecretParagraph = !this.showSecretParagraph;
    this.onButtonClicks.push(this.count);
    this.count++;
  }
  getColor(onClick:number){
    return onClick > 4 ? 'blue' : 'default';
    }
    onTextColor(onClick2:number){
      return onClick2 > 4 ? 'white' : 'default';

    }
  }
  /**  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }
 */
