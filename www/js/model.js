/**
 * Model handling module for Plant Disease Detector
 * Manages loading, preprocessing, and inference with the TensorFlow Lite model
 */

class PlantDiseaseDetector {
    constructor() {
        this.model = null;
        this.classLabels = [
            "Apple___Apple_scab",
            "Apple___Black_rot",
            "Apple___Cedar_apple_rust",
            "Apple___healthy",
            "Blueberry___healthy",
            "Cherry_(including_sour)___Powdery_mildew",
            "Cherry_(including_sour)___healthy",
            "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
            "Corn_(maize)___Common_rust_",
            "Corn_(maize)___Northern_Leaf_Blight",
            "Corn_(maize)___healthy",
            "Grape___Black_rot",
            "Grape___Esca_(Black_Measles)",
            "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
            "Grape___healthy",
            "Orange___Haunglongbing_(Citrus_greening)",
            "Peach___Bacterial_spot",
            "Peach___healthy",
            "Pepper,_bell___Bacterial_spot",
            "Pepper,_bell___healthy",
            "Potato___Early_blight",
            "Potato___Late_blight",
            "Potato___healthy",
            "Raspberry___healthy",
            "Soybean___healthy",
            "Squash___Powdery_mildew",
            "Strawberry___Leaf_scorch",
            "Strawberry___healthy",
            "Tomato___Bacterial_spot",
            "Tomato___Early_blight",
            "Tomato___Late_blight",
            "Tomato___Leaf_Mold",
            "Tomato___Septoria_leaf_spot",
            "Tomato___Spider_mites_Two-spotted_spider_mite",
            "Tomato___Target_Spot",
            "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
            "Tomato___Tomato_mosaic_virus",
            "Tomato___healthy"
        ];
        this.isModelLoaded = false;
    }

    /**
     * Loads the TensorFlow Lite model
     * @returns {Promise} Resolves when the model is loaded
     */
    async loadModel() {
        try {
            // Use tflite web API to load the model
            this.model = await tflite.loadTFLiteModel('model.tflite');
            this.isModelLoaded = true;
            console.log('Model loaded successfully');
            return true;
        } catch (error) {
            console.error('Failed to load model:', error);
            return false;
        }
    }

    /**
     * Preprocesses an image for model inference
     * @param {HTMLImageElement} imgElement - The image element to process
     * @returns {tf.Tensor} A tensor containing the preprocessed image
     */
    preprocessImage(imgElement) {
        return tf.tidy(() => {
            // Convert the image to a tensor
            let tensor = tf.browser.fromPixels(imgElement)
                .resizeNearestNeighbor([224, 224]) // Resize to model input size
                .toFloat();
            
            // Normalize the pixel values (based on the model's requirements)
            tensor = tensor.div(255.5); // Following the notebook's normalization
            
            // Add batch dimension [1, 224, 224, 3]
            return tensor.expandDims(0);
        });
    }

    /**
     * Runs inference on the given image
     * @param {HTMLImageElement} imgElement - The image element to classify
     * @returns {Object} The classification result with class and confidence
     */
    async classify(imgElement) {
        if (!this.isModelLoaded) {
            throw new Error('Model not loaded yet');
        }

        // Create a temporary canvas for image processing
        const canvas = document.createElement('canvas');
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imgElement, 0, 0, 224, 224);
        
        // Preprocess the image
        const tensor = this.preprocessImage(canvas);
        
        try {
            // Run inference
            const predictions = await this.model.predict(tensor);
            const result = Array.from(predictions.dataSync());
            
            // Get the index with the highest probability
            const maxIndex = result.indexOf(Math.max(...result));
            const maxProbability = result[maxIndex];
            
            // Clean up memory
            tensor.dispose();
            
            return {
                class: this.classLabels[maxIndex],
                confidence: maxProbability,
                probabilities: this.classLabels.map((label, i) => ({
                    class: label,
                    probability: result[i]
                })).sort((a, b) => b.probability - a.probability)
            };
        } catch (error) {
            console.error('Error during inference:', error);
            throw error;
        }
    }

    /**
     * Check if the model is loaded
     * @returns {boolean} True if the model is loaded
     */
    isLoaded() {
        return this.isModelLoaded;
    }
}

// Create a global instance of the plant disease detector
window.plantDiseaseDetector = new PlantDiseaseDetector();
