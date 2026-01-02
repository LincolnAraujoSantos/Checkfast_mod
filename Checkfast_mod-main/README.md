# Checkfast

Checkfast é uma extensão para Google Chrome que permite gerar checklists no formato XLSX a partir de modelos pré-definidos, aplicando automaticamente a nomenclatura padrão com base no ticket da aba ativa, ID do usuário e data atual.

## Funcionalidades

- Inserção e armazenamento local do ID do usuário
- Seleção de modelos de checklist pré-definidos
- Extração automática do ticket a partir da URL da aba ativa
- Geração de arquivos XLSX com nomenclatura padronizada
- Download do checklist diretamente pelo popup da extensão

### Como funciona

1. O usuário informa seu ID e o salva localmente
2. A extensão identifica o ticket presente na URL da aba ativa
3. Um modelo de checklist é selecionado
4. O arquivo XLSX é gerado com o nome no padrão definido
5. O download é liberado automaticamente

### Como usar

1. Clique no ícone da extensão na barra de ferramentas do Chrome
2. Insira seu ID de usuário e clique em Save
3. Para apagar o ID salvo, clique em Clear
4. Escolha o modelo de checklist desejado
5. Clique em Create Checklist
6. Clique em Download para baixar o arquivo gerado

### Estrutura do Projeto
├── manifest.json
├── popup.html
├── popup.js
├── popup.css
├── models/
│   ├── QA_Prod_Standard_userName_DATE.xlsx
│   ├── QA_Prod_FOOTER_userName_DATE.xlsx
│   ├── QA_Prod_GNB_userName_DATE.xlsx
│   ├── QA_Prod_HOME_userName_DATE.xlsx
│   ├── QA_Prod_OFFER_userName_DATE.xlsx
│   ├── QA_Prod_PCD_userName_DATE.xlsx
│   ├── QA_Prod_PDP_userName_DATE.xlsx
│   ├── QA_Prod_PF_userName_DATE.xlsx
│   ├── QA_Prod_PFShomeapliences_userName_DATE.xlsx
│   ├── QA_Prod_PFSmobile_userName_DATE.xlsx
│   └── QA_Prod_Redirect_userName_DATE.xlsx
├── icon.png
└── README.md

### Descrição dos Arquivos

`manifest.json`: Define as configurações da extensão (Manifest V3), permissões, ícones e o popup padrão.
`popup.html`: Estrutura da interface do usuário exibida no popup da extensão.
`popup.css`: Estilos visuais do popup, incluindo layout, cores, botões e checkboxes personalizados.
`popup.js`: Lógica principal da extensão:

- Armazenamento do ID do usuário
- Leitura da URL da aba ativa
- Extração do ticket
- Controle de seleção de templates
- Geração do nome do arquivo
- Carregamento do modelo XLSX e download

`models/`: Contém os modelos de checklist no formato XLSX utilizados para geração dos arquivos.

### Padrão de Nomenclatura dos Arquivos

QA_Prod_<TICKET>_<USER_ID>_<YYMMDD>.xlsx


### Tecnologias Utilizadas

JavaScript (Vanilla JS)
HTML5
CSS3
Chrome Extensions API (Manifest V3)

### Permissões Utilizadas

tabs : Necessária para acessar a URL da aba ativa e extrair o ticket.
storage : Utilizada para salvar o ID do usuário localmente.

### Observações

- Apenas um modelo de checklist pode ser selecionado por vez
- O popup da extensão é fechado automaticamente após o download
- Os modelos XLSX são carregados localmente a partir da extensão

### Versão do Checklist

QA_Checklist_20250903_v4.0.3

*------------------------------------------------------*

# English version

# Checkfast

Checkfast is an extension for Google Chrome that allows you to generate checklists in XLSX format from predefined templates, automatically applying standard nomenclature based on the active tab ticket, user ID, and current date.

## Features

- Local insertion and storage of user ID
- Selection of predefined checklist templates
- Automatic ticket extraction from the active tab URL
- Generation of XLSX files with standardized nomenclature
- Download of the checklist directly from the extension popup

### How it works

1. The user enters their ID and saves it locally
2. The extension identifies the ticket present in the URL of the active tab
3. A checklist template is selected
4. The XLSX file is generated with the name in the defined standard
5. The download is automatically released

### How to use

1. Click on the extension icon in the Chrome toolbar
2. Enter your user ID and click Save
3. To delete the saved ID, click Clear
4. Choose the desired checklist template
5. Click Create Checklist
6. Click Download to download the generated file

### Project Structure

├── manifest.json
├── popup.html
├── popup.js
├── popup.css
├── models/
│   ├── QA_Prod_Standard_userName_DATE.xlsx
│   ├── QA_Prod_FOOTER_userName_DATE.xlsx
│   ├── QA_Prod_GNB_userName_DATE.xlsx
│   ├── QA_Prod_HOME_userName_DATE.xlsx
│   ├── QA_Prod_OFFER_userName_DATE.xlsx
│   ├── QA_Prod_PCD_userName_DATE.xlsx
│   ├── QA_Prod_PDP_userName_DATE.xlsx
│   ├── QA_Prod_PF_userName_DATE.xlsx
│   ├── QA_Prod_PFShomeapliences_userName_DATE.xlsx
│   ├── QA_Prod_PFSmobile_userName_DATE.xlsx
│   └── QA_Prod_Redirect_userName_DATE.xlsx
├── icon.png
└── README.md

### File Description

`manifest.json`: Defines the extension settings (Manifest V3), permissions, icons, and the default popup.
`popup.html`: Structure of the user interface displayed in the extension popup.
`popup.css`: Visual styles of the popup, including layout, colors, buttons, and custom checkboxes.
`popup.js`: Main logic of the extension:

- Storage of the user ID
- Reading the URL of the active tab
- Ticket extraction
- Template selection control
- File name generation
- XLSX template loading and download

`models/`: Contains the checklist templates in XLSX format used to generate the files.

### File Naming Standard

QA_Prod_<TICKET>_<USER_ID>_<YYMMDD>.xlsx

### Technologies Used

JavaScript (Vanilla JS)
HTML5
CSS3
Chrome Extensions API (Manifest V3)

### Permissions Used

tabs: Required to access the URL of the active tab and extract the ticket.
storage: Used to save the user ID locally.

### Notes

- Only one checklist template can be selected at a time.
- The extension popup closes automatically after downloading.
- XLSX templates are loaded locally from the extension.

### Checklist Version

QA_Checklist_20250903_v4.0.3

