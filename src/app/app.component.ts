import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppSettingsService } from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('title')
  header: ElementRef;

  private unsubscribe = new Subject();
  private title: string;

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.load().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((settings: any) => {
      // почему объект настройки сохранен в объект с полем default? и как это исправить?
      console.log(settings);
      this.title = settings.default?.title;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngAfterViewInit(): void {
    this.header.nativeElement.textContent = this.title;
  }
}
