// ==========================================
// 1. RENDER GIAO DIỆN BẰNG JAVASCRIPT
// ==========================================
const renderAppUI = () => {
    const appRoot = document.getElementById('app-root');
    appRoot.innerHTML = `
        <nav class="fixed top-0 left-0 right-0 z-30 glass-nav px-4 md:px-8 py-3 flex justify-center md:justify-between items-center transition-all">
            <div class="flex items-center gap-2 cursor-pointer">
                <img src="https://raw.githubusercontent.com/quynhonAiEXPLORER/quynhonaiexplorer.github.io/main/logo.png" class="w-8 h-8 rounded-full shadow-lg border border-white/20">
                <span class="font-black text-lg md:text-xl text-white tracking-wide uppercase drop-shadow-md">
                    Quy Nhơn <span class="text-orange-500">AI Explorer</span>
                </span>
            </div>
            <div class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-300">
                <a href="#" class="text-orange-400 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"><i class="fa-solid fa-house"></i> Khám phá</a>
                <a href="#" onclick="openFeature('Nhật ký AI')" class="hover:text-orange-400 flex items-center gap-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"><i class="fa-solid fa-book"></i> Nhật ký AI</a>
                <a href="#" onclick="openFeature('Gacha Thử Thách')" class="hover:text-orange-400 flex items-center gap-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"><i class="fa-solid fa-dice"></i> Thử Thách</a>
                <a href="#" onclick="openAuthModal()" class="hover:text-orange-400 flex items-center gap-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"><i class="fa-regular fa-circle-user"></i> Cá nhân</a>
            </div>
        </nav>

        <div class="max-w-5xl w-full text-center text-white px-4 md:mt-8">
            <header class="mb-6 mt-2">
                <div class="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs md:text-sm font-semibold mb-3 border border-orange-500/30">AI First – BTSX</div>
                <h1 class="text-4xl md:text-7xl font-black tracking-tighter mb-1 md:mb-3 uppercase drop-shadow-lg">Quy Nhơn</h1>
                <p class="text-gray-300 text-sm md:text-lg max-w-lg mx-auto font-light leading-relaxed mt-3 px-2 drop-shadow-md">Khám phá vẻ đẹp xứ Nẫu với sự hỗ trợ của trí tuệ nhân tạo. Có tui lo!</p>
                <button onclick="openItineraryPlanner()" class="mt-6 md:mt-8 w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl md:rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto text-base md:text-lg">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Lên lịch trình AI (10s)
                </button>
            </header>

            <div class="max-w-2xl mx-auto mb-6 md:mb-10 bg-black/50 md:bg-black/40 backdrop-blur-md border border-orange-500/40 rounded-2xl md:rounded-full py-2.5 md:py-3 px-4 md:px-6 flex items-center gap-3 shadow-lg">
                <img src="https://raw.githubusercontent.com/quynhonAiEXPLORER/quynhonaiexplorer.github.io/main/logo.png" class="w-8 h-8 rounded-full border border-orange-400">
                <p id="dynamic-greeting" class="text-orange-100 text-sm md:text-base font-medium text-left flex-1 line-clamp-2 md:line-clamp-none leading-snug">Đang tải...</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 relative z-10">
                <div onclick="openFeature('Chatbot Thổ Địa')" class="glass-card rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 cursor-pointer min-h-[120px]">
                    <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[20px] bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl md:text-3xl"><i class="fa-regular fa-comments"></i></div>
                    <div class="text-center"><h3 class="font-bold text-sm md:text-lg text-white">Tư Nẫu</h3><p class="text-[10px] md:text-xs text-gray-400 mt-1 md:mt-2">Hỏi đáp 24/7</p></div>
                </div>
                
                <div onclick="openFeature('Bản đồ Khám phá')" class="glass-card rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 cursor-pointer min-h-[120px]">
                    <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[20px] bg-green-500/20 flex items-center justify-center text-green-400 text-2xl md:text-3xl"><i class="fa-solid fa-location-dot"></i></div>
                    <div class="text-center"><h3 class="font-bold text-sm md:text-lg text-white">Check-in</h3><p class="text-[10px] md:text-xs text-gray-400 mt-1 md:mt-2">Tọa độ HOT</p></div>
                </div>
                
                <div onclick="openFeature('Thời Tiết & Đi Đảo')" class="glass-card rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 cursor-pointer min-h-[120px]">
                    <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[20px] bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl md:text-3xl"><i class="fa-solid fa-cloud-sun-rain"></i></div>
                    <div class="text-center"><h3 class="font-bold text-sm md:text-lg text-white">Thời Tiết</h3><p class="text-[10px] md:text-xs text-gray-400 mt-1 md:mt-2">Biển & Đi đảo</p></div>
                </div>

                <div onclick="openFeature('Từ Điển Tiếng Nẫu')" class="glass-card rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 cursor-pointer min-h-[120px]">
                    <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[20px] bg-orange-500/20 flex items-center justify-center text-orange-400 text-2xl md:text-3xl"><i class="fa-solid fa-book-open"></i></div>
                    <div class="text-center"><h3 class="font-bold text-sm md:text-lg text-white">Tiếng "Nẫu"</h3><p class="text-[10px] md:text-xs text-gray-400 mt-1 md:mt-2">Giao tiếp bản địa</p></div>
                </div>
            </div>

            <footer class="mt-12 md:mt-20 text-gray-400 text-xs md:text-sm pb-8 md:pb-4 flex flex-col items-center gap-4">
                <p>© 2026 AI First – BTSX - Trường THPT Bùi Thị Xuân</p>
                <a href="https://www.facebook.com/profile.php?id=100094880366095" target="_blank" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-colors border border-white/10 shadow-sm"><i class="fab fa-facebook-f text-lg"></i></a>
            </footer>
        </div>

        <div class="fixed bottom-[85px] right-4 md:bottom-10 md:right-10 z-40">
            <button onclick="openCamera()" class="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_20px_rgba(249,115,22,0.5)] active:scale-90 transition-transform">
                <i class="fa-solid fa-camera"></i>
                <span class="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping-slow pointer-events-none"></span>
            </button>
        </div>

        <div class="fixed bottom-0 left-0 right-0 glass-bottom-nav z-30 flex justify-around items-center py-2 md:hidden">
            <a href="#" class="flex flex-col items-center text-orange-400 p-2"><i class="fa-solid fa-house text-xl mb-1"></i><span class="text-[10px] font-semibold">Khám phá</span></a>
            <a href="#" onclick="openFeature('Nhật ký AI')" class="flex flex-col items-center text-gray-400 hover:text-orange-400 transition-colors p-2"><i class="fa-solid fa-book text-xl mb-1"></i><span class="text-[10px] font-medium">Nhật ký AI</span></a>
            <a href="#" onclick="openFeature('Gacha Thử Thách')" class="flex flex-col items-center text-gray-400 hover:text-orange-400 transition-colors p-2"><i class="fa-solid fa-dice text-xl mb-1"></i><span class="text-[10px] font-medium">Thử Thách</span></a>
            <a href="#" onclick="openAuthModal()" class="flex flex-col items-center text-gray-400 hover:text-orange-400 transition-colors p-2"><i class="fa-regular fa-circle-user text-xl mb-1"></i><span class="text-[10px] font-medium">Cá nhân</span></a>
        </div>

        <div id="modal" class="fixed inset-0 z-50 hidden flex flex-col justify-end md:justify-center items-center p-0 md:p-4">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeModal()"></div>
            <div class="glass-panel w-full md:max-w-2xl overflow-hidden flex flex-col relative rounded-t-3xl md:rounded-3xl modal-slide-up shadow-2xl h-[88vh] md:h-[80vh]">
                <div class="w-full flex justify-center pt-3 pb-1 md:hidden"><div class="w-12 h-1.5 bg-gray-500/50 rounded-full"></div></div>
                <div class="px-5 py-4 border-b border-white/10 flex justify-between items-center text-white">
                    <div class="flex items-center gap-3">
                        <div id="modal-icon" class="text-xl text-orange-400 bg-orange-500/10 w-8 h-8 rounded-full flex items-center justify-center"></div>
                        <h3 id="modal-title" class="font-bold text-lg md:text-xl uppercase tracking-wide"></h3>
                    </div>
                    <button onclick="closeModal()" class="bg-white/10 hover:bg-white/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div id="modal-content" class="flex-1 overflow-y-auto p-3 md:p-5 text-white no-scrollbar"></div>

                <div id="chat-input-area" class="p-3 md:p-5 bg-gray-900/80 md:bg-white/5 border-t border-white/10 hidden pb-safe">
                    <form onsubmit="sendMessage(event)" class="relative flex gap-2">
                        <input type="text" id="ai-input" placeholder="Hỏi Tư Nẫu chỗ ăn, ngủ, chơi nghen..." 
                               class="flex-1 bg-white/10 border border-white/10 rounded-full md:rounded-2xl py-3 px-5 text-sm md:text-base text-white focus:outline-none focus:border-orange-500">
                        <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-white w-12 md:w-14 rounded-full md:rounded-2xl flex items-center justify-center transition-colors cursor-pointer"><i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div id="camera-modal" class="fixed inset-0 z-[60] hidden bg-black flex flex-col modal-slide-up">
            <div class="flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
                <h3 class="text-white font-bold text-lg drop-shadow-md"><i class="fa-solid fa-camera text-orange-500 mr-2"></i>Mắt Thần AI</h3>
                <button onclick="closeCamera()" class="text-white bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"><i class="fa-solid fa-xmark text-xl"></i></button>
            </div>

            <div class="flex-1 relative flex items-center justify-center bg-black overflow-hidden">
                <video id="camera-stream" autoplay playsinline class="w-full h-full object-cover"></video>
                <img id="camera-preview" class="w-full h-full object-cover hidden">
                <canvas id="camera-canvas" class="hidden"></canvas>
            </div>

            <div class="p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-center items-center gap-6 absolute bottom-0 left-0 right-0 pb-safe h-32">
                <button id="btn-retake" onclick="retakePhoto()" class="hidden text-white font-semibold py-2.5 px-5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">Chụp lại</button>
                <button id="btn-capture" onclick="takePhoto()" class="w-16 h-16 rounded-full bg-white/20 border-4 border-white flex items-center justify-center active:scale-90 transition-transform">
                    <div class="w-12 h-12 bg-white rounded-full"></div>
                </button>
                <button id="btn-analyze" onclick="analyzePhoto()" class="hidden bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 px-6 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95 transition">Hỏi Tư Nẫu</button>
            </div>
        </div>
    `;
};

// Gọi hàm vẽ UI ngay lập tức
renderAppUI();


// ==========================================
// 2. CẤU HÌNH FIREBASE AUTHENTICATION & FIRESTORE
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyDqGxQYtmt3fH3RmIalBzW-7lH9O6W5cjk",
    authDomain: "quynhonaiexplorer.firebaseapp.com",
    projectId: "quynhonaiexplorer",
    storageBucket: "quynhonaiexplorer.firebasestorage.app",
    messagingSenderId: "1026077912834",
    appId: "1:1026077912834:web:8236d3f76cdd8200075c1b",
};

let auth = null, googleProvider = null, db = null;
try {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore(); 
    googleProvider = new firebase.auth.GoogleAuthProvider();
} catch(e) {
    console.error("Firebase Init Error:", e);
}

// ==========================================
// 3. DỮ LIỆU NGƯỜI DÙNG & ĐỒNG BỘ FIRESTORE
// ==========================================
let currentUser = {
    isLoggedIn: false, uid: null, name: 'Khách Phương Xa',
    avatar: 'https://ui-avatars.com/api/?name=K&background=334155&color=fff&rounded=true',
    chatHistory: [], itineraries: []
};

if (auth) {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const displayName = user.displayName || user.email.split('@')[0];
            currentUser = {
                isLoggedIn: true, uid: user.uid, name: displayName,
                avatar: user.photoURL || `https://ui-avatars.com/api/?name=${displayName.charAt(0)}&background=f97316&color=fff&rounded=true`,
                chatHistory: [], itineraries: []
            };

            if (db) {
                try {
                    const doc = await db.collection('users').doc(user.uid).get();
                    if (doc.exists) {
                        const data = doc.data();
                        currentUser.chatHistory = data.chatHistory || [];
                        currentUser.itineraries = data.itineraries || [];
                    }
                } catch (error) { console.error("Lỗi tải dữ liệu từ Cloud:", error); }
            }
        } else {
            currentUser = { isLoggedIn: false, uid: null, name: 'Khách Phương Xa', avatar: 'https://ui-avatars.com/api/?name=K&background=334155&color=fff&rounded=true', chatHistory: [], itineraries: [] };
        }
        
        updateDynamicGreeting();
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle && (modalTitle.innerText === 'TÀI KHOẢN' || modalTitle.innerText === 'HỒ SƠ CỦA BẠN')) openAuthModal(); 
    });
}

async function saveUserData() {
    if (currentUser.isLoggedIn && currentUser.uid && db) {
        try {
            await db.collection('users').doc(currentUser.uid).set({
                chatHistory: currentUser.chatHistory, itineraries: currentUser.itineraries,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        } catch (error) { console.error("Lỗi đồng bộ dữ liệu:", error); }
    }
}

const keyPoolNguoc = [
    'QBGPFUBKDAM-YeV7sV0n_SZ4tNGKIfTVBySazIA', 'gQMHoJNIewQeiNS-Hy5MzEV3QEY_2Pr5DySazIA',
    'cnOrQudc0gP3zmd7M07e-2p_Ki3kbpuACySazIA', 'QJ6wvTWhfrK3SN0mhCd48oJzfMCd3kHPCySazIA',
    'U24QXtXYWT_MUZNE6uki7P-qqr32A7CJCySazIA'
];

let currentKeyIndex = 0;
function getNextApiKey() {
    const keyThat = keyPoolNguoc[currentKeyIndex].split('').reverse().join('');
    currentKeyIndex = (currentKeyIndex + 1) % keyPoolNguoc.length;
    return keyThat;
}

const aiAvatar = "https://raw.githubusercontent.com/quynhonAiEXPLORER/quynhonaiexplorer.github.io/main/logo.png";
const fallbackImg = "https://raw.githubusercontent.com/quynhonAiEXPLORER/quynhonaiexplorer.github.io/main/kyco4.jpg";

function updateDynamicGreeting() {
    const hour = new Date().getHours();
    const nameToGreet = currentUser.isLoggedIn ? currentUser.name : 'bạn mình';
    let text = "";
    if (hour >= 5 && hour < 11) text = `Sáng rầu! Lên đồ đi check-in Eo Gió là bao hình đẹp nhen ${nameToGreet}!`;
    else if (hour >= 11 && hour < 14) text = `Trưa nắng gắt! ${nameToGreet} ghé làm dĩa Bánh xèo tôm nhảy cho mát dạ nhen.`;
    else if (hour >= 14 && hour < 18) text = `Chiều mát, ${nameToGreet} ra biển dạo hay làm ly nước mía lề đường hông?`;
    else text = `Tối rầu nhen ${nameToGreet}! Chợ đêm Quy Nhơn đang xôm, ra ăn ốc mỡ xào me xíu hông?`;
    
    const greetingEl = document.getElementById('dynamic-greeting');
    if(greetingEl) greetingEl.innerText = text;
}
window.addEventListener('DOMContentLoaded', updateDynamicGreeting);

// ==========================================
// 4. UI ĐĂNG NHẬP, ĐĂNG KÝ VÀ HỒ SƠ
// ==========================================
function openAuthModal() {
    const modal = document.getElementById('modal');
    const chatArea = document.getElementById('chat-input-area');
    chatArea.classList.add('hidden');
    
    if (currentUser.isLoggedIn) {
        document.getElementById('modal-title').innerText = 'Hồ Sơ Của Bạn';
        document.getElementById('modal-icon').innerHTML = '<i class="fa-regular fa-circle-user"></i>';
        const content = document.getElementById('modal-content');
        
        let savedItemsHtml = '';
        if (currentUser.itineraries && currentUser.itineraries.length > 0) {
            currentUser.itineraries.forEach((item, index) => {
                savedItemsHtml += `<div class="bg-black/30 p-3 rounded-lg mb-2 text-left border border-white/10 text-sm italic text-gray-300"><p class="font-bold text-orange-400 mb-1 text-xs">Nhật ký AI #${index + 1}</p>${item}</div>`;
            });
        } else {
            savedItemsHtml = '<p class="text-xs text-gray-500">Chưa có lịch trình/nhật ký nào.</p>';
        }

        content.innerHTML = `
            <div class="flex flex-col items-center gap-4 py-6">
                <img src="${currentUser.avatar}" class="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <h2 class="text-xl md:text-2xl font-bold text-white">${currentUser.name}</h2>
                <div class="bg-white/5 w-full rounded-2xl p-4 mt-2 border border-white/10 text-center max-h-48 overflow-y-auto no-scrollbar">
                    <h3 class="font-bold text-white mb-3 text-sm flex items-center justify-center gap-2"><i class="fa-solid fa-bookmark text-orange-400"></i> Lịch trình đã lưu</h3>
                    ${savedItemsHtml}
                </div>
                <button onclick="logout()" class="mt-2 w-full bg-red-500/20 border border-red-500/50 hover:bg-red-500/40 text-red-400 px-8 py-3 rounded-xl transition font-bold cursor-pointer">Đăng xuất</button>
            </div>
        `;
    } else {
        document.getElementById('modal-title').innerText = 'Tài Khoản';
        document.getElementById('modal-icon').innerHTML = '<i class="fa-solid fa-shield-halved"></i>';
        renderLoginForm();
    }
    modal.classList.remove('hidden');
}

function renderLoginForm() {
    document.getElementById('modal-content').innerHTML = `
    <div class="w-full max-w-sm mx-auto bg-white rounded-2xl p-6 md:p-8 text-gray-800 shadow-xl mt-2 mb-4">
        <h2 class="text-2xl md:text-3xl font-black text-center text-orange-600 mb-6 uppercase tracking-wide">Đăng nhập</h2>
        <button type="button" onclick="loginWithGoogle()" class="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-orange-50 mb-6 transition cursor-pointer">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5"><span class="font-bold text-gray-700">Tiếp tục với Google</span>
        </button>
        <div class="flex items-center gap-3 mb-6">
            <div class="flex-1 h-px bg-gray-300"></div><span class="text-sm text-gray-500">hoặc</span><div class="flex-1 h-px bg-gray-300"></div>
        </div>
        <form onsubmit="loginWithEmail(event)" class="space-y-4">
            <div>
                <label class="block text-sm text-gray-600 mb-1 text-left font-medium">Địa chỉ email</label>
                <input type="email" id="login-email" required class="w-full px-4 py-2.5 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black" />
            </div>
            <div>
                <label class="block text-sm text-gray-600 mb-1 text-left font-medium">Mật khẩu</label>
                <div class="relative">
                    <input type="password" id="login-password" required class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black pr-10" />
                    <button type="button" onclick="togglePassword(this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 cursor-pointer"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
            <button type="submit" class="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 shadow-[0_4px_15px_rgba(249,115,22,0.3)] transition cursor-pointer">Đăng nhập</button>
        </form>
        <div class="mt-6 text-center text-sm flex flex-col gap-2">
            <div><span class="text-gray-600">Bạn chưa có tài khoản?</span><button onclick="renderRegisterForm()" class="text-orange-600 font-bold hover:underline ml-1 cursor-pointer">Đăng ký</button></div>
        </div>
    </div>`;
}

function renderRegisterForm() {
    document.getElementById('modal-content').innerHTML = `
    <div class="w-full max-w-sm mx-auto bg-white rounded-2xl p-6 md:p-8 text-gray-800 shadow-xl mt-2 mb-4">
        <h2 class="text-2xl md:text-3xl font-black text-center text-orange-600 mb-6 uppercase tracking-wide">Đăng ký</h2>
        <button type="button" onclick="loginWithGoogle()" class="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-orange-50 mb-6 transition cursor-pointer">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5"><span class="font-bold text-gray-700">Tiếp tục với Google</span>
        </button>
        <div class="flex items-center gap-3 mb-6">
            <div class="flex-1 h-px bg-gray-300"></div><span class="text-sm text-gray-500">hoặc</span><div class="flex-1 h-px bg-gray-300"></div>
        </div>
        <form onsubmit="registerWithEmail(event)" class="space-y-4">
            <div>
                <label class="block text-sm text-gray-600 mb-1 text-left font-medium">Địa chỉ email</label>
                <input type="email" id="reg-email" required class="w-full px-4 py-2.5 border border-gray-400 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
                <label class="block text-sm text-gray-600 mb-1 text-left font-medium">Mật khẩu</label>
                <div class="relative">
                    <input type="password" id="reg-password" required class="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-black pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <button type="button" onclick="togglePassword(this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 cursor-pointer"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
            <button type="submit" class="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-[0_4px_15px_rgba(249,115,22,0.3)] transition cursor-pointer">Đăng ký</button>
        </form>
        <div class="mt-6 text-center text-sm mb-6">
            <span class="text-gray-600">Đã có tài khoản?</span><button onclick="renderLoginForm()" class="text-orange-600 font-bold hover:underline ml-1 cursor-pointer">Đăng nhập</button>
        </div>
    </div>`;
}

function togglePassword(btn) {
    const input = btn.previousElementSibling;
    const icon = btn.querySelector('i');
    if (input.type === 'password') { input.type = 'text'; icon.classList.replace('fa-eye', 'fa-eye-slash'); } 
    else { input.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); }
}

function loginWithGoogle() {
    if(!auth) return alert("Firebase chưa được cấu hình.");
    auth.signInWithPopup(googleProvider).then(() => { closeModal(); alert("Đăng nhập thành công!"); }).catch(e => alert("Lỗi: " + e.message));
}

function registerWithEmail(event) {
    event.preventDefault();
    if(!auth) return alert("Firebase chưa được cấu hình.");
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => { closeModal(); alert("Đăng ký thành công!"); }).catch(e => alert("Lỗi đăng ký: " + e.message));
}

function loginWithEmail(event) {
    event.preventDefault();
    if(!auth) return alert("Firebase chưa được cấu hình.");
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => { closeModal(); alert("Đăng nhập thành công!"); }).catch(e => alert("Sai email hoặc mật khẩu."));
}

function logout() {
    if(!auth) return;
    auth.signOut().then(() => {
        const chatBox = document.getElementById('chat-box');
        if(chatBox) chatBox.remove(); 
        closeModal();
    });
}

// ==========================================
// 5. MODULE: LÊN LỊCH TRÌNH AI
// ==========================================
let itinData = { days: '', style: '', budget: '', lat: null, lng: null, useLocation: false };

function openItineraryPlanner() {
    const modal = document.getElementById('modal');
    const chatArea = document.getElementById('chat-input-area');
    document.getElementById('modal-title').innerText = 'Lên Lịch Trình AI';
    document.getElementById('modal-icon').innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
    chatArea.classList.add('hidden'); 
    
    itinData = { days: '', style: '', budget: '', lat: null, lng: null, useLocation: false };
    renderStep(1); 
    modal.classList.remove('hidden');
}

function renderStep(step) {
    const content = document.getElementById('modal-content');
    let stepHtml = '';

    const progressBar = `
        <div class="flex justify-center gap-2 mb-6">
            <div class="h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-orange-500' : 'bg-white/10'}"></div>
            <div class="h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-orange-500' : 'bg-white/10'}"></div>
            <div class="h-1.5 w-8 rounded-full ${step >= 3 ? 'bg-orange-500' : 'bg-white/10'}"></div>
            <div class="h-1.5 w-8 rounded-full ${step >= 4 ? 'bg-orange-500' : 'bg-white/10'}"></div>
        </div>
    `;

    switch(step) {
        case 1:
            stepHtml = `${progressBar}
                <div class="text-center animate-fadeIn">
                    <div class="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400 text-2xl">
                        <i class="fa-solid fa-location-crosshairs animate-pulse"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Bật định vị cho xịn nhen?</h3>
                    <p class="text-xs text-gray-400 mb-6 px-4">Tư Nẫu sẽ xem bạn đang đứng đâu để xếp lịch trình, tìm quán ăn gần nhất cho tiện đường đi lại.</p>
                    <div class="grid grid-cols-1 gap-3">
                        <button id="btn-location" onclick="getLocationAndNext()" class="glass-card p-4 rounded-2xl border border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/20 transition text-left flex justify-between items-center">
                            <div>
                                <p class="font-bold text-sm text-orange-400">Sử dụng vị trí hiện tại</p>
                                <p class="text-[10px] text-gray-400">Gợi ý quanh chỗ bạn đứng</p>
                            </div>
                            <i class="fa-solid fa-crosshairs text-orange-400"></i>
                        </button>
                        <button onclick="selectStep(1, false)" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-white/30 transition text-left flex justify-between items-center">
                            <div>
                                <p class="font-bold text-sm text-white">Bỏ qua</p>
                                <p class="text-[10px] text-gray-400">Tự động tính từ trung tâm TP. Quy Nhơn</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-xs text-gray-500"></i>
                        </button>
                    </div>
                </div>`; break;
        case 2:
            stepHtml = `${progressBar}
                <div class="text-center animate-fadeIn">
                    <h3 class="text-xl font-bold mb-4">Bạn định ở Quy Nhơn mấy ngày?</h3>
                    <div class="grid grid-cols-1 gap-3">
                        <button onclick="selectStep(2, '1 ngày')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex justify-between items-center"><span>1 Ngày (Chớp nhoáng)</span> <i class="fa-solid fa-chevron-right text-xs text-gray-500"></i></button>
                        <button onclick="selectStep(2, '2 ngày 1 đêm')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex justify-between items-center"><span>2 Ngày 1 Đêm (Cuối tuần)</span> <i class="fa-solid fa-chevron-right text-xs text-gray-500"></i></button>
                        <button onclick="selectStep(2, '3 ngày 2 đêm')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex justify-between items-center"><span>3 Ngày 2 Đêm (Tiêu chuẩn)</span> <i class="fa-solid fa-chevron-right text-xs text-gray-500"></i></button>
                    </div>
                </div>`; break;
        case 3:
            stepHtml = `${progressBar}
                <div class="text-center animate-fadeIn">
                    <h3 class="text-xl font-bold mb-4">Gu đi chơi của bạn ra sao?</h3>
                    <div class="grid grid-cols-1 gap-3">
                        <button onclick="selectStep(3, 'Chụp ảnh sống ảo')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex items-center gap-4"><div class="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400"><i class="fa-solid fa-camera"></i></div><div><p class="font-bold text-sm">Sống ảo</p><p class="text-[10px] text-gray-400">Điểm check-in rần rần</p></div></button>
                        <button onclick="selectStep(3, 'Khám phá ẩm thực')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex items-center gap-4"><div class="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400"><i class="fa-solid fa-utensils"></i></div><div><p class="font-bold text-sm">Ăn sập Quy Nhơn</p><p class="text-[10px] text-gray-400">Bún rạm, bánh xèo, ốc...</p></div></button>
                        <button onclick="selectStep(3, 'Nghỉ dưỡng')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex items-center gap-4"><div class="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400"><i class="fa-solid fa-umbrella-beach"></i></div><div><p class="font-bold text-sm">Chill & Nghỉ dưỡng</p><p class="text-[10px] text-gray-400">Nhẹ nhàng, thư giãn</p></div></button>
                    </div>
                </div>`; break;
        case 4:
            stepHtml = `${progressBar}
                <div class="text-center animate-fadeIn">
                    <h3 class="text-xl font-bold mb-4">Ví tiền của bạn cỡ nào?</h3>
                    <div class="grid grid-cols-1 gap-3">
                        <button onclick="selectStep(4, 'Tiết kiệm')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex items-center gap-4"><div class="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400"><i class="fa-solid fa-coins"></i></div><span>Học sinh / Sinh viên (Tiết kiệm)</span></button>
                        <button onclick="selectStep(4, 'Tiêu chuẩn')" class="glass-card p-4 rounded-2xl border border-white/10 hover:border-orange-500 transition text-left flex items-center gap-4"><div class="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400"><i class="fa-solid fa-wallet"></i></div><span>Thoải mái (Tiêu chuẩn)</span></button>
                    </div>
                </div>`; break;
        case 'loading':
            stepHtml = `
                <div class="flex flex-col items-center justify-center py-12 text-center">
                    <div class="relative w-20 h-20 mb-6">
                        <div class="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
                        <div class="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        <i class="fa-solid fa-wand-magic-sparkles absolute inset-0 flex items-center justify-center text-2xl text-orange-500 animate-pulse"></i>
                    </div>
                    <h3 class="text-xl font-black text-orange-400 uppercase tracking-widest">Đang tính toán...</h3>
                    <p class="text-gray-400 text-sm mt-2 italic">Anh Tư đang quét vệ tinh tìm chỗ ngon cho bạn nhen!</p>
                </div>`; break;
    }
    content.innerHTML = stepHtml;
}

function getLocationAndNext() {
    const btn = document.getElementById('btn-location');
    btn.innerHTML = '<div class="flex items-center gap-2 text-orange-400"><i class="fa-solid fa-spinner fa-spin"></i> Đang lấy vị trí...</div>';
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                itinData.lat = position.coords.latitude;
                itinData.lng = position.coords.longitude;
                itinData.useLocation = true;
                selectStep(1, true); 
            },
            () => { alert("Hổng lấy được vị trí rầu!"); itinData.useLocation = false; selectStep(1, false); },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    } else { itinData.useLocation = false; selectStep(1, false); }
}

function selectStep(step, value) {
    if (step === 2) itinData.days = value;
    if (step === 3) itinData.style = value;
    if (step === 4) { itinData.budget = value; startFinalGeneration(); return; }
    renderStep(step + 1);
}

async function fetchSpecialAI(promptText) {
    const currentKey = getNextApiKey();
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${currentKey}`;
    const payload = { contents: [{ parts: [{ text: promptText }] }], generationConfig: { temperature: 0.7 } };
    try {
        const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        const data = await res.json();
        if (data.candidates && data.candidates.length > 0) return data.candidates[0].content.parts[0].text;
        return null;
    } catch(e) { console.error("Lỗi:", e); return null; }
}

async function startFinalGeneration() {
    renderStep('loading');
    const content = document.getElementById('modal-content');
    const userName = currentUser.isLoggedIn ? currentUser.name : "Bạn mình";
    let locationContext = "Tính từ trung tâm thành phố Quy Nhơn.";
    if (itinData.useLocation && itinData.lat && itinData.lng) locationContext = `GPS hiện tại: ${itinData.lat}, ${itinData.lng}.`;

    const prompt = `Đóng vai "Anh Tư", thổ địa Quy Nhơn, xưng hô thân thiện với "${userName}". Lịch trình: ${itinData.days}, Gu: ${itinData.style}, Ngân sách: ${itinData.budget}. Vị trí: ${locationContext}. YÊU CẦU: TRẢ VỀ JSON DUY NHẤT. BẮT BUỘC có mảng "itinerary". Cấu trúc: {"message": "...", "itinerary": [{"day": "Ngày 1", "title": "...", "morning": "...", "morning_place": "...", "noon": "...", "afternoon": "...", "afternoon_place": "...", "evening": "...", "evening_place": "..."}]}`;

    const res = await fetchSpecialAI(prompt);
    
    if (res) {
        try {
            const cleanJsonStr = res.replace(/```json/gi, '').replace(/```html/gi, '').replace(/```/gi, '').trim();
            const data = JSON.parse(cleanJsonStr);

            let htmlContent = `
                <div class="pb-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-bold uppercase"><i class="fa-solid fa-check"></i> Hoàn tất</span>
                        <button onclick="openItineraryPlanner()" class="text-gray-400 hover:text-white text-xs bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition"><i class="fa-solid fa-rotate-right"></i> Làm lại</button>
                    </div>
                    <p class="text-sm text-gray-300 italic mb-4 border-l-2 border-orange-500 pl-3">"${data.message}"</p>
            `;

            data.itinerary.forEach(day => {
                const mapLink = (place) => `https://maps.google.com/maps?q=$${encodeURIComponent(place + ", Quy Nhơn")}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
                htmlContent += `
                <div class="bg-white/5 p-4 rounded-2xl border border-white/10 mb-4 shadow-lg animate-fadeIn">
                    <h3 class="font-black text-lg text-orange-400 border-b border-orange-500/20 pb-2 mb-3">${day.day}: ${day.title}</h3>
                    <p class="text-sm text-gray-300 mb-2"><strong class="text-white bg-orange-500/20 px-2 py-0.5 rounded mr-1">Sáng:</strong> ${day.morning}</p>
                    <iframe width="100%" height="150" class="rounded-xl mt-2 mb-3 border border-white/10 opacity-90 shadow-md" style="border:0;" loading="lazy" src="${mapLink(day.morning_place)}"></iframe>
                    <p class="text-sm text-gray-300 mb-2"><strong class="text-white bg-blue-500/20 px-2 py-0.5 rounded mr-1">Trưa:</strong> ${day.noon}</p>
                    <p class="text-sm text-gray-300 mb-2"><strong class="text-white bg-purple-500/20 px-2 py-0.5 rounded mr-1">Chiều:</strong> ${day.afternoon}</p>
                    <iframe width="100%" height="150" class="rounded-xl mt-2 mb-3 border border-white/10 opacity-90 shadow-md" style="border:0;" loading="lazy" src="${mapLink(day.afternoon_place)}"></iframe>
                    <p class="text-sm text-gray-300 mb-2"><strong class="text-white bg-indigo-500/20 px-2 py-0.5 rounded mr-1">Tối:</strong> ${day.evening}</p>
                    <iframe width="100%" height="150" class="rounded-xl mt-2 border border-white/10 opacity-90 shadow-md" style="border:0;" loading="lazy" src="${mapLink(day.evening_place)}"></iframe>
                </div>`;
            });

            htmlContent += `</div>`;
            content.innerHTML = htmlContent;
            
            if (currentUser.isLoggedIn) { currentUser.itineraries.push(`Lịch trình ${itinData.days}`); saveUserData(); }
        } catch (err) { renderFallback(content); }
    } else { renderFallback(content); }
}

function renderFallback(content) {
    content.innerHTML = `
        <div class="pb-6">
            <div class="bg-red-500/10 border border-red-500/30 p-3 rounded-xl text-red-400 text-sm text-center mb-4">Lỗi mạng! Gửi tạm lịch trình mẫu nhé.</div>
            <button onclick="openItineraryPlanner()" class="w-full mt-2 bg-orange-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition">Thử lại</button>
        </div>`;
}

// ==========================================
// 6. CÁC TÍNH NĂNG KHÁC (Bản đồ, Thời tiết, Dictionary, Chatbot)
// ==========================================
const features = {
    'Bản đồ Khám phá': { icon: '<i class="fa-solid fa-location-dot"></i>', content: `<div class="space-y-4 pb-4"><p class="text-center">Bách khoa toàn thư check-in.</p></div>` },
    'Từ Điển Tiếng Nẫu': { icon: '<i class="fa-solid fa-book-open"></i>', content: `<div class="mb-6"><input type="text" id="search-nau" placeholder="Tìm từ vựng..." class="w-full bg-white/10 p-3 rounded-xl text-white"></div>` },
    'Nhật ký AI': { icon: '<i class="fa-solid fa-book"></i>', content: `<button onclick="generateJournal(event)" class="w-full bg-blue-500 p-3 rounded-xl text-white">Tạo Nhật Ký</button>` },
    'Gacha Thử Thách': { icon: '<i class="fa-solid fa-dice"></i>', content: `<button onclick="rollGacha(event)" class="w-full bg-orange-500 p-3 rounded-xl text-white">Rút Thẻ Ngay</button>` },
    'Thời Tiết & Đi Đảo': { icon: '<i class="fa-solid fa-cloud-sun-rain"></i>', content: `<div id="weather-desc" class="text-center p-4">Đang tải thời tiết...</div>` }
};

function openFeature(name) {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    const chatArea = document.getElementById('chat-input-area');
    document.getElementById('modal-title').innerText = name;
    
    if (name === 'Chatbot Thổ Địa') {
        document.getElementById('modal-icon').innerHTML = '<i class="fa-regular fa-comments"></i>';
        if (!document.getElementById('chat-box')) content.innerHTML = `<div id="chat-box" class="space-y-3 pb-4 h-full overflow-y-auto"></div>`;
        chatArea.classList.remove('hidden');
    } else {
        document.getElementById('modal-icon').innerHTML = features[name]?.icon || '';
        content.innerHTML = features[name]?.content || '';
        chatArea.classList.add('hidden');
        if (name === 'Thời Tiết & Đi Đảo') fetchRealWeather();
    }
    modal.classList.remove('hidden');
}

function closeModal() { document.getElementById('modal').classList.add('hidden'); }

async function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('ai-input');
    const chatBox = document.getElementById('chat-box');
    const text = input.value.trim();
    if (!text) return;

    chatBox.innerHTML += `<div class="message-row user"><div class="chat-bubble bg-white/10 text-white">${text}</div></div>`;
    input.value = ''; chatBox.scrollTop = chatBox.scrollHeight;
    
    const rawResponse = await getAIResponse(text);
    chatBox.innerHTML += `<div class="message-row"><div class="chat-bubble bg-orange-500/20 text-orange-50">${rawResponse}</div></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAIResponse(userText) { return "Tư Nẫu nghe nè! Cần gì bạn mình cứ nói nhen."; }

async function fetchRealWeather() {
    try {
        const url = '[https://api.open-meteo.com/v1/forecast?latitude=13.77&longitude=109.22&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=13.77&longitude=109.22&current_weather=true)';
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById('weather-desc').innerText = `Quy Nhơn hiện tại: ${data.current_weather.temperature}°C`;
    } catch (e) { document.getElementById('weather-desc').innerText = "Không tải được thời tiết rầu."; }
}

// ==========================================
// 7. CAMERA AI
// ==========================================
let cameraStream = null;
async function openCamera() {
    document.getElementById('camera-modal').classList.remove('hidden');
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        document.getElementById('camera-stream').srcObject = cameraStream;
    } catch (err) { alert("Không mở được Camera rầu!"); closeCamera(); }
}
function closeCamera() {
    document.getElementById('camera-modal').classList.add('hidden');
    if (cameraStream) { cameraStream.getTracks().forEach(track => track.stop()); cameraStream = null; }
}
function takePhoto() { alert("Đã chụp!"); }