import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutdep',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './aboutdep.component.html', // Make sure this path is correct
  styleUrls: ['./aboutdep.component.css']   // Corrected this line
})
export class AboutdepComponent { }
