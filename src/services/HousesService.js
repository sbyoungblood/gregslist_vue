import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses(){
    const res = await api.get('auth/api/houses')
    logger.log('[GET HOUSES]', res.data)
    AppState.houses = res.data
    logger.log(AppState.houses)
  }
}

export const housesService = new HousesService()