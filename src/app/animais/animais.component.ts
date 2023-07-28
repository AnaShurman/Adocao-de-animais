import { Component } from '@angular/core';
import { CaesService } from '../services/caes.service';
import { GatosService } from '../services/gatos.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class AnimaisComponent {
  layout: string = 'grid';
  animalInformation: any;
  visible: boolean = false;
  imagem: any;
  name: string = '';
  editOn: boolean = false;
  viewMode: boolean = true;
  idade: number = 0;
  porte: any
  descrição: string = '';
  animaisData: any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview: any;
  imageInfos?: Observable<any>;
  add: boolean = false;
  sexo = '';
  checked: any
  idDelete: any;
  constructor(private caesService: CaesService, private GatosService: GatosService, private uploadService: FileUploadService, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  ngOnInit() {
    if (location.pathname === "/caes") {
      this.animalInformation = this.caesService.getProductsData();
    } else {
      this.animalInformation = this.GatosService.getProductsData();
    }
    this.imageInfos = this.uploadService.getFiles();
  }
  editPage(image: any) {
    this.preview = undefined;
    this.add = false;
    this.visible = true;
    this.animaisData = image;
    this.imagem = '../../assets/' + image.name + '.jpg';

  }
  checkboxDelete(event: any) {
    this.idDelete = event
  }

  deletePage(checked: any) {
    console.log(checked)
    let indiceObjetoRemover = this.animalInformation.findIndex((objeto: { id: number; }) => objeto.id === this.idDelete);
    if (indiceObjetoRemover >= 0) {
      this.animalInformation.splice(indiceObjetoRemover, 1);
      this.confirmationService.confirm({


        message: 'Você tem certeza que gostaria de deletar essa informação?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {


          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Informação deletada' });

        }
      });
    }

  }
  
  adotadoPage(checked: any) {
    console.log(checked)
    let indiceObjetoRemover = this.animalInformation.findIndex((objeto: { id: number; }) => objeto.id === this.idDelete);
    if (indiceObjetoRemover >= 0) {
      this.animalInformation.splice(indiceObjetoRemover, 1);
    
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Animal adotado' });
    }

  }
  editMode() {
    this.viewMode = false;
    this.editOn = true;
  }

  Save() {
    this.editOn = false;
    this.viewMode = true;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Animal Registrado' });
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }
            this.currentFile = undefined;
          },
        });
      }
      this.selectedFiles = undefined;
    } else {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registro atualizado' });

    }
  }

  newAnimal(image: any) {
    this.viewMode = false;
    this.editOn = true;
    this.add = true;
    this.preview = undefined;
    this.animaisData = image;
    this.editOn = true;
    this.visible = true;

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };
        reader.readAsDataURL(this.currentFile);
        console.log(this.preview)

      }
    }
  }
}