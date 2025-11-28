import React, { useState, useEffect, useRef } from 'react';
import gabrielFoto from './assets/img/GABRIELPAIVA.png';
const saseImg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Menu, 
  X, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  BookOpen, 
  Star, 
  ChevronRight,
  Database,
  Layout,
  Server,
  Terminal,
  Coffee,      // Java
  Cpu,         // C/C++
  Package,     // Maven
  Table2,      // Pandas
  Smartphone,  // Swift
  MessageSquarePlus, // Avaliação
  Send,        // Enviar avaliação
  User,        // Ícone usuário form
  Building2    // Ícone empresa form
} from 'lucide-react';

// --- DADOS DO PORTFÓLIO ---

const PERSONAL_INFO = {
  name: "Gabriel Paiva",
  role: "Desenvolvedor Full Stack",
  bio: "Olá! Meu nome é Gabriel Paiva, sou um desenvolvedor apaixonado por transformar ideias complexas em soluções. Com experiência em IA, análise de dados e engenharia de software, unindo pesquisa acadêmica, prática em projetos e gestão de equipes para entregar soluções técnicas consistentes e orientadas a resultados.",
  phone: "(84) 9 9858-9298",
  email: "bengabrielcsp@gmail.com",
  github: "https://github.com/gabrdsp",
  linkedin: "https://linkedin.com/in/gabrielpaiva",
  location: "Brasil"
};

const SKILLS = [
  { name: "JavaScript", icon: <Code2 size={24} />, category: "Frontend" },
  { name: "React.js", icon: <Layout size={24} />, category: "Frontend" },
  { name: "Java", icon: <Coffee size={24} />, category: "Backend" },
  { name: "C / C++", icon: <Cpu size={24} />, category: "System" },
  { name: "Next.js", icon: <Server size={24} />, category: "Frontend" },
  { name: "Python", icon: <Terminal size={24} />, category: "Backend" },
  { name: "Pandas", icon: <Table2 size={24} />, category: "Data Science" },
  { name: "Swift", icon: <Smartphone size={24} />, category: "Mobile" },
  { name: "Maven", icon: <Package size={24} />, category: "Tools" },
  { name: "SQL / NoSQL", icon: <Database size={24} />, category: "Database" },
  { name: "Git & GitHub", icon: <Github size={24} />, category: "Tools" },
];

const EDUCATION = [
  {
    institution: "CWI Crescer",
    period: "2025",
    degree: "Treinamento Intensivo em Desenvolvimento de Software",
    description: "Programa de profissionalização focado em boas práticas e tecnologias de mercado."
  },
  {
    institution: "Universidade Federal Rural do Semi-Árido (UFERSA)",
    period: "2024 – Atual",
    degree: "Bacharelado em Ciência da Computação", 
    description: "Foco em algoritmos avançados e inteligência computacional."
  },
  {
    institution: "Rocketseat",
    period: "2024 – 2025",
    degree: "Especialização em Full Stack",
    description: "Desenvolvimento de aplicações completas utilizando stack moderna (React, Node, React Native)."
  },
  {
    institution: "Instituto Federal do Rio Grande do Norte (IFRN)",
    period: "2020 – 2023",
    degree: "Técnico em Informática",
    description: "Base sólida em lógica de programação, redes e desenvolvimento web básico."
  }
];

const RESEARCH = [
  {
    title: "Previsão de Tendências e Tópicos Virais para o Planejamento de Comunicação Corporativa com PLN e IA",
    lab: "Intelligence Computational Laboratory",
    tags: ["Inteligência Artificial", "PLN", "Python"],
    description: "Pesquisa focada no uso de processamento de linguagem natural para analisar grandes volumes de dados de redes sociais e prever tendências de mercado."
  },
  {
    title: "Machine learning aplicado ao ensino de cálculo avançado",
    lab: "Departamento de Ciências Exatas",
    tags: ["Educação", "Matemática", "Inteligência Artificial"],
    description: "Investigação sobre como ferramentas digitais e softwares gráficos podem auxiliar na compreensão de conceitos complexos de trigonometria no ensino superior."
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Sistema de Agendamento Clínico",
    description: "Plataforma para clínicas e consultórios gerenciarem agendamentos, pacientes e prontuários eletrônicos.",
    detailedDescription: "Sistema robusto focado na experiência do usuário (UX) para secretários e médicos. Possui funcionalidades de drag-and-drop para reagendamentos, notificações automáticas via WhatsApp e histórico completo do paciente.",
    tags: ["TypeScript", "Next.js", "Supabase"],
    image: saseImg,
    link: "#",
    repo: "https://github.com/gabrdsp"
  },
  {
    id: 2,
    title: "Sistema de Pedidos Farmacêuticos",
    description: "Aplicação web para gestão de pedidos, estoque e faturamento em drogarias.",
    detailedDescription: "Desenvolvido para otimizar o fluxo de trabalho de farmácias, permitindo o registro de pedidos, controle de estoque em tempo real e geração de relatórios gerenciais. Inclui integração com fornecedores para automatizar reposições e reduzir rupturas.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "https://github.com/gabrdsp"
  },
  {
    id: 3,
    title: "Sistema de Gerenciamento de Pet shop",
    description: "Sistema para controle de clientes, pets, serviços e agendamentos em pet shops.",
    detailedDescription: "Ferramenta completa para gestão de banho e tosa, vacinação, atendimento veterinário e vendas de produtos. Possui cadastro detalhado de pets e tutores, além de agenda visual para organizar a rotina da equipe.",
    tags: ["React", "Firebase", "Styled Components"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "https://github.com/gabrdsp"
  },
  {
    id: 4,
    title: "Daylight - Organização e Produtividade",
    description: "Aplicação focada em organização de estudos, tarefas e rotina, pensada para estudantes e profissionais.",
    detailedDescription: "O Daylight integra Kanban, listas de tarefas, calendário e acompanhamento de hábitos em uma única interface. Ideal para quem precisa conciliar faculdade, cursos e projetos pessoais, com métricas visuais de produtividade.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "https://github.com/gabrdsp"
  },
  {
    id: 5,
    title: "Sistema de Streaming",
    description: "Protótipo de plataforma de streaming com catálogo, autenticação e sistema de playlists.",
    detailedDescription: "Inspirado em grandes plataformas do mercado, esse sistema permite cadastro de usuários, gerenciamento de catálogo, criação de playlists e uma área administrativa para upload e gestão de conteúdo. Focado em escalabilidade e segurança com autenticação baseada em tokens.",
    tags: ["React", "Node.js", "JWT"],
    image: "https://images.unsplash.com/photo-1594904351111-7bcd590d0186?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "https://github.com/gabrdsp"
  }
];

const INITIAL_TESTIMONIALS = [
  {
    name: "Claíza Alves",
    role: "CEO da Drogaria Confiança",
    text: "O Gabriel entregou o projeto antes do prazo e com uma qualidade de código excepcional. A comunicação foi clara durante todo o processo."
  },
  {
    name: "Dr. Márcio Nascimento",
    role: "Médico Ultrassonografista na CLISP",
    text: "Profissional extremamente competente. Transformou nossa ideia vaga em um MVP funcional e visualmente impressionante."
  }
];

// --- COMPONENTES ---

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-slate-800 md:text-4xl relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
    </h2>
    {subtitle && <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col md:flex-row animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20 backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
          <div className="mb-6">
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{project.title}</h3>
             <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none mb-8">
            <h4 className="text-lg font-bold text-slate-800 mb-2">Sobre o Projeto</h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              {project.detailedDescription || project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all font-bold text-lg group"
            >
              <ExternalLink size={20} className="group-hover:-translate-y-0.5 transition-transform" /> 
              Ver Online
            </a>
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl hover:border-slate-800 hover:text-slate-900 transition-all font-bold text-lg"
            >
              <Github size={20} /> Ver Código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role && text) {
      onSubmit({ name, role, text });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-slideUp">
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Deixe sua Avaliação</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-slate-400" size={18} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Empresa / Cargo</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                <input 
                  type="text" 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Ex: CEO da TechCorp"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Seu Comentário</label>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Conte como foi sua experiência..."
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-32 resize-none transition-all"
                required
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-600/20"
          >
            <Send size={18} /> Enviar Avaliação
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [scrolled, setScrolled] = useState(false);
  
  // --- CAROUSEL LOGIC ---
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(2); // Começa no index 2 (Projeto 3)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Efeito para centralizar o Projeto 3 na inicialização
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Calcula o centro: (Largura do Card + Gap) * Index - (Metade da Tela) + (Metade do Card)
      // Ajuste fino pode ser necessário dependendo do tamanho exato da tela
      const cardWidth = 420; // 400px width + 20px (metade do gap 40px aprox)
      const initialScroll = (cardWidth * 2) - (window.innerWidth / 2) + (cardWidth / 2);
      
      // Centraliza melhor no mobile e desktop
      const cardElement = container.children[2]; // Pega o terceiro elemento
      if (cardElement) {
          const scrollPos = cardElement.offsetLeft - (container.clientWidth / 2) + (cardElement.clientWidth / 2);
          container.scrollLeft = scrollPos;
      }
    }
  }, []);

  // Detectar qual item está no centro durante o scroll
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    
    if (scrollRef.current) {
      const container = scrollRef.current;
      const centerPoint = container.scrollLeft + (container.clientWidth / 2);
      
      const cards = Array.from(container.children);
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + (card.clientWidth / 2);
        const distance = Math.abs(centerPoint - cardCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    }
  };

  // Drag logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplicador de velocidade
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Setup scroll listener window
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (activeProject || isReviewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject, isReviewModalOpen]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewReview = (newReview) => {
    setTestimonials([...testimonials, newReview]);
  };

  const navLinks = [
    { name: "Sobre", id: "about" },
    { name: "Tecnologias", id: "skills" },
    { name: "Formação", id: "education" },
    { name: "Pesquisas", id: "research" },
    { name: "Projetos", id: "projects" },
    { name: "Avaliações", id: "testimonials" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-slate-800 tracking-tighter">
            gabriel<span className="text-blue-600">paiva</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="group relative text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors pb-1"
              >
                {link.name}
                <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700"
            >
              <Github size={20} />
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4 lg:hidden">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 px-4 hover:bg-slate-50 rounded-lg text-slate-600 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 -top-16 w-80 h-80 rounded-full bg-blue-600/40 blur-3xl" />
          <div className="absolute right-[-80px] top-0 w-96 h-96 rounded-full bg-blue-300/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Desenvolvedor Full-Stack
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Transformando códigos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">soluções reais.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Olá, sou Gabriel Paiva. Desenvolvedor Full Stack focado em criar experiências digitais memoráveis e arquiteturas robustas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                Vamos Conversar <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={gabrielFoto} 
                    alt="Gabriel Paiva" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-0 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionTitle>Sobre Mim</SectionTitle>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">De aluno pesquisador a Desenvolvedor Full Stack</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Minha jornada começou no IFRN desenvolvendo a base em lógica de programação, redes e desenvolvimento de sistemas. Atualmente, curso Bacharelado em Tecnologia da Informação e Engenharia de Software na UFERSA, ampliando minha formação, com foco em Inteligência Artificial, análise de dados e desenvolvimento full-stack. Nesse percurso, também me aperfeiçoei em programas como CWI Crescer e Rocketseat, com foco em clean code e práticas modernas de desenvolvimento.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="block text-3xl font-bold text-blue-600 mb-1">3+</span>
                  <span className="text-sm text-slate-600 font-medium">Anos de Estudo</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="block text-3xl font-bold text-blue-600 mb-1">10+</span>
                  <span className="text-sm text-slate-600 font-medium">Projetos Realizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECNOLOGIAS --- */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Ferramentas e tecnologias que utilizo para dar vida aos projetos.">
            Tech Stack
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
              >
                <div className="mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-700 text-center">{skill.name}</span>
                <span className="text-xs text-slate-400 mt-1">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORMAÇÃO (TIMELINE) --- */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionTitle>Trajetória Acadêmica</SectionTitle>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-8 space-y-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-sm"></div>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{edu.institution}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mt-2 md:mt-0 w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-slate-700 font-medium">
                    <GraduationCap size={18} className="text-blue-500" />
                    {edu.degree}
                  </div>
                  <p className="text-slate-600 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PESQUISAS ACADÊMICAS --- */}
      <section id="research" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Pesquisa & Ciência</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Contribuições científicas desenvolvidas durante minha jornada acadêmica.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {RESEARCH.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <BookOpen className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-3 leading-tight text-slate-100">
                  "{item.title}"
                </h3>
                <p className="text-blue-400 text-sm font-semibold mb-4">{item.lab}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700 rounded-full border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </section>

      {/* --- PROJETOS (CARROSSEL DRAG-TO-SCROLL) --- */}
      <section id="projects" className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto relative">
          <SectionTitle subtitle="Arraste para explorar os projetos. O destaque está no centro.">
            Projetos em Destaque
          </SectionTitle>

          {/* Container do Carrossel */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing px-[10%] md:px-[30%] py-12 snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {PROJECTS.map((project, index) => {
              const isCenter = index === centerIndex;
              return (
                <div 
                  key={project.id} 
                  className={`
                    relative flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out snap-center
                    ${isCenter ? 'scale-100 opacity-100 z-10 ring-4 ring-blue-500/20' : 'scale-90 opacity-60 hover:scale-95 hover:opacity-90 grayscale-[30%] hover:grayscale-0'}
                  `}
                  onClick={() => !isDragging && setActiveProject(project)}
                >
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                  <div className="p-6 bg-white h-full border-t border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- AVALIAÇÕES --- */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionTitle>O que dizem sobre mim</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl relative text-left animate-fadeIn">
                <Star className="text-yellow-400 mb-4 fill-yellow-400" size={24} />
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setIsReviewModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm group"
          >
            <MessageSquarePlus size={20} className="group-hover:scale-110 transition-transform"/>
            Avalie sua experiência!
          </button>
        </div>
      </section>

      {/* --- CONTATO & FOOTER --- */}
      <section id="contact" className="py-24 bg-[#0B1121] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos construir algo incrível juntos?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Estou sempre aberto a novos desafios e parcerias. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato.
          </p>

          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-900/20 mb-16"
          >
            <Mail size={20} /> Diga Olá
          </a>

          <div className="flex justify-center gap-12 mb-20">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-slate-800/50 rounded-full group-hover:bg-blue-600/20 transition-colors">
                <Linkedin size={24} className="text-slate-400 group-hover:text-blue-500" />
              </div>
              <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300">LinkedIn</span>
            </a>
            
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-slate-800/50 rounded-full group-hover:bg-blue-600/20 transition-colors">
                <Github size={24} className="text-slate-400 group-hover:text-blue-500" />
              </div>
              <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300">GitHub</span>
            </a>

            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-slate-800/50 rounded-full group-hover:bg-blue-600/20 transition-colors">
                <Download size={24} className="text-slate-400 group-hover:text-blue-500" />
              </div>
              <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300">Currículo</span>
            </a>
          </div>

          <div className="border-t border-slate-800/50 pt-8">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Gabriel Paiva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

      {/* --- MODAL DO PROJETO --- */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* --- MODAL DE AVALIAÇÃO --- */}
      {isReviewModalOpen && (
        <ReviewModal 
          onClose={() => setIsReviewModalOpen(false)} 
          onSubmit={handleNewReview}
        />
      )}
    </div>
  );
}