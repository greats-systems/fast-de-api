import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class RejectOrderDto {
    @Column()
    packageID: string;
    @Column()
    driverID: string;
    @Column()
    driverDecision: string;
}
