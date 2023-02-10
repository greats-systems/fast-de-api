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
    orderDriverDepartingCoordinates: string;
    @Column()
    driverDepartingPickupDistance: string;
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

orderDriverFirstName: acceptingDriver.firstName,
orderDriverLastName: acceptingDriver.lastName,