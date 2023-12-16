import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  dataFromService!: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataFromService = this.dataService.getData();
  }
}
