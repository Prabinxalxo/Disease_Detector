/**
 * Main application logic for Plant Disease Detector
 * Handles UI interactions, image processing, and result display
 */

class PlantDiseaseApp {
    constructor() {
        this.imageData = null;
        this.isImageLoaded = false;
        this.isModelLoaded = false;
        
        // Initialize UI elements
        this.initElements();
        this.setupEventListeners();
        
        // Initialize the model
        this.initModel();
    }
    
    initElements() {
        // Main screens
        this.loadingScreen = document.getElementById('loading-screen');
        this.mainScreen = document.getElementById('main-screen');
        
        // Image preview elements
        this.imagePreview = document.getElementById('image-preview');
        this.defaultPreview = document.getElementById('default-preview');
        
        // Buttons
        this.cameraBtn = document.getElementById('camera-btn');
        this.uploadBtn = document.getElementById('upload-btn');
        this.fileInput = document.getElementById('file-input');
        this.detectBtn = document.getElementById('detect-btn');
        
        // Results elements
        this.resultCard = document.getElementById('result-card');
        this.diseaseName = document.getElementById('disease-name');
        this.confidenceBar = document.getElementById('confidence-bar');
        this.confidenceValue = document.getElementById('confidence-value');
        this.diseaseInfo = document.getElementById('disease-info');
    }
    
    setupEventListeners() {
        // Camera button click handler
        this.cameraBtn.addEventListener('click', () => {
            window.cameraManager.startCamera();
        });
        
        // Upload button click handler
        this.uploadBtn.addEventListener('click', () => {
            this.fileInput.click();
        });
        
        // File input change handler
        this.fileInput.addEventListener('change', (event) => {
            if (event.target.files && event.target.files[0]) {
                const file = event.target.files[0];
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    this.imagePreview.src = e.target.result;
                    this.imagePreview.style.display = 'block';
                    this.defaultPreview.style.display = 'none';
                    this.detectBtn.disabled = false;
                    this.setImageData(e.target.result);
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // Detect button click handler
        this.detectBtn.addEventListener('click', () => {
            this.detectDisease();
        });
    }
    
    async initModel() {
        try {
            // Show loading screen while model loads
            this.loadingScreen.style.display = 'block';
            this.mainScreen.style.display = 'none';
            
            // Load the model and check for success
            const success = await window.plantDiseaseDetector.loadModel();
            
            if (success) {
                this.isModelLoaded = true;
                console.log('Model loaded successfully');
                
                // Hide loading screen and show main screen
                this.loadingScreen.style.display = 'none';
                this.mainScreen.style.display = 'block';
            } else {
                // Show error message if model loading fails
                this.loadingScreen.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Error Loading Model</h4>
                        <p>Could not load the disease detection model. Please check your internet connection and try again.</p>
                        <button class="btn btn-danger mt-3" onclick="location.reload()">Retry</button>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error initializing model:', error);
            
            // Show error message
            this.loadingScreen.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Error</h4>
                    <p>An error occurred while loading the model: ${error.message}</p>
                    <button class="btn btn-danger mt-3" onclick="location.reload()">Retry</button>
                </div>
            `;
        }
    }
    
    setImageData(data) {
        this.imageData = data;
        this.isImageLoaded = true;
    }
    
    async detectDisease() {
        if (!this.isImageLoaded || !this.isModelLoaded) {
            alert('Please select an image and ensure the model is loaded.');
            return;
        }
        
        try {
            // Show loading state
            this.detectBtn.disabled = true;
            this.detectBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Detecting...';
            
            // Create an image element from the image data
            const img = new Image();
            img.src = this.imageData;
            
            await new Promise((resolve) => {
                img.onload = resolve;
            });
            
            // Run the classification
            const result = await window.plantDiseaseDetector.classify(img);
            
            // Display results
            this.showResults(result);
        } catch (error) {
            console.error('Error detecting disease:', error);
            alert('An error occurred while detecting disease. Please try again.');
        } finally {
            // Reset button state
            this.detectBtn.disabled = false;
            this.detectBtn.innerHTML = '<i data-feather="search"></i> Detect Disease';
            feather.replace();
        }
    }
    
    showResults(result) {
        // Format the confidence as a percentage
        const confidencePercent = Math.round(result.confidence * 100);
        
        // Update the UI with the results
        this.diseaseName.textContent = getDiseaseDisplayName(result.class);
        this.confidenceBar.style.width = `${confidencePercent}%`;
        this.confidenceValue.textContent = `${confidencePercent}%`;
        this.diseaseInfo.innerHTML = formatDiseaseInfo(result.class);
        
        // Set confidence bar color based on confidence level
        if (confidencePercent >= 70) {
            this.confidenceBar.className = 'progress-bar bg-success';
        } else if (confidencePercent >= 40) {
            this.confidenceBar.className = 'progress-bar bg-warning';
        } else {
            this.confidenceBar.className = 'progress-bar bg-danger';
        }
        
        // Show the result card
        this.resultCard.style.display = 'block';
        
        // Scroll to the result card
        this.resultCard.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PlantDiseaseApp();
});
