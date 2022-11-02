Nutmeg UI
=====================================
-

## To do list

- update pool amount after withdraw
- pool display to be based on available pools instead of hardcoded

solution:
- get available pools and get length
- get erc20 address from pool
- link pool and erc20 tgt


## Instructions

Blockchain operations

```bash
$ truffle develop
$ truffle develop --network ropsten
$ truffle migrate
$ let instance = await Nutmeg.deployed()
$ let instanceTest = await TestNutmeg.deployed()
$ let instanceNut = await Nut.deployed()
$ let instanceCERC = await MockCERC20.deployed()
$ let instanceERC = await MockERC20.deployed()
$ instance.abi
$ instanceNut.abi
$ instanceCERC.totalSupply()
$ (await instanceERC.totalSupply()).toString()
$ instanceERC.mint("0xa6aB73B52b3836C1F45DE84959646661b25ad2B9", '1000000000000000000000')
$ (await instanceNut.totalSupply()).toString()
$ (await instanceNut.balanceOf("0xa6aB73B52b3836C1F45DE84959646661b25ad2B9")).toString()
$ (await instanceERC.balanceOf("0xa6aB73B52b3836C1F45DE84959646661b25ad2B9")).toString()
$ (await instanceCERC.exchangeRate()).toString()
$ instance.initialize()
$ instance.initialize(instanceNut.address)
$ instanceNut.setNutmegAddress(instance.address, {from: accounts[0]})
$ instanceERC.approve(instance.address, 1000000000, {from: accounts[0]})
$ (await instanceERC.allowance("0xa6aB73B52b3836C1F45DE84959646661b25ad2B9", instance.address)).toString()
$ instance.getGovernor()
$ (await instance.getDepositIds(accounts[0])).toString()
$ (await instance.getPositionIds(accounts[0])).toString()
$ (await instance.getCurrPositionId()).toString()
$ (await instance.getNextPositionId()).toString()
$ (await instance.getPosition(1)).toString()
$ (await instance.getPosition(1)).toString()
$ instance.getPoolInfo(instanceERC.address)
$ instance.addPool(instanceERC.address, 1000, {from: accounts[0]})
$ instance.stake(instanceERC.address, 1, '1000000000', {from: accounts[0]}) error only nutmeg can call
$ (await instance.MAX_NUM_POOL()).toString()
$ instance.NUT_ADDRESS
$ instance.PRICE_ORACLE
$ instance.pools(0)
$ instance.getPools()
$ instance.getPool('0x136e0385b4F1C15272cF407A7c0980e8842f3D57')
$ instance.poolMap('0x2f5b11F57c0e9c5392C330CC910A85345d214A97')
$ instance.depositMap('0x2f5b11F57c0e9c5392C330CC910A85345d214A97')
$ instance.positionMap(0)
```

---

## Deployment Ropsten

#### Address
```bash
$ Nutmeg - 0x5FD8457B279B6Eb86C781fc431bdE35Bef7Be4B7
$ TestNutmeg - 0xc41Cb327a06fA64229625893764FEFE085eE9f57
$ CompoundAdapter - 0x57293099913D0b7ACEbed1600a552EadBfae6546
$ MockERC20 - 0xF636E6F7b46CBb16C5De4DfFf625871eA92aE0a1
$ MockCERC20 - 0x31Bccf011BF1870D58a47B6785ae80670f82b488
```

---

Install NPM modules on fresh deployment:

```bash
$ npm install
```

To run in development mode:

```bash
$ npm start
```

To prepare production ready build:

```bash
$ npm run build
```

To run in production mode:

```bash
$ npm run start:prod
```

To generate new react container / component:

```bash
$ npm run generate
```
