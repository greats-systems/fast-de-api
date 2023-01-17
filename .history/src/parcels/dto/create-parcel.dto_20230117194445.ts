import { Field } from "@nestjs/graphql";

export class CreateParcelDto {
    
  phone: string;
  pin: string;
  role: string;

    packageTypeInfo: string;
    packageDetailInfo: string;
    packagePickupInfo: string;
    packageDeliveryInfo: string;
    confirmDetail: string;
    loadMap: string;
    packageHeight: string;
    packageWidth: string;
    packageDepth: string;
    packageWeight: string;
    pickUpAddress: string;
    deliveryAddress: string;
    addressType: string;
    exactPickupAddress: string;
    exactDeliveryAddress: string;

}
