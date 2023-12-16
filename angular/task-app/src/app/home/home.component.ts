import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskFormComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Use the external script
    this.loadExternalScript();
  }

  private loadExternalScript(): void {
    if (this.document) {
      const script = this.renderer.createElement('script');
      script.src = 'assets/ext-script.js';
      this.renderer.appendChild(this.document.body, script);
    }
  }
}
