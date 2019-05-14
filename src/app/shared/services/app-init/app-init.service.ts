import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }

  Init() {

    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');
      resolve();
      console.log('AppInitService Finished');
      // do your initialisation stuff here
      // setTimeout(() => {
      //   console.log('AppInitService Finished');
      //   resolve();
      // }, 6000);
    });
  }
}
