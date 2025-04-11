import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit{

  public user: any = {};
  public errors: any = {};

  //Contraseña
  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  //Edad
  public selectedValue: string = "";
  public edades: any[] = [] ;


  constructor(
    private router: Router,
    private usuariosService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    this.llenarArrayEdades();

    console.log("Mi Usuario es: ", this.user);
  }

  Palabras(event: KeyboardEvent) {
    const char = event.key;
    const letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;

    if (!letras.test(char)) {
      event.preventDefault();
    }
  }


  public llenarArrayEdades(){
    for (let i = 18; i <= 80; i++) {
      this.edades.push({value: i});
    }
  }

  public terminosCondiciones(){

  }

  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    //TODO:Aquí va la lógica para registrar usuario.
  }

  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public goLogin(){
    this.router.navigate([""]);
  }

    //Para la vista movil -> Telefono (Mobile)
  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }


}
