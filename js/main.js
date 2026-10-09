/**
 * =========================================================================
 * CHRISTIAN FERRARI - PORTFÓLIO MULTIMÍDIA
 * ARQUIVO PRINCIPAL DE INTERATIVIDADE & CONTROLADORES (JS)
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de todos os módulos
  AppNavigation.init();
  SpotlightEffect.init();
  HomeView.init();
  PortfolioView.init();
  AboutView.init();
  ContactView.init();
  MediaModal.init();
  ToastNotification.init();
});

/* ==========================================================================
   MÓDULO 1: NAVEGAÇÃO & ROTAS SPA (COMPATÍVEL 100% COM GITHUB PAGES)
   ========================================================================== */
const AppNavigation = {
  currentTab: 'home',

  init() {
    this.bindEvents();
    this.handleInitialRoute();
  },

  bindEvents() {
    // Cliques em qualquer link de navegação interno
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetView = link.getAttribute('data-nav');
        if (targetView) {
          e.preventDefault();
          this.switchTab(targetView);
          window.location.hash = targetView;
          
          // Fechar menu mobile se estiver aberto
          const mobileDrawer = document.getElementById('mobileDrawer');
          if (mobileDrawer) mobileDrawer.classList.remove('active');
        }
      });
    });

    // Suporte ao botão voltar/avançar do navegador com Hash
    window.addEventListener('hashchange', () => {
      this.handleInitialRoute();
    });

    // Toggle menu mobile
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('active');
      });
    }
  },

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '').trim();
    const validViews = ['home', 'portfolio', 'sobre', 'contato'];
    
    if (validViews.includes(hash)) {
      this.switchTab(hash);
    } else {
      this.switchTab('home');
    }
  },

  switchTab(tabId) {
    this.currentTab = tabId;

    // Atualiza classes ativas nas views
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });

    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) {
      activeView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Atualiza links da navbar desktop e mobile
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      if (link.getAttribute('data-nav') === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Se navegou para "sobre", dispara a animação dos sliders de habilidades
    if (tabId === 'sobre') {
      setTimeout(() => {
        AboutView.animateSkillSliders();
      }, 150);
    }
  }
};

/* ==========================================================================
   MÓDULO 2: SPOTLIGHT EFFECT APPLE (Luz que segue o cursor nos cards)
   ========================================================================== */
const SpotlightEffect = {
  init() {
    // Spotlight Global Ambiente de Fundo
    const ambientGlow = document.getElementById('ambientGlow');
    if (ambientGlow) {
      window.addEventListener('mousemove', (e) => {
        const xPct = Math.round((e.clientX / window.innerWidth) * 100);
        const yPct = Math.round((e.clientY / window.innerHeight) * 100);
        ambientGlow.style.background = `
          radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255, 255, 255, 0.75) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(215, 224, 236, 0.45) 0%, transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(200, 210, 225, 0.35) 0%, transparent 50%)
        `;
      });
    }

    // Delegação de evento para todos os cards com efeito spotlight (inclusive os injetados dinamicamente)
    document.addEventListener('mousemove', (e) => {
      const targetCard = e.target.closest('.spotlight-card, .spotlight-element');
      if (targetCard) {
        const rect = targetCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        targetCard.style.setProperty('--mouse-x', `${x}px`);
        targetCard.style.setProperty('--mouse-y', `${y}px`);
      }
    });
  }
};

/* ==========================================================================
   MÓDULO 3: VIEW HOME (DESTAQUES & PRINCIPAIS TRABALHOS)
   ========================================================================== */
const HomeView = {
  init() {
    this.renderFeaturedProjects();
  },

  renderFeaturedProjects() {
    const gridContainer = document.getElementById('homeFeaturedGrid');
    if (!gridContainer || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

    // Filtra apenas os projetos marcados como featured: true
    const featuredList = PORTFOLIO_DATA.projects.filter(p => p.featured === true);

    gridContainer.innerHTML = '';

    featuredList.forEach(project => {
      const card = document.createElement('div');
      
      // Determina a classe de tamanho para o bento grid
      let sizeClass = 'card-medium';
      if (project.featuredSize === 'large') sizeClass = 'card-large';
      if (project.featuredSize === 'wide') sizeClass = 'card-wide';

      card.className = `featured-card glass-card spotlight-card ${sizeClass}`;
      card.setAttribute('data-project-id', project.id);

      // Ícone e badge do tipo de mídia
      let mediaIcon = 'ph-image';
      let playTriggerIcon = 'ph-arrows-out-simple';
      let mediaElementHtml = '';

      if (project.category === 'video') {
        mediaIcon = 'ph-video-camera';
        playTriggerIcon = 'ph-play-fill';
        mediaElementHtml = `
          <video src="${project.mediaUrl}" muted playsinline loop preload="metadata" class="featured-card-img featured-card-video"></video>
        `;
      } else {
        if (project.category === 'foto') {
          mediaIcon = 'ph-camera';
        }
        mediaElementHtml = `
          <img src="${project.mediaUrl}" alt="Portfólio" class="featured-card-img" loading="lazy">
        `;
      }

      card.innerHTML = `
        <div class="featured-card-thumb-wrap">
          ${mediaElementHtml}
          <div class="featured-card-overlay"></div>
        </div>

        <div class="featured-card-badge-top glass-pill">
          <i class="ph ${mediaIcon}"></i>
          <span>${project.categoryLabel || project.category}</span>
        </div>

        <div class="featured-card-play-trigger" title="Visualizar em tela cheia">
          <i class="ph ${playTriggerIcon}"></i>
        </div>
      `;

      // Preview dinâmico para vídeos no hover
      if (project.category === 'video') {
        const vid = card.querySelector('video');
        if (vid) {
          card.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
          card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
        }
      }

      // Clique abre o modal
      card.addEventListener('click', () => {
        MediaModal.open(project.id);
      });

      gridContainer.appendChild(card);
    });
  }
};

/* ==========================================================================
   MÓDULO 4: VIEW PORTFÓLIO (FILTROS DE VÍDEOS, FOTOS, IMAGENS & BUSCA)
   ========================================================================== */
const PortfolioView = {
  currentCategory: 'all',
  searchQuery: '',

  init() {
    this.updateCounters();
    this.renderPortfolio();
    this.bindEvents();
  },

  bindEvents() {
    // Cliques nos filtros em pílula
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentCategory = pill.getAttribute('data-filter');
        this.renderPortfolio();
      });
    });

    // Input de busca em tempo real
    const searchInput = document.getElementById('portfolioSearchInput');
    const clearBtn = document.getElementById('searchClearBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (clearBtn) {
          clearBtn.style.display = this.searchQuery ? 'flex' : 'none';
        }
        this.renderPortfolio();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        this.searchQuery = '';
        clearBtn.style.display = 'none';
        this.renderPortfolio();
      });
    }

    // Botão de reset no estado vazio
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentCategory = 'all';
        this.searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        document.querySelectorAll('.filter-pill').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-filter') === 'all');
        });
        this.renderPortfolio();
      });
    }
  },

  updateCounters() {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;
    const projects = PORTFOLIO_DATA.projects;

    const countAll = projects.length;
    const countVideo = projects.filter(p => p.category === 'video').length;
    const countFoto = projects.filter(p => p.category === 'foto').length;
    const countImagem = projects.filter(p => p.category === 'imagem').length;

    const elAll = document.getElementById('count-all');
    const elVideo = document.getElementById('count-video');
    const elFoto = document.getElementById('count-foto');
    const elImagem = document.getElementById('count-imagem');

    if (elAll) elAll.textContent = countAll;
    if (elVideo) elVideo.textContent = countVideo;
    if (elFoto) elFoto.textContent = countFoto;
    if (elImagem) elImagem.textContent = countImagem;
  },

  renderPortfolio() {
    const gridContainer = document.getElementById('portfolioItemsGrid');
    const emptyState = document.getElementById('portfolioEmptyState');
    if (!gridContainer || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

    // Filtra por categoria e busca
    const filtered = PORTFOLIO_DATA.projects.filter(project => {
      const matchCategory = (this.currentCategory === 'all') || (project.category === this.currentCategory);
      
      let matchQuery = true;
      if (this.searchQuery) {
        const titleMatch = project.title.toLowerCase().includes(this.searchQuery);
        const descMatch = (project.description || '').toLowerCase().includes(this.searchQuery);
        const toolsMatch = (project.tools || []).some(t => t.toLowerCase().includes(this.searchQuery));
        const catMatch = (project.categoryLabel || project.category).toLowerCase().includes(this.searchQuery);
        matchQuery = titleMatch || descMatch || toolsMatch || catMatch;
      }

      return matchCategory && matchQuery;
    });

    gridContainer.innerHTML = '';

    if (filtered.length === 0) {
      gridContainer.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    gridContainer.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'portfolio-card glass-card spotlight-card';
      card.setAttribute('data-project-id', project.id);

      let mediaIcon = 'ph-image';
      let actionIcon = 'ph-arrows-out-simple';
      let mediaElementHtml = '';

      if (project.category === 'video') {
        mediaIcon = 'ph-video-camera';
        actionIcon = 'ph-play-fill';
        mediaElementHtml = `
          <video src="${project.mediaUrl}" muted playsinline loop preload="metadata" class="portfolio-card-img portfolio-card-video"></video>
        `;
      } else {
        if (project.category === 'foto') {
          mediaIcon = 'ph-camera';
        }
        mediaElementHtml = `
          <img src="${project.mediaUrl}" alt="Portfólio" class="portfolio-card-img" loading="lazy">
        `;
      }

      card.innerHTML = `
        <div class="portfolio-card-media">
          ${mediaElementHtml}
          
          <div class="portfolio-media-badge glass-pill">
            <i class="ph ${mediaIcon}"></i>
            <span>${project.categoryLabel || project.category}</span>
          </div>

          <div class="portfolio-hover-overlay">
            <div class="overlay-action-btn">
              <i class="ph ${actionIcon}"></i>
            </div>
          </div>
        </div>
      `;

      // Preview dinâmico para vídeos no hover
      if (project.category === 'video') {
        const vid = card.querySelector('video');
        if (vid) {
          card.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
          card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
        }
      }

      card.addEventListener('click', () => {
        MediaModal.open(project.id);
      });

      gridContainer.appendChild(card);
    });
  }
};

/* ==========================================================================
   MÓDULO 5: VIEW SOBRE MIM (CURRÍCULO VISUAL COMPLETO & SLIDERS)
   ========================================================================== */
const AboutView = {
  init() {
    this.renderProfile();
    this.renderSkills();
    this.renderTools();
    this.renderExperiences();
    this.renderEducations();
    this.renderSoftSkills();
    this.renderLanguages();
    this.bindEvents();
  },

  bindEvents() {
    const btnCv = document.getElementById('btnDownloadCv');
    if (btnCv) {
      btnCv.addEventListener('click', () => {
        if (PORTFOLIO_DATA.profile.resumePdfUrl && PORTFOLIO_DATA.profile.resumePdfUrl !== '#') {
          window.open(PORTFOLIO_DATA.profile.resumePdfUrl, '_blank');
        } else {
          ToastNotification.show('Adicione seu PDF no arquivo js/content-data.js!');
        }
      });
    }
  },

  renderProfile() {
    const prof = PORTFOLIO_DATA.profile;
    if (!prof) return;

    // Bio
    const bioEl = document.getElementById('aboutBioText');
    if (bioEl && prof.bio) bioEl.textContent = prof.bio;

    // Avatar
    const avatarContainer = document.getElementById('aboutAvatarContainer');
    if (avatarContainer) {
      if (prof.avatarUrl && prof.avatarUrl.trim() !== '') {
        avatarContainer.innerHTML = `<img src="${prof.avatarUrl}" alt="${prof.name}">`;
      } else {
        avatarContainer.innerHTML = `<div class="avatar-monogram">CF</div>`;
      }
    }

    // Social Links
    const socialRow = document.getElementById('socialLinksRow');
    if (socialRow && prof.socials) {
      socialRow.innerHTML = prof.socials.map(soc => `
        <a href="${soc.url}" target="_blank" rel="noopener noreferrer" class="social-btn glass-button" title="${soc.name}">
          <i class="ph ${soc.icon}"></i>
          <span>${soc.name}</span>
        </a>
      `).join('');
    }
  },

  renderSkills() {
    const container = document.getElementById('skillsSlidersContainer');
    if (!container || !PORTFOLIO_DATA.skills) return;

    container.innerHTML = PORTFOLIO_DATA.skills.map((skill, index) => `
      <div class="skill-slider-card glass-card spotlight-card">
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.level}%</span>
        </div>
        <p class="skill-desc">${skill.description || ''}</p>
        <div class="slider-track">
          <div class="slider-fill" data-target-width="${skill.level}%" style="width: 0%"></div>
        </div>
      </div>
    `).join('');
  },

  animateSkillSliders() {
    const fills = document.querySelectorAll('.slider-fill');
    fills.forEach(fill => {
      const target = fill.getAttribute('data-target-width');
      if (target) {
        fill.style.width = target;
      }
    });
  },

  renderTools() {
    const container = document.getElementById('toolsContainer');
    if (!container || !PORTFOLIO_DATA.tools) return;

    container.innerHTML = PORTFOLIO_DATA.tools.map(tool => `
      <div class="tool-card glass-card spotlight-card">
        <div class="tool-icon-wrap">
          <i class="ph ${tool.icon || 'ph-app-window'}"></i>
        </div>
        <div class="tool-details">
          <h4 class="tool-name">${tool.name}</h4>
          <span class="tool-role">${tool.role} &bull; ${tool.level}</span>
        </div>
      </div>
    `).join('');
  },

  renderExperiences() {
    const container = document.getElementById('experienceTimelineContainer');
    if (!container || !PORTFOLIO_DATA.experiences) return;

    container.innerHTML = PORTFOLIO_DATA.experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card spotlight-card">
          <div class="timeline-header-row">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-company-row">
            <i class="ph ph-buildings"></i>
            <span><strong>${exp.company}</strong> &bull; ${exp.location}</span>
          </div>
          <p class="timeline-desc">${exp.description}</p>
        </div>
      </div>
    `).join('');
  },

  renderEducations() {
    const container = document.getElementById('educationContainer');
    if (!container || !PORTFOLIO_DATA.educations) return;

    container.innerHTML = PORTFOLIO_DATA.educations.map(edu => `
      <div class="education-card glass-card spotlight-card">
        <h3>${edu.degree}</h3>
        <div class="edu-institution">${edu.institution}</div>
        <span class="edu-period-tag">${edu.period}</span>
        <p class="edu-desc">${edu.description}</p>
      </div>
    `).join('');
  },

  renderSoftSkills() {
    const container = document.getElementById('softSkillsContainer');
    if (!container || !PORTFOLIO_DATA.softSkills) return;

    container.innerHTML = PORTFOLIO_DATA.softSkills.map(skill => `
      <div class="soft-skill-card glass-card spotlight-card">
        <div class="soft-skill-icon-wrap">
          <i class="ph ${skill.icon || 'ph-sparkle'}"></i>
        </div>
        <div class="soft-skill-details">
          <h4 class="soft-skill-name">${skill.name}</h4>
          <p class="soft-skill-desc">${skill.desc}</p>
        </div>
      </div>
    `).join('');
  },

  renderLanguages() {
    const container = document.getElementById('languagesContainer');
    if (!container || !PORTFOLIO_DATA.languages) return;

    container.innerHTML = PORTFOLIO_DATA.languages.map(lang => `
      <div class="language-card glass-card spotlight-card">
        <div class="language-icon-wrap">
          <i class="ph ${lang.icon || 'ph-translate'}"></i>
        </div>
        <div class="language-details">
          <div class="language-header-row">
            <h4 class="language-name">${lang.language}</h4>
            <span class="language-badge">${lang.level}</span>
          </div>
          <span class="language-status">${lang.badge}</span>
        </div>
      </div>
    `).join('');
  }
};

/* ==========================================================================
   MÓDULO 6: VIEW CONTATO & COPIAR E-MAIL
   ========================================================================== */
const ContactView = {
  init() {
    this.bindEvents();
    this.updateContactInfo();
  },

  updateContactInfo() {
    const prof = PORTFOLIO_DATA.profile;
    if (!prof) return;

    const emailDisplay = document.getElementById('emailDisplay');
    if (emailDisplay && prof.email) {
      emailDisplay.textContent = prof.email;
      emailDisplay.href = `mailto:${prof.email}`;
    }

    const whatsDisplay = document.getElementById('whatsDisplay');
    if (whatsDisplay && prof.whatsapp) {
      whatsDisplay.textContent = prof.whatsapp;
      whatsDisplay.href = prof.whatsappLink || `https://wa.me/${prof.whatsapp.replace(/\D/g, '')}`;
    }
  },

  bindEvents() {
    // Botão de copiar e-mail
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = PORTFOLIO_DATA.profile.email;
        navigator.clipboard.writeText(email).then(() => {
          ToastNotification.show('E-mail copiado para a área de transferência!');
        }).catch(() => {
          ToastNotification.show(email);
        });
      });
    }

    // Formulário de Contato
    const form = document.getElementById('portfolioContactForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formName').value;
        
        // Simulação elegante de envio com feedback Apple
        if (feedback) {
          feedback.style.display = 'block';
          feedback.innerHTML = `<strong>Obrigado, ${name}!</strong> Sua mensagem foi registrada. Entrarei em contato em breve.`;
        }

        ToastNotification.show('Mensagem enviada com sucesso!');
        form.reset();

        setTimeout(() => {
          if (feedback) feedback.style.display = 'none';
        }, 5000);
      });
    }
  }
};

/* ==========================================================================
   MÓDULO 7: MODAL / LIGHTBOX PRO PARA VÍDEOS & FOTOS
   ========================================================================== */
const MediaModal = {
  currentProjectId: null,
  activeList: [],

  init() {
    this.bindEvents();
  },

  bindEvents() {
    const modalBackdrop = document.getElementById('mediaModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const prevBtn = document.getElementById('modalPrevBtn');
    const nextBtn = document.getElementById('modalNextBtn');

    // Fechar ao clicar no botão X ou no backdrop
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
          this.close();
        }
      });
    }

    // Tecla ESC para fechar, setas para navegar
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('mediaModal');
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') this.close();
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
      }
    });

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
  },

  open(projectId) {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

    this.activeList = PORTFOLIO_DATA.projects;
    const project = this.activeList.find(p => p.id === projectId);
    if (!project) return;

    this.currentProjectId = projectId;

    const modal = document.getElementById('mediaModal');
    const viewport = document.getElementById('modalMediaViewport');
    const tag = document.getElementById('modalTag');
    const title = document.getElementById('modalTitle');
    const date = document.getElementById('modalDate');
    const desc = document.getElementById('modalDescription');
    const toolsUsed = document.getElementById('modalToolsUsed');
    const actionsGroup = document.getElementById('modalActionsGroup');

    // Preenche informações da categoria
    if (tag) tag.textContent = project.categoryLabel || project.category;

    // Renderiza a mídia no viewport
    if (viewport) {
      viewport.innerHTML = '';

      if (project.category === 'video' || project.mediaType === 'video') {
        // Se for embed do YouTube ou Vimeo
        if (project.mediaUrl && (project.mediaUrl.includes('youtube') || project.mediaUrl.includes('vimeo'))) {
          viewport.innerHTML = `
            <iframe 
              src="${project.mediaUrl}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          `;
        } else if (project.mediaUrl && project.mediaUrl.endsWith('.mp4')) {
          // Arquivo de vídeo MP4 local ou direto
          viewport.innerHTML = `
            <video controls autoplay playsinline style="max-height: 80vh; width: 100%; max-width: 100%; border-radius: var(--radius-md);">
              <source src="${project.mediaUrl}" type="video/mp4">
              Seu navegador não suporta reprodução de vídeo.
            </video>
          `;
        } else {
          // Fallback para thumbnail
          viewport.innerHTML = `<img src="${project.thumbnail}" alt="Visualização">`;
        }
      } else {
        // Imagem ou Foto HD
        const imgUrl = project.mediaUrl || project.thumbnail;
        viewport.innerHTML = `<img src="${imgUrl}" alt="Visualização" style="max-height: 85vh; width: auto; max-width: 100%; object-fit: contain;">`;
      }
    }

    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Evita scroll do body por trás
    }
  },

  close() {
    const modal = document.getElementById('mediaModal');
    const viewport = document.getElementById('modalMediaViewport');
    
    // Para vídeos ou áudios que estejam tocando ao fechar o modal
    if (viewport) viewport.innerHTML = '';

    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  },

  next() {
    if (!this.activeList || this.activeList.length === 0) return;
    const currentIndex = this.activeList.findIndex(p => p.id === this.currentProjectId);
    const nextIndex = (currentIndex + 1) % this.activeList.length;
    this.open(this.activeList[nextIndex].id);
  },

  prev() {
    if (!this.activeList || this.activeList.length === 0) return;
    const currentIndex = this.activeList.findIndex(p => p.id === this.currentProjectId);
    const prevIndex = (currentIndex - 1 + this.activeList.length) % this.activeList.length;
    this.open(this.activeList[prevIndex].id);
  }
};

/* ==========================================================================
   MÓDULO 8: TOAST NOTIFICATION
   ========================================================================== */
const ToastNotification = {
  toastElement: null,
  timeoutId: null,

  init() {
    this.toastElement = document.getElementById('toastNotification');
  },

  show(message, duration = 3000) {
    if (!this.toastElement) return;

    const messageEl = document.getElementById('toastMessage');
    if (messageEl) messageEl.textContent = message;

    this.toastElement.classList.add('active');

    if (this.timeoutId) clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.toastElement.classList.remove('active');
    }, duration);
  }
};
