import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column()
    DeliveryStatus: string;
    @Column()
    orderDeliveryFee: string;
    @Column({nullable: true})
    orderPaymentMethod: string;
    @Column({nullable: true})
    orderDate: string;
    @Column({nullable: true})
    orderCountry: string;
    @Column({nullable: true})
    orderDriverID: string;
    @Column({nullable: true})
    orderDriverFirstName: string;
    @Column({nullable: true})
    orderDriverLastName: string;
    @Column({nullable: true})
    orderDriverCoordinates: string;
    @Column({nullable: true})
    orderOwnerID: string;
    @Column({nullable: true})
    orderOwnerFirstName: string;
    @Column({nullable: true})
    orderOwnerLastName: string;
    @Column()
    packageID: string;
    @Column()
    orderType: string;
    @Column()
    orderPickupTime: string;
    @Column()
    orderPickupDistance: string;
    @Column()
    orderPickupCoordinates: string;
    @Column()
    orderDeliveryCoordinates: string;
    @Column()
    orderDeliveryDistance: string;

}