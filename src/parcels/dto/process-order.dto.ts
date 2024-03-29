import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class ProcessOrderlDto {
    @Column()
    packageID: string;
    @Column()
    driverPhone: string;
    @Column()
    driverCoordinates: string;
    @Column({nullable: true})
    orderPickupTime: string;
    @Column({nullable: true})
    packagePickupDistance: string

}
