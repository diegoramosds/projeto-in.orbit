# 🚀 in.orbit – Gerenciador de Metas Semanais

## 📽️ Demonstração  
![in orbit](https://github.com/user-attachments/assets/cf8cd7b7-6510-43d6-8c5b-b5b388d3696a)


---

## 📋 Sobre o Projeto

Este projeto é uma aplicação de **gestão de metas semanais**, desenvolvida durante o evento **Rocketseat - NLW Pocket: JavaScript**.  
Seu principal objetivo é permitir que os usuários criem, acompanhem e concluam metas ao longo da semana, mantendo um controle visual do progresso.

A aplicação foi construída com **TypeScript** tanto no frontend quanto no backend, e utiliza o **Drizzle ORM** para facilitar a comunicação com o banco de dados relacional **PostgreSQL**.  
Com a ajuda da biblioteca **Day.js**, a aplicação consegue determinar com precisão o início e o fim da semana, além de realizar cálculos de datas.
A aplicação também possui validações que impedem a marcação de uma meta como concluída mais vezes do que o permitido durante a semana.

---

## 🚀 Tecnologias Utilizadas

- ✔️ **TypeScript** – Linguagem principal para lógica do frontend e backend  
- ✔️ **Node.js** – Backend e construção da API RESTful  
- ✔️ **Drizzle ORM** – Abstração e interação com o banco de dados  
- ✔️ **PostgreSQL** – Banco de dados relacional para armazenar metas e conclusões  
- ✔️ **SQL** – Queries avançadas com agregação e agrupamento  
- ✔️ **Day.js** – Manipulação e cálculo de datas semanais  
- ✔️ **HTML/CSS** – Estrutura e estilização da interface  

---

## ✨ Destaques

### **🗓️ Criação e Gerenciamento de Metas**
Permite ao usuário criar metas semanais e acompanhar seu progresso com base na semana atual.

### **📊 Resumo Visual por Semana**
Exibe estatísticas diárias de metas concluídas, com agrupamento e contagem via SQL.

### **✅ Validação de Conclusões**
Garante que metas não sejam concluídas mais vezes do que o previsto para a semana.

### **🧠 Manipulação de Datas**
Utiliza **Day.js** para definir corretamente o início e fim da semana e realizar cálculos relacionados ao tempo.

### **🔎 Consulta e Agrupamento no Banco de Dados**
Utiliza SQL e **Drizzle ORM** para agrupar, contar e filtrar dados diretamente no PostgreSQL.

---
## ▶️ Passo a Passo  

### 🛠 **Executando a API**  

1️⃣ **Clone o repositório**:  
```bash
git clone https://github.com/diegoramosds/projeto-in.orbit.git

```

2️⃣ **Acesse o diretório da API** no terminal.
```bash
cd backend
```

3️⃣ Execute para instalar as dependências do projeto.
```bash
npm install
```

4️⃣ Execute para iniciar o servidor da API.
```bash
npm run dev
```

5️⃣ Aguarde até que a API esteja rodando e ouvindo requisições na porta especificada.

<br>

### 💻 **Executando a Aplicação React** 

1️⃣ Acesse o diretório da aplicação React no terminal.
```bash
cd frontend
cd web
```

2️⃣ Execute  para instalar as dependências do projeto.
```bash
npm install
```

3️⃣ Execute  para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
4️⃣ Aguarde até que a aplicação seja compilada e inicie no navegador.

5️⃣ Acesse a aplicação pelo navegador no endereço fornecido pelo terminal.
