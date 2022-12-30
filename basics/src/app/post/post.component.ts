import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit().');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked().');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit().');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() was called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() was called');
  }

  ngOnInit(): void {
    console.log('onInit was called.', this.postImg);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() was called.');
  }
}
