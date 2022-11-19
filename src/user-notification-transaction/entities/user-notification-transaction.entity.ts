import { Column, Entity, PrimaryGeneratedColumn
        ,CreateDateColumn , UpdateDateColumn , DeleteDateColumn
     } from "typeorm";

@Entity()
export class UserNotificationTransaction {
    @PrimaryGeneratedColumn(
        'uuid'
    )
    notiID : string

    @Column(
        'uuid'
    )
    accountID: string

    @Column(
        'uuid'
    )
    transactionID: string

    @Column({
        default: false
    })
    isRead : boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at  :Date;

    @DeleteDateColumn()
    deleted_at  :Date;

}
