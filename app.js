// Application State
const AppState = {
    currentPage: 'home',
    currentStep: 1,
    totalSteps: 5,
    assessmentData: {},
    results: {},
    charts: {},
    currentLanguage: 'en'
};

// Complete Multilingual Data
const TranslationData = {
    languages: {
        en: {
            name: "English",
            code: "en",
            flag: "🇺🇸",
            direction: "ltr"
        },
        hi: {
            name: "हिन्दी", 
            code: "hi",
            flag: "🇮🇳",
            direction: "ltr"
        },
        te: {
            name: "తెలుగు",
            code: "te", 
            flag: "🇮🇳",
            direction: "ltr"
        },
        ta: {
            name: "தமிழ்",
            code: "ta",
            flag: "🇮🇳", 
            direction: "ltr"
        },
        mr: {
            name: "मराठी",
            code: "mr",
            flag: "🇮🇳",
            direction: "ltr"
        }
    },
    translations: {
        en: {
            appTitle: "RTRWH Assessment Platform",
            home: "Home",
            about: "About", 
            startAssessment: "Start Assessment",
            aiChatbot: "AI Chatbot",
            generateReport: "Generate Report",
            downloadPDF: "Download PDF",
            personalInfo: "Personal Information",
            locationDetails: "Location Details",
            dwellingInfo: "Dwelling Information",
            roofType: "Roof Type",
            roofArea: "Roof Area", 
            availableSpace: "Available Space",
            siteCharacteristics: "Site Characteristics",
            propertyDetails: "Property Details",
            primaryPurpose: "Primary Purpose",
            reviewGenerate: "Review & Generate"
        },
        hi: {
            appTitle: "छत वर्षा जल संचयन मूल्यांकन मंच",
            home: "मुख्य",
            about: "परिचय",
            startAssessment: "मूल्यांकन प्रारंभ करें", 
            aiChatbot: "AI चैटबॉट",
            generateReport: "रिपोर्ट तैयार करें",
            downloadPDF: "PDF डाउनलोड करें",
            personalInfo: "व्यक्तिगत जानकारी",
            locationDetails: "स्थान विवरण",
            dwellingInfo: "आवास की जानकारी",
            roofType: "छत का प्रकार",
            roofArea: "छत का क्षेत्रफल",
            availableSpace: "उपलब्ध स्थान", 
            siteCharacteristics: "स्थल की विशेषताएं",
            propertyDetails: "संपत्ति विवरण",
            primaryPurpose: "मुख्य उद्देश्य",
            reviewGenerate: "समीक्षा और निर्माण"
        },
        te: {
            appTitle: "పైకప్పు వర్షపు నీటి సేకరణ మూల్యాంకన వేదిక",
            home: "హోమ్",
            about: "గురించి",
            startAssessment: "మూల్యాంకనను ప్రారంభించండి",
            aiChatbot: "AI చాట్‌బాట్",
            generateReport: "నివేదికను రూపొందించండి", 
            downloadPDF: "PDF డౌన్‌లోడ్ చేయండి",
            personalInfo: "వ్యక్తిగత సమాచారం",
            locationDetails: "స్థాన వివరాలు",
            dwellingInfo: "నివాస సమాచారం",
            roofType: "పైకప్పు రకం",
            roofArea: "పైకప్పు వైశాల్యం",
            availableSpace: "అందుబాటులో ఉన్న స్థలం",
            siteCharacteristics: "స్థల లక్షణాలు", 
            propertyDetails: "ఆస్తి వివరాలు",
            primaryPurpose: "ప్రాథమిక ప్రయోజనం",
            reviewGenerate: "సమీక్షించి రూపొందించండి"
        },
        ta: {
            appTitle: "கூரை மழைநீர் சேகரிப்பு மதிப்பீட்டு தளம்",
            home: "முகப்பு",
            about: "பற்றி",
            startAssessment: "மதிப்பீட்டைத் தொடங்குங்கள்",
            aiChatbot: "AI சாட்போட்",
            generateReport: "அறிக்கையை உருவாக்கவும்", 
            downloadPDF: "PDF பதிவிறக்கம்",
            personalInfo: "தனிப்பட்ட தகவல்",
            locationDetails: "இடம் விவரங்கள்",
            dwellingInfo: "வாழ்விட தகவல்",
            roofType: "கூரை வகை",
            roofArea: "கூரை பகுதி",
            availableSpace: "கிடைக்கும் இடம்",
            siteCharacteristics: "தள பண்புகள்", 
            propertyDetails: "சொத்து விவரங்கள்",
            primaryPurpose: "முதன்மை நோக்கம்",
            reviewGenerate: "மதிப்பாய்வு மற்றும் உருவாக்கம்"
        },
        mr: {
            appTitle: "छतावरील पावसाचे पाणी संकलन मूल्यांकन व्यासपीठ",
            home: "मुख्यपृष्ठ",
            about: "बद्दल",
            startAssessment: "मूल्यांकन सुरू करा",
            aiChatbot: "AI चॅटबॉट",
            generateReport: "अहवाल तयार करा", 
            downloadPDF: "PDF डाउनलोड करा",
            personalInfo: "वैयक्तिक माहिती",
            locationDetails: "स्थान तपशील",
            dwellingInfo: "निवास माहिती",
            roofType: "छताचा प्रकार",
            roofArea: "छताचे क्षेत्रफळ",
            availableSpace: "उपलब्ध जागा",
            siteCharacteristics: "साइट वैशिष्ट्ये", 
            propertyDetails: "मालमत्तेचे तपशील",
            primaryPurpose: "प्राथमिक हेतू",
            reviewGenerate: "पुनरावलोकन आणि निर्मिती"
        }
    }
};

// Mock Data
const MockData = {
    rainfallData: {
        'Mumbai': { annual: 2400, monsoon: 2200, category: 'Very High', monthly: [5, 2, 5, 15, 120, 650, 700, 550, 350, 80, 15, 8] },
        'Delhi': { annual: 650, monsoon: 600, category: 'Low', monthly: [25, 20, 15, 8, 18, 75, 180, 155, 50, 5, 2, 5] },
        'Bangalore': { annual: 900, monsoon: 750, category: 'Moderate', monthly: [5, 8, 25, 55, 105, 65, 75, 125, 180, 145, 55, 12] },
        'Chennai': { annual: 1200, monsoon: 950, category: 'Moderate', monthly: [15, 8, 12, 25, 45, 35, 85, 125, 155, 280, 350, 65] },
        'Kolkata': { annual: 1580, monsoon: 1350, category: 'High', monthly: [15, 25, 35, 50, 125, 280, 325, 290, 255, 125, 25, 15] },
        'Hyderabad': { annual: 780, monsoon: 700, category: 'Moderate', monthly: [5, 8, 15, 25, 35, 120, 160, 140, 110, 75, 20, 7] },
        'Pune': { annual: 700, monsoon: 650, category: 'Moderate', monthly: [3, 5, 10, 20, 45, 160, 200, 180, 130, 60, 15, 5] },
        'Ahmedabad': { annual: 550, monsoon: 500, category: 'Low', monthly: [2, 3, 5, 8, 25, 120, 180, 150, 80, 15, 5, 2] }
    },
    runoffCoefficients: {
        'concrete': 0.85,
        'tile': 0.75,
        'metal': 0.90,
        'asbestos': 0.70,
        'slate': 0.78,
        'thatch': 0.20
    },
    structureTypes: [
        {
            name: 'Recharge Pit',
            icon: '🕳️',
            suitableFor: 'Small roofs (up to 100 sqm)',
            dimensions: '2m × 2m × 2m',
            capacity: '8-12 m³',
            costRange: '₹15,000-25,000',
            baseCost: 20000,
            description: 'Ideal for residential properties with limited space. Easy to construct and maintain.',
            pros: ['Low cost', 'Easy maintenance', 'Quick installation'],
            cons: ['Limited capacity', 'Not suitable for heavy rainfall areas']
        },
        {
            name: 'Recharge Trench',
            icon: '🚧',
            suitableFor: 'Medium roofs (100-300 sqm)',
            dimensions: '10m × 1m × 1.5m',
            capacity: '15-20 m³',
            costRange: '₹25,000-40,000',
            baseCost: 35000,
            description: 'Perfect for medium-sized properties with moderate space availability.',
            pros: ['Good capacity', 'Suitable for most soil types', 'Cost-effective'],
            cons: ['Requires more space', 'Moderate maintenance needed']
        },
        {
            name: 'Recharge Well',
            icon: '🏗️',
            suitableFor: 'Large roofs (300+ sqm)',
            dimensions: '3m diameter × 5m depth',
            capacity: '35-50 m³',
            costRange: '₹50,000-80,000',
            baseCost: 65000,
            description: 'Best for large properties and institutional buildings with high rainfall.',
            pros: ['High capacity', 'Long-term solution', 'Maximum efficiency'],
            cons: ['High initial cost', 'Requires professional installation']
        }
    ],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

// AI Chatbot Knowledge Base
const ChatbotKB = {
    responses: {
        "what is rainwater harvesting": {
            answer: "Rainwater harvesting is the process of collecting, storing, and utilizing rainwater from rooftops and other surfaces. It helps reduce dependency on groundwater, prevents urban flooding, and provides a sustainable water source for various uses.",
            followUp: ["How does it work?", "What are the benefits?", "How much does it cost?"]
        },
        "how much does it cost": {
            answer: "The cost varies depending on the system size and complexity. Basic residential systems range from ₹15,000 to ₹80,000. This includes structure construction, piping, filtration, and installation. Most systems pay for themselves within 3-5 years through water savings.",
            followUp: ["What factors affect cost?", "Are there subsidies available?", "What's the ROI?"]
        },
        "what roof type is best": {
            answer: "Metal roofs are best for rainwater harvesting with 90% efficiency, followed by concrete (85%) and clay tiles (75%). The roof should be clean, in good condition, and have proper drainage. Avoid painted roofs or those with chemical treatments.",
            followUp: ["How do I prepare my roof?", "What about roof maintenance?", "Can I use any roof material?"]
        },
        "how do i maintain the system": {
            answer: "Regular maintenance includes: monthly cleaning of gutters and first-flush diverters, quarterly filter replacement, annual system inspection, and cleaning storage tanks every 6 months. Proper maintenance ensures clean water and system longevity.",
            followUp: ["What are the maintenance costs?", "How often should I clean?", "What tools do I need?"]
        },
        "what permits do i need": {
            answer: "Requirements vary by location. Generally, you need: building permit for structural modifications, plumbing permit for connections, and environmental clearance for large systems. Check with your local municipal corporation for specific requirements.",
            followUp: ["How long does approval take?", "What documents are needed?", "Are there any restrictions?"]
        },
        "how much water can i collect": {
            answer: "Water collection depends on roof area, local rainfall, and roof material. Formula: Annual Collection = Roof Area (sq.m) × Annual Rainfall (mm) × Runoff Coefficient × 0.001. For example, a 100 sq.m concrete roof in Mumbai can collect about 204,000 liters annually.",
            followUp: ["What's my collection potential?", "How do I calculate for my area?", "What affects collection efficiency?"]
        },
        "benefits of rainwater harvesting": {
            answer: "Key benefits include: 40-60% reduction in water bills, reduced dependency on municipal supply, prevention of soil erosion and flooding, groundwater recharge, improved water quality, and increased property value. It's environmentally sustainable and cost-effective long-term.",
            followUp: ["What are the environmental benefits?", "How much can I save?", "Is it worth the investment?"]
        },
        "soil types and suitability": {
            answer: "Sandy soil is ideal (high permeability), loamy soil is good (moderate permeability), clay soil requires pre-treatment (low permeability), and rocky soil effectiveness depends on fractures. Soil testing helps determine the best recharge method for your location.",
            followUp: ["How do I test my soil?", "Can I improve soil permeability?", "What if I have clay soil?"]
        }
    },
    getResponse: function(question) {
        const normalizedQuestion = question.toLowerCase().trim();
        
        // Find matching response
        for (const [key, value] of Object.entries(this.responses)) {
            if (normalizedQuestion.includes(key) || key.includes(normalizedQuestion.split(' ')[0])) {
                return value;
            }
        }
        
        // Keyword-based responses
        if (normalizedQuestion.includes('cost') || normalizedQuestion.includes('price') || normalizedQuestion.includes('expensive')) {
            return this.responses["how much does it cost"];
        } else if (normalizedQuestion.includes('roof') || normalizedQuestion.includes('material')) {
            return this.responses["what roof type is best"];
        } else if (normalizedQuestion.includes('maintain') || normalizedQuestion.includes('clean')) {
            return this.responses["how do i maintain the system"];
        } else if (normalizedQuestion.includes('permit') || normalizedQuestion.includes('approval') || normalizedQuestion.includes('legal')) {
            return this.responses["what permits do i need"];
        } else if (normalizedQuestion.includes('collect') || normalizedQuestion.includes('harvest') || normalizedQuestion.includes('amount')) {
            return this.responses["how much water can i collect"];
        } else if (normalizedQuestion.includes('benefit') || normalizedQuestion.includes('advantage')) {
            return this.responses["benefits of rainwater harvesting"];
        } else if (normalizedQuestion.includes('soil') || normalizedQuestion.includes('ground')) {
            return this.responses["soil types and suitability"];
        }
        
        // Default response
        return {
            answer: "I'd be happy to help with your rainwater harvesting questions! I can provide information about costs, benefits, installation, maintenance, permits, and technical details. Please ask about specific topics or use the quick question buttons below.",
            followUp: ["What is rainwater harvesting?", "How much does it cost?", "What roof type is best?"]
        };
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Enhanced RTRWH Application...');
    initializeApp();
});

function initializeApp() {
    initializeAnimations();
    initializeEventListeners();
    initializeLanguage();
    showPage('home');
    updateNavigationState();
    console.log('Application initialized successfully');
}

// Language Functions
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('rtrwh_language') || 'en';
    changeLanguage(savedLanguage, false);
}

function changeLanguage(langCode, save = true) {
    console.log(`Changing language to: ${langCode}`);
    AppState.currentLanguage = langCode;
    
    if (save) {
        localStorage.setItem('rtrwh_language', langCode);
    }
    
    // Update current language display
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = TranslationData.languages[langCode].code.toUpperCase();
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (TranslationData.translations[langCode] && TranslationData.translations[langCode][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = TranslationData.translations[langCode][key];
            } else {
                element.textContent = TranslationData.translations[langCode][key];
            }
        }
    });
    
    // Update document direction if needed
    if (TranslationData.languages[langCode].direction === 'rtl') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
    
    console.log(`Language changed to ${TranslationData.languages[langCode].name}`);
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function closeDropdown(e) {
            if (!e.target.closest('.language-selector')) {
                dropdown.classList.remove('show');
                document.removeEventListener('click', closeDropdown);
            }
        });
    }
}

// Animation Functions
function initializeAnimations() {
    console.log('Initializing animations...');
    createRainAnimation();
    startFloatingAnimations();
}

function createRainAnimation() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) {
        console.warn('Rain container not found');
        return;
    }
    
    console.log('Creating rain animation');
    
    function createRainDrop() {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 2 + 1) + 's';
        drop.style.opacity = (Math.random() * 0.8 + 0.2).toString();
        drop.style.width = (Math.random() * 3 + 1) + 'px';
        drop.style.height = (Math.random() * 20 + 10) + 'px';
        
        rainContainer.appendChild(drop);
        
        setTimeout(() => {
            if (rainContainer.contains(drop)) {
                rainContainer.removeChild(drop);
            }
        }, 3000);
    }
    
    // Create rain drops continuously
    setInterval(createRainDrop, 100);
    console.log('Rain animation started');
}

function startFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.floating-drop');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.5) + 's';
    });
    console.log('Floating animations initialized');
}

// Navigation Functions
function navigateToPage(page) {
    console.log(`Navigating to page: ${page}`);
    // Remove active class from all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Add active class to target page
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        AppState.currentPage = page;
        updateNavigationState();
        
        // Initialize chatbot if navigating to chatbot page
        if (page === 'chatbot') {
            initializeChatbot();
        }
        
        console.log(`Successfully navigated to ${page}`);
    } else {
        console.error(`Page not found: ${page}Page`);
    }
}

function updateNavigationState() {
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    const currentNavLink = document.getElementById(AppState.currentPage + 'Nav');
    if (currentNavLink) {
        currentNavLink.classList.add('active');
    }
}

function startAssessment() {
    console.log('Starting assessment');
    navigateToPage('assessment');
    AppState.currentStep = 1;
    updateProgressIndicator();
    showFormStep(1);
}

function startNewAssessment() {
    console.log('Starting new assessment');
    AppState.assessmentData = {};
    AppState.results = {};
    AppState.currentStep = 1;
    
    // Clear all form fields
    document.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.type === 'checkbox') {
            field.checked = false;
        } else {
            field.value = '';
        }
    });
    
    navigateToPage('assessment');
    updateProgressIndicator();
    showFormStep(1);
}

// AI Chatbot Functions
function initializeChatbot() {
    console.log('Initializing chatbot');
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        // Scroll to top of chat
        chatMessages.scrollTop = 0;
    }
}

function askQuestion(question) {
    console.log(`Quick question asked: ${question}`);
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.value = question;
        sendChatMessage();
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !chatMessages) {
        console.error('Chat elements not found');
        return;
    }
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = ChatbotKB.getResponse(message);
        addChatMessage(response.answer, 'bot');
        
        // Add follow-up questions
        if (response.followUp && response.followUp.length > 0) {
            setTimeout(() => {
                addFollowUpQuestions(response.followUp);
            }, 500);
        }
    }, 1000 + Math.random() * 1000);
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    // Remove quick questions if they exist
    const existingQuickQuestions = chatMessages.querySelector('.quick-questions');
    if (existingQuickQuestions && sender === 'user') {
        existingQuickQuestions.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    messageElement.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addFollowUpQuestions(questions) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const followUpElement = document.createElement('div');
    followUpElement.className = 'quick-questions';
    followUpElement.innerHTML = `
        <h4>Related Questions:</h4>
        <div class="question-buttons">
            ${questions.map(q => `<button class="question-btn" onclick="askQuestion('${q}')">${q}</button>`).join('')}
        </div>
    `;
    
    chatMessages.appendChild(followUpElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const typingElement = document.createElement('div');
    typingElement.className = 'message bot-message typing-indicator';
    typingElement.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span>AI is typing</span>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.closest('.message').remove();
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Assessment Form Functions
function initializeEventListeners() {
    console.log('Initializing event listeners');
    
    // Auto-fill functionality
    const citySelect = document.getElementById('userCity');
    if (citySelect) {
        citySelect.addEventListener('change', handleCityChange);
    }
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    console.log('Event listeners initialized');
}

function handleCityChange() {
    const city = document.getElementById('userCity').value;
    const rainfallInput = document.getElementById('annualRainfall');
    
    if (city && MockData.rainfallData[city] && rainfallInput) {
        rainfallInput.value = MockData.rainfallData[city].annual;
        console.log(`Auto-filled rainfall data for ${city}: ${MockData.rainfallData[city].annual}mm`);
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Auto-detect Functions
function autoDetectLocation() {
    showNotification('Detecting your location...', 'info');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude.toFixed(4);
                const lon = position.coords.longitude.toFixed(4);
                
                const coordinatesInput = document.getElementById('coordinates');
                if (coordinatesInput) {
                    coordinatesInput.value = `${lat}, ${lon}`;
                }
                
                // Mock reverse geocoding - in real app, use geocoding service
                const mockCities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
                const randomCity = mockCities[Math.floor(Math.random() * mockCities.length)];
                
                const citySelect = document.getElementById('userCity');
                if (citySelect) {
                    citySelect.value = randomCity;
                    handleCityChange();
                }
                
                showNotification(`Location detected: ${lat}, ${lon}`, 'success');
            },
            error => {
                showNotification('Unable to detect location. Please enter manually.', 'error');
            }
        );
    } else {
        showNotification('Geolocation not supported by this browser.', 'error');
    }
}

function autoDetectRoofType() {
    showNotification('Analyzing roof type...', 'info');
    
    setTimeout(() => {
        const roofTypes = ['concrete', 'tile', 'metal', 'slate'];
        const randomType = roofTypes[Math.floor(Math.random() * roofTypes.length)];
        
        const roofMaterialSelect = document.getElementById('roofMaterial');
        if (roofMaterialSelect) {
            roofMaterialSelect.value = randomType;
        }
        
        const typeNames = {
            'concrete': 'RCC (Concrete Slab)',
            'tile': 'Clay/Concrete Tiles',
            'metal': 'Metal Sheet (Galvanized)',
            'slate': 'Slate Tiles'
        };
        
        showNotification(`Detected roof type: ${typeNames[randomType]}`, 'success');
    }, 2000);
}

function autoEstimateRoofArea() {
    showNotification('Estimating roof area...', 'info');
    
    setTimeout(() => {
        const randomArea = Math.floor(Math.random() * 200) + 80; // 80-280 sq.m
        
        const roofAreaInput = document.getElementById('roofArea');
        if (roofAreaInput) {
            roofAreaInput.value = randomArea;
        }
        
        showNotification(`Estimated roof area: ${randomArea} sq.m`, 'success');
    }, 1500);
}

function autoEstimateOpenSpace() {
    showNotification('Estimating available open space...', 'info');
    
    setTimeout(() => {
        const roofArea = parseFloat(document.getElementById('roofArea')?.value) || 100;
        const estimatedSpace = Math.floor(roofArea * 0.3) + Math.floor(Math.random() * 30); // 30% + random
        
        const openSpaceInput = document.getElementById('openSpace');
        if (openSpaceInput) {
            openSpaceInput.value = estimatedSpace;
        }
        
        showNotification(`Estimated open space: ${estimatedSpace} sq.m`, 'success');
    }, 1500);
}

function autoDetectSoilType() {
    showNotification('Analyzing soil type...', 'info');
    
    setTimeout(() => {
        const soilTypes = ['sandy', 'loamy', 'clay', 'mixed'];
        const randomSoil = soilTypes[Math.floor(Math.random() * soilTypes.length)];
        
        const soilTypeSelect = document.getElementById('soilType');
        if (soilTypeSelect) {
            soilTypeSelect.value = randomSoil;
        }
        
        const soilNames = {
            'sandy': 'Sandy Soil (High permeability)',
            'loamy': 'Loamy Soil (Medium permeability)', 
            'clay': 'Clay Soil (Low permeability)',
            'mixed': 'Mixed Soil Type'
        };
        
        showNotification(`Detected soil type: ${soilNames[randomSoil]}`, 'success');
    }, 2000);
}

function nextStep() {
    console.log(`Attempting to go to next step from step ${AppState.currentStep}`);
    if (validateCurrentStep()) {
        if (AppState.currentStep < AppState.totalSteps) {
            saveCurrentStepData();
            AppState.currentStep++;
            updateProgressIndicator();
            showFormStep(AppState.currentStep);
            updateNavigationButtons();
            console.log(`Advanced to step ${AppState.currentStep}`);
        }
    }
}

function previousStep() {
    console.log(`Going back from step ${AppState.currentStep}`);
    if (AppState.currentStep > 1) {
        AppState.currentStep--;
        updateProgressIndicator();
        showFormStep(AppState.currentStep);
        updateNavigationButtons();
        console.log(`Went back to step ${AppState.currentStep}`);
    }
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`formStep${AppState.currentStep}`);
    if (!currentStepElement) return false;
    
    const requiredFields = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    let errorMessage = '';
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#EF4444';
            if (!errorMessage) {
                errorMessage = `Please fill in all required fields.`;
            }
        } else {
            field.style.borderColor = 'rgba(59, 130, 246, 0.2)';
        }
    });
    
    // Step-specific validation
    if (AppState.currentStep === 1) {
        const email = document.getElementById('userEmail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
            document.getElementById('userEmail').style.borderColor = '#EF4444';
        }
        
        const phone = document.getElementById('userPhone').value;
        if (phone && phone.length < 10) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
            document.getElementById('userPhone').style.borderColor = '#EF4444';
        }
    } else if (AppState.currentStep === 3) {
        const roofArea = parseFloat(document.getElementById('roofArea').value);
        if (roofArea < 10) {
            isValid = false;
            errorMessage = 'Roof area must be at least 10 square meters.';
            document.getElementById('roofArea').style.borderColor = '#EF4444';
        }
    } else if (AppState.currentStep === 4) {
        const openSpace = parseFloat(document.getElementById('openSpace').value);
        if (openSpace < 5) {
            isValid = false;
            errorMessage = 'Available open space must be at least 5 square meters.';
            document.getElementById('openSpace').style.borderColor = '#EF4444';
        }
    }
    
    if (!isValid && errorMessage) {
        showNotification(errorMessage, 'error');
    }
    
    return isValid;
}

function saveCurrentStepData() {
    const stepData = {};
    const currentStepElement = document.getElementById(`formStep${AppState.currentStep}`);
    
    if (currentStepElement) {
        const inputs = currentStepElement.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                stepData[input.id] = input.checked;
            } else {
                stepData[input.id] = input.value;
            }
        });
    }
    
    AppState.assessmentData = { ...AppState.assessmentData, ...stepData };
    console.log('Step data saved:', stepData);
}

function showFormStep(stepNumber) {
    // Hide all form steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStep = document.getElementById(`formStep${stepNumber}`);
    if (currentStep) {
        currentStep.classList.add('active');
        console.log(`Showing form step ${stepNumber}`);
    }
    
    updateNavigationButtons();
}

function updateProgressIndicator() {
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const percentage = (AppState.currentStep / AppState.totalSteps) * 100;
        progressFill.style.width = percentage + '%';
    }
    
    // Update step indicators
    for (let i = 1; i <= AppState.totalSteps; i++) {
        const step = document.getElementById(`step${i}`);
        if (step) {
            step.classList.remove('active', 'completed');
            if (i < AppState.currentStep) {
                step.classList.add('completed');
            } else if (i === AppState.currentStep) {
                step.classList.add('active');
            }
        }
    }
}

function updateNavigationButtons() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (prevBtn) {
        prevBtn.style.display = AppState.currentStep > 1 ? 'flex' : 'none';
    }
    
    if (nextBtn) {
        if (AppState.currentStep === AppState.totalSteps) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        }
    }
}

// Assessment Calculation Functions
function generateReport() {
    console.log('Generating report...');
    saveCurrentStepData();
    
    showNotification('Generating your comprehensive assessment report...', 'info');
    
    setTimeout(() => {
        calculateAssessmentResults();
        navigateToPage('results');
        showTab('overview');
        showNotification('Assessment report generated successfully!', 'success');
        console.log('Report generation complete');
    }, 2000);
}

function calculateAssessmentResults() {
    console.log('Calculating assessment results...');
    const data = AppState.assessmentData;
    
    // Basic calculations
    const city = data.userCity || 'Mumbai';
    const roofArea = parseFloat(data.roofArea) || 100;
    const roofMaterial = data.roofMaterial || 'concrete';
    const rainfall = MockData.rainfallData[city];
    const runoffCoeff = MockData.runoffCoefficients[roofMaterial] || 0.75;
    
    // Calculate harvest potential
    const annualHarvestPotential = Math.round(roofArea * rainfall.annual * runoffCoeff);
    const monthlyHarvest = rainfall.monthly.map(monthRain => 
        Math.round(roofArea * monthRain * runoffCoeff)
    );
    
    // Calculate feasibility score
    const feasibilityScore = calculateFeasibilityScore(data, rainfall);
    
    // Get recommended structures
    const recommendedStructures = getRecommendedStructures(roofArea, data.openSpace);
    
    // Calculate costs
    const costs = calculateProjectCosts(recommendedStructures[0], roofArea);
    
    // Calculate ROI and payback
    const roi = calculateROI(costs.total, annualHarvestPotential);
    
    // Environmental impact
    const environmentalImpact = calculateEnvironmentalImpact(annualHarvestPotential);
    
    AppState.results = {
        feasibilityScore,
        annualHarvestPotential,
        monthlyHarvest,
        recommendedStructures,
        costs,
        roi,
        environmentalImpact,
        riskAssessment: calculateRiskAssessment(data),
        implementationPlan: generateImplementationPlan(recommendedStructures[0])
    };
    
    console.log('Assessment results calculated:', AppState.results);
    displayResults();
}

function calculateFeasibilityScore(data, rainfall) {
    let score = 50; // Base score
    
    // Rainfall factor (30% weight)
    if (rainfall.annual > 1500) score += 25;
    else if (rainfall.annual > 1000) score += 20;
    else if (rainfall.annual > 600) score += 15;
    else score += 10;
    
    // Roof area factor (25% weight)
    const roofArea = parseFloat(data.roofArea) || 0;
    if (roofArea > 300) score += 20;
    else if (roofArea > 150) score += 15;
    else if (roofArea > 75) score += 10;
    else score += 5;
    
    // Soil permeability factor (20% weight)
    const soilType = data.soilType;
    if (soilType === 'sandy') score += 15;
    else if (soilType === 'loamy') score += 12;
    else if (soilType === 'mixed') score += 8;
    else if (soilType === 'clay') score += 5;
    
    // Available space factor (15% weight)
    const openSpace = parseFloat(data.openSpace) || 0;
    if (openSpace > 50) score += 10;
    else if (openSpace > 25) score += 7;
    else if (openSpace > 10) score += 5;
    
    // Roof condition factor (10% weight)
    const roofCondition = data.roofCondition;
    if (roofCondition === 'excellent') score += 8;
    else if (roofCondition === 'good') score += 6;
    else if (roofCondition === 'fair') score += 4;
    else score += 2;
    
    return Math.min(Math.round(score), 100);
}

function getRecommendedStructures(roofArea, openSpace) {
    const availableSpace = parseFloat(openSpace) || 25;
    const structures = MockData.structureTypes.slice();
    
    // Filter based on roof area and available space
    let recommended = [];
    
    if (roofArea <= 100 && availableSpace >= 10) {
        recommended.push({ ...structures[0], recommended: true });
        recommended.push({ ...structures[1], recommended: false });
    } else if (roofArea <= 300 && availableSpace >= 25) {
        recommended.push({ ...structures[1], recommended: true });
        recommended.push({ ...structures[0], recommended: false });
        recommended.push({ ...structures[2], recommended: false });
    } else if (availableSpace >= 50) {
        recommended.push({ ...structures[2], recommended: true });
        recommended.push({ ...structures[1], recommended: false });
    } else {
        recommended.push({ ...structures[0], recommended: true });
    }
    
    return recommended;
}

function calculateProjectCosts(structure, roofArea) {
    const baseCost = structure.baseCost;
    const areaCost = Math.max(0, (roofArea - 100) * 100); // Additional cost for larger roofs
    
    const structureCost = baseCost + areaCost;
    const pipingCost = Math.round(structureCost * 0.25);
    const laborCost = Math.round(structureCost * 0.3);
    const materialsCost = Math.round(structureCost * 0.15);
    const designCost = Math.round(structureCost * 0.1);
    
    const total = structureCost + pipingCost + laborCost + materialsCost + designCost;
    
    return {
        structure: structureCost,
        piping: pipingCost,
        labor: laborCost,
        materials: materialsCost,
        design: designCost,
        total: total
    };
}

function calculateROI(totalCost, annualHarvest) {
    // Assume water cost savings of ₹4 per 1000 liters
    const waterCostPerLiter = 4 / 1000;
    const annualSavings = annualHarvest * waterCostPerLiter;
    const paybackYears = totalCost / annualSavings;
    
    return {
        annualSavings: Math.round(annualSavings),
        paybackYears: Math.round(paybackYears * 10) / 10,
        roi: Math.round(((annualSavings * 10) - totalCost) / totalCost * 100)
    };
}

function calculateEnvironmentalImpact(annualHarvest) {
    return {
        waterSaved: annualHarvest,
        carbonFootprintReduction: Math.round(annualHarvest * 0.0005), // kg CO2
        groundwaterRecharge: Math.round(annualHarvest * 0.8),
        floodPrevention: Math.round(annualHarvest * 0.3)
    };
}

function calculateRiskAssessment(data) {
    const risks = [];
    
    const rainfall = MockData.rainfallData[data.userCity];
    if (rainfall && rainfall.annual < 600) {
        risks.push({
            type: 'Low Rainfall',
            level: 'medium',
            description: 'Limited rainfall may affect harvesting potential',
            mitigation: 'Consider supplementary water storage'
        });
    }
    
    if (data.soilType === 'clay') {
        risks.push({
            type: 'Poor Drainage',
            level: 'medium',
            description: 'Clay soil has low permeability',
            mitigation: 'Enhanced filtration and pre-treatment required'
        });
    }
    
    if (data.roofCondition === 'poor') {
        risks.push({
            type: 'Roof Condition',
            level: 'high',
            description: 'Poor roof condition may affect water quality',
            mitigation: 'Roof repair recommended before installation'
        });
    }
    
    const openSpace = parseFloat(data.openSpace) || 0;
    if (openSpace < 15) {
        risks.push({
            type: 'Limited Space',
            level: 'low',
            description: 'Limited space for optimal structure placement',
            mitigation: 'Consider compact structure designs'
        });
    }
    
    return risks;
}

function generateImplementationPlan(structure) {
    return {
        phases: [
            {
                phase: 'Planning & Design',
                duration: '2-3 weeks',
                tasks: ['Site survey', 'Detailed design', 'Permits'],
                cost: '10%'
            },
            {
                phase: 'Excavation & Foundation',
                duration: '1-2 weeks',
                tasks: ['Excavation', 'Foundation work', 'Structural prep'],
                cost: '30%'
            },
            {
                phase: 'Structure Construction',
                duration: '2-3 weeks',
                tasks: ['Structure installation', 'Piping work', 'Connections'],
                cost: '40%'
            },
            {
                phase: 'Testing & Commissioning',
                duration: '1 week',
                tasks: ['System testing', 'Quality checks', 'Final adjustments'],
                cost: '20%'
            }
        ],
        maintenance: [
            {
                frequency: 'Monthly',
                task: 'Visual inspection and cleaning',
                cost: '₹500'
            },
            {
                frequency: 'Quarterly',
                task: 'Filter replacement and system check',
                cost: '₹1,500'
            },
            {
                frequency: 'Annually',
                task: 'Complete system overhaul',
                cost: '₹5,000'
            }
        ]
    };
}

// Results Display Functions
function displayResults() {
    console.log('Displaying results...');
    const results = AppState.results;
    
    // Update overview tab
    updateOverviewTab(results);
    
    // Create charts with a delay to ensure elements are available
    setTimeout(() => {
        createRunoffChart(results);
        createSeasonalChart(results);
        createCostChart(results);
        createROIChart(results);
        createConservationChart(results);
    }, 100);
    
    // Update all tabs
    updateTechnicalTab(results);
    updateStructuresTab(results);
    updateCostTab(results);
    updateEnvironmentalTab(results);
    updateImplementationTab(results);
    
    console.log('Results display complete');
}

function updateOverviewTab(results) {
    console.log('Updating overview tab');
    
    // Update feasibility score
    const scoreElement = document.getElementById('feasibilityScore');
    const labelElement = document.getElementById('feasibilityLabel');
    const circleElement = document.getElementById('feasibilityCircle');
    
    if (scoreElement) scoreElement.textContent = results.feasibilityScore;
    if (labelElement) {
        const label = results.feasibilityScore >= 80 ? 'Highly Feasible' :
                     results.feasibilityScore >= 60 ? 'Moderately Feasible' : 'Low Feasibility';
        labelElement.textContent = label;
    }
    if (circleElement) {
        const percentage = results.feasibilityScore;
        circleElement.style.background = 
            `conic-gradient(#10B981 ${percentage}%, rgba(16, 185, 129, 0.2) ${percentage}%)`;
    }
    
    // Update metrics
    const totalHarvestElement = document.getElementById('totalHarvest');
    const totalCostElement = document.getElementById('totalCost');
    const paybackTimeElement = document.getElementById('paybackTime');
    
    if (totalHarvestElement) {
        totalHarvestElement.textContent = results.annualHarvestPotential.toLocaleString();
    }
    if (totalCostElement) {
        totalCostElement.textContent = '₹' + results.costs.total.toLocaleString();
    }
    if (paybackTimeElement) {
        paybackTimeElement.textContent = results.roi.paybackYears;
    }
    
    // Update risk assessment
    updateRiskGrid(results.riskAssessment);
}

function updateRiskGrid(risks) {
    const riskGrid = document.getElementById('riskGrid');
    if (!riskGrid) return;
    
    riskGrid.innerHTML = '';
    
    if (risks.length === 0) {
        riskGrid.innerHTML = '<div class="risk-item low"><i class="fas fa-check-circle"></i><span>No significant risks identified</span></div>';
        return;
    }
    
    risks.forEach(risk => {
        const riskItem = document.createElement('div');
        riskItem.className = `risk-item ${risk.level}`;
        riskItem.innerHTML = `
            <div class="risk-header">
                <i class="fas fa-${risk.level === 'high' ? 'exclamation-triangle' : risk.level === 'medium' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span class="risk-title">${risk.type}</span>
                <span class="risk-level ${risk.level}">${risk.level.toUpperCase()}</span>
            </div>
            <p class="risk-description">${risk.description}</p>
            <p class="risk-mitigation"><strong>Mitigation:</strong> ${risk.mitigation}</p>
        `;
        riskGrid.appendChild(riskItem);
    });
}

function updateTechnicalTab(results) {
    const efficiencyGrid = document.getElementById('efficiencyGrid');
    if (!efficiencyGrid) return;
    
    const efficiency = {
        collection: 85,
        filtration: 92,
        storage: 88,
        recharge: 78
    };
    
    efficiencyGrid.innerHTML = Object.entries(efficiency).map(([key, value]) => `
        <div class="efficiency-item">
            <div class="efficiency-label">${key.charAt(0).toUpperCase() + key.slice(1)} Efficiency</div>
            <div class="efficiency-bar">
                <div class="efficiency-fill" style="width: ${value}%"></div>
                <span class="efficiency-value">${value}%</span>
            </div>
        </div>
    `).join('');
}

function updateStructuresTab(results) {
    const structuresGrid = document.getElementById('structuresGrid');
    if (!structuresGrid) return;
    
    structuresGrid.innerHTML = results.recommendedStructures.map(structure => `
        <div class="structure-card ${structure.recommended ? 'recommended' : ''}">
            ${structure.recommended ? '<div class="recommended-badge">Recommended</div>' : ''}
            <div class="structure-icon">${structure.icon}</div>
            <h3 class="structure-name">${structure.name}</h3>
            <p class="structure-suitable">${structure.suitableFor}</p>
            <div class="structure-specs">
                <div class="spec-item">
                    <i class="fas fa-ruler"></i>
                    <span>Dimensions: ${structure.dimensions}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-database"></i>
                    <span>Capacity: ${structure.capacity}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>Cost: ${structure.costRange}</span>
                </div>
            </div>
            <p class="structure-description">${structure.description}</p>
            <div class="pros-cons">
                <div class="pros">
                    <h4>Pros:</h4>
                    <ul>${structure.pros.map(pro => `<li>${pro}</li>`).join('')}</ul>
                </div>
                <div class="cons">
                    <h4>Cons:</h4>
                    <ul>${structure.cons.map(con => `<li>${con}</li>`).join('')}</ul>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCostTab(results) {
    const financingGrid = document.getElementById('financingGrid');
    if (!financingGrid) return;
    
    const financingOptions = [
        {
            title: 'Self-funded',
            description: 'Pay the full amount upfront',
            benefits: ['No interest', 'Full ownership', 'Quick implementation'],
            suitability: 'Best for those with available capital'
        },
        {
            title: 'Government Subsidy',
            description: 'Available subsidies up to 25% of project cost',
            benefits: ['Reduced cost', 'Government support', 'Tax benefits'],
            suitability: 'Available for residential properties'
        },
        {
            title: 'Bank Loan',
            description: 'Environmental loans at competitive rates',
            benefits: ['Spread payments', 'Tax deductions', 'Professional guidance'],
            suitability: 'For larger projects and institutions'
        }
    ];
    
    financingGrid.innerHTML = financingOptions.map(option => `
        <div class="financing-card">
            <h4>${option.title}</h4>
            <p>${option.description}</p>
            <div class="benefits">
                <h5>Benefits:</h5>
                <ul>${option.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>
            </div>
            <div class="suitability">
                <strong>Best for:</strong> ${option.suitability}
            </div>
        </div>
    `).join('');
}

function updateEnvironmentalTab(results) {
    const impactGrid = document.getElementById('impactGrid');
    if (!impactGrid) return;
    
    const impact = results.environmentalImpact;
    
    impactGrid.innerHTML = `
        <div class="impact-metric">
            <div class="impact-icon bg-blue">
                <i class="fas fa-tint"></i>
            </div>
            <div class="impact-content">
                <div class="impact-value">${impact.waterSaved.toLocaleString()}L</div>
                <div class="impact-label">Annual Water Saved</div>
            </div>
        </div>
        <div class="impact-metric">
            <div class="impact-icon bg-green">
                <i class="fas fa-leaf"></i>
            </div>
            <div class="impact-content">
                <div class="impact-value">${impact.carbonFootprintReduction}kg</div>
                <div class="impact-label">CO₂ Reduction</div>
            </div>
        </div>
        <div class="impact-metric">
            <div class="impact-icon bg-purple">
                <i class="fas fa-arrow-down"></i>
            </div>
            <div class="impact-content">
                <div class="impact-value">${impact.groundwaterRecharge.toLocaleString()}L</div>
                <div class="impact-label">Groundwater Recharge</div>
            </div>
        </div>
        <div class="impact-metric">
            <div class="impact-icon bg-orange">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="impact-content">
                <div class="impact-value">${impact.floodPrevention.toLocaleString()}L</div>
                <div class="impact-label">Flood Prevention</div>
            </div>
        </div>
    `;
}

function updateImplementationTab(results) {
    const timelineElement = document.getElementById('implementationTimeline');
    const maintenanceGrid = document.getElementById('maintenanceGrid');
    
    if (timelineElement) {
        timelineElement.innerHTML = results.implementationPlan.phases.map((phase, index) => `
            <div class="timeline-item">
                <div class="timeline-marker">${index + 1}</div>
                <div class="timeline-content">
                    <h4>${phase.phase}</h4>
                    <div class="timeline-duration">${phase.duration}</div>
                    <div class="timeline-tasks">
                        ${phase.tasks.map(task => `<span class="task-tag">${task}</span>`).join('')}
                    </div>
                    <div class="timeline-cost">Cost: ${phase.cost} of total</div>
                </div>
            </div>
        `).join('');
    }
    
    if (maintenanceGrid) {
        maintenanceGrid.innerHTML = results.implementationPlan.maintenance.map(item => `
            <div class="maintenance-item">
                <div class="maintenance-frequency">${item.frequency}</div>
                <div class="maintenance-task">${item.task}</div>
                <div class="maintenance-cost">${item.cost}</div>
            </div>
        `).join('');
    }
}

// Chart Creation Functions
function createRunoffChart(results) {
    const ctx = document.getElementById('runoffChart');
    if (!ctx) {
        console.warn('Runoff chart canvas not found');
        return;
    }
    
    if (AppState.charts.runoff) {
        AppState.charts.runoff.destroy();
    }
    
    AppState.charts.runoff = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: MockData.monthNames,
            datasets: [{
                label: 'Runoff (Liters)',
                data: results.monthlyHarvest,
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Runoff Collection'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Liters'
                    }
                }
            }
        }
    });
    console.log('Runoff chart created');
}

function createSeasonalChart(results) {
    const ctx = document.getElementById('seasonalChart');
    if (!ctx) {
        console.warn('Seasonal chart canvas not found');
        return;
    }
    
    if (AppState.charts.seasonal) {
        AppState.charts.seasonal.destroy();
    }
    
    const city = AppState.assessmentData.userCity || 'Mumbai';
    const rainfall = MockData.rainfallData[city];
    
    AppState.charts.seasonal = new Chart(ctx, {
        type: 'line',
        data: {
            labels: MockData.monthNames,
            datasets: [{
                label: 'Rainfall (mm)',
                data: rainfall.monthly,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                yAxisID: 'y'
            }, {
                label: 'Harvest (Liters)',
                data: results.monthlyHarvest,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Seasonal Variation Analysis'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Rainfall (mm)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Harvest (Liters)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            }
        }
    });
    console.log('Seasonal chart created');
}

function createCostChart(results) {
    const ctx = document.getElementById('costChart');
    if (!ctx) {
        console.warn('Cost chart canvas not found');
        return;
    }
    
    if (AppState.charts.cost) {
        AppState.charts.cost.destroy();
    }
    
    const costs = results.costs;
    
    AppState.charts.cost = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Structure', 'Piping', 'Labor', 'Materials', 'Design'],
            datasets: [{
                data: [costs.structure, costs.piping, costs.labor, costs.materials, costs.design],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Cost Breakdown'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    console.log('Cost chart created');
}

function createROIChart(results) {
    const ctx = document.getElementById('roiChart');
    if (!ctx) {
        console.warn('ROI chart canvas not found');
        return;
    }
    
    if (AppState.charts.roi) {
        AppState.charts.roi.destroy();
    }
    
    const years = Array.from({length: 10}, (_, i) => i + 1);
    const cumulativeSavings = years.map(year => results.roi.annualSavings * year);
    const investmentLine = years.map(() => results.costs.total);
    
    AppState.charts.roi = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years.map(y => `Year ${y}`),
            datasets: [{
                label: 'Cumulative Savings',
                data: cumulativeSavings,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true
            }, {
                label: 'Initial Investment',
                data: investmentLine,
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Return on Investment Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (₹)'
                    }
                }
            }
        }
    });
    console.log('ROI chart created');
}

function createConservationChart(results) {
    const ctx = document.getElementById('conservationChart');
    if (!ctx) {
        console.warn('Conservation chart canvas not found');
        return;
    }
    
    if (AppState.charts.conservation) {
        AppState.charts.conservation.destroy();
    }
    
    AppState.charts.conservation = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Water Saved', 'Groundwater Recharge', 'Flood Prevention', 'Carbon Reduction', 'Cost Savings'],
            datasets: [{
                label: 'Environmental Impact Score',
                data: [85, 78, 65, 70, 90],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                pointBackgroundColor: '#10B981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Environmental Impact Assessment'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    console.log('Conservation chart created');
}

// Tab Management Functions
function showTab(tabName) {
    console.log(`Showing tab: ${tabName}`);
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
        console.log(`Tab ${tabName} activated`);
    } else {
        console.error(`Tab not found: ${tabName}Tab`);
    }
    
    // Add active class to selected tab button
    const selectedButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function downloadPDF() {
    console.log('Downloading PDF report...');
    showNotification('Generating PDF report...', 'info');
    
    setTimeout(() => {
        const reportContent = generatePDFContent();
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `RTRWH_Assessment_Report_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('PDF report downloaded successfully!', 'success');
        console.log('PDF downloaded');
    }, 1500);
}

function generatePDFContent() {
    const data = AppState.assessmentData;
    const results = AppState.results;
    
    return `
RAINWATER HARVESTING ASSESSMENT REPORT
=====================================

PERSONAL INFORMATION
-------------------
Name: ${data.userName || 'N/A'}
Email: ${data.userEmail || 'N/A'}
Phone: ${data.userPhone || 'N/A'}
Address: ${data.userAddress || 'N/A'}
Property Type: ${data.propertyType || 'N/A'}
Number of Occupants: ${data.occupants || 'N/A'}

LOCATION & CLIMATE
-----------------
City: ${data.userCity || 'N/A'}
State: ${data.userState || 'N/A'}
Climate Zone: ${data.climateZone || 'N/A'}
Annual Rainfall: ${data.annualRainfall || 'N/A'} mm
Groundwater Depth: ${data.groundwaterDepth || 'N/A'}

ROOF SPECIFICATIONS
------------------
Roof Area: ${data.roofArea || 'N/A'} sq meters
Roof Material: ${data.roofMaterial || 'N/A'}
Roof Age: ${data.roofAge || 'N/A'}
Roof Condition: ${data.roofCondition || 'N/A'}
Number of Sections: ${data.roofSections || 'N/A'}
Existing Gutters: ${data.existingGutters || 'N/A'}

SITE ASSESSMENT
--------------
Available Open Space: ${data.openSpace || 'N/A'} sq meters
Soil Type: ${data.soilType || 'N/A'}
Site Slope: ${data.siteSlope || 'N/A'}
Drainage System: ${data.drainageSystem || 'N/A'}

ASSESSMENT RESULTS
=================
Feasibility Score: ${results.feasibilityScore || 'N/A'}%
Annual Harvest Potential: ${results.annualHarvestPotential?.toLocaleString() || 'N/A'} liters
Recommended Structure: ${results.recommendedStructures?.[0]?.name || 'N/A'}
Estimated Cost: ₹${results.costs?.total?.toLocaleString() || 'N/A'}
Payback Period: ${results.roi?.paybackYears || 'N/A'} years
Annual Savings: ₹${results.roi?.annualSavings?.toLocaleString() || 'N/A'}

ENVIRONMENTAL IMPACT
===================
Water Saved Annually: ${results.environmentalImpact?.waterSaved?.toLocaleString() || 'N/A'} liters
Carbon Footprint Reduction: ${results.environmentalImpact?.carbonFootprintReduction || 'N/A'} kg CO₂
Groundwater Recharge: ${results.environmentalImpact?.groundwaterRecharge?.toLocaleString() || 'N/A'} liters
Flood Prevention Capacity: ${results.environmentalImpact?.floodPrevention?.toLocaleString() || 'N/A'} liters

Report Generated: ${new Date().toLocaleString()}
Generated by RTRWH Assessment Tool
Visit us at: https://rtrwh-assessment.com
    `;
}

// Global function attachments for onclick handlers
window.navigateToPage = navigateToPage;
window.startAssessment = startAssessment;
window.startNewAssessment = startNewAssessment;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.generateReport = generateReport;
window.showTab = showTab;
window.downloadPDF = downloadPDF;
window.toggleMobileMenu = toggleMobileMenu;
window.changeLanguage = changeLanguage;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.askQuestion = askQuestion;
window.sendChatMessage = sendChatMessage;
window.handleChatKeyPress = handleChatKeyPress;
window.autoDetectLocation = autoDetectLocation;
window.autoDetectRoofType = autoDetectRoofType;
window.autoEstimateRoofArea = autoEstimateRoofArea;
window.autoEstimateOpenSpace = autoEstimateOpenSpace;
window.autoDetectSoilType = autoDetectSoilType;

console.log('Enhanced RTRWH Application loaded successfully');