import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column()
    orderOwnerID: string;
    @Column({nullable: true})
    orderDriverID: string;
    @Column()
    orderType: string;
    @Column()
    @Column()
    addressType: string;
    @Column()
    exactPickupAddress: string;
    @Column()
    exactDeliveryAddress: string;
    @Column()
    DeliveryStatus: string;
}
