import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users_table')
export default class UsersTable {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  register_name: string;

  @Column()
  registration: number;

  @Column()
  institution_where_it_operates: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 12);
  };
};
