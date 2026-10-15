# Christian Ferrari — Portfólio de Produtor Multimídia

Um site de portfólio moderno, minimalista e de padrão estético ultra-premium inspirado no design system da Apple, desenvolvido com HTML5, CSS3 puro (com Glassmorphism e Spotlight Effect dinâmico) e JavaScript modular.

O projeto está **100% pronto e otimizado para hospedagem gratuita no GitHub Pages**.

---

## ✨ Características Visuais & Técnicas

1. **Estética Apple Pro**:
   - Acabamento em *Space Black*, *Titanium Silver* e branco acetinado.
   - Efeito Glassmorphism com desfoque profundo e bordas translúcidas com reflexo especular de luz.
   - **Spotlight Effect**: Um feixe de luz dinâmico e reflexo sutil que segue as coordenadas do cursor do mouse em todos os cards e botões.

2. **Estrutura de Páginas & Abas**:
   - **Home (Início)**:
     - Hero Section com apresentação executiva de Produtor Multimídia.
     - Métricas rápidas em vidro.
     - **Seleção de Principais Trabalhos**: Bento Grid cinematográfico exibindo apenas os projetos marcados como destaque (`featured: true`).
     - Seção de Áreas de Atuação (Audiovisual, Fotografia & Still, Artes Visuais & Motion, Gestão de Tráfego Pago, Criação & Desenvolvimento Web, Desenvolvimento de Aplicativos).
   - **Portfólio Completo**:
     - Filtros em pílulas com contadores automáticos para **Todos**, **Vídeos**, **Fotos** e **Imagens & Artes**.
     - Barra de pesquisa instantânea em tempo real (busca por título, categoria ou softwares).
     - Cards com badge e ação rápida.
   - **Sobre Mim (Currículo Visual Interativo)**:
     - Perfil editorial com badge de disponibilidade e links diretos.
     - **Sliders de Habilidades**: Barras de proficiência com gradiente prateado espelhado e animação fluida ao abrir a aba.
     - **Softwares & Ferramentas**: Cards com Premiere, DaVinci Resolve, After Effects, Photoshop, Lightroom, Blender, etc.
     - **Linha do Tempo de Experiência**: Histórico profissional elegante com empresas, cargos e realizações.
     - **Formações Acadêmicas & Cursos**: Certificações e especializações.
   - **Contato**:
     - Botão de cópia rápida de e-mail com notificação Toast.
     - Link direto para WhatsApp e formulário de contato integrado.

3. **Lightbox / Player Modal Cinematográfico**:
   - Reproduz vídeos incorporados do YouTube/Vimeo e arquivos `.mp4`.
   - Exibe fotos e imagens em alta definição com descrição completa, data e softwares usados.
   - Navegação por setas (anterior / próximo) e tecla `ESC`.

---

## 🛠️ Como Personalizar Seus Dados e Projetos

Você não precisa mexer em estruturas complexas de código. Todas as informações do site ficam centralizadas no arquivo:

👉 **`js/content-data.js`**

### 1. Alterar suas informações pessoais e bio
Abra o arquivo `js/content-data.js` e modifique a seção `profile`:
```javascript
profile: {
  name: "Christian Ferrari",
  title: "Produtor Multimídia",
  bio: "Seu texto aqui...",
  email: "seu.email@exemplo.com",
  whatsapp: "+55 (11) 99999-9999",
  // Se quiser colocar sua foto de perfil:
  avatarUrl: "assets/images/sua-foto-de-perfil.jpg"
}
```

### 2. Adicionar ou alterar Projetos (Vídeos, Fotos e Imagens)
Na lista `projects` em `js/content-data.js`, você pode adicionar quantos projetos quiser:
- **Para Vídeos**: defina `category: "video"`, `mediaType: "video"` e coloque o link do YouTube, Vimeo ou arquivo local `.mp4`.
- **Para Fotos**: defina `category: "foto"`, `mediaType: "image"` e o caminho da imagem.
- **Para Imagens/Design**: defina `category: "imagem"`, `mediaType: "image"`.
- **Para colocar na HOME nos Destaques**: basta marcar `featured: true`!

Exemplo de projeto:
```javascript
{
  id: "meu-novo-video",
  title: "Nome do Projeto Audiovisual",
  category: "video",              // "video", "foto" ou "imagem"
  categoryLabel: "Comercial de TV",
  featured: true,                 // true = aparece na Home nos Destaques
  featuredSize: "large",          // "large", "medium" ou "wide"
  year: "2026",
  client: "Cliente XYZ",
  description: "Descrição do que você fez no projeto...",
  thumbnail: "assets/images/thumb-projeto.jpg",
  mediaType: "video",
  mediaUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
  tools: ["Premiere Pro", "DaVinci Resolve", "Sony FX3"]
}
```

### 3. Ajustar seus Sliders de Habilidades
Na seção `skills`, você altera a porcentagem de 0 a 100 no atributo `level`:
```javascript
{
  name: "Edição de Vídeo & Montagem Rítmica",
  level: 95, // 95%
  category: "Audiovisual",
  description: "Cortes de precisão e storytelling..."
}
```

---

## 🚀 Como Hospedar no GitHub Pages (Passo a Passo)

1. Crie um repositório no seu GitHub (exemplo: `portfolio` ou `christianferrari.github.io`).
2. Abra o terminal nesta pasta do projeto e execute os comandos:
   ```bash
   git init
   git add .
   git commit -m "Meu portfólio multimídia Christian Ferrari"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, acesse a aba **Settings** do seu repositório.
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
6. Em **Branch**, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
7. Pronto! Em 1 a 2 minutos seu site estará no ar com link público mundial (`https://seu-usuario.github.io/seu-repositorio/`).

---

Desenvolvido com excelência e sofisticação visual para Christian Ferrari.
