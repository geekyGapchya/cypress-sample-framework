/// <reference types="cypress" />

import {data} from '../../fixtures/flightDetails'
import {onbookFlights} from '../../support/pages/BookFlights'
import { utils } from '../../support/utils/Utils'
describe ('Test Flow', { tags: ['@Book'] }, ()=> {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    data.forEach(data=>{
        it(`Test ${data.name}`,()=>{
            let FlightDetails = data.FlightDetails
            cy.visit('/' , { headers: { "Accept-Encoding": "gzip, deflate" } })
            onbookFlights.enterFromandTocity(FlightDetails.fromCity, FlightDetails.toCity)
            onbookFlights.selectDeptDate()
        })

    })
})