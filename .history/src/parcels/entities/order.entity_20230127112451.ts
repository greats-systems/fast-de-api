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
    orderOwID: string;
    @Column()
    orderType: string;
    @Column()
    addressType: string;
    @Column()
    exactPickupAddress: string;
    @Column()
    exactDeliveryAddress: string;
    @Column()
    DeliveryStatus: string;
}
