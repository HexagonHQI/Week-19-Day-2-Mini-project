export interface Item {
    id: number;
    item: string;
    checked: boolean;
  }
  
  export class ListItem implements Item {
    constructor(public id: number, public item: string, public checked: boolean = false) {}
  }
  