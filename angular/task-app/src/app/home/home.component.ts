import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngOnInit(): void {
    // Use the external script
    this.loadExternalScript();
  }

  private loadExternalScript(): void {
    const script = document.createElement('script');
    script.src = 'assets/ext-script.js';
    document.body.appendChild(script);
  }
}
