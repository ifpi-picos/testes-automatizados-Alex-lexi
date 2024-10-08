import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

// Antes de cada teste vamos criar as contas  utilizando o beforEach

describe ("TESTE DA CLASSE CONTA BANCÁRIA " ,() => {
    let conta : ContaBancaria 
    let contaDois:ContaBancaria 
    beforeEach(() => { 
     conta= new ContaBancaria ()
     contaDois = new ContaBancaria ()
    }) // UTILIZA ISSO PARA CRIAR UMA CONTA , PARA NÃO TER QUE FICAR REPETINDO DURANTE O PROGRAMA
    
test("Método Depositar", () =>{
    expect(conta.depositar(300)).toBe(300)
})
test ("Método Depósito Inválido",()=> {
    expect (()  => conta.depositar (-100)).toThrow("Valor inválido!"); // toThrow vai pegar o erro qeu ja foi lançado
})

 // coloca o parentese com espaço so quando coloca toThrow
test ("Método Sacar - Depositar", () => {
    //expect(() => conta.sacar
    conta.depositar(50)
    expect(conta.sacar(30)). toBe(20);
})

test ("Método Saque- Inválido ", () => {
    //expect(() => conta.sacar
    
    expect(() => conta.sacar (-1)).toThrow("Valor inválido");

})
test ("Método Transferir", () => {
    conta.depositar(400)
    expect(conta.transferir(150,contaDois)).toBe(250)
 })
 
 test("Método Transferir - Valor Inválido",()=> {
   expect (()=> conta.transferir(300,contaDois)).toThrow("Valor inválido")
 })
 
test ("Método Consultar Saldo",() =>{ 
    conta.depositar(1000)
    expect(conta.consultarSaldo()).toBe(1000)
})

test("Método Exibir Extrato",()=>{
    conta.depositar(5000)
    conta.sacar(2500)
    expect(conta.exibirExtrato()).toBe("1. Depósito de R$ 5000.00-23/9/2024\n2. Saque de R$ 2500.00-23/9/2024")

})
}) 