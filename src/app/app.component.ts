import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    componentToDisplay: string = 'home';
    onNavigate(component: string) {
        this.componentToDisplay = component;
    }
}
