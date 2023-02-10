import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Parcel {
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column()
    orderOwnerID: string;
    @Column({nullable: true})
    orderDriverID: string;
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
    DeliveryStatus: string;
}
