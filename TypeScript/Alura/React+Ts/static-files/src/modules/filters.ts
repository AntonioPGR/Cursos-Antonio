import { v4 as uuid } from "uuid";

export class Filter{

  public readonly id :string = uuid();

  constructor(
    public readonly name : string,
  ){}

}