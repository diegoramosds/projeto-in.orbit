# Escolha uma imagem base com Node.js
FROM node:18

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto para dentro do container
COPY . .

# Instale as dependências
RUN npm install

# Compile o código TypeScript
RUN npx tsc

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]
