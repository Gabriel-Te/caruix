import { create } from 'zustand';

const useCarStore = create((set, get) => ({
    cars: [],

    setCars: (carsData) => {
        set({ cars: carsData });
    },

    addNewCar : (newCarData) => {
        set((state) => ({
            cars : [...state.cars, newCarData]
        }))
    },

    getByID: (id) => {
        const cars = get().cars;
        const carPerID = cars.find((car) => car.id === id) || [];
        return carPerID;
    },

    editCar: (newCarEdit, id) => {
        set((state) => ({
            cars: state.cars.map((car) =>
                car.id === id ? { ...car, ...newCarEdit } : car 
            ),
        }));
    },

    removeCar : (id) => {
        set((state) => ({
            cars : state.cars.filter((car) =>
                car.id !== id  
            )
        }))
    },

    separePerStatus : () => {
        const cars = get().cars
        const sellCars = []
        const soldCars = []

        cars.forEach((car) => {
            if(car.status === true) {
                sellCars.push(car)
            }else {
                soldCars.push(car)
            }
        })
        return ({sellCars, soldCars})
    }



}));

export default useCarStore;