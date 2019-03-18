import categories from 'categories'
import customers from 'customers'
import products from 'products'
import www from 'www'

const handler = (req, res) => {
  if (req.url.startsWith('/api/categories')) categories(req, res)
  if (req.url.startsWith('/api/customers')) customers(req, res)
  if (req.url.startsWith('/api/products')) products(req, res)
  else www(req, res)
}

export default handler
