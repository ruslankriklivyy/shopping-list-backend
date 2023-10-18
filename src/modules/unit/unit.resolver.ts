import { Resolver } from '@nestjs/graphql';
import { UnitService } from './unit.service';

@Resolver()
export class UnitResolver {
  constructor(private readonly unitService: UnitService) {}
}
