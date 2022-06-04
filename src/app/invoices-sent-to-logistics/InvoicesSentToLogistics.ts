import { DataControl } from "@remult/angular";
import { DateOnlyField, Entity, Field, IdEntity } from "remult";
import { Roles } from "../users/roles";

@Entity<InvoiceSentToLogistics>('invoicesSentToLogistics', {
    allowApiRead: Roles.admin,
    defaultOrderBy: self => [self.invoiceDate.descending(), self.invoiceNumber.descending()]
})
export class InvoiceSentToLogistics extends IdEntity {

    @DataControl({ width: '60' })
    @Field({ caption: '#' })
    invoiceNumber: number = 0;
    @DataControl({ width: '100' })
    @DateOnlyField({ caption: 'תאריך' })
    invoiceDate!: Date;
    @Field({ caption: 'לקוח' })
    customerName: string = '';
    @DataControl({ width: '100' })
    @Field({ caption: 'סכום' })
    amount: number = 0;
    @DataControl({ width: '50' })
    @Field({ allowApiUpdate: false, caption: 'שודר' })
    transmitDate: Date = new Date();
    @Field({ caption: 'סטטוס' })
    status: string = '';
}