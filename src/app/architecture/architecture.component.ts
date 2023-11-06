import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent {
  constructor(private router: Router) {}

  navigateToWorkers() {
    this.router.navigate(['/architecture/worker']);
  }

  navigateToMaster() {
    this.router.navigate(['/architecture/master']);
  }


}

