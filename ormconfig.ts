import { ConnectionOptions } from 'typeorm'
import config from 'config'
import { Url } from './src/url/entity/Url'

const connection: ConnectionOptions = {
  type: 'postgres',
  url: `postgres://${config.get('database.user')}:${config.get('database.password')}@${config.get(
    'database.host'
  )}:${config.get('database.port')}/${config.get('database.dbName')}`,
  entities: [Url],
  logging: false,
  synchronize: true,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
    entitiesDir: 'src/url/entity'
  }
}
export default connection
