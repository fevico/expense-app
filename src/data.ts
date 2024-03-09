
export enum ReportType{
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report : [
        {
            id: "uuid1",
            source: "Salary",
            ammount: 3000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "YouTube",
            ammount: 7300,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid3",
            source: "Food",
            ammount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}

interface Data {
    report: {
        id: string;
        source: string;
        ammount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType
    }[]
}
