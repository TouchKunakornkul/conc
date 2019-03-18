import * as functions from 'firebase-functions'
import categoriesHandler from './categories'
import customersHandler from './customers'
import productsHandler from './products'
import wwwHandler from './www'

export const categories = functions.https.onRequest(categoriesHandler)
export const customers = functions.https.onRequest(customersHandler)
export const products = functions.https.onRequest(productsHandler)
export const www = functions.https.onRequest(wwwHandler)
