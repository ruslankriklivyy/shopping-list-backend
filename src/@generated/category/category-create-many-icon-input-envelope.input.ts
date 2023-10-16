import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateManyIconInput } from './category-create-many-icon.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateManyIconInputEnvelope {

    @Field(() => [CategoryCreateManyIconInput], {nullable:false})
    @Type(() => CategoryCreateManyIconInput)
    data!: Array<CategoryCreateManyIconInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
