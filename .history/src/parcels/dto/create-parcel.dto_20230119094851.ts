import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class CreateParcelDto {
  @Column({nullable: true})
  packageTypeInfo: string;
  @Column({nullable: true})
  packageType: string;

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
