import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Parcel {
    @PrimaryGeneratedColumn('uuid')
    packageID: string;
    @Column()
    packageOwnerID: string;
    @Column({nullable: true})
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
    exactDeliveryAddress: string;
}
