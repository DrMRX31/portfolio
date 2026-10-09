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
    "id": "proj-vid-1",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/Caio_FHD_OK.mp4",
    "thumbnail": "assets/videos/Caio_FHD_OK.mp4"
  },
  {
    "id": "proj-vid-2",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/Externa1v2_1080x1920.mp4",
    "thumbnail": "assets/videos/Externa1v2_1080x1920.mp4"
  },
  {
    "id": "proj-vid-3",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/Externa2_1080x1920.mp4",
    "thumbnail": "assets/videos/Externa2_1080x1920.mp4"
  },
  {
    "id": "proj-vid-4",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/Interna1_1080x1920.mp4",
    "thumbnail": "assets/videos/Interna1_1080x1920.mp4"
  },
  {
    "id": "proj-vid-5",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/Interna2_1080x1920.mp4",
    "thumbnail": "assets/videos/Interna2_1080x1920.mp4"
  },
  {
    "id": "proj-vid-6",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": true,
    "featuredSize": "large",
    "mediaType": "video",
    "mediaUrl": "assets/videos/SAN1.mp4",
    "thumbnail": "assets/videos/SAN1.mp4"
  },
  {
    "id": "proj-vid-7",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "video",
    "mediaUrl": "assets/videos/SAN2.mp4",
    "thumbnail": "assets/videos/SAN2.mp4"
  },
  {
    "id": "proj-vid-8",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "large",
    "mediaType": "video",
    "mediaUrl": "assets/videos/fitreels.mp4",
    "thumbnail": "assets/videos/fitreels.mp4"
  },
  {
    "id": "proj-vid-9",
    "category": "video",
    "categoryLabel": "Vídeo",
    "featured": false,
    "featuredSize": "wide",
    "mediaType": "video",
    "mediaUrl": "assets/videos/prontoHD.mp4",
    "thumbnail": "assets/videos/prontoHD.mp4"
  },
  {
    "id": "proj-foto-10",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CAFE.png",
    "thumbnail": "assets/photos/CAFE.png"
  },
  {
    "id": "proj-foto-11",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02454-Aprimorado-NR.jpg",
    "thumbnail": "assets/photos/CHR02454-Aprimorado-NR.jpg"
  },
  {
    "id": "proj-foto-12",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02474-Aprimorado-NR.jpg",
    "thumbnail": "assets/photos/CHR02474-Aprimorado-NR.jpg"
  },
  {
    "id": "proj-foto-13",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02568.jpg",
    "thumbnail": "assets/photos/CHR02568.jpg"
  },
  {
    "id": "proj-foto-14",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02703.jpg",
    "thumbnail": "assets/photos/CHR02703.jpg"
  },
  {
    "id": "proj-foto-15",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "large",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02706.jpg",
    "thumbnail": "assets/photos/CHR02706.jpg"
  },
  {
    "id": "proj-foto-16",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "large",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR02774.jpg",
    "thumbnail": "assets/photos/CHR02774.jpg"
  },
  {
    "id": "proj-foto-17",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR03492-2.jpg",
    "thumbnail": "assets/photos/CHR03492-2.jpg"
  },
  {
    "id": "proj-foto-18",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR03599.jpg",
    "thumbnail": "assets/photos/CHR03599.jpg"
  },
  {
    "id": "proj-foto-19",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR04704.jpg",
    "thumbnail": "assets/photos/CHR04704.jpg"
  },
  {
    "id": "proj-foto-20",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR04732.jpg",
    "thumbnail": "assets/photos/CHR04732.jpg"
  },
  {
    "id": "proj-foto-21",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR04945.jpg",
    "thumbnail": "assets/photos/CHR04945.jpg"
  },
  {
    "id": "proj-foto-22",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR05925.jpg",
    "thumbnail": "assets/photos/CHR05925.jpg"
  },
  {
    "id": "proj-foto-23",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR05972.jpg",
    "thumbnail": "assets/photos/CHR05972.jpg"
  },
  {
    "id": "proj-foto-24",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR06072.jpg",
    "thumbnail": "assets/photos/CHR06072.jpg"
  },
  {
    "id": "proj-foto-25",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR06094.jpg",
    "thumbnail": "assets/photos/CHR06094.jpg"
  },
  {
    "id": "proj-foto-26",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR06351.jpg",
    "thumbnail": "assets/photos/CHR06351.jpg"
  },
  {
    "id": "proj-foto-27",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR06380.jpg",
    "thumbnail": "assets/photos/CHR06380.jpg"
  },
  {
    "id": "proj-foto-28",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR06389.jpg",
    "thumbnail": "assets/photos/CHR06389.jpg"
  },
  {
    "id": "proj-foto-29",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR08010.jpg",
    "thumbnail": "assets/photos/CHR08010.jpg"
  },
  {
    "id": "proj-foto-30",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR08013.jpg",
    "thumbnail": "assets/photos/CHR08013.jpg"
  },
  {
    "id": "proj-foto-31",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/CHR08042.jpg",
    "thumbnail": "assets/photos/CHR08042.jpg"
  },
  {
    "id": "proj-foto-32",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/DSC02104.jpg",
    "thumbnail": "assets/photos/DSC02104.jpg"
  },
  {
    "id": "proj-foto-33",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9058.jpg",
    "thumbnail": "assets/photos/IMG_9058.jpg"
  },
  {
    "id": "proj-foto-34",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9072.jpg",
    "thumbnail": "assets/photos/IMG_9072.jpg"
  },
  {
    "id": "proj-foto-35",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9095.jpg",
    "thumbnail": "assets/photos/IMG_9095.jpg"
  },
  {
    "id": "proj-foto-36",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9152.jpg",
    "thumbnail": "assets/photos/IMG_9152.jpg"
  },
  {
    "id": "proj-foto-37",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9198.jpg",
    "thumbnail": "assets/photos/IMG_9198.jpg"
  },
  {
    "id": "proj-foto-38",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/IMG_9506.jpg",
    "thumbnail": "assets/photos/IMG_9506.jpg"
  },
  {
    "id": "proj-foto-39",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/SUCO_TORRADA.png",
    "thumbnail": "assets/photos/SUCO_TORRADA.png"
  },
  {
    "id": "proj-foto-40",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/almoco.png",
    "thumbnail": "assets/photos/almoco.png"
  },
  {
    "id": "proj-foto-41",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/banana_boleira.png",
    "thumbnail": "assets/photos/banana_boleira.png"
  },
  {
    "id": "proj-foto-42",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/bolobelgastoryu.png",
    "thumbnail": "assets/photos/bolobelgastoryu.png"
  },
  {
    "id": "proj-foto-43",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/bolocereja.png",
    "thumbnail": "assets/photos/bolocereja.png"
  },
  {
    "id": "proj-foto-44",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/bolostories.png",
    "thumbnail": "assets/photos/bolostories.png"
  },
  {
    "id": "proj-foto-45",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/mu.png",
    "thumbnail": "assets/photos/mu.png"
  },
  {
    "id": "proj-foto-46",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/photos/prett.png",
    "thumbnail": "assets/photos/prett.png"
  },
  {
    "id": "proj-foto-47",
    "category": "foto",
    "categoryLabel": "Foto",
    "featured": false,
    "featuredSize": "large",
    "mediaType": "image",
    "mediaUrl": "assets/photos/them.png",
    "thumbnail": "assets/photos/them.png"
  },
  {
    "id": "proj-img-48",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/001-feed.jpg",
    "thumbnail": "assets/images/001-feed.jpg"
  },
  {
    "id": "proj-img-49",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/0010-stories.jpg",
    "thumbnail": "assets/images/0010-stories.jpg"
  },
  {
    "id": "proj-img-50",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/002-stories.jpg",
    "thumbnail": "assets/images/002-stories.jpg"
  },
  {
    "id": "proj-img-51",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/003-horizontal.jpg",
    "thumbnail": "assets/images/003-horizontal.jpg"
  },
  {
    "id": "proj-img-52",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "large",
    "mediaType": "image",
    "mediaUrl": "assets/images/008-horizontal.jpg",
    "thumbnail": "assets/images/008-horizontal.jpg"
  },
  {
    "id": "proj-img-53",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/3.png",
    "thumbnail": "assets/images/3.png"
  },
  {
    "id": "proj-img-54",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/4.png",
    "thumbnail": "assets/images/4.png"
  },
  {
    "id": "proj-img-55",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/BELGASTORY.png",
    "thumbnail": "assets/images/BELGASTORY.png"
  },
  {
    "id": "proj-img-56",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/ESPACOBUSINESS.png",
    "thumbnail": "assets/images/ESPACOBUSINESS.png"
  },
  {
    "id": "proj-img-57",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/HOJESTORIES.png",
    "thumbnail": "assets/images/HOJESTORIES.png"
  },
  {
    "id": "proj-img-58",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/TORRADASTORY.png",
    "thumbnail": "assets/images/TORRADASTORY.png"
  },
  {
    "id": "proj-img-59",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/camarotes_ideia.png",
    "thumbnail": "assets/images/camarotes_ideia.png"
  },
  {
    "id": "proj-img-60",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/combotorradastory.png",
    "thumbnail": "assets/images/combotorradastory.png"
  },
  {
    "id": "proj-img-61",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/corpoealmastories.png",
    "thumbnail": "assets/images/corpoealmastories.png"
  },
  {
    "id": "proj-img-62",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/lukascamarote.png",
    "thumbnail": "assets/images/lukascamarote.png"
  },
  {
    "id": "proj-img-63",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/mrgymfitproducao.png",
    "thumbnail": "assets/images/mrgymfitproducao.png"
  },
  {
    "id": "proj-img-64",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/odc_5.png",
    "thumbnail": "assets/images/odc_5.png"
  },
  {
    "id": "proj-img-65",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/post_hashtag_gatilhos.png",
    "thumbnail": "assets/images/post_hashtag_gatilhos.png"
  },
  {
    "id": "proj-img-66",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": false,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/sopastory.png",
    "thumbnail": "assets/images/sopastory.png"
  },
  {
    "id": "proj-img-67",
    "category": "imagem",
    "categoryLabel": "Imagem",
    "featured": true,
    "featuredSize": "medium",
    "mediaType": "image",
    "mediaUrl": "assets/images/zefelipecamarote.png",
    "thumbnail": "assets/images/zefelipecamarote.png"
  }
]
};
