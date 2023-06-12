

export class Product{
    constructor(
        public name: string,
        public children?: Product[]){}
}