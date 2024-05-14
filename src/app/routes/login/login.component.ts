import { Component } from '@angular/core';
import { LayoutService } from '@app/app/layout/service/app.layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/app/services/auth-service.service';
import { SnackService } from '@app/app/services/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  errors: Array<any> = [];
  currentLocale: any;

  constructor(
    public layoutService: LayoutService,
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: SnackService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.authService.isLoggedIn().subscribe(
      (res: any) => {
        if (res == false || res.status == 'error') {
          this.router.navigate(['/login']);
        } else {
          this.snackbar.info('Login effettuato con successo');
          this.router.navigate(['/private/']);
        }
      },
      () => {
        console.warn('Not authenticated, need to login');
      }
    );
  }

  setLocale(locale: string) {
    this.currentLocale = locale;
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(
        (res) => {
          this.router.navigate(['private/']);
          this.snackbar.info('Logged in successfully');
        },
        (err) => {
          console.error(err);
          this.snackbar.error(
            err.error.message || err.message || 'Authentication failed'
          );
        }
      );
    }
  }
}
