import { create } from 'zustand';

const useCarStore = create((set, get) => ({
    cars: [],

    setCars: (carsData) => {
        set({ cars: carsData });
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
}));

export default useCarStore;