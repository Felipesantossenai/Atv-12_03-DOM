// console.log("JAVASCRIPT CONECTADO!");

// CLASSE - MOLDE PARA CRIAR OBJETOS.
class Veiculo {
  // CONSTRUCTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT.
  constructor(marca, modelo) {
    // THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPRIO OBJETO CRIADO.
    this.marca = marca;
    this.modelo = modelo;
  }
}

// OBJETO - É UMA INSTANCIA DA CLASSE.
const primeiroCarro = new Veiculo("Toyota", "Corolla");
console.log(primeiroCarro.marca);

/* ----------------------------------------------------------------------------------- */

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("Celular", 1500);
const notebool = new Produto("Notebook", 5000);

console.log(
  `Nome do produto: ${celular.nome} - Preço do produto: ${celular.preco}`
);
console.log(notebool.nome);

/* ---------------------------------------------------------------------- */

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  // MÉTODOS - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  // OU MANIPULAR OS ATRIBUTOS!
  depositar(valor) {
    // this.saldo = this.saldo + valor;
    this.saldo += valor;
  }

  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}
const conta = new contaBancaria(1000);
console.log(conta.getSaldo());
conta.depositar(1000);
console.log(conta.getSaldo());

/* --------------------------------------------------------------------------- */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade;
  }

  // MÉTODOS - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  // OU MANIPULAR OS ATRIBUTOS!
  apresentacao() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new Pessoa("Matheus", 26);
console.log(minhaApresentacao.apresentacao());

/* ---------------------------------------------------------------------------- */

class Steam {
  // ATRIBUTO ENCAPSULADO - TRADUZIDO PRIVADO
  // APENAS CLASSE E OS MÉTODOS DENTRO DA CLASSE TEM ACESSO!
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é inválido!");
    }
  }

  getSaldoSteam() {
    return `Seu saldo atual na steam é ${this.#saldo}`;
  }
}

const steam = new Steam(1000);
steam.depositarValorSteam(300);
console.log(steam.getSaldoSteam());

/* --------------------------------------------------------- */

class Usuario {
  constructor(senha) {
    this.senha = senha;
    // this.senha = "123456789"
  }

  // MÉTODO ENCAPSULADO - TRADUZINDO ELE ESTA PRIVADO,
  // APENAS OS ATRIBUTOS DENTRO DESTA CLASSE TEM ACESSO A ELE!
  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta criada!");
    }

    return console.log("Senha inválida");
  }
}

const user = new Usuario("123456789");
user.criarConta();

/* -------------------------------------------------------------- */

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CRIAR UMA CLASSE FILHA
// QUE HERDE UMA CLASSE PAI, NESTE CASO CARRO (FILHA) HERDA VEICULO (PAI)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    // SUPER - UTILIZADO PARA CHAMAR O CONSTRUCTOR DA CLASSE PAI
    // E REUTILIZAR SEU ATRIBUTOS
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do carro é ${this.marca}, seu modelo é ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}

const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

/* -------------------------------------------------------------- */

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionários: ${this.nome}, salário: R$${this.salario.toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Alcindo", 10000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();
