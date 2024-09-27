import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: any;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.hero = this.heroService.getHeroById(id);
  }
}
