#!/bin/bash

# Create directory for the app package
mkdir -p plant_disease_detector_app

# Copy all necessary files to the package directory
cp -r android plant_disease_detector_app/
cp -r www plant_disease_detector_app/
cp capacitor.config.json plant_disease_detector_app/
cp package.json plant_disease_detector_app/
cp package-lock.json plant_disease_detector_app/
cp README.md plant_disease_detector_app/

# Remove any unnecessary large files and build artifacts 
# that can be regenerated (to keep the zip small)
find plant_disease_detector_app/android -name "build" -type d -exec rm -rf {} +
find plant_disease_detector_app/android -name ".gradle" -type d -exec rm -rf {} +

# Create a zip file from the package
zip -r plant_disease_detector_app.zip plant_disease_detector_app

echo "App package created at plant_disease_detector_app.zip"
echo "Extract it on your computer, then follow the instructions in README.md to build the APK"