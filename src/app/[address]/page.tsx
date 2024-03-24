import { peasContractABI } from '@/utils/peasContractABI';
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { createPublicClient, getContract, http } from 'viem';
import { baseSepolia } from 'viem/chains';

interface Props {
  params: { address: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  const peasContractRegistry = getContract({
    address: '0x742daa58Be1B299cB5010d151597f66dB36859D2',
    abi: peasContractABI,
    client: publicClient,
  });

  const uri = await peasContractRegistry.read.uri([1]);

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        action: 'tx',
        label: 'Send Base Sepolia',
        target: `${process.env.NEXT_PUBLIC_HOST_URL}/tx`,
        postUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/tx-success`,
      },
    ],
    image: {
      src: `${uri}`,
    },
    postUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/frames?address=${
      params.address
    }&time${Date.now()}`,
  });

  return {
    title: 'onlyframe',
    openGraph: {
      title: 'onlyframe',
      images: [
        `${process.env.NEXT_PUBLIC_HOST_URL}/preview?address=${params.address}`,
      ],
    },
    other: {
      ...frameMetadata,
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`),
  };
}

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
