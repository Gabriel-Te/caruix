import {create} from 'zustand'

const useCarStore = create((set, get)=> ({
    cars: [],

    
    setCars : (carsData) => {set({cars : carsData})},
    getByID : (id) => { 
        const cars = get().cars
        const carPerID = cars.filter((car) => car.id === id || null)
        return carPerID
    }
}))

    export default useCarStore