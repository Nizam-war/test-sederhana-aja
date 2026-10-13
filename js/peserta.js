/**
 * MODUL PESERTA & BIODATA - JAVASCRIPT CONTROLLER
 * Sistem Pengelolaan Event dan Workshop (Individu D)
 * Cakupan: Pengelolaan profil peserta event, asal instansi/kampus, nomor kontak, dan email aktif.
 */

// Storage Keys
const STORAGE_KEY_PESERTA = 'master_peserta_data';
const STORAGE_KEY_EVENTS = 'master_events_data';

// Data Sampel Awal Peserta & Biodata
const initialParticipants = [
  {
    id: 'PST-001',
    name: 'Syakil Gufran',
    category: 'Mahasiswa / Kampus',
    institution: 'Telkom University',
    department: 'S1 Informatika - Fakultas Informatika',
    idNumber: '1301213001',
    gender: 'Laki-laki',
    email: 'syakil.gufran@student.telkomuniversity.ac.id',
    phone: '081234567890',
    bio: 'Mahasiswa tingkat akhir dengan minat mendalam pada RESTful API, Laravel MVC, dan arsitektur database relasional.',
    eventId: 'EVT-001',
    eventTitle: 'Workshop RESTful API Architecture dengan Laravel 11 & Clean Architecture',
    status: 'Terverifikasi',
    registeredAt: '2026-09-18'
  },
  {
    id: 'PST-002',
    name: 'Nabila Putri Rahmawati',
    category: 'Mahasiswa / Kampus',
    institution: 'Institut Teknologi Bandung (ITB)',
    department: 'Teknik Elektro & Informatika',
    idNumber: '13522045',
    gender: 'Perempuan',
    email: 'nabila.putri@itb.ac.id',
    phone: '082155667788',
    bio: 'Fokus pada riset Cloud Infrastructure, container orchestration, dan integrasi Continuous Delivery.',
    eventId: 'EVT-003',
    eventTitle: 'Pelatihan Cloud Infrastructure & Kubernetes Container Orchestration',
    status: 'Terverifikasi',
    registeredAt: '2026-09-19'
  },
  {
    id: 'PST-003',
    name: 'Aditya Pratama, S.Kom.',
    category: 'Instansi / Profesional',
    institution: 'PT Telekomunikasi Indonesia (Persero) Tbk',
    department: 'Digital Platform & Backend Engineering',
    idNumber: 'TELKOM-88921',
    gender: 'Laki-laki',
    email: 'aditya.pratama@telkom.co.id',
    phone: '081399887766',
    bio: 'Software Engineer profesional mengasah kompetensi arsitektur mikroservis dan standardisasi API skala enterprise.',
    eventId: 'EVT-001',
    eventTitle: 'Workshop RESTful API Architecture dengan Laravel 11 & Clean Architecture',
    status: 'Terverifikasi',
    registeredAt: '2026-09-19'
  },
  {
    id: 'PST-004',
    name: 'Dewi Kartika Sari',
    category: 'Instansi / Profesional',
    institution: 'GoTo Financial / FinTech Ecosystem',
    department: 'Business Development & Strategic Alliance',
    idNumber: 'GOTO-44102',
    gender: 'Perempuan',
    email: 'dewi.kartika@goto.com',
    phone: '085712349988',
    bio: 'Praktisi kemitraan B2B fokus pada negosiasi enterprise SLA, valuasi produk, dan ekspansi pasar startup.',
    eventId: 'EVT-002',
    eventTitle: 'Seminar Strategi Valuasi & Inovasi Model Bisnis Startup Digital',
    status: 'Terverifikasi',
    registeredAt: '2026-09-20'
  },
  {
    id: 'PST-005',
    name: 'Rian Hidayat',
    category: 'Mahasiswa / Kampus',
    institution: 'Universitas Indonesia (UI)',
    department: 'Fakultas Ilmu Komputer (Fasilkom)',
    idNumber: '2106720011',
    gender: 'Laki-laki',
    email: 'rian.hidayat01@ui.ac.id',
    phone: '087811223344',
    bio: 'Antusias mempelajari B2B Enterprise Sales dan metodologi product-market fit.',
    eventId: 'EVT-004',
    eventTitle: 'Executive Workshop: B2B Enterprise Sales & Strategic Partnership',
    status: 'Menunggu',
    registeredAt: '2026-09-21'
  },
  {
    id: 'PST-006',
    name: 'Siti Nurhaliza Putri',
    category: 'Umum',
    institution: 'Komunitas Pengembang Web Bandung',
    department: 'Community Developer',
    idNumber: '-',
    gender: 'Perempuan',
    email: 'siti.nurhaliza.dev@gmail.com',
    phone: '081944556677',
    bio: 'Peserta umum yang aktif dalam komunitas web teknologi dan antusias mengikuti lokakarya teknis.',
    eventId: 'EVT-001',
    eventTitle: 'Workshop RESTful API Architecture dengan Laravel 11 & Clean Architecture',
    status: 'Terverifikasi',
    registeredAt: '2026-09-22'
  }
];

// Helper LocalStorage Peserta
function getPesertaData() {
  const data = localStorage.getItem(STORAGE_KEY_PESERTA);
  if (!data) {
    localStorage.setItem(STORAGE_KEY_PESERTA, JSON.stringify(initialParticipants));
    return initialParticipants;
  }
  return JSON.parse(data);
}

function savePesertaData(participants) {
  localStorage.setItem(STORAGE_KEY_PESERTA, JSON.stringify(participants));
}

// Helper Mendapatkan Daftar Event dari Modul A (atau default)
function getRegisteredEventsList() {
  const rawEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
  if (rawEvents) {
    try {
      const parsed = JSON.parse(rawEvents);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn('Gagal membaca events dari storage, gunakan fallback default.');
    }
  }
  return [
    { id: 'EVT-001', title: 'Workshop RESTful API Architecture dengan Laravel 11 & Clean Architecture' },
    { id: 'EVT-002', title: 'Seminar Strategi Valuasi & Inovasi Model Bisnis Startup Digital' },
    { id: 'EVT-003', title: 'Pelatihan Cloud Infrastructure & Kubernetes Container Orchestration' },
    { id: 'EVT-004', title: 'Executive Workshop: B2B Enterprise Sales & Strategic Partnership' }
  ];
}

// --------------------------------------------------------------------------
// Toast Notification
// --------------------------------------------------------------------------
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success' 
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' 
        : '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'}
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --------------------------------------------------------------------------
// Controller Dashboard & Tabel Peserta (peserta.html)
// --------------------------------------------------------------------------
let currentParticipantCategoryFilter = 'Semua';
let participantSearchQuery = '';

function getInitials(name) {
  if (!name) return 'P';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function renderPesertaDashboard() {
  const tableBody = document.getElementById('pesertaTableBody');
  if (!tableBody) return; // Bukan di peserta.html

  const participants = getPesertaData();

  // Hitung Statistik
  const totalPeserta = participants.length;
  const campusPeserta = participants.filter(p => p.category === 'Mahasiswa / Kampus').length;
  const corporatePeserta = participants.filter(p => p.category === 'Instansi / Profesional').length;
  const verifiedContacts = participants.filter(p => p.phone && p.email).length;

  // Update Kartu Statistik
  const statTotal = document.getElementById('statTotalPeserta');
  const statCampus = document.getElementById('statCampusPeserta');
  const statCorporate = document.getElementById('statCorporatePeserta');
  const statContacts = document.getElementById('statVerifiedContacts');

  if (statTotal) statTotal.textContent = totalPeserta;
  if (statCampus) statCampus.textContent = campusPeserta;
  if (statCorporate) statCorporate.textContent = corporatePeserta;
  if (statContacts) statContacts.textContent = `${verifiedContacts} Aktif`;

  // Filter Data
  const filtered = participants.filter(item => {
    const matchesCategory = currentParticipantCategoryFilter === 'Semua' || 
      (currentParticipantCategoryFilter === 'Mahasiswa / Kampus' && item.category === 'Mahasiswa / Kampus') ||
      (currentParticipantCategoryFilter === 'Instansi / Profesional' && item.category === 'Instansi / Profesional') ||
      (currentParticipantCategoryFilter === 'Umum' && item.category === 'Umum');

    const q = participantSearchQuery.toLowerCase();
    const matchesSearch = 
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.institution.toLowerCase().includes(q) ||
      (item.department && item.department.toLowerCase().includes(q)) ||
      (item.eventTitle && item.eventTitle.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  // Render Baris Tabel
  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="table-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 12px; display: block; opacity: 0.5;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p style="font-weight: 500; font-size: 0.95rem;">Tidak ada data peserta yang cocok</p>
          <span style="font-size: 0.8rem; color: var(--slate-400);">Ubah kata kunci pencarian atau kategori instansi/kampus.</span>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(item => {
    const isStudent = item.category === 'Mahasiswa / Kampus';
    const isCorporate = item.category === 'Instansi / Profesional';
    const badgeClass = isStudent ? 'badge-student' : (isCorporate ? 'badge-instansi' : 'badge-general');
    const avatarTypeClass = isCorporate ? 'instansi' : (item.category === 'Umum' ? 'umum' : '');
    const cleanPhone = item.phone.replace(/[^0-9]/g, '');
    const waPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.substring(1) : cleanPhone;

    return `
      <tr>
        <td style="font-family: monospace; font-size: 0.8rem; font-weight: 600; color: var(--slate-500);">${item.id}</td>
        <td>
          <div class="participant-cell">
            <div class="participant-avatar ${avatarTypeClass}">
              ${getInitials(item.name)}
            </div>
            <div>
              <div style="font-weight: 600; color: var(--slate-900); font-size: 0.925rem;">${escapeHTML(item.name)}</div>
              <div style="margin-top: 3px;">
                <span class="badge ${badgeClass}" style="font-size: 0.7rem; padding: 2px 8px;">
                  <span class="badge-dot"></span>
                  ${item.category}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <strong style="color: var(--slate-800); font-size: 0.875rem;">${escapeHTML(item.institution)}</strong>
            <div style="font-size: 0.775rem; color: var(--slate-500); margin-top: 2px;">
              ${escapeHTML(item.department || '-')}
            </div>
          </div>
        </td>
        <td>
          <div>
            <a href="https://wa.me/${waPhone}" target="_blank" class="contact-link wa" title="Hubungi via WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>${escapeHTML(item.phone)}</span>
            </a>
            <div style="font-size: 0.72rem; color: var(--slate-400); margin-top: 2px;">WhatsApp / Telepon</div>
          </div>
        </td>
        <td>
          <div>
            <a href="mailto:${escapeHTML(item.email)}" class="contact-link" title="Kirim email ke peserta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>${escapeHTML(item.email)}</span>
            </a>
            <div style="font-size: 0.72rem; color: #16a34a; font-weight: 500; margin-top: 2px;">
              ● Email Aktif
            </div>
          </div>
        </td>
        <td>
          <div style="max-width: 240px;">
            <div style="font-size: 0.85rem; font-weight: 600; color: var(--slate-800); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHTML(item.eventTitle || '-')}">
              ${escapeHTML(item.eventTitle || '-')}
            </div>
            <div style="font-size: 0.72rem; color: var(--slate-400); margin-top: 2px;">
              ID: ${item.eventId || '-'}
            </div>
          </div>
        </td>
        <td>
          <div class="table-actions">
            <button class="action-btn" onclick="viewPesertaModal('${item.id}')" title="Lihat Profil & Biodata Lengkap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <a href="peserta-form.html?id=${item.id}" class="action-btn" title="Edit Profil Peserta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </a>
            <button class="action-btn delete" onclick="confirmDeletePeserta('${item.id}')" title="Hapus Peserta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// Modal Detail Biodata Peserta
// --------------------------------------------------------------------------
function viewPesertaModal(pesertaId) {
  const participants = getPesertaData();
  const item = participants.find(p => p.id === pesertaId);
  if (!item) return;

  const modal = document.getElementById('pesertaDetailModal');
  if (!modal) return;

  document.getElementById('modalPesertaAvatar').textContent = getInitials(item.name);
  document.getElementById('modalPesertaName').textContent = item.name;
  document.getElementById('modalPesertaId').textContent = item.id;
  
  const isStudent = item.category === 'Mahasiswa / Kampus';
  const isCorporate = item.category === 'Instansi / Profesional';
  const badgeClass = isStudent ? 'badge-student' : (isCorporate ? 'badge-instansi' : 'badge-general');
  document.getElementById('modalPesertaCategory').innerHTML = `
    <span class="badge ${badgeClass}">
      <span class="badge-dot"></span>
      ${item.category}
    </span>
  `;

  document.getElementById('modalPesertaInstitution').textContent = item.institution;
  document.getElementById('modalPesertaDepartment').textContent = item.department || '-';
  document.getElementById('modalPesertaIdNumber').textContent = item.idNumber || '-';
  document.getElementById('modalPesertaEmail').textContent = item.email;
  document.getElementById('modalPesertaPhone').textContent = item.phone;
  document.getElementById('modalPesertaGender').textContent = item.gender || 'Laki-laki';
  document.getElementById('modalPesertaEvent').textContent = item.eventTitle || item.eventId || '-';
  document.getElementById('modalPesertaBio').textContent = item.bio || 'Tidak ada catatan biodata tambahan.';

  modal.classList.add('active');
}

function confirmDeletePeserta(pesertaId) {
  if (confirm(`Apakah Anda yakin ingin menghapus data Peserta dengan ID [${pesertaId}]? Tindakan ini tidak dapat dibatalkan.`)) {
    let participants = getPesertaData();
    participants = participants.filter(p => p.id !== pesertaId);
    savePesertaData(participants);
    renderPesertaDashboard();
    showToast(`Data peserta ${pesertaId} berhasil dihapus dari sistem!`, 'success');
  }
}

// --------------------------------------------------------------------------
// Form Handler (peserta-form.html)
// --------------------------------------------------------------------------
function initPesertaForm() {
  const form = document.getElementById('pesertaForm');
  if (!form) return; // Bukan di peserta-form.html

  // 1. Populate Dropdown Pilihan Event dari Master Event Data
  const eventSelect = document.getElementById('pesertaEventId');
  if (eventSelect) {
    const events = getRegisteredEventsList();
    eventSelect.innerHTML = '<option value="">-- Pilih Event Workshop / Seminar --</option>' + 
      events.map(ev => `<option value="${ev.id}">${ev.id} - ${escapeHTML(ev.title)}</option>`).join('');
  }

  // 2. Cek Mode Edit via URL Query Parameter
  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');

  if (editId) {
    const participants = getPesertaData();
    const item = participants.find(p => p.id === editId);
    if (item) {
      document.getElementById('formPageTitle').textContent = 'Edit Biodata Peserta Event';
      document.getElementById('formPageSubtitle').textContent = `Perbarui informasi profil, instansi/kampus, nomor kontak, dan email untuk ID: ${item.id}`;
      document.getElementById('pesertaId').value = item.id;
      document.getElementById('pesertaName').value = item.name;
      document.getElementById('pesertaInstitution').value = item.institution;
      document.getElementById('pesertaDepartment').value = item.department || '';
      document.getElementById('pesertaIdNumber').value = item.idNumber || '';
      document.getElementById('pesertaEmail').value = item.email;
      document.getElementById('pesertaPhone').value = item.phone;
      document.getElementById('pesertaGender').value = item.gender || 'Laki-laki';
      document.getElementById('pesertaBio').value = item.bio || '';

      if (eventSelect && item.eventId) {
        eventSelect.value = item.eventId;
      }

      // Kategori Radio Cards
      const categoryRadios = document.getElementsByName('pesertaCategory');
      categoryRadios.forEach(radio => {
        if (radio.value === item.category) {
          radio.checked = true;
          highlightSelectedPesertaCategory(radio.value);
        }
      });

      updatePesertaSummary();
    }
  }

  // Event Listener Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    savePesertaForm();
  });

  // Event Listener Live Input untuk Summary Box
  const nameInput = document.getElementById('pesertaName');
  const emailInput = document.getElementById('pesertaEmail');
  const phoneInput = document.getElementById('pesertaPhone');
  const instInput = document.getElementById('pesertaInstitution');

  if (nameInput) nameInput.addEventListener('input', updatePesertaSummary);
  if (emailInput) emailInput.addEventListener('input', updatePesertaSummary);
  if (phoneInput) phoneInput.addEventListener('input', updatePesertaSummary);
  if (instInput) instInput.addEventListener('input', updatePesertaSummary);
  if (eventSelect) eventSelect.addEventListener('change', updatePesertaSummary);

  const catRadios = document.querySelectorAll('input[name="pesertaCategory"]');
  catRadios.forEach(r => {
    r.addEventListener('change', () => {
      highlightSelectedPesertaCategory(r.value);
      updatePesertaSummary();
    });
  });

  updatePesertaSummary();
}

function highlightSelectedPesertaCategory(categoryVal) {
  const cardStudent = document.getElementById('cardCategoryStudent');
  const cardCorporate = document.getElementById('cardCategoryCorporate');
  if (!cardStudent || !cardCorporate) return;

  if (categoryVal === 'Mahasiswa / Kampus') {
    cardStudent.classList.add('active-student');
    cardCorporate.classList.remove('active-instansi');
  } else {
    cardCorporate.classList.add('active-instansi');
    cardStudent.classList.remove('active-student');
  }
}

function updatePesertaSummary() {
  const nameVal = document.getElementById('pesertaName')?.value.trim();
  const instVal = document.getElementById('pesertaInstitution')?.value.trim();
  const emailVal = document.getElementById('pesertaEmail')?.value.trim();
  const phoneVal = document.getElementById('pesertaPhone')?.value.trim();
  const catVal = document.querySelector('input[name="pesertaCategory"]:checked')?.value || 'Mahasiswa / Kampus';
  const eventSelect = document.getElementById('pesertaEventId');
  const selectedEventText = eventSelect && eventSelect.selectedIndex > 0 ? eventSelect.options[eventSelect.selectedIndex].text : '(Belum dipilih)';

  const sumName = document.getElementById('sumPesertaName');
  const sumCat = document.getElementById('sumPesertaCategory');
  const sumInst = document.getElementById('sumPesertaInst');
  const sumEmail = document.getElementById('sumPesertaEmail');
  const sumPhone = document.getElementById('sumPesertaPhone');
  const sumEvent = document.getElementById('sumPesertaEvent');

  if (sumName) sumName.textContent = nameVal || '(Belum diisi)';
  if (sumCat) sumCat.textContent = catVal;
  if (sumInst) sumInst.textContent = instVal || '(Belum diisi)';
  if (sumEmail) sumEmail.textContent = emailVal || '(Belum diisi)';
  if (sumPhone) sumPhone.textContent = phoneVal || '(Belum diisi)';
  if (sumEvent) sumEvent.textContent = selectedEventText;
}

function savePesertaForm() {
  const idField = document.getElementById('pesertaId').value;
  const name = document.getElementById('pesertaName').value.trim();
  const category = document.querySelector('input[name="pesertaCategory"]:checked')?.value || 'Mahasiswa / Kampus';
  const institution = document.getElementById('pesertaInstitution').value.trim();
  const department = document.getElementById('pesertaDepartment').value.trim();
  const idNumber = document.getElementById('pesertaIdNumber').value.trim();
  const email = document.getElementById('pesertaEmail').value.trim();
  const phone = document.getElementById('pesertaPhone').value.trim();
  const gender = document.getElementById('pesertaGender').value;
  const bio = document.getElementById('pesertaBio').value.trim();

  const eventSelect = document.getElementById('pesertaEventId');
  const eventId = eventSelect ? eventSelect.value : '';
  const eventTitle = eventSelect && eventSelect.selectedIndex > 0 ? eventSelect.options[eventSelect.selectedIndex].text.replace(/^[^-]+ - /, '') : '';

  if (!name || !email || !phone || !institution) {
    alert('Harap lengkapi semua kolom yang wajib diisi (Nama, Email, Nomor Kontak, dan Asal Instansi/Kampus)!');
    return;
  }

  let participants = getPesertaData();

  if (idField) {
    // Mode Update
    const index = participants.findIndex(p => p.id === idField);
    if (index !== -1) {
      participants[index] = {
        ...participants[index],
        name,
        category,
        institution,
        department,
        idNumber,
        email,
        phone,
        gender,
        bio,
        eventId,
        eventTitle
      };
      savePesertaData(participants);
      showToast(`Data peserta ${idField} berhasil diperbarui!`, 'success');
      setTimeout(() => window.location.href = 'index.html', 1000);
      return;
    }
  }

  // Mode Create Baru
  const nextNum = participants.length + 1;
  const newId = `PST-00${nextNum}`;
  const newParticipant = {
    id: newId,
    name,
    category,
    institution,
    department,
    idNumber,
    email,
    phone,
    gender,
    bio,
    eventId,
    eventTitle,
    status: 'Terverifikasi',
    registeredAt: new Date().toISOString().split('T')[0]
  };

  participants.unshift(newParticipant);
  savePesertaData(participants);
  showToast(`Peserta baru [${newId}] berhasil didaftarkan!`, 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

// --------------------------------------------------------------------------
// Modal Penjelasan Arsitektur Modul Kelompok (A, B, C)
// --------------------------------------------------------------------------
const peerModuleSpecsForPeserta = {
  'A': {
    code: 'Modul A',
    title: 'Master Event & Silabus',
    assignee: 'Individu A',
    roleTag: 'Master Event & Agenda',
    description: 'Modul otonom yang mengelola judul event, deskripsi, kategori (Teknologi/Bisnis), silabus materi, dan durasi sesi pembelajaran. Menjadi data induk bagi pendaftaran peserta di Modul D.',
    dbRelations: [
      { key: 'Foreign Key di Peserta', val: 'attendees.event_id -> events.id' },
      { key: 'Integritas Referensial', val: 'ON DELETE RESTRICT / CASCADE' },
      { key: 'Tipe Kardinalitas', val: 'One-to-Many (1 : N) - 1 Event memiliki banyak Peserta' }
    ],
    endpoints: [
      { method: 'GET', url: '/api/v1/events', desc: 'Mengambil daftar event aktif untuk registrasi peserta' },
      { method: 'GET', url: '/api/v1/events/{id}', desc: 'Detail master event beserta rincian silabus' }
    ],
    migrationCode: `Schema::table('attendees', function (Blueprint $table) {
    $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
});`
  },
  'B': {
    code: 'Modul B',
    title: 'Pendaftaran Narasumber / Speaker',
    assignee: 'Individu B',
    roleTag: 'Speaker Management',
    description: 'Modul otonom yang mengelola data narasumber, riwayat keahlian, afiliasi institusi, dan penugasan pembicara ke dalam sesi silabus yang diikuti oleh peserta.',
    dbRelations: [
      { key: 'Relasi Tidak Langsung', val: 'Via events.id dan event_syllabuses.id' },
      { key: 'Kardinalitas', val: 'Many-to-Many (N : M) via Jadwal Sesi Event' }
    ],
    endpoints: [
      { method: 'GET', url: '/api/v1/events/{event_id}/speakers', desc: 'Daftar pembicara pada event yang diikuti peserta' }
    ],
    migrationCode: `Schema::create('event_speakers', function (Blueprint $table) {
    $table->id();
    $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
    $table->foreignId('speaker_id')->constrained('speakers');
    $table->timestamps();
});`
  },
  'C': {
    code: 'Modul C',
    title: 'Klasifikasi Kategori Tiket & Benefit',
    assignee: 'Individu C',
    roleTag: 'Ticketing & Pricing Tier',
    description: 'Modul otonom pengatur tingkatan tiket (Early Bird, VIP, Regular, Mahasiswa), kuota kursi yang dipesan oleh peserta, dan paket fasilitas benefit yang didapatkan.',
    dbRelations: [
      { key: 'Foreign Key Tiket', val: 'attendees.ticket_tier_id -> ticket_tiers.id' },
      { key: 'Kardinalitas', val: 'One-to-Many (1 : N) - 1 Tier Tiket dapat dibeli banyak Peserta' }
    ],
    endpoints: [
      { method: 'GET', url: '/api/v1/events/{event_id}/tickets', desc: 'Daftar kategori tiket yang tersedia bagi peserta' }
    ],
    migrationCode: `Schema::table('attendees', function (Blueprint $table) {
    $table->foreignId('ticket_tier_id')->nullable()->constrained('ticket_tiers')->nullOnDelete();
});`
  }
};

function openModuleInfoModal(moduleCode) {
  const spec = peerModuleSpecsForPeserta[moduleCode];
  if (!spec) return;

  const modal = document.getElementById('peerModuleModal');
  if (!modal) return;

  document.getElementById('peerModuleBadge').textContent = spec.code;
  document.getElementById('peerModuleTitle').textContent = spec.title;
  document.getElementById('peerModuleAssignee').textContent = `Penanggung Jawab: ${spec.assignee} (${spec.roleTag})`;
  document.getElementById('peerModuleDesc').textContent = spec.description;

  const relationsContainer = document.getElementById('peerModuleRelations');
  if (relationsContainer) {
    relationsContainer.innerHTML = spec.dbRelations.map(rel => `
      <div class="relation-item">
        <span class="relation-key">${rel.key}:</span>
        <span class="relation-val">${rel.val}</span>
      </div>
    `).join('');
  }

  const endpointsContainer = document.getElementById('peerModuleEndpoints');
  if (endpointsContainer) {
    endpointsContainer.innerHTML = spec.endpoints.map(ep => `
      <div class="endpoint-pill">
        <span class="method-badge ${ep.method === 'GET' ? 'method-get' : 'method-post'}">${ep.method}</span>
        <strong style="color: var(--slate-800);">${ep.url}</strong>
        <span style="color: var(--slate-500); margin-left: auto; font-size: 0.775rem;">${ep.desc}</span>
      </div>
    `).join('');
  }

  const migrationBox = document.getElementById('peerModuleMigration');
  if (migrationBox) {
    migrationBox.textContent = spec.migrationCode;
  }

  modal.classList.add('active');
  showToast(`Menampilkan relasi arsitektur ${spec.code}: ${spec.title}`, 'success');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Helper XSS Escape
function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// --------------------------------------------------------------------------
// Inisialisasi Saat Halaman Dimuat
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const sidebar = document.querySelector('.sidebar');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  // Setup Listener untuk Dashboard (peserta.html)
  const searchInput = document.getElementById('tableSearchPeserta');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      participantSearchQuery = e.target.value;
      renderPesertaDashboard();
    });
  }

  const catTabs = document.querySelectorAll('.cat-tab-peserta');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentParticipantCategoryFilter = tab.dataset.category;
      renderPesertaDashboard();
    });
  });

  // Modal Backdrop Click to Close
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Setup Form Listener (peserta-form.html)
  initPesertaForm();

  // Initial Table Render (peserta.html)
  renderPesertaDashboard();
});
