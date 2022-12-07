import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks-cycle-child',
  templateUrl: './hooks-cycle-child.component.html',
  styleUrls: ['./hooks-cycle-child.component.css']
})
export class HooksCycleChildComponent implements OnChanges, OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input() parentData;
  @ContentChild('h2fp',{static:false} ) contentChild:ElementRef;
  @ViewChild('viewChildData',{static:false}) viewChild:ElementRef ;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
console.log(`ngOnChanges called`,changes);
  }
  ngOnInit() {

  }
  ngDoCheck(): void {
    console.log('ngDoCheck called',this.contentChild);

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called',this.contentChild);
    // this.contentChild.nativeElement.setAttribute('style','color:green');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called',this.contentChild);
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called',this.viewChild);
    // this.viewChild.nativeElement.setAttribute('style','color:brown');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
  }

}



