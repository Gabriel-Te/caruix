import {create} from 'zustand'

const useUserIsLogged = create((set) => ({
    userIsLogged : JSON.parse(localStorage.getItem('userIsLogged')) || false,

    login: () => {
        localStorage.setItem('userIsLogged', JSON.stringify(true))
        set({userIsLogged : true})
    },
    logout: () => {
        localStorage.removeItem('userIsLogged')
        set({userIsLogged: false})}
}))

export default useUserIsLogged