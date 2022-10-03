import { utils } from "../utils/Utils"

const fromCityLocator = 'input[data-cy="fromCity"]'
const toCityLocator = 'input[data-cy="toCity"]'
const fromCityTxtBoxLocator = '[placeholder="From"]'
const toCityTxtBoxLocator = '[placeholder="To"]'
const deptDateLocator = '[data-cy="departure"]'

export class SearchFlights {

    enterFromandTocity(fromCity, toCity) {
        utils.click(fromCityLocator)
        utils.selectCity(fromCityTxtBoxLocator, fromCity)
        utils.click(toCityLocator)
        utils.selectCity(toCityTxtBoxLocator, toCity)
    }

    selectDeptDate() {
        utils.click(deptDateLocator)
    }

}
export const onsearchFlights = new SearchFlights()