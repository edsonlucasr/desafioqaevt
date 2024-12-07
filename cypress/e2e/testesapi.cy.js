describe('Cadastro de usuários via API', () => {
    it('Deve criar um novo usuário com sucesso', () => {
      cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: 'Teste',
          email: `teste${Date.now()}@serverest.dev`,
          password: '123456',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    });
  });

  describe('Login de usuário via API', () => {
    it('Deve realizar login com sucesso', () => {
      cy.api({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: 'testefront@testeevt.com',
          password: 'teste@123',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Login realizado com sucesso');
        expect(response.body.authorization).to.exist;
      });
    });
  });

  describe('Listar produtos via API', () => {
    it('Deve listar os produtos cadastrados', () => {
      cy.api({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.be.a('number');
        expect(response.body.produtos).to.be.an('array');
        if (response.body.quantidade > 0) {
          expect(response.body.produtos[0]).to.have.property('nome');
        }
      });
    });
  });