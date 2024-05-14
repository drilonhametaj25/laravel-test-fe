import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackService } from '@app/app/services/snack.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [],
})
export class PublicComponent implements OnInit {
  isLogged = false
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private snackService: SnackService
  ) {}

  ngOnInit(): void {
    const resolvedData: any = this.route.snapshot.data['auth'];
    if (resolvedData.user && resolvedData.user._id) {
      this.isLogged = true;
      this.snackService.message("Utente autenticato")
      this.router.navigate(['private/imprese']);
    } else {
      this.snackService.message('Utente non autenticato');
    }
  }
}
