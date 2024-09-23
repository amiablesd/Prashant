import { LightningElement, track } from 'lwc';
import OnboardingWrapper from '@salesforce/apex/OnboardingWrapper';

export default class ParentLwc extends LightningElement {
    @track currentStep = 1;
    @track formData = new OnboardingWrapper();

    // Handle next button click
    handleNext() {
        if (this.currentStep < 4) {
            this.currentStep += 1;
        }
    }

    // Handle previous button click
    handlePrevious() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
        }
    }

    // Handle submission of form
    handleSubmit() {
        // Perform final validation if necessary
        console.log('Final Form Data:', this.formData);
    }

    // Update formData when data is entered
    handleDataChange(event) {
        const field = event.target.name;
        this.formData[field] = event.target.value;
    }
}
