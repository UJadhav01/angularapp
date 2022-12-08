import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks-cycle-child',
  templateUrl: './hooks-cycle-child.component.html',
  styleUrls: ['./hooks-cycle-child.component.css']
})
export class HooksCycleChildComponent implements
 OnChanges,
 OnInit ,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{
  @Input() parentData;
  @ContentChild('h2fp',{static:false} ) contentChild:ElementRef;
  @ViewChild('viewChildData',{static:false}) viewChild:ElementRef ;

  counter;
  num:number=1;
  constructor() {
    const pi=3.14;
    //for initialize the static or properties
    //call super constructor
    //for dependency injection
  }

  ngOnChanges(changes: SimpleChanges): void {
// console.log(`ngOnChanges called`,changes);
console.log(`ngOnChanges called`);

  }
  ngOnInit() {
    this.counter = setInterval(() => {
      this.num = this.num + 1 ;
      console.log(this.num);

      //for stop setInterval method
      if(this.num===3){
        clearInterval(this.counter);
      }
      // api problem created like memory leakage
    }, 1000);

  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
    this.parentData;
    // console.log('ngDoCheck called',this.contentChild);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    // console.log('ngAfterContentInit called',this.contentChild);
    // this.contentChild.nativeElement.setAttribute('style','color:green');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    // console.log('ngAfterContentChecked called',this.contentChild);
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    // console.log('ngAfterViewInit called',this.viewChild);
    // this.viewChild.nativeElement.setAttribute('style','color:brown');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    // console.log('ngAfterViewChecked called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.counter);
  }

}



