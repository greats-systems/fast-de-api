import { ParcelsService } from './parcels.service';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Parcel } from './entities/parcel.entity';
export declare class ParcelsController {
    private readonly parcelsService;
    constructor(parcelsService: ParcelsService);
    create(data: any): Promise<Parcel>;
    acceptReject(data: any): Promise<import("./entities/order.entity").Order>;
    getOrdersByUser(data: any): Promise<import("./entities/order.entity").Order[]>;
    getOrdersHistory(data: any): Promise<import("./entities/order.entity").Order[]>;
    findAll(): string;
    getAllOrders(): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: string): string;
    update(packageID: string, updateParcelDto: UpdateParcelDto): Promise<Parcel>;
    remove(id: string): string;
}
