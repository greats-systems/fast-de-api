import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class AcceptRejectParcelDto {
    @Column()
    packageOwnerID: string;
    @Column()
    packageDriverID: string;

}
