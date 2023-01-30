import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  private gifService: GifsService

  constructor (gifService: GifsService){
     this.gifService = gifService
  }

  get historial() {
    return this.gifService.historial
  } 

  buscar(item: string) {
    this.gifService.buscarGifs(item)
  }
}
