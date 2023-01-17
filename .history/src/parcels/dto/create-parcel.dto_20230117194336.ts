import { Field } from "@nestjs/graphql";

export class CreateParcelDto {
    
  phone: string;
  pin: string;
  role: string;

  const [packageTypeInfo, setPackageTypeInfo] = useState(true);
  const [packageDetailInfo, setPackageDetailInfo] = useState(false);
  const [packagePickupInfo, setpackagePickupInfo] = useState(false);
  const [packageDeliveryInfo, setPackageDeliveryInfo] = useState(false);
  const [confirmDetail, setConfirmDetail] = useState(false);
  const [loadMap, setLoadMap] = useState(false);
  const [packageHeight, setPackageHeight] = useState('');
  const [packageWidth, setPackageWidth] = useState('');
  const [packageDepth, setPackageDepth] = useState('');
  const [packageWeight, setPackageWeight] = useState('');
  const [pickUpAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [addressType, setAddressType] = useState('');
  const [exactPickupAddress, setExactPickupAddress] = useState('');
  const [exactDeliveryAddress, setExactDeliveryAddress] = useState('');

}
