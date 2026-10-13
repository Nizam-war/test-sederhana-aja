<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modul Peserta & Biodata - Sistem Pengelolaan Event & Workshop</title>
 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="app-container">
  
  <aside class="sidebar">
    <div class="sidebar-brand">
      <div class="brand-icon">E</div>
      <div class="brand-text">
        <h2>EventCraft</h2>
        <span>Sistem Event & Workshop</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section-title">Modul Utama Kelompok</div>
      
    
      <a href="javascript:void(0)" class="nav-item inactive-badge" style="cursor: default; opacity: 0.7;" title="Modul Master Event (Individu A)">
        <span style="display:flex; align-items:center; gap:12px;">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span style="display: flex; flex-direction: column;">
            <strong style="font-size: 0.85rem; color: var(--slate-700);">Master Event & Silabus</strong>
            <small style="font-size: 0.7rem; color: var(--slate-400);">Individu A • Master Event</small>
          </span>
        </span>
        <span class="tag-module">Modul A</span>
      </a>

      
      <a href="javascript:void(0)" onclick="openModuleInfoModal('B')" class="nav-item inactive-badge" title="Klik untuk melihat spesifikasi arsitektur & relasi Modul B">
        <span style="display:flex; align-items:center; gap:12px;">
          <svg viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span style="display: flex; flex-direction: column;">
            <strong style="font-size: 0.85rem; color: var(--slate-700);">Pendaftaran Speaker</strong>
            <small style="font-size: 0.7rem; color: var(--slate-400);">Individu B • Narasumber</small>
          </span>
        </span>
        <span class="tag-module">Modul B</span>
      </a>

      
      <a href="javascript:void(0)" onclick="openModuleInfoModal('C')" class="nav-item inactive-badge" title="Klik untuk melihat spesifikasi arsitektur & relasi Modul C">
        <span style="display:flex; align-items:center; gap:12px;">
          <svg viewBox="0 0 24 24">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
            <path d="M13 5v2"></path>
            <path d="M13 17v2"></path>
            <path d="M13 11v2"></path>
          </svg>
          <span style="display: flex; flex-direction: column;">
            <strong style="font-size: 0.85rem; color: var(--slate-700);">Kategori Tiket & Benefit</strong>
            <small style="font-size: 0.7rem; color: var(--slate-400);">Individu C • Pricing Tier</small>
          </span>
        </span>
        <span class="tag-module">Modul C</span>
      </a>

      
      <a href="index.html" class="nav-item active">
        <span style="display:flex; align-items:center; gap:12px;">
          <svg viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span style="display: flex; flex-direction: column;">
            <strong style="font-size: 0.85rem; color: var(--primary);">Modul Peserta & Biodata</strong>
            <small style="font-size: 0.7rem; color: var(--primary); opacity: 0.85;">Individu D • Profil & Kontak</small>
          </span>
        </span>
        <span class="tag-module" style="background: var(--primary-light); color: var(--primary); border-color: rgba(79, 70, 229, 0.3);">Modul D</span>
      </a>

      <div class="nav-section-title">Dokumentasi & API</div>
      <a href="README.md" target="_blank" class="nav-item">
        <svg viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span>Laravel MVC & API Docs</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <div class="user-snippet">
        <div class="user-avatar" style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%);">ID</div>
        <div class="user-info">
          <div class="user-name">Individu D</div>
          <div class="user-role">Modul Peserta & Biodata</div>
        </div>
      </div>
    </div>
  </aside>

 
  <main class="main-wrapper">
    <!-- Top Header -->
    <header class="top-header">
      <div style="display: flex; align-items: center; gap: 16px;">
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">
          ☰
        </button>
        <span class="badge-role">Sistem Pengelolaan Event & Workshop</span>
      </div>

      <div class="header-actions">
        <a href="peserta-form.html" class="btn btn-primary">
          <svg viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Tambah Peserta Baru</span>
        </a>
      </div>
    </header>

    
    <div class="content-body">
    
      <div class="page-header">
        <div>
          <h1 class="page-title">Modul Peserta & Mahasiswa</h1>
          <p class="page-subtitle">Pengelolaan profil peserta event, asal instansi/kampus, nomor kontak, dan email aktif.</p>
        </div>
        <div>
          <a href="peserta-form.html" class="btn btn-secondary btn-sm" style="margin-top: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Buka Halaman Form Input</span>
          </a>
        </div>
      </div>

      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon icon-purple">
            <svg viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="stat-data">
            <div class="stat-label">Total Peserta Terdaftar</div>
            <div class="stat-value" id="statTotalPeserta">0</div>
            <div class="stat-subtext">Semua profil peserta event</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon icon-blue">
            <svg viewBox="0 0 24 24">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div class="stat-data">
            <div class="stat-label">Mahasiswa / Kampus</div>
            <div class="stat-value" id="statCampusPeserta">0</div>
            <div class="stat-subtext">Peserta perguruan tinggi</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon icon-green">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div class="stat-data">
            <div class="stat-label">Instansi / Profesional</div>
            <div class="stat-value" id="statCorporatePeserta">0</div>
            <div class="stat-subtext">Korporat, industri, & B2B</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon icon-amber">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div class="stat-data">
            <div class="stat-label">Kontak & Email Aktif</div>
            <div class="stat-value" id="statVerifiedContacts">0 Aktif</div>
            <div class="stat-subtext">100% Saluran kontak valid</div>
          </div>
        </div>
      </div>

      
      <div class="filter-toolbar">
        <div class="category-tabs">
          <button type="button" class="cat-tab cat-tab-peserta active" data-category="Semua">Semua Kategori</button>
          <button type="button" class="cat-tab cat-tab-peserta" data-category="Mahasiswa / Kampus">Mahasiswa / Kampus</button>
          <button type="button" class="cat-tab cat-tab-peserta" data-category="Instansi / Profesional">Instansi / Profesional</button>
          <button type="button" class="cat-tab cat-tab-peserta" data-category="Umum">Umum</button>
        </div>

        <div class="table-search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="tableSearchPeserta" placeholder="Cari nama, instansi, kontak...">
        </div>
      </div>

      <!-- Tabel Data Peserta -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="width: 100px;">ID Peserta</th>
                <th>Profil Peserta</th>
                <th style="width: 210px;">Asal Instansi / Kampus</th>
                <th style="width: 170px;">Nomor Kontak</th>
                <th style="width: 220px;">Email Aktif</th>
                <th style="width: 210px;">Event Terdaftar</th>
                <th style="width: 130px; text-align: center;">Aksi</th>
              </tr>
            </thead>
            <tbody id="pesertaTableBody">
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</div>


<div class="modal-overlay" id="pesertaDetailModal">
  <div class="modal-container" style="max-width: 650px;">
    <div class="modal-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <h3 class="modal-title">Biodata Lengkap Profil Peserta</h3>
        <div id="modalPesertaCategory"></div>
      </div>
      <button class="modal-close" onclick="closeModal('pesertaDetailModal')" title="Tutup">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Profile Header Box -->
      <div class="detail-profile-box">
        <div class="detail-profile-avatar" id="modalPesertaAvatar">SG</div>
        <div>
          <h2 id="modalPesertaName" style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 4px;"></h2>
          <div style="font-size: 0.8rem; color: var(--slate-500); display: flex; align-items: center; gap: 8px;">
            <span>ID Registrasi: <strong id="modalPesertaId" style="color: var(--slate-800); font-family: monospace;"></strong></span>
            <span>•</span>
            <span>Status: <strong style="color: #059669;">Terverifikasi</strong></span>
          </div>
        </div>
      </div>

      
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-item-label">Asal Instansi / Kampus</div>
          <div class="detail-item-value" id="modalPesertaInstitution">-</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">Program Studi / Divisi</div>
          <div class="detail-item-value" id="modalPesertaDepartment">-</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">Nomor Kontak / WhatsApp</div>
          <div class="detail-item-value" id="modalPesertaPhone" style="color: #16a34a;">-</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">Email Aktif Peserta</div>
          <div class="detail-item-value" id="modalPesertaEmail" style="color: var(--primary);">-</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">NIM / NIP / ID Anggota</div>
          <div class="detail-item-value" id="modalPesertaIdNumber">-</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">Jenis Kelamin</div>
          <div class="detail-item-value" id="modalPesertaGender">-</div>
        </div>
      </div>

      <!-- Event Terkait -->
      <div class="detail-item" style="margin-bottom: 16px;">
        <div class="detail-item-label">Event yang Diikuti / Didaftar</div>
        <div class="detail-item-value" id="modalPesertaEvent" style="font-size: 0.95rem; color: var(--slate-900);">-</div>
      </div>

      <!-- Bio / Catatan Biodata -->
      <div class="detail-item">
        <div class="detail-item-label">Deskripsi Profil / Catatan Biodata</div>
        <p id="modalPesertaBio" style="font-size: 0.85rem; color: var(--slate-600); line-height: 1.5; margin-top: 4px;"></p>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" onclick="closeModal('pesertaDetailModal')">Tutup</button>
    </div>
  </div>
</div>

 
<div class="modal-overlay" id="peerModuleModal">
  <div class="modal-container" style="max-width: 680px;">
    <div class="modal-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="module-header-badge" id="peerModuleBadge">Modul X</span>
        <h3 class="modal-title" id="peerModuleTitle">Spesifikasi Modul Otonom</h3>
      </div>
      <button class="modal-close" onclick="closeModal('peerModuleModal')" title="Tutup">&times;</button>
    </div>
    <div class="modal-body">
      <div class="module-header-box">
        <div class="module-header-left">
          <h3 id="peerModuleAssignee">Penanggung Jawab: Individu X</h3>
          <span>Arsitektur Sistem Otonom & Interkoneksi Modul Peserta</span>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div class="spec-section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          
        </div>
        <p id="peerModuleDesc" style="font-size: 0.875rem; color: var(--slate-600); line-height: 1.6;"></p>
      </div>

      <div style="margin-bottom: 20px;">
        <div class="spec-section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7V4h16v3"></path>
            <path d="M9 20h6"></path>
            <path d="M12 4v16"></path>
          </svg>
          Relasi Database ke Modul Peserta & Biodata (Individu D)
        </div>
        <div class="relation-pill-box" id="peerModuleRelations">
          <!-- Di-render oleh js/peserta.js -->
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div class="spec-section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Endpoint RESTful API Terkait
        </div>
        <div class="endpoint-list" id="peerModuleEndpoints">
          <!-- Di-render oleh js/peserta.js -->
        </div>
      </div>

      <div>
        <div class="spec-section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
          Contoh Skema Migrasi Database Relasional Laravel
        </div>
        <pre class="schema-code-box" id="peerModuleMigration"></pre>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" onclick="closeModal('peerModuleModal')">Tutup Penjelasan</button>
    </div>
  </div>
</div>


<script src="js/peserta.js"></script>
</body>
</html>
