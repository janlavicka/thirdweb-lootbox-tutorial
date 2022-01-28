import type { NFTMetadata } from "@3rdweb/sdk";

type Props = {
  metadata: NFTMetadata;
};

export default function NFT({ metadata }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-medium">{metadata.name}</p>
      <img
        className="object-cover w-48 h-36"
        src={metadata.image}
        alt={metadata.name}
      />
    </div>
  );
}
