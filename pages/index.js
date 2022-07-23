import Head from 'next/head';
import {useContext, useEffect} from 'react';
import styles from '../styles/Home.module.css';
import {MetamaskContext} from '../helpers/ConnectMetamask';
import {ethers} from 'ethers';
import ABI from '../contracts/CFP.json';
const provider = new ethers.providers.JsonRpcProvider(
	'https://rinkeby.infura.io/v3/c39df75a4b804a1cb9d77d5c313eaa83',
);
const address = '0xE21c35a68F87EC94776A3f164B8cD0dA284F6A34';
const contract = new ethers.Contract(address, ABI.abi, provider);
console.log('contract: ', contract);
export default function Home() {
	useEffect(() => {
		(async () => {
      const block = await provider.getBlockNumber();
      const 
		})();
	}, []);

	const {balance} = useContext(MetamaskContext);

	return (
		<div className={styles.container}>
			<Head>
				<title>CreatiFi</title>
				<meta name='description' content='CreatiFi' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex'>
				<div className='bg-black-600 w-[25%] p-4 flex flex-col'>
					<div className='text-2xl font-bold'>CreatiFi</div>
					<button>Contract</button>
					{address}&nbsp;
					{balance}
				</div>
				<div></div>
			</div>
		</div>
	);
}
