export default class User {
    constructor(public id: number,
        public firstName: string,
        public lastName: string,
        public statuscovid19: number,
        public gender: string,
         public codeAdress: number,
         public machine: number,
         public  medicalCondition: number,       
        public age: number,
        public  levelUrgent: number,  
        public  doctorId: number, 
        public  locationId: number, 
        public password: string,
        public phoneNumber: string) { } 
}