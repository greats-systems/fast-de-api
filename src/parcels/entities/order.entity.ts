import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    // Order 
    @PrimaryGeneratedColumn('uuid')
    orderID: string;
    @Column({nullable: true})
    packageID: string;
    @Column({nullable: true})
    orderDate: string;
    @Column({nullable: true})
    orderType: string;
    @Column({nullable: true})
    orderPaymentMethod: string;
    @Column({nullable: true})
    orderCountry: string;
    
    // Driver Data
    @Column({nullable: true})
    orderDriverID: string;
    @Column({nullable: true})
    orderDriverFirstName: string;
    @Column({nullable: true})
    orderDriverLastName: string;
    @Column({nullable: true})
    orderDriverCoordinates: string;

    // Client Data
    @Column({nullable: true})
    orderOwnerID: string;
    @Column({nullable: true})
    orderOwnerFirstName: string;
    @Column({nullable: true})
    orderOwnerLastName: string;

    // Pickup Data
    @Column({nullable: true})
    orderPickupTime: string;
    @Column({nullable: true})
    orderPickupDistance: string;
    @Column({nullable: true})
    orderPickupCoordinates: string;

    // Delivery Data
    @Column()
    DeliveryStatus: string;
    @Column({nullable: true})
    orderDeliveryCoordinates: string;
    @Column({nullable: true})
    orderDeliveryDistance: string;
    @Column()
    orderDeliveryFee: string;

}
