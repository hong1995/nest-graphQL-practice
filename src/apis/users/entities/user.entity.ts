import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  email: string;
  @Column()
  @Field(() => String)
  password: string;
}
