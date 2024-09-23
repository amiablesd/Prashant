import { LightningElement, api, track } from 'lwc';

export default class OnboardingForm extends LightningElement {
    @api stage; // Passed from the modal component to determine the current stage

    @track customerName = '';
    @track phoneNumber = '';
    @track email = '';
    @track address = '';
    @track pan = '';
    @track gst = '';
    @track salesTurnover = '';
    @track grossProfit = '';
    @track netProfit = '';
    @track location = '';
    @track spaceAdequacy = '';

    get isStageOne() {
        return this.stage === 1;
    }

    get isStageTwo() {
        return this.stage === 2;
    }

    get isStageThree() {
        return this.stage === 3;
    }

    get isStageFour() {
        return this.stage === 4;
    }

    handleInput(event) {
        const field = event.target.label.toLowerCase().replace(' ', '');
        this[field] = event.target.value;

        this.checkCompletion();
    }

    checkCompletion() {
        let isComplete = false;

        if (this.stage === 1) {
            isComplete = this.customerName && this.phoneNumber && this.email && this.address;
        } else if (this.stage === 2) {
            isComplete = this.pan && this.gst;
        } else if (this.stage === 3) {
            isComplete = this.salesTurnover && this.grossProfit && this.netProfit;
        } else if (this.stage === 4) {
            isComplete = this.location && this.spaceAdequacy;
        }

        if (isComplete) {
            this.dispatchEvent(new CustomEvent('formcomplete', {
                detail: {
                    customerName: this.customerName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    address: this.address,
                    pan: this.pan,
                    gst: this.gst,
                    salesTurnover: this.salesTurnover,
                    grossProfit: this.grossProfit,
                    netProfit: this.netProfit,
                    location: this.location,
                    spaceAdequacy: this.spaceAdequacy
                }
            }));
        }
    }
}
