import { ObjectType, InputType, Field, Int } from '@nestjs/graphql';
import { Index, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson'

@Entity()
export class GatewayConnectedUser {
  @PrimaryGeneratedColumn('uuid')
  connectionId: string;
  @Column({nullable: true})
  userId: string;
  @Column({nullable: true})
  deviceId?: string;
  @Column({nullable: true})
  currentSocketID?: string;
  
  @Index({spatial : true})
  @Column({
      type:'geometry',
      spatialFeatureType:'Point',
      srid: 4326,
      nullable: true})
      location?: Point;

  @Column({nullable: true})
  role: string;
  @Column({nullable: true})
  issuedTime: string;
  @Column({nullable: true})
  dist?: number;

}
