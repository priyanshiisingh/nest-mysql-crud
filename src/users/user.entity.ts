import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25, default: null })
  fullName: string;

  @Column('date', { default: null })
  birthday: Date;

  @Column({ default: null })
  isActive: boolean;
}
