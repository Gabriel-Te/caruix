import { create } from 'zustand';

const useCarStore = create((set, get) => ({
    cars: [],

    setCars: (carsData) => {
        set({ cars: carsData });
    },

    addNewCar: (newCarData) => {
        set((state) => ({
            cars: [...state.cars, newCarData]
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

    removeCar: (id) => {
        set((state) => ({
            cars: state.cars.filter((car) =>
                car.id !== id
            )
        }))
    },

    //tools

    separePerStatus: () => {
        const cars = get().cars
        const sellCars = []
        const soldCars = []

        cars.forEach((car) => {
            if (car.status === true) {
                sellCars.push(car)
            } else {
                soldCars.push(car)
            }
        })
        return ({ sellCars, soldCars })
    },

    filterByPrice: (minPrice, maxPrice) => {
        const cars = get().cars
        if (!minPrice && !maxPrice) {
            return cars;
        } else if (!maxPrice && minPrice) {
            maxPrice = Infinity;
        } else if (!minPrice && maxPrice) {
            minPrice = 0;
        }
        const carsFiltred = cars.filter((car) =>
            car.price >= minPrice && car.price <= maxPrice
        )
        return carsFiltred
    },

    separeByBrand: (brand) => {
        const cars = get().cars
        if (brand) {
            return cars.filter((car) => car.brand == brand)
        } else {
            const carsSepared = []
            cars.forEach(car => {
                const brandEntry = carsSepared.find((item) => item.brandGroup === car.brand)
                if(!brandEntry) {
                    carsSepared.push({brandGroup: car.brand, cars : [car] })
                }
                else{
                    //brandEntry retorna uma referência a carsSepared no objeto encontrado
                    console.log(brandEntry)
                    brandEntry.cars.push(car)
                }
            })
            return carsSepared
        }
    }
}));

export default useCarStore;