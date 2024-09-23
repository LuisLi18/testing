// app.component.ts
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  responseData: any;

  constructor(private http: HttpClient) {}

  // Método para realizar la llamada POST
  sendPostRequest() {
    const apiUrl = 'http://agrotech.koreacentral.cloudapp.azure.com:8080/rice-crops'; // Cambia por tu URL de API
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = { key: 'value' }; // Cambia los datos según sea necesario

    this.http.get(apiUrl).subscribe(
      response => {
        this.responseData = response;
        console.log('Respuesta del servidor:', response);
      },
      error => {
        console.error('Error al enviar los datos', error);
      }
    );
  }
}
