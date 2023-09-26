const TAX_RATES = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 15 },
    { min: 32334, max: 40385, rate: 20 },
    { min: 40386, max: 48336, rate: 25 },
    { min: 48337, max: Infinity, rate: 30 },
];

const NHIF_DEDUCTIONS = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: Infinity, deduction: 1300 },
];

const NSSF_DEDUCTION_PERCENTAGE = 6;

function calculateNetSalary(basicSalary, benefits) {

    const grossSalary = basicSalary + benefits;


    let nhifDeduction = 0;
    for (const range of NHIF_DEDUCTIONS) {
        if (basicSalary >= range.min && basicSalary <= range.max) {
            nhifDeduction = range.deduction;
            break;
        }
    }


    const nssfDeduction = (basicSalary * NSSF_DEDUCTION_PERCENTAGE) / 100;


    let payee = 0;
    for (const range of TAX_RATES) {
        if (grossSalary >= range.min && grossSalary <= range.max) {
            payee = (range.rate / 100) * (grossSalary - range.min);
            break;
        }
    }


    const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;


    return {
        grossSalary,
        nhifDeduction,
        nssfDeduction,
        payee,
        netSalary,
    };
}


const basicSalary = 30000;
const benefits = 5000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Payee (Tax):", salaryDetails.payee);
console.log("Net Salary:", salaryDetails.netSalary);
