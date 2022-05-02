// Exercises that emulates a macdolnals, where the clients pick an order and the hamburguers can be preparated in parallel

let attend_clients = (clients) => {

    promiseChain = []

    clients.forEach((client)=>{
        console.log("Taking order from client "+client)
        promiseChain.push(prepareHamburguer(client))
    })

    Promise.allSettled(promiseChain).then((successMessage) =>{console.log(successMessage)})

}

let prepareHamburguer = (client) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>resolve('Hamburguer for client '+client+' is prepared!'),2000)
    
    })
}

let clients = ["Liss","Peter","Atza","Richard"]

attend_clients(clients)




/*prepareHamburguer(clients).then((succesfulHamburguer) =>{
    console.log(succesfulHamburguer)
})*/