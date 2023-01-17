import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductSaleslocation {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  addressDetail: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  meetingTime: Date;
}
