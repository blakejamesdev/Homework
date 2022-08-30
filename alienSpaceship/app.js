let lvl = 1
let enemys = []
let message = ''

// create the player
const player = {
    hull: 20,
    firePower: 5,
    accuracy: 70,
}
// display player info to hud
const info = document.getElementById("infoBox")
let health = document.getElementById("health")
health.innerHTML = `health ${player.hull}`
let cannons = document.getElementById("cannons")
cannons.innerHTML = `cannons ${player.firePower}`
// create a constructor for enemys
class alien {
    constructor() {
       this.hull= Math.floor(Math.random()*4)+3
       this.firePower= Math.floor(Math.random()*2)+2
       this.accuracy= Math.floor(Math.random()*100) 
    }

}

const play = () =>{
    // create a loop that creats a number of enemys depending on the level
    lvl = 1
    for (i = 1; i <= lvl; i++){
        const enemy = new alien
        enemys.push(enemy)
        const enemyship = document.createElement("img")
        enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSzgGJlXRv6NZACaiVu5TnPCTHZ13s203_w&usqp=CAU"
        document.getElementById("aliens").append(enemyship)
    } 
}
// create a function that does all of the actions of the fight
const fight = () => {
    
    
        if (Math.random()*100 <= player.accuracy){
            enemys[0].hull -= player.firePower
            info.innerText = `You hit an aliean for ${player.firePower}`
        }else {
            info.innerText = "You missed COME ON MAAANNN!!!"
        }
        if (enemys[0].hull > 0){
            if (Math.random()*100 <= enemys[0].accuracy){
                player.hull -= enemys[0].firePower
                health.innerHTML = `health ${player.hull}`
                info.innerText += `you were hit for ${enemys[0].firePower} damage`
                if (player.hull <= 0){
                    info.innerText += `you lost at level ${lvl}`
                }
            }  
        }else if (enemys[0].hull <=0){     
                enemys.shift()
                const enemyImg = document.getElementById("aliens")
                if (enemyImg.hasChildNodes()){
                    enemyImg.removeChild(enemyImg.children[0])
                }
        }
            
        // console.log(enemys)
    // console.log(player)
    // console.log("i am level " + lvl)
}

const keepFighting = () => {
    lvl = lvl + 1
    for (i = 1; i <= lvl; i++){
        const enemy = new alien
        enemys.push(enemy)
        const enemyship = document.createElement("img")
        enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSzgGJlXRv6NZACaiVu5TnPCTHZ13s203_w&usqp=CAU"
        document.getElementById("aliens").append(enemyship)
        info.innerText = `There are ${lvl} more aliens!`
    } 
}
const retreat = () => {
    info.innerText = `You escaped at level ${lvl}`
}
// console.log(enemys[0].hull)
//console.log(player)

//fight()
//play()
// const enemy = new alien
// console.log(enemys)
 console.log(player)