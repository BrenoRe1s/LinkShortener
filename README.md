# 🔗 Link Shortener

Um simples **encurtador de URLs** desenvolvido com **Next.js (pages router)** e **Axios**, criado como projeto de estudo e demonstração para portfólio.  
O objetivo principal é praticar a integração entre **front-end** e **API Routes** do Next.js.

---

## 🚀 Funcionalidades

- Interface simples para inserir uma URL.
- Geração de uma URL encurtada fake (sem persistência).
- Exibição do link encurtado com opção de copiar para a área de transferência.
- Estrutura pronta para futura implementação de redirecionamento com página dinâmica `[id].tsx`.

---

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/) — React framework
- [Axios](https://axios-http.com/) — Requisições HTTP
- [Lucide React](https://lucide.dev/) — Ícones
- [TailwindCSS](https://tailwindcss.com/) — Estilização

---

## 📂 Estrutura do projeto
├── api/
│ └── shorten.ts # Endpoint que gera o link encurtado
└──index.tsx # Página principal com formulário e exibição

---

## ⚙️ Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/link-shortener.git
   cd link-shortener

2.Instale as dependências:

    npm install


3.Rode o projeto em modo de desenvolvimento:

    npm run dev

4.Acesse em:

    http://localhost:3000