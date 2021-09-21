# NFT-Marketplace

```
npx create-react-app
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai web3modal @openzeppelin/contracts
```
Install tailwind
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
import tailwind on `src/index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Initilize hardhat 
```
npx hardhat
```
### Usefull hardhat commands 
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
Etherscan

```
npm install --save-dev @nomiclabs/hardhat-etherscan
```