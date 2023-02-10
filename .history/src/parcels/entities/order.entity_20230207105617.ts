import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column()
    packageID: string;
    
    @Column()
    orderDriverID: string;
    @Column()
    orderDriverFirstName: string;
    @Column()
    orderDriverLastName: string;
    @Column()
    orderOwnerID: string;
    @Column()
    orderType: string;
    @Column()
    orderPickupTime: string;
    @Column()
    orderDriverCoordinates: string;
    @Column()
    orderPickupDistance: string;
    @Column()
    orderPickupCoordinates: string;
    @Column()
    orderDeliveryCoordinates: string;
    @Column()
    orderDeliveryDistance: string;
    @Column()
    DeliveryStatus: string;
    @Column()
    orderDeliveryFee: string;
}
