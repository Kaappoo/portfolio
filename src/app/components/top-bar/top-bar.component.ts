import { Component, inject } from '@angular/core';
import { ScrollService } from './scroll-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    imports: [],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
    private scrollService = inject(ScrollService);
    private router = inject(Router);

    navigateAndScroll(sectionId: string) {
        this.router.navigate(['/']).then(() => {
          this.scrollService.scrollToSection(sectionId);
        });
    }
}
