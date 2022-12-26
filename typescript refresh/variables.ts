let myName: string | null = '';

const items = ['test', 1];

interface IAccount {
    name: string;
    balance: number;
    status?: string;
    deposit?: () => void;
}

const account: IAccount = {
    name: 'Luis',
    balance: 10,
};

let accounts: IAccount[];

class InvestmentAccounts implements IAccount {
    constructor(public name, public balance) { }
    
    private withdraw() {

    }
}
