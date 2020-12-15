import { IdEntity, StringColumn, EntityClass, BoolColumn, Context, NumberColumn } from '@remult/core';
import { Roles } from '../users/roles';

@EntityClass
export class Products extends IdEntity {
    seder = new NumberColumn({ caption: "סדר", dataControlSettings: () => ({ width: '50px'}) });
    name = new StringColumn();
    imageUrl = new StringColumn();
    pacingFunction = new StringColumn('גורם אירוז');
    SKU = new StringColumn('מק"ט');
    archive = new BoolColumn();
    constructor(context: Context) {
        super({
            name: "Products",
            allowApiInsert: Roles.admin,
            allowApiUpdate: Roles.admin,
            allowApiRead: true,
            apiDataFilter: () => {
                if (!context.isAllowed(Roles.admin))
                    return this.archive.isEqualTo(false);
            },

            defaultOrderBy: () => [this.archive, this.seder, this.name]

        });
    }
}