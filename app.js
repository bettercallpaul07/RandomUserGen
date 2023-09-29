const app = Vue.createApp({
    data() {
        return {
            //creiamo un oggetto con i dati che ci servono
            firstName: 'John',
            lastName: 'Doe',
            email: "test@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/32.jpg",
        }//fine return

    },//fine data
    methods: {
        //facciamo in modo che sia asincrona perchè ci serve del tempo per fare la chiamata all'API e ricevere i dati 
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            //fetch è una funzione asincrona che ci permette di fare una chiamata ad un API
            //await è una parola chiave che ci permette di aspettare che la funzione fetch finisca di eseguire prima di passare alla riga successiva
            console.log(res);
            const { results } = await res.json()
            //results è un array di oggetti che contiene i dati che ci servono 

            //console.log(results);
            console.log('------------------------------------');
            console.log(results);
            console.log('------------------------------------');

            //aggiorniamo i dati con quelli delle API
            //results[0] perchè results è un array di oggetti e noi vogliamo il primo oggetto 
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },//fine getUser

    },//fine methods

})//fine app

app.mount('#app')
