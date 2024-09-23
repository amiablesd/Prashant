import { LightningElement, track } from 'lwc';

export default class OnboardingModal extends LightningElement {
    @track isModalOpen = false;
    @track currentStep = 1;
    @track isNextDisabled = true;
    @track isFirstStage = true;

    onboardingData = {
        customerInfo: {},
        verification: {},
        financials: {},
        infrastructure: {}
    };

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    goNext() {
        this.currentStep += 1;
        this.updateStage();
    }

    goBack() {
        this.currentStep -= 1;
        this.updateStage();
    }

    updateStage() {
        this.isFirstStage = this.currentStep === 1;
        this.isNextDisabled = true; // Disable Next button until stage is completed
    }

    handleFormComplete(event) {
        // Retrieve data from the form component and enable the Next button
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

        this.isNextDisabled = false; // Enable Next button after form completion
    }
}
