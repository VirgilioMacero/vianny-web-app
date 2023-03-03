import React from 'react';
import ReactDom from 'react-dom/client'

function LogOutButton(){

return <button onClick={Greeteng()}>Saluda a Pablo</button>


}


const root = ReactDom.createRoot(document.getElementById('root'))

function Greeteng(){

    const name = 'Pablo'

    return root.render(<h1>Hola {name}</h1>)

}


root.render(<>{LogOutButton()}</>)