import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('journey') targetDiv!: ElementRef;

  protected technologies: any[] = [
    { name: 'Angular', image: 'Angular_gradient.png', expType: 'Profissional' },
    { name: 'Typescript', image: 'typescript.png', expType: 'Profissional' },
    { name: 'Node.js', image: 'nodejs.png', expType: 'Profissional' },
    { name: 'PostgreSQL', image: 'postgresql.png', expType: 'Profissional' },
    { name: 'MySql', image: 'mysql.png', expType: 'Profissional' },
    { name: 'Java', image: 'java.png', expType: 'Acadêmica' },
    { name: 'Springboot', image: 'springboot.png', expType: 'Acadêmica' },
    { name: 'Git', image: 'git.png', expType: 'Profissional' },
    { name: 'Nest', image: 'nest.png', expType: 'Profissional' },
    { name: 'C#', image: 'csharp.png', expType: 'Acadêmica' },
    { name: 'Worpress', image: 'wordpress.png', expType: 'Profissional' },
  ];
  
  ngOnInit() {

  }

  carouselResposinveOptions = [
    // {breakpoint: '320px', numVisible: 1, numScroll: 1},
    {breakpoint: '425px', numVisible: 1, numScroll: 1},
    {breakpoint: '768px', numVisible: 3, numScroll: 3},
  ]
  
  
  scrollToDiv() {
    this.targetDiv.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  openProject() {
    window.open('https://pokemon-tcg-xi.vercel.app/', '_blank');
  }
  

}
