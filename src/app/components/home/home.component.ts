import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionService } from 'src/app/services/profession.service';
import { RgpdService } from 'src/app/services/rgpd.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    professions: any;
    displayProfession = false;
    rgpds: any;
    displayRGPD = false;
    nameProfession = '';
    rgpdAdd = {
        title: '',
        id_profession: '',
        id_categorie: ''
    }
    categories = [1, 2, 3, 4, 5, 6]

  constructor(
      private router: Router,
      private professionService: ProfessionService,
      private rgpdService: RgpdService,
      private toastr: ToastrService
  ) {
  }

  async ngOnInit() {
    this.professions = await this.professionService.getAll().toPromise();
    this.rgpds = await this.rgpdService.getAll().toPromise();
  }

  ajouterProfession() {
    this.displayProfession = true;
  }

  ajouterRGPD() {
    this.displayRGPD = true;
  }

  cancelEverything() {
    this.displayProfession = false;
    this.displayRGPD = false;
}

  saveProfession() {
      let data = {
          name: this.nameProfession,
          icon: null
      }
    this.professionService.create(data).subscribe(
        async (response) => {
            this.nameProfession = '';
            this.professions = await this.professionService.getAll().toPromise();
            this.cancelEverything();
        },
        (error) => {
        }
      );
  }


  saveRgpd() {
    this.rgpdService.create(this.rgpdAdd).subscribe(
        async (response) => {
            this.rgpdAdd = {
                title: '',
                id_profession: '',
                id_categorie: ''
            }
            this.rgpds = await this.rgpdService.getAll().toPromise();
            this.cancelEverything();
        },
        (error) => {
        }
        );
    }


  deleteProfession(id) {
    this.professionService.delete(id).subscribe(
        async (response) => {
          this.toastr.success("Profession supprimée avec succés")
          console.log("test");
            this.professions = await this.professionService.getAll().toPromise();
        },
        (error) => {
        }
      );
  }
}
