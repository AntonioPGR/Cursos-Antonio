export class Product{

  constructor(
    public description :string,
    public price :{
      from ?:number,
      to :number,
      installments :number
    },
    public id :number,
    public photo :string,
    public category:{
      id :number,
      label :string
    }
  ){
  }

  public getFormatedBeforePrice(){
    if(this.price.from){
      return Product.FormatPrice(this.price.from);
    }
    return '';
  }
  public getFormatedInCashPrice(){
    return Product.FormatPrice(this.price.to);
  }
  public getFormatedEachInstallmentPrice(){
    return Product.FormatPrice((this.price.installments/12));
  }
  public getFormatedIntallmentPrice(){
    return Product.FormatPrice(this.price.installments);
  }
  public getCategoryId(){
    return this.category.id;
  }
  public getCategoryLabel(){
    return this.category.label;
  }

  static FormatPrice(value:number){
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

}