import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild('title')
  header: ElementRef;

  ngAfterViewInit(): void {
    console.log('ss');
    this.header.nativeElement.textContent = this.title;
  }
}
