/**
 * Disease Information Database
 * Contains information about different plant diseases including symptoms,
 * causes, and treatment recommendations.
 */
const diseaseInfo = {
    "Apple___Apple_scab": {
        "name": "Apple Scab",
        "symptoms": "Dark olive-green spots on leaves and fruit. Later, these spots become darker and scab-like. Severely infected leaves may turn yellow and drop prematurely.",
        "causes": "Fungus (Venturia inaequalis) that overwinters in fallen leaves.",
        "treatment": "Remove and destroy fallen leaves. Apply fungicides during the growing season. Choose resistant apple varieties when planting new trees."
    },
    "Apple___Black_rot": {
        "name": "Black Rot",
        "symptoms": "Circular lesions on leaves with purple margins and brown centers. Fruit develops dark, sunken areas with concentric rings.",
        "causes": "Fungus (Botryosphaeria obtusa) that can survive in cankers and mummified fruit.",
        "treatment": "Prune out diseased or dead wood. Remove mummified fruit. Apply fungicides during the growing season."
    },
    "Apple___Cedar_apple_rust": {
        "name": "Cedar Apple Rust",
        "symptoms": "Bright orange-yellow spots on leaves and fruit. Orange protrusions may form on the underside of affected leaves.",
        "causes": "Fungus (Gymnosporangium juniperi-virginianae) that requires cedar trees to complete its life cycle.",
        "treatment": "Remove cedar trees within 2-3 miles if possible. Apply fungicides in spring. Plant resistant apple varieties."
    },
    "Apple___healthy": {
        "name": "Healthy Apple Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Blueberry___healthy": {
        "name": "Healthy Blueberry Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Cherry_(including_sour)___Powdery_mildew": {
        "name": "Cherry Powdery Mildew",
        "symptoms": "White powdery substance on leaves, shoots, and fruit. Leaves may curl and become distorted.",
        "causes": "Fungus (Podosphaera clandestina) that thrives in humid conditions without standing water.",
        "treatment": "Improve air circulation by pruning. Apply fungicides at the first sign of infection. Ensure proper spacing between plants."
    },
    "Cherry_(including_sour)___healthy": {
        "name": "Healthy Cherry Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
        "name": "Corn Gray Leaf Spot",
        "symptoms": "Rectangular, gray to tan lesions that follow leaf veins. Lesions may coalesce to blight entire leaves.",
        "causes": "Fungus (Cercospora zeae-maydis) that survives in crop debris.",
        "treatment": "Rotate crops to non-host plants. Use resistant corn varieties. Apply fungicides if economically feasible."
    },
    "Corn_(maize)___Common_rust_": {
        "name": "Corn Common Rust",
        "symptoms": "Small, circular to elongated, brick-red to brown pustules on both leaf surfaces.",
        "causes": "Fungus (Puccinia sorghi) that produces airborne spores.",
        "treatment": "Plant resistant varieties. Apply fungicides early in the season when rust is first detected."
    },
    "Corn_(maize)___Northern_Leaf_Blight": {
        "name": "Northern Corn Leaf Blight",
        "symptoms": "Long, elliptical, grayish-green to tan lesions on leaves. Lesions may be several inches long.",
        "causes": "Fungus (Exserohilum turcicum) that survives in corn debris.",
        "treatment": "Rotate crops. Use resistant varieties. Apply fungicides if disease appears early in the growing season."
    },
    "Corn_(maize)___healthy": {
        "name": "Healthy Corn Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Grape___Black_rot": {
        "name": "Grape Black Rot",
        "symptoms": "Circular, reddish-brown lesions on leaves. Fruit develop light-brown spots that expand rapidly, causing the berry to shrivel into a hard, black mummy.",
        "causes": "Fungus (Guignardia bidwellii) that overwinters in mummies and infected canes.",
        "treatment": "Remove mummified fruit and infected canes. Apply fungicides from bud break until fruit ripening."
    },
    "Grape___Esca_(Black_Measles)": {
        "name": "Grape Black Measles (Esca)",
        "symptoms": "Leaves develop tiger-stripe patterns. Red cultivars show red stripes, white cultivars show yellow stripes. Fruit develop purple-brown spots.",
        "causes": "Complex of fungi including Phaeomoniella chlamydospora and Phaeoacremonium species.",
        "treatment": "No effective treatment exists once symptoms appear. Remove and destroy infected vines. Use disease-free propagation material."
    },
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        "name": "Grape Leaf Blight",
        "symptoms": "Small, irregularly shaped dark brown spots with yellow halos on leaves. Severely affected leaves may drop prematurely.",
        "causes": "Fungus (Pseudocercospora vitis, formerly Isariopsis leaf spot).",
        "treatment": "Apply appropriate fungicides. Maintain good air circulation through proper pruning."
    },
    "Grape___healthy": {
        "name": "Healthy Grape Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Orange___Haunglongbing_(Citrus_greening)": {
        "name": "Citrus Greening (Huanglongbing)",
        "symptoms": "Asymmetrical blotchy mottling of leaves. Yellow shoots. Lopsided, bitter fruit that remains green at the bottom.",
        "causes": "Bacterium (Candidatus Liberibacter) spread by Asian citrus psyllid.",
        "treatment": "No cure exists. Control psyllid populations. Remove and destroy infected trees to prevent spread."
    },
    "Peach___Bacterial_spot": {
        "name": "Peach Bacterial Spot",
        "symptoms": "Small, water-soaked lesions on leaves that turn purple or brown with a yellow halo. Fruit develop sunken, dark spots, often with cracks.",
        "causes": "Bacterium (Xanthomonas arboricola pv. pruni).",
        "treatment": "Apply copper-based bactericides during dormant season. Choose resistant varieties. Avoid overhead irrigation."
    },
    "Peach___healthy": {
        "name": "Healthy Peach Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Pepper,_bell___Bacterial_spot": {
        "name": "Bell Pepper Bacterial Spot",
        "symptoms": "Water-soaked, dark green spots on leaves that later turn brown. Raised, scab-like spots on fruit.",
        "causes": "Bacteria (Xanthomonas species) spread by water splash and seeds.",
        "treatment": "Use disease-free seeds and transplants. Rotate crops. Apply copper-based bactericides. Avoid overhead irrigation."
    },
    "Pepper,_bell___healthy": {
        "name": "Healthy Bell Pepper Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Potato___Early_blight": {
        "name": "Potato Early Blight",
        "symptoms": "Dark, concentric rings forming a target-like pattern on leaves. Older leaves are affected first. Dark, sunken lesions on tubers.",
        "causes": "Fungus (Alternaria solani) that overwinters in plant debris and soil.",
        "treatment": "Rotate crops. Use certified disease-free seed potatoes. Apply fungicides preventatively. Avoid overhead irrigation."
    },
    "Potato___Late_blight": {
        "name": "Potato Late Blight",
        "symptoms": "Water-soaked, gray-green spots on leaves that rapidly enlarge and turn brown. White mold may be visible on leaf undersides. Tubers develop reddish-brown patches.",
        "causes": "Oomycete (Phytophthora infestans) - not a true fungus. Known for causing the Irish Potato Famine.",
        "treatment": "Apply fungicides preventatively. Remove volunteer plants. Destroy all plant debris. Monitor weather conditions."
    },
    "Potato___healthy": {
        "name": "Healthy Potato Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Raspberry___healthy": {
        "name": "Healthy Raspberry Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Soybean___healthy": {
        "name": "Healthy Soybean Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Squash___Powdery_mildew": {
        "name": "Squash Powdery Mildew",
        "symptoms": "White, powdery spots on upper leaf surfaces that expand to cover the entire leaf. Severely affected leaves may turn yellow and die.",
        "causes": "Fungi (Erysiphe cichoracearum or Sphaerotheca fuliginea) that thrive in dry conditions with high humidity.",
        "treatment": "Apply fungicides at first sign of disease. Plant resistant varieties. Ensure good air circulation."
    },
    "Strawberry___Leaf_scorch": {
        "name": "Strawberry Leaf Scorch",
        "symptoms": "Small, purplish-red spots that develop on leaves. These spots enlarge and centers turn brown with purple margins. Severely infected leaves appear scorched.",
        "causes": "Fungus (Diplocarpon earlianum).",
        "treatment": "Remove infected leaves. Avoid overhead irrigation. Apply fungicides. Maintain adequate plant spacing."
    },
    "Strawberry___healthy": {
        "name": "Healthy Strawberry Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    },
    "Tomato___Bacterial_spot": {
        "name": "Tomato Bacterial Spot",
        "symptoms": "Small, raised, water-soaked spots on leaves, stems, and fruit. Spots turn dark brown to black with a yellow halo on leaves. Fruit spots are raised and scab-like.",
        "causes": "Bacteria (Xanthomonas species).",
        "treatment": "Use disease-free seeds and transplants. Apply copper-based bactericides. Practice crop rotation. Avoid overhead irrigation."
    },
    "Tomato___Early_blight": {
        "name": "Tomato Early Blight",
        "symptoms": "Dark, concentric rings forming a target-like pattern on leaves. Older leaves are affected first. Dark, leathery, sunken spots may develop on fruit.",
        "causes": "Fungus (Alternaria solani) that overwinters in plant debris.",
        "treatment": "Remove and destroy infected plant parts. Apply fungicides preventatively. Practice crop rotation. Mulch around plants."
    },
    "Tomato___Late_blight": {
        "name": "Tomato Late Blight",
        "symptoms": "Water-soaked, gray-green spots on leaves that rapidly enlarge and turn brown. White mold may be visible on leaf undersides. Fruit develop large, firm, dark brown lesions.",
        "causes": "Oomycete (Phytophthora infestans) - not a true fungus.",
        "treatment": "Apply fungicides preventatively. Remove volunteer plants. Destroy all plant debris. Avoid overhead irrigation."
    },
    "Tomato___Leaf_Mold": {
        "name": "Tomato Leaf Mold",
        "symptoms": "Pale green or yellow spots on upper leaf surfaces. Olive-green to brown velvety mold on undersides of leaves. Severely affected leaves may wither and drop.",
        "causes": "Fungus (Passalora fulva, formerly Fulvia fulva or Cladosporium fulvum).",
        "treatment": "Improve air circulation. Reduce humidity in greenhouses. Apply fungicides. Remove and destroy infected plant parts."
    },
    "Tomato___Septoria_leaf_spot": {
        "name": "Tomato Septoria Leaf Spot",
        "symptoms": "Small, circular spots with dark borders and light gray centers on leaves. Spots may have yellow halos. Lower leaves are infected first.",
        "causes": "Fungus (Septoria lycopersici) that overwinters in plant debris.",
        "treatment": "Remove and destroy infected plant parts. Apply fungicides. Practice crop rotation. Avoid overhead irrigation."
    },
    "Tomato___Spider_mites_Two-spotted_spider_mite": {
        "name": "Tomato Spider Mite Damage",
        "symptoms": "Tiny yellow or white speckles on upper leaf surfaces. Leaves become bronze or yellow and may drop. Fine webbing is visible on undersides of leaves and between leaves and stems.",
        "causes": "Two-spotted spider mites (Tetranychus urticae), which are arachnids, not insects.",
        "treatment": "Increase humidity. Use insecticidal soap or horticultural oil. Introduce predatory mites. Avoid water-stressed plants."
    },
    "Tomato___Target_Spot": {
        "name": "Tomato Target Spot",
        "symptoms": "Concentric rings forming target-like spots on leaves, stems, and fruit. Leaf spots start as small, dark lesions that expand and develop light brown centers.",
        "causes": "Fungus (Corynespora cassiicola).",
        "treatment": "Apply fungicides. Remove and destroy infected plant parts. Improve air circulation. Practice crop rotation."
    },
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "name": "Tomato Yellow Leaf Curl Virus",
        "symptoms": "Leaves curl upward and become yellow around edges. Plants are stunted and produce few flowers and fruit.",
        "causes": "Tomato yellow leaf curl virus (TYLCV) transmitted by whiteflies.",
        "treatment": "Control whitefly populations. Remove and destroy infected plants. Use virus-resistant varieties. Use reflective mulch to repel whiteflies."
    },
    "Tomato___Tomato_mosaic_virus": {
        "name": "Tomato Mosaic Virus",
        "symptoms": "Mottled light and dark green pattern on leaves. Leaves may be distorted or reduced in size. Fruit may show yellow blotches or necrotic spots.",
        "causes": "Tobacco mosaic virus (TMV) or Tomato mosaic virus (ToMV).",
        "treatment": "No cure exists. Remove and destroy infected plants. Wash hands and tools after handling plants. Use resistant varieties."
    },
    "Tomato___healthy": {
        "name": "Healthy Tomato Plant",
        "symptoms": "No disease symptoms present. Leaves are uniformly green without spots or lesions.",
        "causes": "N/A - Plant is healthy",
        "treatment": "Continue regular maintenance and monitoring for early signs of disease."
    }
};

// This function formats the disease information to display in the app
function formatDiseaseInfo(diseaseKey) {
    if (!diseaseKey || !diseaseInfo[diseaseKey]) {
        return "Information not available for this disease.";
    }
    
    const disease = diseaseInfo[diseaseKey];
    return `
        <div class="disease-info-container">
            <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
            <p><strong>Causes:</strong> ${disease.causes}</p>
            <p><strong>Treatment:</strong> ${disease.treatment}</p>
        </div>
    `;
}

// Get just the display name of the disease without the plant prefix
function getDiseaseDisplayName(diseaseKey) {
    if (!diseaseKey || !diseaseInfo[diseaseKey]) {
        return "Unknown Disease";
    }
    
    return diseaseInfo[diseaseKey].name;
}
