export default class Order {
    constructor(public idOrder: number,
        public idPatient: number,
        public idDoctor: number,
        public dateOf: Date,
        public hourOfVisit: number,
        public levelOfUrgent: number,
        ) { }
}