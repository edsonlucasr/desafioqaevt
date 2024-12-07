describe('Validar login com sucesso', () => {
  it('Login deve ser realizado com sucesso', () => {
    cy.visit('https://front.serverest.dev/');
    cy.get('input[name="email"]').type('testefront@testeevt.com');
    cy.get('input[name="password"]').type('teste@123');
    cy.get('button[type="submit"]').click();
    cy.contains('Serverest Store').should('be.visible');
  });
});

describe('Validar falha no login', () => {
  it('Deve ser exibida mensagem de erro ao tentar realizar login', () => {
    cy.visit('https://front.serverest.dev/');
    cy.get('input[name="email"]').type('teste@teste.com');
    cy.get('input[name="password"]').type('aaa');
    cy.get('button[type="submit"]').click();
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  });
});

describe('Validar cadastro de usuário', () => {
    it('Deve ser criado um novo usuário com sucesso', () => {
    function gerarEmailUnico() {
    const timestamp = Date.now();
    return `usuario_${timestamp}@teste.com`;
    }
    const emailUnico = gerarEmailUnico();

    cy.visit('https://front.serverest.dev/');
    cy.get('a[type="button"]').click();
    cy.get('input[name="nome"]').type('aaaaaa');
    cy.get('input[name="email"]').type(emailUnico);
    cy.get('input[name="password"]').type('aaaaa');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
})
