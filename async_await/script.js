const fatorial = n => {
    if (n<0) return Promise.reject('apenas valores positivos')
    let res = 1
for (let i=2; i<=n; i++){
    res = res* i
}
return Promise.resolve(res)
}

//then e catch
function thenECatch(){
    fatorial(5)
    .then((res)=> console.log(`resultado: ${res}`))
    .catch((erro) => console.log(`erro: ${erro}`))

    fatorial(-5)
    .then((res)=>  console.log(`resultado: ${res}`))
    .catch((erro) => console.log(`erro: ${erro}`))
}
thenECatch()

// async await
const asyncAwait = async ()=>{
    try{
        const f1 = await fatorial(5)
        console.log(f1)
    }
    catch(erro){
        console.log(`erro: ${erro}`)
    }
    try{
        const f2 = await fatorial(-5)
        console.log(f2)
    }
    catch(erro){
        console.log(`erro: ${erro}`)
    }
}
asyncAwait()



// async function hello(nome){
//     return `Oi, ${nome}`

// }
// const umaPromise = hello ('ana')
// umaPromise.then((texto => console.log(`${texto}`)))