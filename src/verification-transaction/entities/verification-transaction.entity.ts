import { 
    Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity()
export class VerificationTransaction {

    @PrimaryGeneratedColumn(
        'uuid'
    )
    notiID : string;
    
    @Column({
        type: 'uuid'
    })
    accountID : string;

    @Column({
        type: 'uuid'
    })
    transactionID : string;

    @Column({
        type: 'boolean'
    })
    isRead : string;

    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at  :Date;
  
    @DeleteDateColumn()
    deleted_at  :Date;
}
