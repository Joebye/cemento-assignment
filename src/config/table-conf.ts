export type Table =
{
    columns: Array<{
    id: string // <- id of the column. Should match the one on
    ordinalNo: number // <- position of the column
    title: string // <- name of the column
    type: string // <- type of the data in the column
    width?: number // <- defines the width of the column
    }>
    
    data: Array<{
    id: string // <- rowId
   [columnId: string]: any // <- Data for the column
    }>
    }
