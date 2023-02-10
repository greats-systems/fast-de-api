import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class CreateOrderDto {
    // Order 
    // Driver

    
    // Pickup Data
    @Column()
    DeliveryStatus: string;

    @Column()
    orderDeliveryFee: string;

    @Column({nullable: true})
    orderPaymentMethod: string;

    @Column({nullable: true})
    orderDate: string;

    @Column({nullable: true})
    orderCountry: string;

    @Column({nullable: true})
    orderDriverID: string;

    @Column({nullable: true})
    orderDriverFirstName: string;

    @Column({nullable: true})
    orderDriverLastName: string;
    // Delivery Data

    @Column({nullable: true})
    orderDriverCoordinates: string;

    @Column({nullable: true})
    orderOwnerID: string;

    @Column({nullable: true})
    orderOwnerFirstName: string;

    @Column({nullable: true})
    orderOwnerLastName: string;

    @Column({nullable: true})
    packageID: string;

    @Column({nullable: true})
    orderType: string;

    @Column({nullable: true})
    orderPickupTime: string;

    @Column({nullable: true})
    orderPickupDistance: string;

    @Column({nullable: true})
    orderPickupCoordinates: string;

    @Column({nullable: true})
    orderDeliveryCoordinates: string;

    @Column({nullable: true})
    orderDeliveryDistance: string;
}
