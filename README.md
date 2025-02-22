# 🚗Caruix
O mais eficiente gerenciador de estoque para concessionárias

## 📖O que é o projeto?
  O projeto CARUIX foi pensado como um gerenciador de estoque eficiente para concesionárias de veículos, oferecendo funções de cadastro e manipulação de listas de veículos, além de proteção com cadastro e login de funcionários, personalização de espaço de trabalho e muito mais, o projeto atualmente se encontra em desenvolvimento.

## 🛒Requerimentos

  Ter o Node instalado ( >= 20.13.1) e adicioná-lo ao path do Windows
  
  Ter um servidor ou um pacote de código aberto MYSQL, como o XAMPP, deixar ligado para manipulação do banco MYSQL
  
## ⚙️Funções

```
  1- Criação, edição e remoção de arquivos contendo as informações de veículos e usuários
  2- Inserção de imagens via hiperlinks
  3- Sistema de filtro da lista de veículos
  4- Gráficos contendo informações importantes
  5- Sistema de cadastro e login usando token de autenticação
  6- Estado Local de items para uso mais eficiente de internet
  7- Gerador de relatório sobre o estoque(faturamento das vendas, veículos vendidos vs veículos a venda, etc...)
```
## 💿Instruções para instalação e implementação do projeto

1- Baixe o projeto na aba Code do repositório, ou em um terminal GIT, execute `git clone https://github.com/Gabriel-Te/caruix.git`

2- Com o projeto aberto, execute no terminal `npm i` para instalar todas as dependencias necessárias

3- Cheque o arquivo .env-sample, lá terá algumas constantes usadas no código, renomeie PORT para a porta do BackEnd que você queira que ele escute, DATABASE_URL como um link da sua Database, BASE_BACKEND_URL trata-se da url que será exibida ao acionamento do BackEnd, é apenas semântico, e a SECRET, sendo uma constante usada nos processos de criptografia, escolha uma bem extensa e aleatória por precaução, com tudo isso feito, renomeie o arquivo para `.env`.

4- Certifique-se de ter uma aplicação MYSQL para executar os comandos do prisma `npx prisma db push` e `npx prisma generate` no terminal, assim, o banco será criado na database que você escolheu no .env com base no `schema.prisma`.

5- Com tudo definido, crie 2 terminais e execute em um deles `npm start`(liga o React Frontend) e, no outro, `npm run server`(liga o nosso Backend com --watch), os comandos podem ser alterados na `package.json`.

Pronto! agora é só acessar a aplicação no LocalHost

# 📸Imagens do Projeto (ainda em desenvolvimento)

## Login
![Login](https://github.com/user-attachments/assets/54952659-9e3a-4d8d-a8dc-aaaacb161b04)
## Registro
![Registro](https://github.com/user-attachments/assets/0968ea14-6543-4985-b51f-4cacb6ba3c41)
## Catálogo de veículos
![Catálogo de veículos](https://github.com/user-attachments/assets/e855b409-7cce-45da-a2f3-daf2f0162f8d)
## Catálogo de veículos com filtro
![Catálogo de veículos com filtro](https://github.com/user-attachments/assets/11a97964-e29d-4ec6-820b-b81090153739)
## Tela inicial com gráficos
![Tela inicial com gráficos](https://github.com/user-attachments/assets/20088520-8eb1-470d-8d14-b0b22e12c7a7)
## Tela do veículo quando pressionado
![Tela do veículo quando pressionado](https://github.com/user-attachments/assets/75a24400-8d41-4016-9010-6a729227a2a4)
## Tela de formulário dos veículos
![Tela de formulário dos veículos](https://github.com/user-attachments/assets/c5a6888c-4985-4ef1-a6ff-15eff4f5873d)
## Pop up de exclusão
![Pop up de exclusão](https://github.com/user-attachments/assets/d5e6ff2c-a17a-46a4-9247-89a4c2eb95a2)
## Tela de usuário com formulario de edição
![Tela de usuário com formulario de edição](https://github.com/user-attachments/assets/50a18595-110a-4fb9-b65a-f0e9a35fd3dd)
## Tela de relatório
![Tela de relatório](https://github.com/user-attachments/assets/533167c2-874c-4ca4-b486-c385b84df7ca)
## Relatório de estoque
![Relatório de estoque](https://github.com/user-attachments/assets/6f320481-7081-4487-b227-6fa8643b4e8c)
