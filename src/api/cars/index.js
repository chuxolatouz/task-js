import fetch from '../axios'

export const fetchCars = (params = {}) => fetch
    .get('cars', params)
    .then( (response) => {
        if (response.status === 201)
            return {
                cars: response.data.cars,
                total: response.data.totalCarsCount,
                page: response.data.totalPageCount
            }
        return null
    })
    .catch((error) => {
        if(error)
            return error
        return null
    })

export const fetchCarDetail = (carId) => fetch
    .get(`cars/${carId}`)
    .then((response) => {
        if(response.status === 201)
            return { car: response.data.car }
        return null
    })
    .catch((error) => {
        if(error)
            return error
        return null
    })