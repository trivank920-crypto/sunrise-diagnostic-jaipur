// --- TEST DATA ARRAY ---
const tests = [
    {
        id: 1,
        name: "Complete Blood Count (CBC)",
        originalPrice: 800,
        discountedPrice: 499,
        image: "https://images.unsplash.com/photo-1579152433976-067a69d3e83b?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 08:00 PM",
        prep: "No fasting required",
        description: "Examines the components of your blood, including red and white cells."
    },
    {
        id: 2,
        name: "Diabetes Profile (HbA1c)",
        originalPrice: 1200,
        discountedPrice: 799,
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=60&w=500",
        timing: "07:00 AM - 11:00 AM",
        prep: "10-12 hours fasting required",
        description: "Monitors average blood sugar levels over the past 3 months."
    },
    {
        id: 3,
        name: "Liver Function Test (LFT)",
        originalPrice: 1500,
        discountedPrice: 999,
        image: "https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 12:00 PM",
        prep: "Fasting preferred",
        description: "Measures proteins and enzymes to check liver health."
    },
    {
        id: 4,
        name: "Thyroid Profile (T3, T4, TSH)",
        originalPrice: 1100,
        discountedPrice: 650,
        image: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=60&w=500",
        timing: "Anytime",
        prep: "No specific preparation",
        description: "Checks how well your thyroid gland is working."
    },
    {
        id: 5,
        name: "Vitamin D Check",
        originalPrice: 2000,
        discountedPrice: 1299,
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 04:00 PM",
        prep: "No fasting required",
        description: "Measures Vitamin D levels for bone and immune health."
    },
    {
        id: 6,
        name: "Kidney Function Test (KFT)",
        originalPrice: 1800,
        discountedPrice: 1099,
        image: "https://images.unsplash.com/photo-1580281657521-0e521c06f193?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 03:00 PM",
        prep: "No food 4 hours before sample",
        description: "Evaluates kidney health by measuring creatinine and urea."
    },
    {
        id: 7,
        name: "Lipid Profile",
        originalPrice: 1600,
        discountedPrice: 999,
        image: "https://images.unsplash.com/photo-1580281657521-5c57b9ee76f1?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 12:00 PM",
        prep: "12 hours fasting required",
        description: "Checks cholesterol and triglyceride levels for heart risk."
    },
    {
        id: 8,
        name: "Urine Routine Test",
        originalPrice: 500,
        discountedPrice: 299,
        image: "https://images.unsplash.com/photo-1526481280690-3d64a2f0f72f?auto=format&fit=crop&q=60&w=500",
        timing: "Anytime",
        prep: "Morning sample preferred",
        description: "Detects urinary infections, kidney issues, and hydration status."
    },
    {
        id: 9,
        name: "ECG (Electrocardiogram)",
        originalPrice: 1200,
        discountedPrice: 799,
        image: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=60&w=500",
        timing: "09:00 AM - 05:00 PM",
        prep: "No caffeine before test",
        description: "Monitors heart rhythm and electrical activity."
    },
    {
        id: 10,
        name: "COVID-19 Antibody Test",
        originalPrice: 1500,
        discountedPrice: 899,
        image: "https://images.unsplash.com/photo-1514894781502-c12f8b5da404?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 04:00 PM",
        prep: "No special preparation",
        description: "Checks for antibodies after past COVID-19 infection or vaccination."
    },
    {
        id: 11,
        name: "Iron Studies",
        originalPrice: 1400,
        discountedPrice: 950,
        image: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 02:00 PM",
        prep: "Fasting preferred",
        description: "Measures iron, ferritin, and total iron-binding capacity."
    },
    {
        id: 12,
        name: "Vitamin B12 Check",
        originalPrice: 1200,
        discountedPrice: 799,
        image: "https://images.unsplash.com/photo-1517971071642-34a2b5a7a0b3?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 04:00 PM",
        prep: "No special preparation",
        description: "Assess B12 levels for energy and nerve health."
    },
    {
        id: 13,
        name: "CRP (Inflammation Marker)",
        originalPrice: 900,
        discountedPrice: 549,
        image: "https://images.unsplash.com/photo-1580281657521-3b86acc4910a?auto=format&fit=crop&q=60&w=500",
        timing: "Anytime",
        prep: "No special preparation",
        description: "Detects inflammation in the body."
    },
    {
        id: 14,
        name: "Allergy Panel",
        originalPrice: 2500,
        discountedPrice: 1599,
        image: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 03:00 PM",
        prep: "No antihistamines before test",
        description: "Screens for common environmental and food allergies."
    },
    {
        id: 15,
        name: "HbA1c + Lipid Combo",
        originalPrice: 2500,
        discountedPrice: 1499,
        image: "https://images.unsplash.com/photo-1514894781502-c12f8b5da404?auto=format&fit=crop&q=60&w=500",
        timing: "08:00 AM - 12:00 PM",
        prep: "12 hours fasting required",
        description: "Combined diabetes and cholesterol screening package."
    }
];

// --- PAGE NAVIGATION ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    window.scrollTo(0,0);
    
    if(pageId === 'home') renderPopularTests();
    if(pageId === 'tests-all') renderAllTests();
}

// --- RENDERING FUNCTIONS ---
function createTestCard(test) {
    return `
        <div class="test-card">
            <img src="${test.image}" alt="${test.name}">
            <div class="test-content">
                <div class="test-name">${test.name}</div>
                <div class="price-tag">
                    <span class="original-price">₹${test.originalPrice}</span>
                    <span class="discount-price">₹${test.discountedPrice}</span>
                </div>
                <button class="btn btn-book" onclick="viewTestDetails(${test.id})">Book Test</button>
            </div>
        </div>
    `;
}

function renderPopularTests() {
    const container = document.getElementById('popular-tests-grid');
    // Randomly pick 3
    const shuffled = [...tests].sort(() => 0.5 - Math.random());
    container.innerHTML = shuffled.slice(0, 3).map(t => createTestCard(t)).join('');
}

function renderAllTests() {
    const container = document.getElementById('all-tests-grid');
    container.innerHTML = tests.map(t => createTestCard(t)).join('');
}

function viewTestDetails(id) {
    const test = tests.find(t => t.id === id);
    const container = document.getElementById('test-details-content');
    
    container.innerHTML = `
        <div class="test-details-flex" style="display: flex; gap: 40px; flex-wrap: wrap;">
            <img src="${test.image}" style="width: 100%; max-width: 400px; border-radius: 20px;">
            <div style="flex: 1;">
                <h1 style="color: var(--primary);">${test.name}</h1>
                <p style="margin: 20px 0; font-size: 1.1rem;">${test.description}</p>
                <div style="background: var(--accent); padding: 20px; border-radius: 10px;">
                    <p><strong>🕒 Timing:</strong> ${test.timing}</p>
                    <p><strong>🥣 Prep:</strong> ${test.prep}</p>
                    <p style="font-size: 1.5rem; margin-top: 10px;"><strong>Price: ₹${test.discountedPrice}</strong> <span style="text-decoration: line-through; font-size: 1rem; color: #888;">₹${test.originalPrice}</span></p>
                </div>
                <button class="btn btn-primary btn-full" onclick="openBookingModal(${test.id})">Book Appointment Now</button>
            </div>
        </div>
    `;
    showPage('test-details');
}

// --- SEARCH FEATURE ---
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const suggestionsBox = document.getElementById('searchSuggestions');

searchBtn.onclick = () => {
    searchModal.style.display = 'block';
    searchInput.focus();
};

closeSearch.onclick = () => {
    searchModal.style.display = 'none';
};

searchInput.oninput = (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 1) {
        searchResults.innerHTML = '';
        suggestionsBox.innerHTML = '';
        return;
    }

    const filtered = tests.filter(t => t.name.toLowerCase().includes(query));
    
    // Fuzzy Suggestion Logic
    if (filtered.length === 0) {
        const suggestion = tests.find(t => t.name.toLowerCase().startsWith(query[0]));
        if(suggestion) {
            suggestionsBox.innerHTML = `Did you mean: <span onclick="fillSearch('${suggestion.name}')">${suggestion.name}</span>?`;
        }
    } else {
        suggestionsBox.innerHTML = '';
    }

    searchResults.innerHTML = filtered.map(t => `
        <div class="search-item" onclick="viewTestDetails(${t.id}); closeModal();" style="padding: 15px; border-bottom: 1px solid #eee; cursor: pointer;">
            <strong>${t.name}</strong> - ₹${t.discountedPrice}
        </div>
    `).join('');
};

function fillSearch(name) {
    searchInput.value = name;
    searchInput.dispatchEvent(new Event('input'));
}

function closeModal() {
    searchModal.style.display = 'none';
}

// --- BOOKING FORM ---
const bookingModal = document.getElementById('bookingModal');
const closeBooking = document.getElementById('closeBooking');
const formSelect = document.getElementById('formTestName');

function openBookingModal(testId) {
    bookingModal.style.display = 'block';
    formSelect.innerHTML = tests.map(t => `<option value="${t.name}" ${t.id === testId ? 'selected' : ''}>${t.name}</option>`).join('');
}

closeBooking.onclick = () => bookingModal.style.display = 'none';

document.getElementById('bookingForm').onsubmit = (e) => {
    e.preventDefault();
    
    const test = document.getElementById('formTestName').value;
    const name = document.getElementById('userName').value;
    const mobile = document.getElementById('userMobile').value;
    const email = document.getElementById('userEmail').value;
    const address = document.getElementById('userAddress').value;
    const date = document.getElementById('testDate').value;

    const subject = `New Test Booking: ${test}`;
    const body = `Booking Details:%0D%0AName: ${name}%0D%0AMobile: ${mobile}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0ADate: ${date}%0D%0ATest: ${test}`;
    
    window.location.href = `mailto:contact@sunrisediagnostic.com?subject=${subject}&body=${body}`;
    
    alert("Gmail will now open to send your booking request.");
    bookingModal.style.display = 'none';
};

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

themeToggle.onclick = () => {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// Initialize
window.onload = () => {
    renderPopularTests();
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('testDate').value = tomorrow.toISOString().split('T')[0];
};

// Close modals when clicking outside
window.onclick = (event) => {
    if (event.target == searchModal) searchModal.style.display = "none";
    if (event.target == bookingModal) bookingModal.style.display = "none";
};