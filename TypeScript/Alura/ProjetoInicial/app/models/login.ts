export class Login{

  private _usuario : string;
  private _senha : string;
  private _site : string;
  private _codigoDeRecuperacao : string;
  private _dataDeCriacao : Date;

  constructor(usuario : string, senha : string, site : string, cdr : string){

    this._usuario = usuario;
    this._senha = senha;
    this._site = site;
    this._codigoDeRecuperacao = cdr;
    this._dataDeCriacao = new Date();

  }

  // GETTERS ----------
  get usuario(): string {
    return this._usuario;
  }
  get senha(): string {
    return this._senha;
  }
  get site(): string {
    return this._site;
  }
  get codigoDeRecuperacao(): string {
    return this._codigoDeRecuperacao;
  }
  get dataDeCriacao(): Date {
    return this._dataDeCriacao;
  }

  // SETTERS ----------
  /*
  set usuario(usuario: any) {
    this.usuario = usuario;
  }
  set senha(senha: any){
    this.senha = senha;
  }
  set site(site: any){
    this.site = site;
  }
  set codigoDeRecuperacao(codigoDeRecuperacao: any){
    this.codigoDeRecuperacao = codigoDeRecuperacao;
  }
  */

}

