import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Point } from 'geojson'

@Entity()
export class Parcel {
    @PrimaryGeneratedColumn('uuid')
    packageID: string;
    @Column()
    packageOwnerID: string;
    @Column({nullable: true})
    packageDriverID: string;
    @Column()
    packageType: string;
    @Column()
    packageHeight: string;
    @Column()
    packageWidth: string;
    @Column()
    packageDepth: string;
    @Column()
    packageWeight: string;
    @Column()
    addressType: string;
    @Column()
    exactPickupAddress: string;
    @Column()
    exactDeliveryAddress: string;
    @Column({nullable: true})
    packageDeliveryFee: string;
    @Column({nullable: true})
    paymentMethod: string;
    @Column({nullable: true})
    packageDeliveryDistance: string;

        // handling geo data
    @Index({spatial : true})
    @Column({
        type:'geometry',
        spatialFeatureType:'Point',
        srid: 4326,
        nullable: true})
    exactPickupCoordinates: Point;


    @Index({spatial : true})
    @Column({
        type:'geometry',
        spatialFeatureType:'Point',
        srid: 4326,
        nullable: true})
    exactDeliveryCoordinates: Point;
}
