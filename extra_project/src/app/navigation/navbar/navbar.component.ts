import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  submitForm(form: NgForm) {
    // Ваша логика обработки формы здесь
    console.log(form.value.textInput);
  }
}
