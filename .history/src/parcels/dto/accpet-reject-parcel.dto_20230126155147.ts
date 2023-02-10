import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class AcceptRejectParcelDto {
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

}
