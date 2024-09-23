import { LightningElement } from 'lwc';

export default class OnboardingModal extends LightningElement {
    isModalOpen = false;
    currentStage = 1;
    totalStages = 4;
    stages = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'];

    // Method to open modal
    openModal() {
        this.isModalOpen = true;
    }

    // Method to close modal
    closeModal() {
        this.isModalOpen = false;
    }

    // Handling Next Button
    handleNext() {
        if (this.currentStage < this.totalStages) {
            this.currentStage += 1;
        }
    }

    // Handling Previous Button
    handlePrevious() {
        if (this.currentStage > 1) {
            this.currentStage -= 1;
        }
    }

    // Handling Submit Button
    handleSubmit() {
        console.log('Form Submitted');
        this.closeModal();
    }
}
