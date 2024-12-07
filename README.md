1. Baixar e descompactar o arquivo ZIP do GitHub. Salvar os arquivos descompactados em sua máquina.

2. Pré-requisitos
Instale os seguintes softwares:
Node.js (versão 16 ou superior)
NPM (vem junto com o Node.js)
Verifique se o Node.js e o NPM estão instalados corretamente:

No terminal, execute:
node -v
npm -v
Isso deve exibir as versões instaladas.

3. Inicialize o projeto com o NPM:
npm init -y

Instale o Cypress como dependência de desenvolvimento:
npm install cypress --save-dev

Instale o plugin para visualizar o teste de api (cy.api):
npm i cypress-plugin-api
Adicione a linha de código no arquivo cypress/support/e2e.js:
import 'cypress-plugin-api'.
Agora para poder visualizar os passos do teste de API, execute o comando cy.api no lugar de cy.request

Abra o Cypress para configurar o projeto:
npx cypress open  
Isso criará uma estrutura de pastas (cypress/) e o arquivo de configuração cypress.config.js.
 
3. Criar Testes
Crie as pastas para organizar os testes:

mkdir cypress/e2e/frontend  
mkdir cypress/e2e/api  
Adicione arquivos de teste dentro das pastas criadas.
Exemplo:

Para frontend: cypress/e2e/frontend/testesfrontend.js
Para API: cypress/e2e/api/testesapi.js
Escreva os cenários de teste dentro desses arquivos utilizando Cypress.

4. Executar os Testes
Para abrir a interface do Cypress e executar os testes interativamente:
npx cypress open  
Para executar os testes diretamente no terminal:
npx cypress run
 
6. Validar os Resultados
Certifique-se de que os testes estão retornando os resultados esperados:

Status HTTP correto (ex.: 200, 201, etc.).
Mensagens específicas no corpo da resposta (ex.: "Login realizado com sucesso").
Verifique os logs gerados no terminal ou na interface do Cypress para confirmar a execução.

Caso algum teste falhe, use as mensagens de erro fornecidas pelo Cypress para identificar e corrigir o problema.
