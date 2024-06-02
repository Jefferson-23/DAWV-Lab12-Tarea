import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = [
    {
      id: 1,
      title: 'Inicie la tareita',
      content: 'Este es mi primer post del dia',
      date: '2022-01-01',
      author: 'John Doe',
      category: 'Tareas'
    },
    {
      id: 2,
      title: 'Mitad de la tareita',
      content: 'Este es mi segundo post del dia', 
      date: '2022-01-02',
      author: 'Jane Doe',
      category: 'Tareas'
    },
    {
      id: 3,
      title: 'Acabe la tareita',
      content: 'Este es mi tercer post del dia',
      date: '2022-01-03',
      author: 'John Doe',
      category: 'Tareas'
    },
    {
      id: 4,
      title: 'El terror de la noche',
      content: 'Este es un post sobre una historia de terror que ocurrió en la noche',
      date: '2022-01-04',
      author: 'Alice',
      category: 'Terror'
    },
    {
      id: 5,
      title: 'La fantasía de un sueño',
      content: 'Este es un post sobre un sueño fantástico que tuve',
      date: '2022-01-05',
      author: 'Bob',
      category: 'Fantasía'
    }
  ];

  constructor() { }

  getPosts(): Observable<any[]> {
    return of(this.posts);
  }

  getPostById(id: number): Observable<any> {
    return of(this.posts.find(post => post.id === id));
  }
}
