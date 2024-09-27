import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = [
    { id: 1, name: 'Александр Матросов', description: 'Советский военнослужащий, закрыл телом амбразуру дзота.' },
    { id: 2, name: 'Зоя Космодемьянская', description: 'Первая женщина-герой Советского Союза в Великой Отечественной войне.' },
    { id: 3, name: 'Юрий Гагарин', description: 'Первый человек, полетевший в космос.' }
  ];

  constructor() { }

  // Метод для получения всех героев
  getHeroes() {
    return this.heroes;
  }

  // Метод для получения героя по id
  getHeroById(id: number) {
    return this.heroes.find(hero => hero.id === id);
  }
}
