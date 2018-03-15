import firebase from 'firebase'

let getToken = function(){
    const messaging = firebase.messaging()
    messaging.getToken()
        .then((currentToken)=>{
            if(currentToken){
                console.log('Registrar isso para um servidor:', currentToken)
                return currentToken
            }
            console.warn('Nenhum ID disponivel, solicite permissão para gerar um')
        })
}

export default function(){
    
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
            .then(registration => {

                const messaging = firebase.messaging()

                messaging.useServiceWorker(registration)
                messaging.requestPermission().then(()=> getToken())                    

            }).catch(e => {
                console.warn('Erro:',e)
            })
    }

}