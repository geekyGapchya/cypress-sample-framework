/// <reference types="cypress" />

import {data} from '../../fixtures/searchFlights'
import {onsearchFlights} from '../../support/pages/SearchFlights'
import { utils } from '../../support/utils/Utils'
describe ('Test Flow', { tags: ['@Search'] }, ()=> {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    data.forEach(data=>{
        it(`Test ${data.name}`,()=>{
            let searchFlights = data.searchFlights
            cy.visit('/' , { headers: { "Accept-Encoding": "gzip, deflate" } })
            onsearchFlights.enterFromandTocity(searchFlights.fromCity, searchFlights.toCity)
            onsearchFlights.selectDeptDate()
        })

    })
})