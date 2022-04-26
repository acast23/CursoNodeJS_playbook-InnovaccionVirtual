class pokemon {
    constructor (name) {
        this.name = name
    }

    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(mesg){
        console.log(`Mi pokemon ${this.name} dice: ${mesg}
        `)

    }
    
}

module.exports = pokemon
