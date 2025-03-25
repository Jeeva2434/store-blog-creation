import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from './core/components/footer/footer.component';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { NavigationStart } from '@angular/router';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';

export type routeData = {
  title : string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'creation';

  private router = inject(Router);
  private viewPortScroller = inject(ViewportScroller);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  ngOnInit(){
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      map(()=> this.activatedRoute),
      map((route:ActivatedRoute)=>{
        while(route.firstChild){
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap((route:ActivatedRoute)=>route.data as Observable<routeData>)
    ).subscribe((data:routeData)=>{
      this.titleService.setTitle(data.title || 'Creation');
      this.viewPortScroller.scrollToPosition([0,0]);
    })
  }

}
