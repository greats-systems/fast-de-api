import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class AcceptRejectParcelDto {
    @Column()
    packageID: string;
    @Column()
    driver: string;
    @Column()
    driverDecision: string;

}
