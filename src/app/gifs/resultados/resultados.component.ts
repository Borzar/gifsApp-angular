import { Component } from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
    
    private gifsService: GifsService

    constructor(gifsService: GifsService) {
        this.gifsService = gifsService
    }

    get resultados() {
        return this.gifsService.resultados
    }
  

}
