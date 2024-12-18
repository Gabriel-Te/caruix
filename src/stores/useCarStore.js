import {create} from 'zustand'

const useCarStore = create(set => ({
    cars: [],

    
    setCars : (carsData) => {set({cars : carsData})},
}))

    export default useCarStore