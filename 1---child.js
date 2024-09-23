import { LightningElement, api } from 'lwc';

export default class OnboardingForm extends LightningElement {
    // Variables for form data
    customerName = '';
    phoneNumber = '';
    email = '';
    address = '';
    pan = '';
    gst = '';
    salesTurnOver = '';
    grossProfit = '';
    netProfit = '';
    debt = '';
    location = '';
    spaceAdequacy = '';

    @api currentStage;
    @api totalStages;

    // Computed properties for conditional rendering based on the current stage
    get isStage2() {
        return this.currentStage === 2;
    }

    get isStage3() {
        return this.currentStage === 3;
    }

    get isStage4() {
        return this.currentStage === 4;
    }

    get isLastStage() {
        return this.currentStage === this.totalStages;
    }

    // Next button click handler
    handleNext() {
        this.dispatchEvent(new CustomEvent('next'));
    }

    // Previous button click handler
    handlePrevious() {
        this.dispatchEvent(new CustomEvent('previous'));
    }

    // Submit button click handler
    handleSubmit() {
        this.dispatchEvent(new CustomEvent('submit'));
    }
}
