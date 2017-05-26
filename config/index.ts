import Config from './default'

let env = process.env.NODE_ENV || 'default'

export default require(`./${env}`) as Config