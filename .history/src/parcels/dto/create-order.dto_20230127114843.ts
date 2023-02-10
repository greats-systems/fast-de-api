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
    driverDepartingPickupDistance: O;
    @Column()
    orderPickupCoordinates: string;
    @Column()
    orderDeliveryCoordinates: string;
    @Column()
    orderRouteDistance: string;
    @Column()
    DeliveryStatus: string;
    @Column()
    orderAmount: string;

}
