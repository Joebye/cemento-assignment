import {faker} from '@faker-js/faker';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import personConfig from '../config/person-config.json';

const {minSalary, maxSalary, departments, minDate, maxDate, amount, minExperience, maxExperience} = personConfig;
const generateData = (rowCount: number) => {
    const data= [];
    for (let i = 0; i < rowCount; i++) {
        const row = {
            id: faker.string.uuid(),
            orderNum: i+1,
            fullName: faker.person.fullName(),
            birthDate: faker.date.between({from: minDate, to: maxDate }).toISOString().slice(0,10),
            salary: faker.number.int({min: minSalary, max: maxSalary}).toString(),
            department: faker.helpers.arrayElement(departments),
            jobType: faker.person.jobType(),
            workExperience: faker.number.int({min: minExperience, max: maxExperience}),
            phoneNumber: faker.helpers.fromRegExp(/0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/),
            ccNumber: faker.finance.creditCardNumber('63[7-9]#-####-####-###L'),
            familyStatus: faker.helpers.arrayElement(['married', 'single'])

        }; 
        data.push(row)
    }
    return data;
}

const Grid: React.FC= () => {
    const showUUID = false;
    const columns: GridColDef[] = [
        showUUID &&
        {
            field: "id", headerName: 'ID', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "orderNum", headerName: 'Index', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "fullName", headerName: 'Full Name', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "birthDate", headerName: 'Birthdate', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "salary", headerName: 'Salary, $', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "department", headerName: 'Department', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "phoneNumber", headerName: 'Phone Number', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "familyStatus", headerName: 'Family Status', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "jobType", headerName: 'Job Type', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "workExperience", headerName: 'Work Experience, full years', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "ccNumber", headerName: 'Salary Account', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        
    ].filter(Boolean) as GridColDef[]



return <Box sx={{ height: '90vh', margin: '15px' }}>
<DataGrid columns={columns} rows={generateData(amount)}/>
</Box>

}

export default Grid;