# Building the Plant Disease Detector APK

The package ZIP file has been created for you. Here are the steps to build the APK on your local machine:

## Option 1: Using Android Studio (Recommended)

1. **Download the zip file** `plant_disease_detector_app.zip` from this project
2. **Extract the zip file** on your computer
3. **Install Prerequisites:**
   - [Node.js and npm](https://nodejs.org/) (v14 or later)
   - [Android Studio](https://developer.android.com/studio)
   - [JDK 11+](https://adoptium.net/)

4. **Open the project:**
   - Open Android Studio
   - Select "Open an Existing Project"
   - Navigate to the extracted folder and select the `android` directory

5. **Wait for Gradle sync** to complete

6. **Build the APK:**
   - From the menu bar, select Build → Build Bundle(s) / APK(s) → Build APK(s)
   - Wait for the build process to complete

7. **Find the APK:**
   - The APK will be generated at `android/app/build/outputs/apk/debug/app-debug.apk`
   - You can install this APK directly on your Android device

## Option 2: Using Command Line

If you prefer to build without Android Studio:

1. **Download and extract** the zip file as above

2. **Install Prerequisites:**
   - [Node.js and npm](https://nodejs.org/) (v14 or later)
   - [JDK 11+](https://adoptium.net/)
   - [Android SDK Command-line Tools](https://developer.android.com/studio#command-tools)

3. **Set environment variables:**
   - Set `ANDROID_HOME` to your Android SDK location
   - Add Android tools to your PATH:
     ```
     export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
     ```

4. **Build the APK:**
   ```
   cd android
   ./gradlew assembleDebug
   ```

5. **Find the APK** at `android/app/build/outputs/apk/debug/app-debug.apk`

## Using the App

Once installed on your Android device:

1. Open the Plant Disease Detector app
2. Grant camera permissions when prompted
3. Use the "Take Photo" button to capture images of plant leaves
4. Alternatively, use "Upload Image" to select photos from your gallery
5. Press "Detect Disease" to analyze the image
6. View the detection results and recommendations

## Important Notes

- The app requires Android 5.0 (API level 21) or higher
- Camera permissions are required for the "Take Photo" feature
- The TensorFlow Lite model is included in the package (~11MB)
- The app works completely offline once installed

## Troubleshooting

If you encounter build issues:

- Ensure you have the latest Android SDK build tools installed
- Make sure Gradle and JDK versions are compatible
- If there are dependency issues, try running `npm install` in the project root before building

For any other issues, please refer to the Capacitor documentation: https://capacitorjs.com/docs