import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionService } from 'src/app/services/profession.service';
import { RgpdService } from 'src/app/services/rgpd.service';
import { CategoriesService } from 'src/app/services/categories.service';
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
    displayCategorie = false;
    nameProfession = '';
    rgpdAdd = {
        title: '',
        id_profession: '',
        id_categorie: ''
    }
    nameCategorie = '';
    categories : any;

  constructor(
      private router: Router,
      private professionService: ProfessionService,
      private rgpdService: RgpdService,
      private categoriesService: CategoriesService,
      private toastr: ToastrService
  ) {
  }

  async ngOnInit() {
    this.professions = await this.professionService.getAll().toPromise();
    this.categories = await this.categoriesService.getAll().toPromise();
    this.rgpds = await this.rgpdService.getAll().toPromise();
  }

  ajouterProfession() {
    this.displayProfession = true;
  }

  ajouterRGPD() {
    this.displayRGPD = true;
  }
  ajouterCategorie() {
    this.displayCategorie = true;
  }

  cancelEverything() {
    this.displayProfession = false;
    this.displayRGPD = false;
    this.displayCategorie = false;

}
saveCategorie() {
  let data = {
      name: this.nameCategorie,
  }
this.categoriesService.create(data).subscribe(
    async (response) => {
        this.nameCategorie = '';
        this.categories = await this.categoriesService.getAll().toPromise();
        this.toastr.success("Catégorie ajoutée");
        this.cancelEverything();
    },
    (error) => {
    }
  );
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
            this.toastr.success("Profession ajoutée");
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
            this.toastr.success("Règle ajoutée");
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
      
            this.professions = await this.professionService.getAll().toPromise();
        },
        (error) => {
        }
      );
  }
  deleteregle(id) {
    this.rgpdService.delete(id).subscribe(
        async (response) => {
          this.toastr.success("Rgpd supprimée avec succés")
     
          this.rgpds = await this.rgpdService.getAll().toPromise();
        },
        (error) => {
        }
      );
  }

  deleteCategorie(id) {
    this.categoriesService.delete(id).subscribe(
        async (response) => {
          this.toastr.success("Catégorie supprimée avec succés")
     
          this.categories = await this.categoriesService.getAll().toPromise();
        },
        (error) => {
        }
      );
  }
  
}
