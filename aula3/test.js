const assert = require('assert')
// 5 - fazer o ser service e em seguida fazer o require
const { obterPessoas } = require('./service')

//1 - colocar o teste simple
//assert.ok(true)
//assert.ok(false)

//2 - instalar o mocha como adm para colocar a variavel na memória
// sudo npm install -g mocha
// sudo npm i --save-dev mocha
// se estiver estourando o tempo de resposta 
// mocha --timeout 100000 test.js

// trazer o nock para o projeto
const nock = require('nock')

// 3 - Criar a descrição do teste
describe('Start Wars Test', function(){
    //9 - colocar a parte do before
    this.beforeAll(()=>{
        const response ={
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                name: 'R2-D2',
                height: '96',
                mass: '32',
                hair_color: 'n/a',
                skin_color: 'white, blue',
                eye_color: 'red',
                birth_year: '33BBY',
                gender: 'n/a',
                homeworld: 'https://swapi.dev/api/planets/8/',
                films: [Array],
                species: [Array],
                vehicles: [],
                starships: [],
                created: '2014-12-10T15:11:50.376000Z',
                edited: '2014-12-20T21:17:50.311000Z',
                url: 'https://swapi.dev/api/people/3/'
              }
            ]
          }

       nock('https://swapi.dev/api/people')
       .get('/?search=r2-d2&format=json')   
       .reply(200, response)
    })

    //4 - inserir o primeiro teste
    it('deve buscar o r2d2 como o formato correto', async ()=>{
        const expected = [{
            nome: 'R2-D2', 
            altura: '96'
    }]
        const nomeBase = `r2-d2`
        // 6 - criar o resultado para o erro
        const resultado = await obterPessoas(nomeBase)
        // 7 - service montar o resultado
        assert.deepEqual(resultado, expected)

        // 8 - instar o pacote nock para simular as requisições
        // npm install nock
        // criar o beforeall


    })

})