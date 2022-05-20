import {createStore} from 'vuex'

export default createStore ({
    state:{
        users:[
            {
                id:1,
                fname:'Kimoda',
                lname:'Afro',
                email:'afro@kimoda.com',
                phoneNo:'0789679104'
            }
        ]
    },
    mutations:{
        addUser(state, form){
            let length= state.users.length
            form.id = length +1
            console.log(length)
            state.users.push(form);
        },
        updateUser(state,form){
            let users = state.users;
            let index = users.findIndex((user)=> user.id === form.id)
            if (index !== -1){
                users[index] = form
                state.users = users
            }
        },
        deleteUser(state,id){
            let users = state.users;
            let index = users.findIndex((user)=> user.id === id)
            if (index !== -1){
                users.splice(index, 1)
                state.users = users
            }
        }
    },
    getters:{
        getUsers: state => state.users
    }
})
