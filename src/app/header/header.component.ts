import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [NgbDropdownModule],
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
