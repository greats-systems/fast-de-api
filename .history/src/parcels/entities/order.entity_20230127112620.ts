import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column()
    packageID: string;
    @Column({nullable: true})
    orderDriverID: string;
    @Column()
    orderOwnerID: string;
    @Column()
    orderType: string;
    @Column()
    addressType: string;
    @Column()
    exactPickupCoordinates: string;
    @Column()
    exactDeliveryCoordinates: string;
    @Column()
    order: string;
    @Column()
    @Column()
    DeliveryStatus: string;
    @Column()
    orderAmount: string;
}
