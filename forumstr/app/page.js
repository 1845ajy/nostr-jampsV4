import ForumList from "@/components/ForumList";
import PageHeader from "@/components/PageHeader";
import PrimaryButton from "@/components/PrimaryButton";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="space-y-2 m-4">
          <PageHeader copy="Nostr-Supply chain client" />
          <p className="text-base">Simple client to add data into a relay.</p>
          <PrimaryButton copy="Create Supplier" link="/forum/create" />
        </div>

        <ForumList />
      </div>
    </main>
  );
}
