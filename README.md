# AKS - Tech

Site institucional da AKS - Tech, desenvolvido com React 19, TypeScript e Vite 8.

## Requisitos

- Node.js (versão 20+ ou 22 recomendada)
- npm

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run lint`: Executa a validação estática de código com ESLint.
- `npm run build`: Compila o TypeScript e gera os arquivos otimizados para produção na pasta `dist/`.
- `npm run preview`: Executa localmente o servidor de visualização do build de produção.

## Estrutura de Pastas

```text
aks-tech-site/
├── public/                # Recursos estáticos (imagens, ícones)
│   └── images/
├── src/
│   ├── assets/            # Ativos estáticos internos
│   ├── components/        # Componentes compartilhados (Header, Footer)
│   ├── config/            # Configurações compartilhadas (ex.: contato e WhatsApp)
│   ├── features/          # Módulos e seções por funcionalidade
│   │   ├── contact/       # Seção de contato e formulário
│   │   └── home/          # Seções da página principal (Hero, Serviços, Projetos, etc.)
│   ├── styles/            # Tokens visuais (tokens.css) e estilos de seções (sections.css)
│   ├── App.tsx            # Componente raiz da aplicação
│   ├── index.css          # Estilos globais e Hero
│   └── main.tsx           # Ponto de entrada da aplicação
├── index.html             # Template HTML principal
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configurações do TypeScript
└── vite.config.ts         # Configuração do Vite
```

## Publicação na Vercel

Configurações recomendadas para deploy na Vercel:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
