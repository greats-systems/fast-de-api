import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Parcel {
    @PrimaryGeneratedColumn('uuid')
    packageID: string;
    @Column({nullable: true})
    packageOwnerID: string;
    @Column({nullable: true})
    packageDriverID: string;
    @Column({nullable: true})
    packageType: string;
    @Column({nullable: true})
    packageHeight: string;
    @Column({nullable: true})
    packageWidth: string;
    @Column({nullable: true})
    packageDepth: string;
    @Column({nullable: true})
    packageWeight: string;
    @Column({nullable: true})
    addressType: string;
    @Column({nullable: true})
    exactPickupAddress: string;
    @Column({nullable: true})
    exactDeliveryAddress: string;
}
