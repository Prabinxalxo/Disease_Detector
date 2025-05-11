 HEAD
# Disease_Detector

# Plant Disease Detector

A mobile application for detecting 38 classes of plant diseases across 14 plant types using a TensorFlow Lite model. This app allows users to take photos of plant leaves or upload images and get instant analysis about potential diseases, along with treatment recommendations.

## Features

- Image capture using camera
- Image upload from gallery
- Offline detection using TensorFlow Lite
- Detailed information about detected diseases
- PWA support for installation on devices
- Full Android app via Capacitor

## How to Build the APK

### Prerequisites

- Node.js (v14+)
- Java Development Kit (JDK 11+)
- Android Studio
- Android SDK

### Building Steps

1. **Clone/download this repository**

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Make sure the web app builds correctly:**
   ```
   cd www
   python -m http.server 5000  # Or any other local server
   ```
   
   Navigate to http://localhost:5000 to verify the app works correctly

4. **Build the Android app:**
   ```
   npx cap sync android
   npx cap open android
   ```

5. **In Android Studio:**
   - Wait for the project to load and sync
   - From the menu, select Build → Build Bundle(s) / APK(s) → Build APK(s)
   - The APK will be generated at `android/app/build/outputs/apk/debug/app-debug.apk`

### Direct APK Build Method (Command Line)

If you prefer not to use Android Studio:

1. **Set ANDROID_HOME environment variable** to your Android SDK location
   
2. **Build using Gradle directly:**
   ```
   cd android
   ./gradlew assembleDebug
   ```

3. **Find the APK at:** `android/app/build/outputs/apk/debug/app-debug.apk`

## Project Structure

- `www/index.html` - Main HTML file
- `www/js/app.js` - Main application logic
- `www/js/model.js` - TensorFlow model handling
- `www/js/camera.js` - Camera interaction
- `www/js/disease-info.js` - Disease information database
- `www/model.tflite` - The TensorFlow Lite model for disease detection
- `www/css/style.css` - Application styling
- `android/` - Capacitor Android project

## Using the App

1. Open the app
2. Choose to take a photo or upload an image
3. Press "Detect Disease"
4. View results including:
   - Detected disease name
   - Confidence level
   - Disease information and treatment suggestions

## Technical Details

- Built with vanilla JavaScript and TensorFlow.js
- TensorFlow Lite model converted for web inference
- Capacitor for native Android capabilities
- Camera API for photo capture
- Mobile-responsive design with Bootstrap

## Model Information

The TensorFlow Lite model can detect 38 different classes of plant diseases across 14 plant types, including:

- Apple (Apple Scab, Black Rot, Cedar Apple Rust, Healthy)
- Blueberry (Healthy)
- Cherry (Powdery Mildew, Healthy)
- Corn/Maize (Cercospora Leaf Spot, Common Rust, Northern Leaf Blight, Healthy)
- Grape (Black Rot, Esca, Leaf Blight, Healthy)
- And many more...

## License

MIT License
 23153f1 (Package the plant disease detection app for use on Android devices)
