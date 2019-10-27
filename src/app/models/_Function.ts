import { _User } from './_User';

export class _Function {
  constructor(public id?: number,
    public name?: string,
    public description?: string,
    public tags?: string,
    public code?: number,
    public CreatedBy?: _User){

    }
}
