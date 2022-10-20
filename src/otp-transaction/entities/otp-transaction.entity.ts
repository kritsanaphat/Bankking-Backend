
import { time } from 'console';
import { 
    Entity, Column, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn
  } from 'typeorm';
  
 

  enum UserActivity_Type{
    LOGIN = 'login',
    REGISTER = 'register',
  
  }
  
  @Entity()
  export class OtpTransaction {
  
    @PrimaryGeneratedColumn(
      'uuid'
      )
    transactionID: string;
  
    @Column({
      type: 'uuid',
    })
    refNumber: string;
  
    @Column({
      type: 'enum',
      enum : UserActivity_Type,
    })
    type: UserActivity_Type;
  
    @Column()
      timeStart :Date;

    @Column()
      isFinishd: boolean;

    @Column({
        type: 'varchar',
      })
      IPAddress: string;

    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at  :Date;
  
    @DeleteDateColumn()
    deleted_at  :Date;
    
  }
  
  
  export namespace OtpTransaction {
    export enum UserActivity_Type{LOGIN = 'login',REGISTER = 'register',}
    
  
  }