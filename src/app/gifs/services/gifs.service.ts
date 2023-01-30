import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http: HttpClient
  public resultados: any = [] 

  constructor(http: HttpClient) {
    this.http = http
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []

  }

  private _historial: string[] = []

  get historial() {
    return [...this._historial]
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase()
    if (!this._historial.includes(query)) {
        this._historial.unshift(query)
        this._historial = this._historial.splice(0,10)
        localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=qJDD3pqgpFifUiKF0vN4D0tDvVsYpnzR&q=${query}&limit=20`)
      .subscribe( (resp: any) => { 
        this.resultados = resp.data
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })
    
    
    // async await 
    // const fetchApi = await fetch('https://api.giphy.com/v1/gifs/search?api_key=qJDD3pqgpFifUiKF0vN4D0tDvVsYpnzR&q=dbz&limit=20')
    // const resp = await fetchApi.json()
    // console.log(resp)

    // fetch javascript
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=qJDD3pqgpFifUiKF0vN4D0tDvVsYpnzR&q=dbz&limit=20')
      // .then(response => response.json())
      // .then(x => console.log(x.data))
  }
}
