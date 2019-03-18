import micro from 'micro'
import handler from '../services'

micro(handler).listen(9000)
