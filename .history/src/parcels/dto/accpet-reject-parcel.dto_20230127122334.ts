import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class AcceptRejectParcelDto {
    @Column()
    packageID: string;
    @Column()
    driverPhone: string;
    @Column()
    driverDecision: string;
    @Column()
    orderDriverDepartingCoordinates: string;
    @Column({nullable: true})
    orderPickupTime: string;

}
