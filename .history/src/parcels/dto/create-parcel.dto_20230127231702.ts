import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class CreateParcelDto {
    @Column()
    packageOwnerID: string;
    @Column()
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
    @Column()
    exactPickupCoordinates: string;
    @Column()
    exactDeliveryCoordinates: string;
    @Column()
    packageDeliveryDistance: string;

    @Column()
    packageDeliveryDistance: string;

}
