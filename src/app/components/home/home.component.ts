import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    professions: any;
    displayProfession = false;
    nameProfession = '';

  constructor(
      private router: Router,
      private professionService: ProfessionService
  ) {
  }

  async ngOnInit() {
    this.professions = await this.professionService.getAll().toPromise();
    console.log(this.professions);
  }

  ajouterProfession() {
    this.displayProfession = true;
  }

  cancelEverything() {
    this.displayProfession = false;
  }

  saveProfession() {
      console.log(this.nameProfession);
      let data = {
          name: this.nameProfession,
          icon: null
      }
    this.professionService.create(data).subscribe(
        async (response) => {
            this.professions = await this.professionService.getAll().toPromise();
            this.cancelEverything();
        },
        (error) => {
        }
      );
  }
}
