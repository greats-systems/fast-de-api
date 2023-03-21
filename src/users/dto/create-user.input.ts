import { Column, Index } from "typeorm";
import { Point } from 'geojson'

export class CreateMobileUserDTO {
  phone: string;
  pin: string;
  role: string;
  app: string;
}

export class CreateUserDTO {
  firstName?: string;
  lastName?: string;
  phone: string;
  email?: string;
  password: string;
  role: string;
}

export class GatewayConnectedUserDTO {
  userId?: string;
  deviceId?: string;
  currentSocketID?: string;
  @Index({spatial : true})
  @Column({
      type:'geometry',
      spatialFeatureType:'Point',
      srid: 4326,
      nullable: true})
  location?: Point;
  role?: string;
  issuedTime?: string;
  @Column({nullable: true})
  dist?: number;
}
