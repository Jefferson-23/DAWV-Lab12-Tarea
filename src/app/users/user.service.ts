import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Jefferson',
      country: 'Colombia',
      hobbies: ['Ciclismo', 'lectura'],
      favoriteMovie: 'El Padrino',
      favoriteColor: 'Azul',
      birthDate: '1980-01-01',
    },
    {
      id: 2,
      name: 'Nataly',
      country: 'Pais Vasco',
      hobbies: ['Pintura', 'cocina'],
      favoriteMovie: 'Titanic',
      favoriteColor: 'Rojo',
      birthDate: '1985-02-02',
    },
    {
      id: 3,
      name: 'Renato',
      country: 'Mexico',
      hobbies: ['Senderismo', 'fotografía'],
      favoriteMovie: 'Origen',
      favoriteColor: 'Verde',
      birthDate: '1990-03-03',
    },
    {
      id: 4,
      name: 'Marquihno',
      country: 'USA',
      hobbies: ['Natación', 'videojuegos'],
      favoriteMovie: 'Matrix',
      favoriteColor: 'Amarillo',
      birthDate: '1995-04-04',
    },
    {
      id: 5,
      name: 'Isabel',
      country: 'Canada',
      hobbies: ['Jardinería', 'escritura'],
      favoriteMovie: 'Star Wars',
      favoriteColor: 'Morado',
      birthDate: '2000-05-05',
    }
  ];

  constructor() { }

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<any> {
    return of(this.users.find(user => user.id === id));
  }
}