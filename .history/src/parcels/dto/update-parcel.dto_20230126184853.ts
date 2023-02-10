import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm/decorator/columns/Column';
import { CreateParcelDto } from './create-parcel.dto';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {
}
