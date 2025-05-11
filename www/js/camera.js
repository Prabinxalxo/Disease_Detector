/**
 * Camera handling module for the Plant Disease Detector app
 * Manages camera access, image capture, and preview functionality
 */

class CameraManager {
    constructor() {
        this.cameraView = document.getElementById('camera-view');
        this.cameraCanvas = document.getElementById('camera-canvas');
        this.captureBtn = document.getElementById('capture-btn');
        this.cameraModal = new bootstrap.Modal(document.getElementById('camera-modal'));
        
        this.stream = null;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Setup capture button click handler
        this.captureBtn.addEventListener('click', () => this.captureImage());
        
        // When the modal is hidden, stop the camera stream
        document.getElementById('camera-modal').addEventListener('hidden.bs.modal', () => {
            this.stopCamera();
        });
    }
    
    async startCamera() {
        try {
            // Request access to the camera with preferred settings
            const constraints = {
                video: {
                    facingMode: 'environment', // Prefer back camera on mobile
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            };
            
            this.stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.cameraView.srcObject = this.stream;
            
            // Show the camera modal
            this.cameraModal.show();
            
            return true;
        } catch (error) {
            console.error('Error accessing camera:', error);
            alert('Could not access the camera. Please make sure you have given permission and try again.');
            return false;
        }
    }
    
    stopCamera() {
        if (this.stream) {
            // Stop all tracks in the stream
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
    }
    
    captureImage() {
        // Get the canvas context
        const context = this.cameraCanvas.getContext('2d');
        
        // Set the canvas dimensions to match the video
        this.cameraCanvas.width = this.cameraView.videoWidth;
        this.cameraCanvas.height = this.cameraView.videoHeight;
        
        // Draw the current video frame onto the canvas
        context.drawImage(this.cameraView, 0, 0, this.cameraCanvas.width, this.cameraCanvas.height);
        
        // Convert the canvas image to a data URL
        const imageDataUrl = this.cameraCanvas.toDataURL('image/jpeg');
        
        // Set the image preview source and show it
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = imageDataUrl;
        imagePreview.style.display = 'block';
        document.getElementById('default-preview').style.display = 'none';
        
        // Enable the detect button
        document.getElementById('detect-btn').disabled = false;
        
        // Hide the camera modal
        this.cameraModal.hide();
        
        // Store the captured image data in the app's state
        window.app.setImageData(imageDataUrl);
    }
}

// Create and export the camera manager
window.cameraManager = new CameraManager();
