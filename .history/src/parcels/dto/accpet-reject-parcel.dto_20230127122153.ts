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
    driverDecision: string;
    @Column()
    driverDecision: string;

}
