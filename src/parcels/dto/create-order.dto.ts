import { Field } from "@nestjs/graphql";
import { Column, Index } from "typeorm";
import { Point } from 'geojson'

export class CreateOrderDto {
    // Order 
    @Column({nullable: true})
    orderParcelID: string;
    @Column({nullable: true})
    orderDate: string;
    @Column({nullable: true})
    orderType: string;
    @Column({nullable: true})
    orderPaymentMethod: string;
    @Column({nullable: true})
    orderPaymentStatus: string;    
    @Column({nullable: true})
    orderCountry: string;
    
    // Driver Data
    @Column({nullable: true})
    orderDriverID: string;
    @Column({nullable: true})
    orderDriverFirstName: string;
    @Column({nullable: true})
    orderDriverLastName: string;
    @Index({spatial : true})
    @Column({
        type:'geometry',
        spatialFeatureType:'Point',
        srid: 4326,
        nullable: true})
    orderDriverCoordinates: Point;

    // Client Data
    @Column({nullable: true})
    orderOwnerID: string;
    @Column({nullable: true})
    orderOwnerFirstName: string;
    @Column({nullable: true})
    orderOwnerLastName: string;

    // Pickup Data
    @Column({nullable: true})
    orderPickupTime: string;
    @Column({nullable: true})
    orderPickupDistance: string;
    @Index({spatial : true})
    @Column({
        type:'geometry',
        spatialFeatureType:'Point',
        srid: 4326,
        nullable: true})
    orderPickupCoordinates: Point;

    // Delivery Data
    @Column({nullable: true})
    orderStatus: string;
    @Index({spatial : true})
    @Column({
        type:'geometry',
        spatialFeatureType:'Point',
        srid: 4326,
        nullable: true})
    orderDeliveryCoordinates: Point;
    @Column({nullable: true})
    orderDeliveryDistance: string;
    @Column({nullable: true})
    orderDeliveryFee: string;

}
