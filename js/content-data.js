/**
 * =========================================================================
 * CHRISTIAN FERRARI - PORTFÓLIO MULTIMÍDIA
 * ARQUIVO DE CONFIGURAÇÃO E DADOS DE CONTEÚDO
 * =========================================================================
 * 
 * Olá, Christian! Este é o painel central de conteúdo do seu site.
 * Tudo o que você vê no site (seus projetos, habilidades, textos, vídeos, 
 * fotos e experiências) é configurado aqui de forma simples e intuitiva.
 * 
 * DICAS RÁPIDAS:
 * 1. Para adicionar fotos suas: você pode colocar seus arquivos na pasta "assets/images/" 
 *    e colocar o caminho relativo (ex: "assets/images/meu-projeto.jpg") ou usar URLs online.
 * 2. Para vídeos: você pode usar links do YouTube, Vimeo ou arquivos diretos de vídeo (.mp4).
 * 3. Para escolher o que aparece na HOME: basta marcar `featured: true` no projeto desejado!
 * 4. Para ajustar seus sliders de habilidade: altere o número de 0 a 100 no atributo `level`.
 */

const PORTFOLIO_DATA = {
  // -------------------------------------------------------------
  // INFORMAÇÕES PESSOAIS & CABEÇALHO
  // -------------------------------------------------------------
  profile: {
    name: "Christian Ferrari",
    title: "Produtor Multimídia",
    location: "Brasil",
    status: "Disponível para novos projetos e produções",
    // Se quiser colocar uma foto sua de perfil no "Sobre Mim", coloque o caminho aqui:
    // ex: "assets/images/christian-ferrari-perfil.jpg". Se deixar vazio ou nulo, exibirá o monograma estilizado "CF".
    avatarUrl: "assets/images/pfp.webp",
    
    // Bio apresentada na página Sobre Mim
    bio: "Produtor Multimídia focado em transformar conceitos criativos em narrativas visuais com atmosfera cinematográfica e acabamento refinado. Com domínio de todas as fases da cadeia produtiva — desde a concepção de roteiro, direção de arte e captação até a montagem rítmica, pós-produção avançada, color grading e sound design —, meu objetivo é criar obras que impactem o público e elevem marcas a outro nível.",
    
    // Contato direto
    email: "christianferrari61@gmail.com",
    whatsapp: "+55 (47) 99280-8271", // Coloque seu número aqui
    whatsappLink: "https://wa.me/5547992808271", // Link direto para conversa
    
    // Link para download do currículo ou deck de apresentação (PDF)
    resumePdfUrl: "#", 
    
    // Redes Sociais e Perfis Profissionais
    socials: [
      { name: "Instagram", icon: "ph-instagram-logo", url: "https://www.instagram.com/cferraari_/" },
    ]
  },

  // -------------------------------------------------------------
  // HABILIDADES & SLIDERS (SOBRE MIM)
  // Altere o nível de proficiência de 0 a 100 como desejar
  // -------------------------------------------------------------
  skills: [
    {
      name: "Edição de Vídeo & Montagem Rítmica",
      level: 95,
      category: "Audiovisual",
      description: "Cortes de precisão, narrativa dinâmica, storytelling envolvente e sincronismo áudio-visual."
    },
    {
      name: "Color Grading & Finalização (ACES/Rec.709)",
      level: 90,
      category: "Audiovisual",
      description: "Tratamento de cores cinematográfico, correspondência de câmeras, curvas e looks personalizados."
    },
    {
      name: "Captação de Câmera & Direção de Fotografia",
      level: 88,
      category: "Fotografia & Vídeo",
      description: "Iluminação de cena (três pontos, dramática), composição de planos e operação de cinema rigs."
    },
    {
      name: "Motion Graphics & Efeitos Visuais (VFX)",
      level: 85,
      category: "Artes & Animação",
      description: "Animação tipográfica, tracking de câmera, rotoscopia, composições dinâmicas para mídias."
    },
    {
      name: "Fotografia Publicitária & Retrato de Estúdio",
      level: 92,
      category: "Fotografia",
      description: "Ensaio fotográfico, direção de pessoas, luz contínua/flash e tratamento avançado no Lightroom."
    },
    {
      name: "Design Visual, Identidade & Composição",
      level: 86,
      category: "Design",
      description: "Criação de key visuals, posters de lançamento, peças promocionais e estética contemporânea."
    },
    {
      name: "Sound Design & Mixagem de Áudio",
      level: 82,
      category: "Áudio",
      description: "Trilha sonora imersiva, limpeza de ruídos, efeitos foley e ambientação sonoplastica."
    }
  ],

  // -------------------------------------------------------------
  // FERRAMENTAS & SOFTWARES (SOBRE MIM)
  // Ícones e ferramentas que você domina
  // -------------------------------------------------------------
  tools: [
    { name: "Adobe Premiere Pro", role: "Edição & Montagem", icon: "ph-film-strip", level: "Avançado" },
    { name: "DaVinci Resolve", role: "Color Grading & Áudio Fairlight", icon: "ph-palette", level: "Avançado" },
    { name: "Adobe After Effects", role: "Motion Design & VFX", icon: "ph-magic-wand", level: "Avançado" },
    { name: "Adobe Photoshop", role: "Tratamento & Manipulação", icon: "ph-image", level: "Especialista" },
    { name: "Adobe Lightroom", role: "Tratamento RAW & Cores", icon: "ph-aperture", level: "Especialista" },
    { name: "Adobe Illustrator", role: "Vetores & Identidade Visual", icon: "ph-vector-three", level: "Intermediário" },
  ],

  // -------------------------------------------------------------
  // EXPERIÊNCIA PROFISSIONAL / LUGARES QUE TRABALHOU (SOBRE MIM)
  // Preencha ou modifique a ordem e os dados das empresas
  // -------------------------------------------------------------
  experiences: [
    {
      role: "Produtor Multimídia Sênior / Diretor Criativo",
      company: "Studio Criativo & Produções Audiovisuais",
      period: "2023 — Presente",
      location: "São Paulo, SP",
      description: "Liderança de produções audiovisuais completas para marcas e campanhas publicitárias. Direção de cena, coordenação de equipe de captação, montagem dos cortes principais e supervisão de color grading e masterização final."
    },
    {
      role: "Editor de Vídeo & Colorista",
      company: "Produtora Audiovisual & Cinema Independente",
      period: "2021 — 2023",
      location: "Remoto / Híbrido",
      description: "Edição de videoclipes, campanhas institucionais e comerciais de TV/web. Tratamento de cor nos padrões Rec.709 e DCI-P3 no DaVinci Resolve, além de criação de vinhetas em Motion Graphics."
    },
    {
      role: "Fotógrafo & Designer Multimídia",
      company: "Agência de Publicidade & Conteúdo Digital",
      period: "2019 — 2021",
      location: "Brasil",
      description: "Produção de fotos de produtos (still), retratos corporativos, cobertura de eventos de grande porte e pós-produção minuciosa com retoque de pele de alta frequência e composição visual."
    }
  ],

  // -------------------------------------------------------------
  // FORMAÇÕES ACADÊMICAS & CURSOS (SOBRE MIM)
  // -------------------------------------------------------------
  educations: [
    {
      degree: "Bacharelado em Produção Multimídia / Audiovisual",
      institution: "Universidade / Faculdade de Comunicação",
      period: "Concluído",
      description: "Fundamentos de cinema, direção de fotografia, estética da imagem, roteirização, semiótica e comunicação transmídia."
    },
    {
      degree: "Masterclass de Color Grading Profissional",
      institution: "Academia de Pós-Produção Audiovisual",
      period: "Certificação Internacional",
      description: "Especialização em DaVinci Resolve Studio, ciência de cores, fluxo ACES, calibração e emulação analógica de película cinematográfica (35mm / 16mm)."
    },
    {
      degree: "Especialização em Motion Design & Animação 2D/3D",
      institution: "Escola de Artes Visuais Digitais",
      period: "Certificação Avançada",
      description: "Princípios clássicos de animação aplicados a branding dinâmico, expressões em After Effects e integração 3D."
    },
    {
      degree: "Workshop Avançado de Iluminação Cinematográfica",
      institution: "Instituto de Cinema",
      period: "Certificação Prática",
      description: "Técnicas de iluminação de set, controle de contraste, uso de difusores, modificadores de luz e operação de câmeras de cinema digital."
    }
  ],

  // -------------------------------------------------------------
  // PROJETOS DO PORTFÓLIO
  // -------------------------------------------------------------
  // CATEGORIAS SUPORTADAS:
  // - "video"   (sessão de vídeos)
  // - "foto"    (sessão de fotos)
  // - "imagem"  (sessão de imagens / design / concept art)
  //
  // PARA DEFINIR SE O PROJETO VAI PARA A HOME:
  // - Coloque `featured: true` no projeto!
  //
  // TIPOS DE MÍDIA SUPORTADOS NO MODAL:
  // - "video": pode ser arquivo MP4 ou URL do YouTube/Vimeo (embed automático)
  // - "image": URL de imagem em alta definição (JPG, PNG, WebP)
  // -------------------------------------------------------------
  projects: [
    {
      id: "lumina-cinematic-film",
      title: "Lumina: A Essência do Movimento",
      category: "video",
      categoryLabel: "Vídeo Cinematográfico",
      featured: true, // EXIBE NA HOME COMO DESTAQUE
      featuredSize: "large", // "large" para card de destaque amplo no bento grid
      year: "2025",
      client: "Campanha Conceito",
      description: "Filme comercial conceitual focado em texturas, iluminação dramática e contrastes dinâmicos. A produção explorou movimentos fluidos de câmera e uma colorimetria inspirada em filmes modernos de ficção científica.",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      mediaType: "video",
      // Exemplo de vídeo embed de alta qualidade (pode ser trocado por seu vídeo do YouTube ou arquivo local .mp4)
      mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      tools: ["Blackmagic RAW", "DaVinci Resolve", "Premiere Pro", "Sound Design 5.1"],
      link: "#"
    },
    {
      id: "aurora-editorial-photo",
      title: "Editorial Urbano: Linhas & Sombras",
      category: "foto",
      categoryLabel: "Fotografia Editorial",
      featured: true, // EXIBE NA HOME COMO DESTAQUE
      featuredSize: "medium",
      year: "2025",
      client: "Coleção Urbana",
      description: "Sessão fotográfica externa explorando a geometria da arquitetura metropolitana contemporânea em contraste com tons metálicos e iluminação dourada do entardecer.",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=90",
      tools: ["Sony A7 IV", "Lente 85mm f/1.4", "Lightroom CC", "Retoque High-End"],
      link: "#"
    },
    {
      id: "neo-branding-visuals",
      title: "Identidade Tridimensional Neo",
      category: "imagem",
      categoryLabel: "Artes Visuais & 3D",
      featured: true, // EXIBE NA HOME COMO DESTAQUE
      featuredSize: "medium",
      year: "2025",
      client: "Tech Brand Rebrand",
      description: "Composição de key visual e exploração tipográfica com materiais cromados, reflexos translúcidos inspirados no design industrial e atmosfera minimalista futurista.",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=90",
      tools: ["Cinema 4D", "Octane Render", "Photoshop", "Figma"],
      link: "#"
    },
    {
      id: "sound-pulse-clip",
      title: "Ritmo & Frequência: Videoclipe Oficial",
      category: "video",
      categoryLabel: "Videoclipe & Pós-Produção",
      featured: true, // EXIBE NA HOME COMO DESTAQUE
      featuredSize: "wide",
      year: "2024",
      client: "Artista Musical Independente",
      description: "Direção de pós-produção e efeitos visuais com transições sincronizadas no beat, cortes caleidoscópicos e tratamento de cor denso com tons prateados e azulados.",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
      tools: ["Premiere Pro", "After Effects", "Plugins BorisFX", "Sound Design"],
      link: "#"
    },
    {
      id: "studio-portrait-monochrome",
      title: "Monocromático: Ensaio de Alta Fidelidade",
      category: "foto",
      categoryLabel: "Fotografia de Retrato",
      featured: true, // EXIBE NA HOME
      featuredSize: "medium",
      year: "2024",
      client: "Portfólio Pessoal",
      description: "Estudo intimista em preto e branco explorando sombras profundas, texturas de pele autênticas e gradientes suaves de cinza e prata através de modificadores de luz dedicados.",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=90",
      tools: ["Canon R5", "Profoto B10X", "Lightroom Classic", "Curvas Analógicas"],
      link: "#"
    },
    {
      id: "kinetic-motion-rebrand",
      title: "Cinética Tipográfica & Motion System",
      category: "imagem",
      categoryLabel: "Design & Motion Graphics",
      featured: false,
      year: "2024",
      client: "Plataforma de Streaming",
      description: "Desenvolvimento de sistema de motion design responsivo para telões de evento e transmissões ao vivo. Foco em tipografia suíça animada e fluidez visual.",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=90",
      tools: ["After Effects", "Illustrator", "Expressions JS"],
      link: "#"
    },
    {
      id: "documentary-short",
      title: "Vozes do Ofício: Mini-Documentário",
      category: "video",
      categoryLabel: "Documentário & Reportagem",
      featured: false,
      year: "2024",
      client: "Série Cultural",
      description: "Captação documental em 4K retratando o trabalho de artesãos locais. Tratamento de áudio direto com foco em naturalidade vocal e trilha intimista acústica.",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1",
      tools: ["Sony FX3", "Microfones Sennheiser", "DaVinci Resolve 19"],
      link: "#"
    },
    {
      id: "macro-architecture-photo",
      title: "Silhuetas & Geometria Espacial",
      category: "foto",
      categoryLabel: "Fotografia Arquitetônica",
      featured: false,
      year: "2024",
      client: "Revista de Design",
      description: "Registro de edifícios contemporâneos destacando padrões repetitivos, vidro refletivo e ângulos minimalistas com máxima nitidez de ponta a ponta.",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=90",
      tools: ["Sony A7R V", "Lente Tilt-Shift 24mm", "Photoshop"],
      link: "#"
    },
    {
      id: "abstract-titanium-render",
      title: "Metamorfose do Titânio: Arte Abstrata",
      category: "imagem",
      categoryLabel: "Concept Art & Render 3D",
      featured: false,
      year: "2024",
      client: "Exploração Criativa",
      description: "Experimento de iluminação cáustica e simulação de metais líquidos escovados com acabamento acetinado estilo titânio natural.",
      thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1920&q=90",
      tools: ["Blender Cycles", "Substance Designer", "Photoshop Camera Raw"],
      link: "#"
    }
  ]
};
