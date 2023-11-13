    var banco = {
    // Propriedades do objeto
    conta: 123456, // número da conta
    saldo: 1000, // saldo inicial em reais
    tipo: "corrente", // tipo de conta
    agencia: 7890, // número da agência
  
    // Métodos do objeto
    // Buscar saldo: retorna o valor atual do saldo
    buscarSaldo: function() {
      return this.saldo;
    },
    // Depósito: recebe um valor como parâmetro e adiciona ao saldo final
    deposito: function(valor) {
      this.saldo += valor;
    },
    // Saque: recebe um valor como parâmetro e subtrai do saldo final
    saque: function(valor) {
      this.saldo -= valor;
    },
    // Número da conta: retorna o número da conta
    numeroDaConta: function() {
      return this.conta;
    }
  };
  
  // Testar o código
  console.log("Saldo inicial: R$ " + banco.buscarSaldo()); // Saldo inicial: R$ 1000
  banco.deposito(500); // Depositar R$ 500
  console.log("Saldo após depósito: R$ " + banco.buscarSaldo()); // Saldo após depósito: R$ 1500
  banco.saque(300); // Sacar R$ 300
  console.log("Saldo após saque: R$ " + banco.buscarSaldo()); // Saldo após saque: R$ 1200
  console.log("Número da conta: " + banco.numeroDaConta()); // Número da conta: 123456
  