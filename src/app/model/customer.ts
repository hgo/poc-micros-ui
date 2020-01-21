export class Customer {
	id: string;
	firstName: string;
	lastName: string;
	nationalId: number;
	constructor(id: string, firstName: string, lastName: string, nationalId: number) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.nationalId = nationalId;
	}
}