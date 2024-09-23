import { LightningElement, track } from 'lwc';

export default class OnboardingModal extends LightningElement {
    @track isModalOpen = false;
    @track currentStep = 1;
    @track isNextDisabled = true;
    @track isFirstStage = true;
    @track isLastStage = false; // New to track the final stage

    onboardingData = {
        customerInfo: {},
        verification: {},
        financials: {},
        infrastructure: {}
    };

    // Open modal
    openModal() {
        this.isModalOpen = true;
    }

    // Close modal
    closeModal() {
        this.isModalOpen = false;
    }

    // Move to the next step
    goNext() {
        if (this.currentStep < 4) {
            this.currentStep += 1;
            this.updateStage();
        }
    }

    // Move to the previous step
    goBack() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
            this.updateStage();
        }
    }

    // Update stage-related properties
    updateStage() {
        this.isFirstStage = this.currentStep === 1;
        this.isLastStage = this.currentStep === 4;
        this.isNextDisabled = true; // Disable Next until form is validated
        this.updateProgressIndicator(); // Update the progress bar based on the step
    }

    // Progress indicator update logic
    updateProgressIndicator() {
        const steps = this.template.querySelectorAll('.progress-step');
        steps.forEach((step, index) => {
            if (index < this.currentStep) {
                step.classList.add('slds-is-completed');
                step.classList.remove('slds-is-active');
            } else if (index === this.currentStep - 1) {
                step.classList.add('slds-is-active');
            } else {
                step.classList.remove('slds-is-completed', 'slds-is-active');
            }
        });
    }

    // Handle form completion and enable the Next button
    handleFormComplete(event) {
        const stageData = event.detail;
        if (this.currentStep === 1) {
            this.onboardingData.customerInfo = stageData;
        } else if (this.currentStep === 2) {
            this.onboardingData.verification = stageData;
        } else if (this.currentStep === 3) {
            this.onboardingData.financials = stageData;
        } else if (this.currentStep === 4) {
            this.onboardingData.infrastructure = stageData;
        }

        this.isNextDisabled = false; // Enable Next button when form is completed
    }
}
