import { PartialType } from '@nestjs/mapped-types';
import { CreateParcelDto } from './create-parcel.dto';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {
    @Column()
    packageDriverID: string;
}
function Column() {
    throw new Error('Function not implemented.');
}

