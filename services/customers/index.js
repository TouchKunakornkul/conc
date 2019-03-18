import { run, send } from 'micro'
import { router, get } from 'microrouter'

const getStatus = (req, res) =>
  send(res, 200, {
    status: true,
  })

const api = router(get('/api/customers', getStatus))

export default (req, res) => run(req, res, api)
