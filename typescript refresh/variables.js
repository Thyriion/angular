var myName = '';
var items = ['test', 1];
var account = {
    name: 'Luis',
    balance: 10
};
var accounts;
var InvestmentAccounts = /** @class */ (function () {
    function InvestmentAccounts(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccounts.prototype.withdraw = function () {
    };
    return InvestmentAccounts;
}());
