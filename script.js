document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = 'Lütfen tüm alanları doldurun.';
        formMessage.style.color = 'red';
        return;
    }
    // Basit e-posta kontrolü
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        formMessage.textContent = 'Geçerli bir e-posta adresi girin.';
        formMessage.style.color = 'red';
        return;
    }
    formMessage.textContent = 'Mesajınız başarıyla gönderildi!';
    formMessage.style.color = 'green';
    document.getElementById('contactForm').reset();
});

// Sayfa geçişleri için script
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        sections.forEach(sec => {
            if (sec.id === sectionId) {
                sec.style.display = '';
            } else {
                sec.style.display = 'none';
            }
        });
        // Aktif link vurgusu
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Ürünler için rastgele 100 ilaç ismi oluştur ve sayfaya ekle (görselli, fiyatlı, kısa bilgi ve butonlu)
function rastgeleIlacIsmi() {
    const isimler1 = ["Paracet", "Aspirin", "Nurofen", "Dolorex", "Vermidon", "Augmentin", "Klavunat", "Majezik", "Arveles", "Minoset", "Tylol", "Aferin", "Gripin", "Cataflam", "Muscoflex", "Voltaren", "Dikloron", "Biteral", "Zyrtec", "Claritin", "Allegra", "Otrivine", "Rennie", "Gaviscon", "Nexium", "Pantpas", "Lustral", "Cipralex", "Xanax", "Atarax", "Motilium", "Buscopan", "Imodium", "Enterogermina", "Bepanthen", "Madecassol", "Fucidin", "Hametan", "Sudocrem", "Desitin", "Mustela", "Sebamed", "Bioderma", "La Roche", "Avene", "Eucerin", "Vichy", "Uriage", "Dermovate", "Elidel"];
    const isimler2 = [" Forte", " Plus", " 500mg", " 100mg", " 200mg", " 20mg", " 50mg", " 10mg", " 5mg", " Junior", " Extra", " Rapid", " Cold", " Hot", " Duo", " Max", " Active", " Advance", " Night", " Day", " Gel", " Cream", " Syrup", " Tablet", " Drops", " Spray", " Ointment", " Solution", " Suspension", " Granule", " Film Tablet", " Effervesan", " Kapsül", " Şurup", " Çocuk", " Yetişkin", " Pediatrik", " Plus C", " D3", " Zinc", " Omega", " Iron", " Calcium", " Magnezyum", " B12", " Multivitamin", " Herbal", " Natural", " Complex"];
    const isim1 = isimler1[Math.floor(Math.random() * isimler1.length)];
    const isim2 = isimler2[Math.floor(Math.random() * isimler2.length)];
    return isim1 + isim2;
}
// İlaç ismine göre gerçekçi görsel URL eşlemesi
const ilacGorselMap = {
  'Paracet': 'https://www.ilacrehberi.com/media/ilac/ilac_Parol_500mg_Tablet.jpg',
  'Aspirin': 'https://www.ilacrehberi.com/media/ilac/ilac_Aspirin_100mg_Tablet.jpg',
  'Nurofen': 'https://www.ilacrehberi.com/media/ilac/ilac_Nurofen_200mg_Tablet.jpg',
  'Dolorex': 'https://www.ilacrehberi.com/media/ilac/ilac_Dolorex_50mg_Tablet.jpg',
  'Vermidon': 'https://www.ilacrehberi.com/media/ilac/ilac_Vermidon_Tablet.jpg',
  'Augmentin': 'https://www.ilacrehberi.com/media/ilac/ilac_Augmentin_625mg_Tablet.jpg',
  'Klavunat': 'https://www.ilacrehberi.com/media/ilac/ilac_Klavunat_625mg_Tablet.jpg',
  'Majezik': 'https://www.ilacrehberi.com/media/ilac/ilac_Majezik_100mg_Tablet.jpg',
  'Arveles': 'https://www.ilacrehberi.com/media/ilac/ilac_Arveles_25mg_Tablet.jpg',
  'Minoset': 'https://www.ilacrehberi.com/media/ilac/ilac_Minoset_500mg_Tablet.jpg',
  'Tylol': 'https://www.ilacrehberi.com/media/ilac/ilac_Tylol_500mg_Tablet.jpg',
  'Aferin': 'https://www.ilacrehberi.com/media/ilac/ilac_Aferin_Forte_Tablet.jpg',
  'Gripin': 'https://www.ilacrehberi.com/media/ilac/ilac_Gripin_Tablet.jpg',
  'Cataflam': 'https://www.ilacrehberi.com/media/ilac/ilac_Cataflam_50mg_Tablet.jpg',
  'Muscoflex': 'https://www.ilacrehberi.com/media/ilac/ilac_Muscoflex_Tablet.jpg',
  'Voltaren': 'https://www.ilacrehberi.com/media/ilac/ilac_Voltaren_50mg_Tablet.jpg',
  'Dikloron': 'https://www.ilacrehberi.com/media/ilac/ilac_Dikloron_50mg_Tablet.jpg',
  'Biteral': 'https://www.ilacrehberi.com/media/ilac/ilac_Biteral_250mg_Tablet.jpg',
  'Zyrtec': 'https://www.ilacrehberi.com/media/ilac/ilac_Zyrtec_10mg_Tablet.jpg',
  'Claritin': 'https://www.ilacrehberi.com/media/ilac/ilac_Claritin_10mg_Tablet.jpg',
  'Allegra': 'https://www.ilacrehberi.com/media/ilac/ilac_Allegra_120mg_Tablet.jpg',
  'Otrivine': 'https://www.ilacrehberi.com/media/ilac/ilac_Otrivine_Nazal_Sprey.jpg',
  'Rennie': 'https://www.ilacrehberi.com/media/ilac/ilac_Rennie_Tablet.jpg',
  'Gaviscon': 'https://www.ilacrehberi.com/media/ilac/ilac_Gaviscon_Sus.jpg',
  'Nexium': 'https://www.ilacrehberi.com/media/ilac/ilac_Nexium_40mg_Tablet.jpg',
  'Pantpas': 'https://www.ilacrehberi.com/media/ilac/ilac_Pantpas_40mg_Tablet.jpg',
  'Lustral': 'https://www.ilacrehberi.com/media/ilac/ilac_Lustral_50mg_Tablet.jpg',
  'Cipralex': 'https://www.ilacrehberi.com/media/ilac/ilac_Cipralex_10mg_Tablet.jpg',
  'Xanax': 'https://www.ilacrehberi.com/media/ilac/ilac_Xanax_0.5mg_Tablet.jpg',
  'Atarax': 'https://www.ilacrehberi.com/media/ilac/ilac_Atarax_25mg_Tablet.jpg',
  'Motilium': 'https://www.ilacrehberi.com/media/ilac/ilac_Motilium_10mg_Tablet.jpg',
  'Buscopan': 'https://www.ilacrehberi.com/media/ilac/ilac_Buscopan_10mg_Tablet.jpg',
  'Imodium': 'https://www.ilacrehberi.com/media/ilac/ilac_Imodium_2mg_Tablet.jpg',
  'Enterogermina': 'https://www.ilacrehberi.com/media/ilac/ilac_Enterogermina_Sus.jpg',
  'Bepanthen': 'https://www.ilacrehberi.com/media/ilac/ilac_Bepanthen_Krem.jpg',
  'Madecassol': 'https://www.ilacrehberi.com/media/ilac/ilac_Madecassol_Krem.jpg',
  'Fucidin': 'https://www.ilacrehberi.com/media/ilac/ilac_Fucidin_Krem.jpg',
  'Hametan': 'https://www.ilacrehberi.com/media/ilac/ilac_Hametan_Krem.jpg',
  'Sudocrem': 'https://www.ilacrehberi.com/media/ilac/ilac_Sudocrem_Krem.jpg',
  'Desitin': 'https://www.ilacrehberi.com/media/ilac/ilac_Desitin_Krem.jpg',
  'Mustela': 'https://www.ilacrehberi.com/media/ilac/ilac_Mustela_Bebe_Krem.jpg',
  'Sebamed': 'https://www.ilacrehberi.com/media/ilac/ilac_Sebamed_Baby_Krem.jpg',
  'Bioderma': 'https://www.ilacrehberi.com/media/ilac/ilac_Bioderma_Atoderm_Krem.jpg',
  'La Roche': 'https://www.ilacrehberi.com/media/ilac/ilac_LaRoche_Posay_Krem.jpg',
  'Avene': 'https://www.ilacrehberi.com/media/ilac/ilac_Avene_Cicalfate_Krem.jpg',
  'Eucerin': 'https://www.ilacrehberi.com/media/ilac/ilac_Eucerin_Ph5_Krem.jpg',
  'Vichy': 'https://www.ilacrehberi.com/media/ilac/ilac_Vichy_Normaderm_Krem.jpg',
  'Uriage': 'https://www.ilacrehberi.com/media/ilac/ilac_Uriage_Bariederm_Krem.jpg',
  'Dermovate': 'https://www.ilacrehberi.com/media/ilac/ilac_Dermovate_Krem.jpg',
  'Elidel': 'https://www.ilacrehberi.com/media/ilac/ilac_Elidel_Krem.jpg'
};

function rastgeleIlacGorseli(isim) {
    // İlaç isminin başı eşleşiyorsa gerçek foto, yoksa Unsplash
    const anahtar = Object.keys(ilacGorselMap).find(k => isim.startsWith(k));
    if (anahtar) return ilacGorselMap[anahtar];
    // Yedek: Unsplash random
    const keywords = ['medicine', 'pharmacy', 'drug', 'pills', 'capsule', 'vitamin', 'health', 'medical', 'hospital', 'pharmaceutical', 'tablet', 'bottle', 'doctor', 'clinic', 'prescription'];
    let kw = isim.split(' ')[0].toLowerCase();
    if (kw.length < 4) kw = keywords[Math.floor(Math.random() * keywords.length)];
    return `https://source.unsplash.com/400x140/?${encodeURIComponent(kw)},medicine&sig=${Math.floor(Math.random()*10000)}`;
}

function rastgeleFiyat() {
    return (Math.floor(Math.random() * 451) + 50) + ' TL';
}
function rastgeleBilgiKisa() {
    const bilgiler = [
        'Ateş ve ağrı kesici.',
        'Bağışıklık destekleyici.',
        'Çocuklar için uygundur.',
        'Reçetesiz satılır.',
        'Yetişkinler içindir.',
        'Günde 1-2 kez kullanılır.',
        'Vitamin ve mineral desteği.',
        'Serin yerde saklayınız.',
        'Doktor tavsiyesiyle kullanınız.',
        'Yan etkiler için prospektüsüne bakınız.'
    ];
    return bilgiler[Math.floor(Math.random() * bilgiler.length)];
}

function urunlerOlustur() {
    const urunlerDiv = document.getElementById('urunler-listesi');
    if (!urunlerDiv) return;
    let html = '';
    for (let i = 1; i <= 100; i++) {
        const isim = rastgeleIlacIsmi();
        const gorsel = rastgeleIlacGorseli(isim);
        const fiyat = rastgeleFiyat();
        const bilgi = rastgeleBilgiKisa();
        html += `<div class="urun-kart">
            <img src="${gorsel}" alt="${isim}" class="urun-kart-img" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80';">
            <span class="urun-isim">${isim}</span>
            <span class="urun-kart-info">${bilgi}</span>
            <span class="urun-kart-fiyat">${fiyat}</span>
            <div class="urun-kart-btns">
                <button type="button" class="urun-favori-btn">❤</button>
                <button type="button" class="urun-sepet-btn">Sepet</button>
            </div>
        </div>`;
    }
    urunlerDiv.innerHTML = html;
    // Buton eventlerini her oluşturma sonrası bağla
    updateUrunKartBtnEvents();
}

// Sayfa yüklendiğinde ürünler oluşturulsun
window.addEventListener('DOMContentLoaded', function() {
    urunlerOlustur();
});

// Ürün detay sayfası için dinamik olarak section oluşturma ve gösterme
function rastgeleIlacGorseli() {
    const keywords = ["medicine", "pharmacy", "pills", "health", "drug", "capsule", "tablet", "vitamin"];
    const kw = keywords[Math.floor(Math.random() * keywords.length)];
    return `https://source.unsplash.com/400x260/?${kw}`;
}

function rastgeleFiyat() {
    return (Math.floor(Math.random() * 451) + 50) + ' TL';
}

function rastgeleBilgi() {
    const bilgiler = [
        'Bu ilaç ateş ve ağrı kesici olarak kullanılır. Doktor tavsiyesiyle kullanılmalıdır.',
        'Yan etkiler için prospektüsüne bakınız. Çocuklardan uzak tutunuz.',
        'Serin ve kuru yerde saklayınız. Hamileler için doktora danışınız.',
        'Reçetesiz satılabilir. Yetişkinler içindir.',
        'Günde 1-2 kez kullanılır. Aç veya tok karnına alınabilir.'
    ];
    return bilgiler[Math.floor(Math.random() * bilgiler.length)];
}

function urunDetaySayfasiOlustur(isim) {
    let detay = document.getElementById('urun-detay-sayfa');
    if (detay) detay.remove();
    const bilgi = rastgeleBilgi();
    const fiyat = rastgeleFiyat();
    const gorsel = rastgeleIlacGorseli();
    detay = document.createElement('section');
    detay.id = 'urun-detay-sayfa';
    detay.className = 'page-section urun-detay-section';
    detay.innerHTML = `
        <button class="urun-detay-geri">&larr; Ürünler</button>
        <div class="urun-detay-icerik">
            <img src="${gorsel}" alt="${isim}" class="urun-detay-gorsel">
            <div class="urun-detay-bilgi">
                <h2>${isim}</h2>
                <p class="urun-detay-info">${bilgi}</p>
                <div class="urun-detay-fiyat">Fiyat: <span>${fiyat}</span></div>
                <div class="urun-detay-btns">
                    <button class="urun-favori-btn">Favorilere Ekle</button>
                    <button class="urun-sepet-btn">Sepete Ekle</button>
                </div>
            </div>
        </div>
    `;
    document.querySelector('main').appendChild(detay);
    document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
    detay.style.display = '';
    detay.querySelector('.urun-detay-geri').onclick = function() {
        detay.remove();
        document.getElementById('urunler').style.display = '';
    };
    detay.querySelector('.urun-favori-btn').onclick = function() {
        let favoriler = JSON.parse(localStorage.getItem('favoriler') || '[]');
        if (!favoriler.includes(isim)) favoriler.push(isim);
        localStorage.setItem('favoriler', JSON.stringify(favoriler));
        this.textContent = 'Favorilere Eklendi';
        setTimeout(() => this.textContent = 'Favorilere Ekle', 1200);
    };
    detay.querySelector('.urun-sepet-btn').onclick = function() {
        let sepet = JSON.parse(localStorage.getItem('sepet') || '[]');
        sepet.push(isim);
        localStorage.setItem('sepet', JSON.stringify(sepet));
        this.textContent = 'Sepete Eklendi';
        setTimeout(() => this.textContent = 'Sepete Ekle', 1200);
    };
}

const urunlerListesi = document.getElementById('urunler-listesi');
if (urunlerListesi) {
    urunlerListesi.addEventListener('click', function(e) {
        const kart = e.target.closest('.urun-kart');
        if (!kart) return;
        const isim = kart.querySelector('.urun-isim').textContent;
        urunDetaySayfasiOlustur(isim);
    });
}

document.querySelectorAll('.main-contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Tüm sectionları gizle
        document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
        // Hakkımızda & İletişim section'unu göster
        document.getElementById('info').style.display = '';
        // Navbar aktiflik güncelle
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[data-section="info"]').classList.add('active');
    });
});

// Tema değiştirici toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    function setTheme(dark) {
        if (dark) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    }
    // İlk yüklemede tema kontrolü
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setTheme(true);
    else setTheme(false);
    themeToggle.addEventListener('click', function() {
        setTheme(!document.body.classList.contains('dark-theme'));
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const loginModal = document.getElementById('login-modal');
  const loginModalClose = document.getElementById('login-modal-close');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('login-error');
  const guestLoginLink = document.getElementById('guest-login-link');
  const registerLink = document.getElementById('register-link');

  function setLoginState(loggedIn, username, isGuest) {
    if (loggedIn) {
      if (loginBtn) loginBtn.style.display = 'none';
      var profileWrapper = document.getElementById('profile-menu-wrapper');
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      localStorage.setItem('isLoggedIn', '1');
      if (username) localStorage.setItem('username', username);
      if (isGuest) {
        localStorage.setItem('isGuest', '1');
      } else {
        localStorage.removeItem('isGuest');
      }
    } else {
      if (loginBtn) loginBtn.style.display = '';
      var profileWrapper = document.getElementById('profile-menu-wrapper');
      if (profileWrapper) profileWrapper.style.display = 'none';
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('isGuest');
    }
  }

  // Misafir olarak devam et
  if (guestLoginLink) {
    guestLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      setLoginState(true, 'Misafir', true);
      if (loginModal) loginModal.style.display = 'none';
      var profileWrapper = document.getElementById('profile-menu-wrapper');
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      if (loginBtn) loginBtn.style.display = 'none';
    });
  }

  // Giriş Yap butonuna tıklanınca modalı aç
  if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      loginModal.style.display = 'flex';
    });
  }
  // Modal kapatma butonu
  if (loginModalClose && loginModal) {
    loginModalClose.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });
  }
  // Modal dışında bir yere tıklanınca modalı kapat
  if (loginModal) {
    loginModal.addEventListener('click', function(e) {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  }

  // Kayıt modalı açma
  if (registerLink) {
    registerLink.addEventListener('click', function(e) {
      e.preventDefault();
      // Basit kayıt formu modalı oluştur
      if (document.getElementById('register-modal')) return;
      const modal = document.createElement('div');
      modal.id = 'register-modal';
      modal.className = 'login-modal';
      modal.style.display = 'flex';
      modal.innerHTML = `
        <div class="login-modal-content">
          <button class="login-modal-close" id="register-modal-close">&times;</button>
          <div class="login-modal-header">
            <span class="login-modal-icon">📝</span>
            <h2>Kayıt Ol</h2>
            <p>Yeni bir hesap oluşturun.</p>
          </div>
          <form id="registerForm" class="login-form">
            <label for="register-username">Kullanıcı Adı</label>
            <input type="text" id="register-username" name="username" placeholder="Kullanıcı adınızı girin" required autocomplete="username">
            <label for="register-password">Şifre</label>
            <input type="password" id="register-password" name="password" placeholder="Şifre belirleyin" required autocomplete="new-password">
            <button type="submit" class="login-submit-btn">Kayıt Ol</button>
            <div id="register-error" class="login-error"></div>
          </form>
        </div>
      `;
      document.body.appendChild(modal);
      // Kapatma
      document.getElementById('register-modal-close').onclick = function() {
        modal.remove();
      };
      modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
      });
      // Kayıt işlemi
      document.getElementById('registerForm').onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value;
        const errorDiv = document.getElementById('register-error');
        if (!username || !password) {
          errorDiv.textContent = 'Tüm alanları doldurun.';
          return;
        }
        // Kullanıcıları localStorage'da tut
        let users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[username]) {
          errorDiv.textContent = 'Bu kullanıcı adı zaten kayıtlı.';
          return;
        }
        users[username] = { password };
        localStorage.setItem('users', JSON.stringify(users));
        errorDiv.style.color = 'green';
        errorDiv.textContent = 'Kayıt başarılı! Giriş yapabilirsiniz.';
        setTimeout(() => { modal.remove(); }, 1200);
      };
    });
  }

  // Giriş formu ile giriş işlemi
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
      const errorDiv = document.getElementById('login-error');
      let users = JSON.parse(localStorage.getItem('users') || '{}');
      if (!users[username] || users[username].password !== password) {
        errorDiv.textContent = 'Kullanıcı adı veya şifre hatalı.';
        return;
      }
      // Giriş başarılıysa
      setLoginState(true, username, false);
      if (loginModal) loginModal.style.display = 'none';
      if (loginBtn) loginBtn.style.display = 'none';
      var profileWrapper = document.getElementById('profile-menu-wrapper');
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      errorDiv.textContent = '';
    });
  }
});

// Sayfa yüklendiğinde login durumunu kontrol et ve profil/giriş butonunu ayarla
window.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const profileWrapper = document.getElementById('profile-menu-wrapper');
  const guestLoginLink = document.getElementById('guest-login-link');
  const loginModal = document.getElementById('login-modal');
  const profileLogout = document.getElementById('profile-logout');

  // Butonları her zaman doğru başlat
  if (loginBtn) loginBtn.style.display = '';
  if (profileWrapper) profileWrapper.style.display = 'none';

  function setLoginState(loggedIn, username, isGuest) {
    if (loggedIn && !isGuest) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      localStorage.setItem('isLoggedIn', '1');
      if (username) localStorage.setItem('username', username);
      localStorage.removeItem('isGuest');
    } else if (isGuest) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      localStorage.setItem('isGuest', '1');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
    } else {
      if (loginBtn) loginBtn.style.display = '';
      if (profileWrapper) profileWrapper.style.display = 'none';
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('isGuest');
    }
  }

  // Sayfa yüklendiğinde misafir durumu sıfırlansın
  localStorage.removeItem('isGuest');

  // Sayfa yüklendiğinde login durumunu kontrol et
  (function checkLoginStateOnLoad() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === '1';
    if (isLoggedIn) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
    } else {
      if (loginBtn) loginBtn.style.display = '';
      if (profileWrapper) profileWrapper.style.display = 'none';
    }
  })();

  // Misafir olarak devam et
  if (guestLoginLink) {
    guestLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      setLoginState(false, '', true);
      if (loginModal) loginModal.style.display = 'none';
      if (profileWrapper) profileWrapper.style.display = 'inline-block';
      if (loginBtn) loginBtn.style.display = 'none';
    });
  }

  // Çıkış yap fonksiyonu hem kullanıcı hem misafir için çalışsın
  if (profileLogout) {
    profileLogout.onclick = function() {
      setLoginState(false);
      // Menü kapansın
      const profileMenu = document.getElementById('profile-menu');
      if (profileMenu) profileMenu.classList.remove('open');
      if (loginBtn) loginBtn.style.display = '';
      if (profileWrapper) profileWrapper.style.display = 'none';
    };
  }
});

// Profil menüsü açılır panel olarak çalışsın
const profileBtn = document.getElementById('profile-btn');
const profileMenu = document.getElementById('profile-menu');
if (profileBtn && profileMenu) {
  profileBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = profileMenu.classList.contains('open');
    document.querySelectorAll('.profile-menu.open').forEach(m => m.classList.remove('open'));
    if (!isOpen) {
      profileMenu.classList.add('open');
      profileBtn.setAttribute('aria-expanded', 'true');
      profileMenu.style.display = 'block';
    } else {
      profileMenu.classList.remove('open');
      profileBtn.setAttribute('aria-expanded', 'false');
      profileMenu.style.display = 'none';
    }
  });
  // DÜZELTME: Panel açıkken panelin kendisine tıklanırsa kapanmasın
  profileMenu.addEventListener('mousedown', function(e) {
    e.stopPropagation();
  });
  document.addEventListener('mousedown', function(e) {
    if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
      profileMenu.classList.remove('open');
      profileBtn.setAttribute('aria-expanded', 'false');
      profileMenu.style.display = 'none';
    }
  });
}

// Kullanıcıya özel anahtar üretici
function getCurrentUserKey(suffix) {
    // Giriş yapan kullanıcıyı veya misafir id'sini localStorage'dan al
    let user = localStorage.getItem('currentUser');
    if (!user) user = 'guest';
    return suffix + '_' + user;
}

// Sepet ve favori işlemlerinde anahtarlar artık kullanıcıya özel
// showListModal, updateProfileCounts, updateUrunKartBtnEvents fonksiyonlarında anahtarlar güncellendi

function showListModal(type) {
    const title = type === 'favoriler' ? 'Favorilerim' : 'Sepetim';
    const key = getCurrentUserKey(type);
    let items = JSON.parse(localStorage.getItem(key) || '[]');
    // Ürünler sayfasındaki fiyatları eşleştir
    let fiyatMap = {};
    document.querySelectorAll('.urun-kart').forEach(card => {
        const isim = card.querySelector('.urun-isim')?.textContent;
        const fiyat = card.querySelector('.urun-kart-fiyat')?.textContent;
        if (isim && fiyat) fiyatMap[isim] = fiyat;
    });
    let toplamFiyat = 0;
    let listHtml = '';
    if (items.length > 0) {
      listHtml = items.map((i, idx) => {
        let fiyatText = fiyatMap[i] || '';
        let fiyat = parseInt(fiyatText.replace(/[^0-9]/g, ''));
        if (!isNaN(fiyat)) toplamFiyat += fiyat;
        return `<li style='display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e0f7fa;'>
          <span style='flex:1;'>${i}</span>
          <span style='color:#388e3c;font-weight:600;margin:0 12px 0 8px;'>${fiyatText}</span>
          <button class='list-remove-btn' data-idx='${idx}' style='background:#ffebee;color:#b71c1c;border:none;border-radius:6px;padding:4px 12px;font-size:0.98rem;cursor:pointer;transition:background 0.18s;'>Kaldır</button>
        </li>`;
      }).join('');
    } else {
      listHtml = `<li style='padding:18px 0;text-align:center;color:#888;'>Hiç ürün yok.</li>`;
    }
    // Modalı oluştur
    let modal = document.getElementById('list-modal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'list-modal';
    modal.className = 'login-modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
      <div class="login-modal-content" style="min-width:340px;max-width:98vw;">
        <button class="login-modal-close" id="list-modal-close">&times;</button>
        <div class="login-modal-header" style="margin-bottom:10px;">
          <span class="login-modal-icon">${type === 'favoriler' ? '❤' : '🛒'}</span>
          <h2 style="margin-bottom:0;">${title}</h2>
        </div>
        <ul style="width:100%;padding:0 0 10px 0;list-style:none;max-height:260px;overflow:auto;">
          ${listHtml}
        </ul>
        <div style="width:100%;display:flex;justify-content:flex-end;align-items:center;margin-top:8px;">
          <span style="font-weight:600;font-size:1.08rem;color:#388e3c;">${items.length > 0 && type === 'sepet' ? 'Toplam: ' + toplamFiyat + ' TL' : ''}</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('list-modal-close').onclick = function() { modal.remove(); };
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
    // Kaldırma butonları
    modal.querySelectorAll('.list-remove-btn').forEach(btn => {
      btn.onclick = function() {
        const idx = parseInt(this.getAttribute('data-idx'));
        let arr = JSON.parse(localStorage.getItem(key) || '[]');
        arr.splice(idx, 1);
        localStorage.setItem(key, JSON.stringify(arr));
        modal.remove();
        showListModal(type);
        updateProfileCounts();
      };
    });
}

// Favorilerim ve Sepetim butonlarına tıklama
const favBtn = document.getElementById('profile-favorites');
if (favBtn) favBtn.onclick = function(e) { e.preventDefault(); showListModal('favoriler'); };
const cartBtn = document.getElementById('profile-cart');
if (cartBtn) cartBtn.onclick = function(e) { e.preventDefault(); showListModal('sepet'); };

// Profil menüsünde favori ve sepet sayısı göstergesi
function updateProfileCounts() {
    const favKey = getCurrentUserKey('favoriler');
    const cartKey = getCurrentUserKey('sepet');
    let favs = JSON.parse(localStorage.getItem(favKey) || '[]');
    let cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    // Profil menüsündeki rozetleri güncelle
    const favBtn = document.getElementById('profile-favorites');
    const cartBtn = document.getElementById('profile-cart');
    // Önce eski rozetleri kaldır
    if (favBtn) {
        let badge = favBtn.querySelector('.profile-badge');
        if (badge) badge.remove();
        if (favs.length > 0) {
            badge = document.createElement('span');
            badge.className = 'profile-badge';
            badge.textContent = favs.length;
            favBtn.appendChild(badge);
        }
    }
    if (cartBtn) {
        let badge = cartBtn.querySelector('.profile-badge');
        if (badge) badge.remove();
        if (cart.length > 0) {
            badge = document.createElement('span');
            badge.className = 'profile-badge';
            badge.textContent = cart.length;
            cartBtn.appendChild(badge);
        }
    }
}

// Favori/sepet ekleme fonksiyonlarında ve sayfa yüklenince güncelle
function updateUrunKartBtnEvents() {
    document.querySelectorAll('.urun-favori-btn').forEach(btn => {
        btn.onclick = function() {
            const favKey = getCurrentUserKey('favoriler');
            let favs = JSON.parse(localStorage.getItem(favKey) || '[]');
            const isim = this.closest('.urun-kart').querySelector('.urun-isim').textContent;
            if (!favs.includes(isim)) {
                favs.push(isim);
                localStorage.setItem(favKey, JSON.stringify(favs));
            }
            updateProfileCounts();
            this.textContent = 'Favorilere Eklendi';
            this.style.background = '#ffe0e0';
            setTimeout(() => { this.textContent = 'Favori'; this.style.background = ''; }, 900);
        };
    });
    document.querySelectorAll('.urun-sepet-btn').forEach(btn => {
        btn.onclick = function() {
            const cartKey = getCurrentUserKey('sepet');
            let cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
            const isim = this.closest('.urun-kart').querySelector('.urun-isim').textContent;
            cart.push(isim);
            localStorage.setItem(cartKey, JSON.stringify(cart));
            updateProfileCounts();
            this.textContent = 'Sepete Eklendi';
            this.style.background = '#e0f7fa';
            setTimeout(() => { this.textContent = 'Sepet'; this.style.background = ''; }, 900);
        };
    });
}

window.addEventListener('DOMContentLoaded', updateProfileCounts);
// Favori/sepet modalı açıldığında da güncelle (ürün silme eklenirse de çalışır)
var favBtnProfile = document.getElementById('profile-favorites');
if (favBtnProfile) favBtnProfile.onclick = function(e) { e.preventDefault(); showListModal('favoriler'); updateProfileCounts(); };
var cartBtnProfile = document.getElementById('profile-cart');
if (cartBtnProfile) cartBtnProfile.onclick = function(e) { e.preventDefault(); showListModal('sepet'); updateProfileCounts(); };


// Kullanıcı giriş/çıkış işlemlerinde currentUser anahtarını güncelle
// Örneğin girişte:
// localStorage.setItem('currentUser', kullaniciAdi);
// Çıkışta:
// localStorage.setItem('currentUser', 'guest');

// Mobil menü açma/kapama ve tıklama eventleri
function setupMobileSidebar() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const closeBtn = document.getElementById('mobile-sidebar-close');
    if (!menuBtn || !sidebar || !overlay || !closeBtn) return;
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    menuBtn.onclick = openSidebar;
    closeBtn.onclick = closeSidebar;
    overlay.onclick = closeSidebar;
    // Menüden bir linke tıklanınca sidebar kapansın
    sidebar.querySelectorAll('a,button').forEach(el => {
        el.onclick = function() {
            closeSidebar();
        };
    });
    // Profil işlemleri mobilde de çalışsın
    document.getElementById('mobile-profile-favorites').onclick = function(e) {
        e.preventDefault();
        showListModal('favoriler');
    };
    document.getElementById('mobile-profile-cart').onclick = function(e) {
        e.preventDefault();
        showListModal('sepet');
    };
    document.getElementById('mobile-profile-logout').onclick = function(e) {
        e.preventDefault();
        // Çıkış işlemi
        if (typeof logoutUser === 'function') logoutUser();
        closeSidebar();
    };
}
window.addEventListener('DOMContentLoaded', setupMobileSidebar);

document.addEventListener('DOMContentLoaded', function() {
    var urunlerFavorilerimBtn = document.getElementById('urunler-favorilerim-btn');
    var profileBtn = document.getElementById('profile-btn');
    var profileMenu = document.getElementById('profile-menu');
    var profileFavorites = document.getElementById('profile-favorites');
    if (urunlerFavorilerimBtn && profileBtn && profileMenu && profileFavorites) {
        urunlerFavorilerimBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Profil menüsü kapalıysa aç
            if (profileMenu.style.display === 'none' || profileMenu.style.display === '') {
                profileBtn.click();
                setTimeout(function() {
                    profileFavorites.click();
                }, 150);
            } else {
                profileFavorites.click();
            }
        });
    }
});
