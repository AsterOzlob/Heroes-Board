import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

export class HeroesListComponent implements OnInit {
  heroes: any[] = [];

  constructor(private heroService: HeroService) {}

  // При инициализации компонента получаем героев из сервиса
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
