import { LightningElement, track } from 'lwc';

export default class OnboardingModal extends LightningElement {
    @track currentStage = 0;
    @track stages = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'];
    @track isModalOpen = false;

    // Open the modal
    openModal() {
        this.isModalOpen = true;
    }

    // Close the modal
    closeModal() {
        this.isModalOpen = false;
    }

    // Update the current stage from child component
    handleStageUpdate(event) {
        this.currentStage = event.detail;
    }

    // Get the progress status for the Lightning Progress Indicator
    get progressValue() {
        return (this.currentStage / (this.stages.length - 1)) * 100;
    }

    // Get stage for each step in the progress indicator
    get isStage1() {
        return this.currentStage === 0;
    }

    get isStage2() {
        return this.currentStage === 1;
    }

    get isStage3() {
        return this.currentStage === 2;
    }

    get isStage4() {
        return this.currentStage === 3;
    }
}
