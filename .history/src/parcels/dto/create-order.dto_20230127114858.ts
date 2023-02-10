import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class CreateOrderDto {
    @Column()
    packageID: string;
    @Column({nullable: true})
    orderDriverID: string;
    @Column()
    orderOwnerID: string;
    @Column()
    orderType: string;
    @Column()
    orderPickupTime: string;
    @Column()
    orderDriverDepartingCoordinates: Object;
    @Column()
    driverDepartingPickupDistance: Object;
    @Column()
    orderPickupCoordinates: Object;
    @Column()
    orderDeliveryCoordinates: Object;
    @Column()
    orderRouteDistance: string;
    @Column()
    DeliveryStatus: string;
    @Column()
    orderAmount: string;

}
