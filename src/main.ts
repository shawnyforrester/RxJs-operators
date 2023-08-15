import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  ngOnInit(){
    // of(2, 4, 6, 8).subscribe((item)=> console.log(item))

    from([20, 4, 7, 8]).pipe(
      tap(item=> console.log(`This is the item emitted...${item}`)),
      map(item=> item * 2),
      map(item=> item - 8),
      map(item=>{
        if(item === 0){
          throw new Error('zero is not allowed')
        }
        return item
      }

      )
    ).subscribe({
      next: (item)=> console.log(`resulting item...${item}`),
      error: (err)=> console.log(`error occurred...${err}`),
      complete: ()=> console.log(`complete`)
    })

    // of(['Apple', 'Oranges', 'Cherries']).subscribe({
    //   next: (item)=> console.log(`These are the items...${item}`),
    //   error: (err)=> console.log(`An error has occured: ${err}`),
    //   complete: ()=> console.log(`complete`)
    // })
  }
}

bootstrapApplication(App);
