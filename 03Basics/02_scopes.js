//Scopes in javaScript

function one() {
    const userName = "Shabaj"

    function two() {
        const website = "Youtube"
        console.log(userName);
    }

    // console.log(website);
    // console.log("Function before two executing")
    two()
    // console.log("Function after two execution")
}

one()