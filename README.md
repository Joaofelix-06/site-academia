# Template fitness premium

Site estático (HTML, CSS e JavaScript puros, sem build) para academias, personal trainers e estúdios.

## Estrutura

```
template-fitness/
├── index.html                 Estrutura das seções
├── robots.txt
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css         Cores, fontes, raios e espaçamentos
    │   ├── base.css           Reset, tipografia e utilitários
    │   ├── components/        buttons, placeholders, toast
    │   ├── layout/            header, footer
    │   └── sections/          um arquivo por seção
    ├── js/
    │   ├── config.js          Dados do cliente (único arquivo a editar)
    │   ├── utils.js           Helpers
    │   └── modules/           content, whatsapp, menu
    ├── images/                Fotos definitivas (veja README interno)
    └── icons/favicon.svg
```

## Executar
Abra `index.html` no navegador, ou sirva a pasta: `python3 -m http.server 8000`.

## Personalizar
- **Marca, WhatsApp, endereço, horários, links, seções ocultas, imagens:** `assets/js/config.js`
- **Cores, fontes e espaçamentos:** `assets/css/tokens.css`
- **Textos de modalidades, planos, FAQ e equipe:** `index.html` (procure os `[colchetes]`)
- **Depoimentos:** remova `"depoimentos"` de `hide` em `config.js` somente com conteúdo real e autorizado.

## Pendente de dados reais
Número de WhatsApp, fotos, endereço, horários, Instagram, e-mail, link do mapa, textos e preços dos planos, CREF e qualificações, domínio para `sitemap.xml`, título e meta description finais, imagem Open Graph.

## Observações
- Sem número de WhatsApp, os botões avisam que falta configurar.
- Não há formulário: o contato é por WhatsApp. Para adicionar um, conecte um serviço de envio real.
- As fontes vêm do Google Fonts; para uso offline, hospede-as localmente.