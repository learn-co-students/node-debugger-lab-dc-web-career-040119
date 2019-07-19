module.exports = account = () => {
  const output = {}
  const customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: "1"
  }

  output['Account before opening'] = customerAccount

  function setAccountType () {
    if (customerAccount.checking === "1") {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  const openAccount = (account, deposit, signupBonus) => {

    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  const signupBonus = 250,
      deposit = 1000

  openAccount(customerAccount, deposit, signupBonus)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}

account()
