import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Bearer } from 'src/models/bearer/bearer.entity';
import { Ring } from 'src/models/ring/ring.entity';
import { User } from 'src/models/user/user.entity';

export async function DatabaseConfig(
  config: ConfigService,
): Promise<TypeOrmModuleOptions> {
  const options: TypeOrmModuleOptions = {
    type: 'mysql',
    host: config.get<string>('DB_HOST'),
    port: parseInt(config.get<string>('DB_PORT')),
    username: config.get<string>('MYSQL_USER'),
    password: config.get<string>('MYSQL_PASSWORD'),
    database: config.get<string>('MYSQL_DATABASE'),
    entities: [Ring, Bearer, User],
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
  };
  return options;
}
