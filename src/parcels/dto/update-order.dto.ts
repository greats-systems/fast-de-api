import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm/decorator/columns/Column';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
