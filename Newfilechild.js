import { LightningElement } from 'lwc';

export default class ChildLwc extends LightningElement {
    customerName = '';
    phoneNumber = '';
    address = '';
    email = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    handleNext() {
        // Add logic to move to the next stage later
        console.log('Moving to the next stage with data:', {
            customerName: this.customerName,
            phoneNumber: this.phoneNumber,
            address: this.address,
            email: this.email
        });
    }
}
